from flask import Flask ,url_for
from flask  import render_template


app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html',)