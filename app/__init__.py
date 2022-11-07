from flask import Flask
from sassutils.wsgi import SassMiddleware

from .routes import Home
from configs import Configs

app = Flask(__name__)
app.static_folder = Configs.STATIC_FOLDER
app.template_folder = Configs.TEMPLATES_FOLDER
app.wsgi_app = SassMiddleware(app.wsgi_app, {
    'app': (Configs.STATIC_FOLDER+'/scss', Configs.STATIC_FOLDER+'/css', '/static/css', False)
    })


app.register_blueprint(Home, url_prefix='/')
