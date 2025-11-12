from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/buscar", methods=["POST"])
def buscar():
    name = request.form.get("nome", "").strip().lower()
    if not name:
        return jsonify({"error": "No name provided."}), 400

    try:
        r = requests.get(f"https://pokeapi.co/api/v2/pokemon/{name}")
        if r.status_code != 200:
            return jsonify({"error": f"Pokémon '{name}' not found!"}), 404

        data = r.json()
        poke_id = data["id"]
        pokemon_name = data["name"].capitalize()

        types = [t["type"]["name"].capitalize() for t in data["types"]]
        hp = next((stat["base_stat"] for stat in data["stats"] if stat["stat"]["name"] == "hp"), 0)
        level = 100
        image = (
            data["sprites"]["other"]["official-artwork"]["front_default"]
            or data["sprites"]["front_default"]
            or ""
        )

        # Description
        desc_req = requests.get(f"https://pokeapi.co/api/v2/pokemon-species/{poke_id}")
        description = "Description not found."
        if desc_req.status_code == 200:
            desc_data = desc_req.json()

            for entry in desc_data.get("flavor_text_entries", []):
                if entry["language"]["name"] == "en":
                    description = entry["flavor_text"].replace("\n", " ").replace("\f", " ")
                    break

        return jsonify({
            "id": poke_id,
            "nome": pokemon_name,
            "tipo": types,
            "descricao": description,
            "imagem": image,
            "hp": hp,
            "nivel": level,
        })

    except Exception as e:
        print("❌ ERROR FETCHING POKÉMON:", e)
        return jsonify({"error": "Internal error fetching Pokémon."}), 500


if __name__ == "__main__":
    app.run(debug=True)
