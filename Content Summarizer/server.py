from flask import Flask, request, jsonify
import textsummarizer
app = Flask(__name__)

@app.route("/api/summarizer", methods=["POST"])
def summarize():

    data = request.get_json()
    text = data['text']
    
    #extractive summarizer
    summary = textsummarizer.summarizer(text, 10)
    summary_json = jsonify({"summary":summary})

    return summary_json

if __name__ == "__main__":
    app.run(debug=True)