from flask import Flask, render_template, request, flash, redirect, url_for
import sqlite3

app = Flask(__name__)


def db(sqlQuiry): #sqlQuiry
    db = sqlite3.connect("database/flask.db")
    cur = sqlite3.Cursor(db)
    result = cur.execute(sqlQuiry)
    #username= "test"
    #email = "test@test.com"
    #password= "sdafdsf"
    #result = cur.execute(f"insert into users(userName, emailAddress, password) values('{username}','{email}','{password}')")
    db.commit()
    return result
#db()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/portfolio")
def portfolio():
    return render_template("portfolio.html")

@app.route("/login", methods=["GET","POST"])
def login():
    Username = ""
    Password = ""
    #quiry0 = db(f"select password from users where username = '{Username}'")
    if request.method == 'POST':
        Username = request.form['Username']
        Password = request.form['Password']
        return redirect(url_for("portfolio"))
    return render_template("login.html", Username = Username, Password = Password)

@app.route("/signUp", methods=["GET","POST"])
def signUp():
    if request.method == "POST":
        username = request.form["Username"]
        email = request.form["EmailAddress"]
        password = request.form["Password"]
        db(f"insert into users(userName, emailAddress, password) values('{username}','{email}','{password}')")
        return redirect(url_for("login"))
    return render_template("signUp.html")

@app.route("/forgotPassword", methods=["GET","POST"])
def forgotPassword():
    if request.method == "POST":
        email = request.form["emailAddress"]
        updatedPassword = request.form["password"]
        db(f"update users set password = '{updatedPassword}' where emailAddress='{email}';")
    return render_template("forgotPassword.html")

@app.route("/Investments")
def Investments():
    return render_template("Investments.html")

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