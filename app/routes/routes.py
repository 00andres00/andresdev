from flask import Blueprint, render_template


Home = Blueprint('Home', __name__)

@Home.route('/', methods=['GET'])
def index():
    return render_template('pages/home.html')
