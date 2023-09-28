import sys
import spacy

nlp = spacy.load("en_core_web_sm")

text = sys.argv[1]

def calculate_sentiment_score(text):
    doc = nlp(text)
    sentiment_polarity = sum([token.sentiment.polarity for token in doc]) / len(doc)
    sentiment_score = (sentiment_polarity + 1) * 5
    sentiment_score = max(1, min(sentiment_score, 10))

    return sentiment_score

score = calculate_sentiment_score(text)

print(score)