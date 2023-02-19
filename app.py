import os
from dotenv import load_dotenv
from flask import Flask, render_template, redirect, url_for
from flask_cors import CORS
from flask_dance.contrib.google import make_google_blueprint, google
import logging

load_dotenv()
app = Flask(__name__,
            static_url_path='' ,
            static_folder='dist')
client_id = os.getenv('GOOGLE_CLIENT_ID')
client_secret = os.getenv('GOOGLE_CLIENT_SECRET')
app.secret_key = os.getenv('secret_key')

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'
os.environ['OAUTHLIB_RELAX_TOKEN_SCOPE'] = '1'

blueprint = make_google_blueprint(
    client_id=client_id,
    client_secret=client_secret,
    reprompt_consent=True,
    scope=["profile", "email"]
)
app.register_blueprint(blueprint, url_prefix="/login/redirect")


@app.route("/")
@app.route("/home")
@app.route("/index")
@app.route('/<path:path>')
def get_resource(path='index.html'):  # pragma: no cover
    print(path,app.__dict__)
    return app.send_static_file(path)

@app.route("/login")
def login():
    google_data = None
    user_info_endpoint = '/oauth2/v2/userinfo'
    if google.authorized:
        google_data = google.get(user_info_endpoint).json()

    return render_template('index.j2',
                           google_data=google_data,
                           fetch_url=google.base_url + user_info_endpoint)

@app.route('/login/redirect')
def login_direct():
    return redirect(url_for('login/redirect'))

@app.errorhandler(404)
def not_found():
    """Page not found."""
    return make_response(render_template("404.html"), 404)

if __name__ == "__main__":
    app.run(
        # ssl_context='adhoc',
        )
