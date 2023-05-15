from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


def db(sqlQuiry):
    db = sqlite3.connect("database/flask.db")
    cur = sqlite3.Cursor(db)
    result = cur.execute(sqlQuiry)
    db.commit()
    return result

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET","POST"])
def login():
    
    Username = ""
    Password = ""
    
    if request.method == 'POST':
        Username = request.form['Username']
        Password = request.form['Password']
    
    return render_template("login.html", Username = Username, Password = Password)

@app.route("/signUp", methods=["GET","POST"])
def signUp():
    return render_template("signUp.html")





@app.route("/forgotPassword", methods=["GET","POST"])
def forgotPassword():
    return render_template("forgotPassword.html")







@app.route("/investments")
def investments():
    return render_template("investments.html")

@app.route("/aboutUs")
def aboutUs():
    return render_template("aboutUs.html")

@app.route("/RE_Vs_CRE")
def RE_Vs_CRE():
    return render_template("RE_Vs_CRE.html")

@app.route("/property")
def property():
    return render_template("property.html")


@app.route("/REITs_Vs_Frational")
def REITs_Vs_Frational():
    return render_template("REITS_Vs_Fractional_Ownership.html")


@app.route("/research&insights")
def researchInsights():
    return render_template("Research_&_Insights.html")

@app.route("/registra")
def creatAccount():
    return render_template("Research_&_Insights.html")


#Test HelloWorld
@app.route("/helloWorld1")
def hello_world():
    return "<p>Hello, World!</p>"