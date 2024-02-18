import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='build', template_folder='.')

@app.route('/')
def welcome():
    return render_template('landing.html')

@app.route('/page-two')
def page_two():
    return render_template('tax.html')

@app.route('/tomagatree/<path:path>')
def serve_app(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True)