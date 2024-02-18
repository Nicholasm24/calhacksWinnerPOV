import os
from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_folder='../build', template_folder='.')

@app.route('/css/<path:filename>')
def custom_static(filename):
    return send_from_directory(os.path.join('src', 'css'), filename)

@app.route('/')
def welcome():
    return render_template('landing.html')

@app.route('/overview.html')
def page_two():
    return render_template('overview.html')

@app.route('/tomagatree', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


if __name__ == '__main__':
    app.run(debug=True)