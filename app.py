from flask import Flask, render_template, url_for, request, jsonify
from flask_cors import CORS
from sklearn.feature_extraction.text import CountVectorizer
import pickle

app = Flask(__name__)
CORS(app) 
global result

@app.route('/', methods=['POST'])
def testfn():
    #POST request
    if request.method == 'POST':
        data_to_predict = [request.form.get('name')]
        print("Result:",data_to_predict)
                
        with open('vectorizer_mod' , 'rb') as f:
            vectorizer = pickle.load(f)
        data_to_predict = vectorizer.transform(data_to_predict)

        with open('chat_model' , 'rb') as f:
            model = pickle.load(f)
        result = model.predict(data_to_predict)

        print(result[0])
        message = {'response':result[0]}
        return jsonify(message)  

if __name__ == "__main__":
    app.run()