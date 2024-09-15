from flask import (Flask, 
                   render_template, 
                   url_for, 
                   redirect, 
                   request)

app = Flask(__name__)

@app.route("/")
def index():
    return redirect("/menu")

@app.route("/menu")
def menu():
    return render_template("index.html", select="menu")



allLessonId = [
    "protections",
    "verrerie",
    "instruments",
    "accessories"
]

@app.route("/cours")
def coursWrong():
    return redirect("/cours/")

@app.route("/cours/")
def cours():
    # return render_template("cours.html", select="cours")
    return redirect("/cours/protections")


@app.route("/cours/<lessonId>")
def protections(lessonId):
    if lessonId in allLessonId:
        return render_template("cours.html", select="cours", lessonId=lessonId)
    else:
        return redirect("/page-not-found")

@app.route("/quiz")
def quiz():
    return render_template("quiz.html", select="quiz")

@app.route("/game")
def game():
    return render_template("game.html", select="game")



@app.route("/page-not-found")
def pageNotFound():
    return """
    <h1>Error 404</h1>
    <h3>Page Not Found</h3>
    <button><a href="/">Menu</a></button>
    """


if __name__ == "__main__":
    app.run("192.168.1.159", 9000, debug=True)