from flask import Flask, request, jsonify

app = Flask(__name__)

# Dummy storage for demonstration
scorm_data = {
    "student_name": "John Doe",  # Example student name
    "lesson_status": "",
    "lesson_location": ""
}

@app.route('/LMSInitialize', methods=['GET'])
def initialize():
    print("SCORM initialized")
    return 'true', 200

@app.route('/LMSGetValue', methods=['GET'])
def get_value():
    element = request.args.get('element')
    print(f"Getting value for: {element}")
    return jsonify({element: scorm_data.get(element, '')})

@app.route('/LMSSetValue', methods=['POST'])
def set_value():
    data = request.get_json()
    element = data.get('element')
    value = data.get('value')
    scorm_data[element] = value
    print(f"Set {element} to {value}")
    return 'true', 200

@app.route('/LMSFinish', methods=['GET'])
def finish():
    print("SCORM finished")
    return 'true', 200

if __name__ == '__main__':
    app.run(debug=True)
