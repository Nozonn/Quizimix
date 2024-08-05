from flask import Flask, render_template

app = Flask(__name__)


with open('materials.json', 'r') as f :
    content = str(f.read())

print(content)

@app.route("/")
def index():
    return render_template("index.html", content=content)

if __name__ == "__main__":
    app.run(host='192.168.1.159', port=9999, debug=True)