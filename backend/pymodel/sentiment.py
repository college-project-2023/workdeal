

from textblob import TextBlob
import sys

def calculate_sentiment_score(te):
    blob = TextBlob(te)
    sentiment_score = blob.sentiment.polarity

    # Normalize sentiment score to be between 1 and 10
    sentiment_score = (sentiment_score + 1) * 5
    sentiment_score = max(1, min(sentiment_score, 10))

    return sentiment_score


