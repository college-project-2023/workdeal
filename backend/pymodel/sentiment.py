import sys

text = sys.argv[1]

keyword_scores = {
        'excellent':10,
        'outstanding':9,
        'exceptional':9,
        'professional':8,
        'knowledgeable':8,
        'skilled':8,
        'courteous':8,
        'friendly':8,
        'attentive':8,
        'poor':2,
        'without complaint':9,
        "doesn't know":2,
        "don't know":2,
        'responsive':8,
        'reliable':8,
        'efficient':8,
        'timely':8,
        'impressive':8,
        'exceptionally helpful':9,
        'went above and beyond':9,
        'pleased with the service':8,
        'highly recommend':9,
        'satisfied with the work':8,
        'great experience':9,
        'adequate':6,
        'satisfactory':6,
        'standard service':5,
        'met expectations':6,
        'as expected':6,
        'fair service':5,
        'did the job':5,
        'no complaints':6,
        'acceptable service':5,
        'just okay':5,
        'poor':2,
        'unprofessional':2,
        'incompetent':2,
        'rude':2,
        'disrespectful':2,
        'careless':2,
        'slow':2,
        'unreliable':2,
        'disorganized':2,
        'frustrating experience':3,
        'disappointed':3,
        'unsatisfactory':3,
        'subpar service':3,
        'not recommended':2,
        'regrettable':2,
        'mistakes were made':2,
        'love': 9,
        'works well': 7,
        'satisfied': 6,
        'good': 5,
        'ok': 4,
        'fine': 7,
        'best':8,
        'very fine':9,
        'not satisfied': 3,
        'bad': 2,
        'hate': 1,
        'terrible':2,
        'awful':3,
        'horrible':1,
        'disappointing':1,
        'regrettable':1,
        'frustrating':2,
        'unpleasant':4,
        'annoying':3,
        'irritating':2,
        'disliked':1,
        'hated':1,
        'complaint':2,
        'disgusting':2,
        'appalling':1,
        'abysmal':2,
        'wretched':3,
        'okay':5,
        'average':6,
        'fine':5,
        'decent':6,
        'tolerable':4,
        'acceptable':6,
        'neutral':5,
        'indifferent':4,
        'fair':5,
        'satisfactory':5,
        'excellent':10,
        'wonderful':9,
        'amazing':8,
        'fantastic':9,
        'outstanding':9,
        'impressive':8,
        'superb':9,
        'delightful':9,
        'pleasing':10,
        'great':8,
        'good':8,
        'love':9,
        'like':8,
        'enjoy':10,
        'recommend':10,
        'recommended':10,
    }




def sentiment_to_scale(text):
    sentiment_score = 0
    c=0
    good=0
    nutral=0
    bad=0
    for key,value in keyword_scores.items():
        if key in text:
            sentiment_score += value
            c+=1
            if sentiment_score>7:
                good+=1
            elif sentiment_score<4:
                bad+=1
            else:
                nutral+=1

    scaled_score=0
    if c!=0:
        scaled_score = sentiment_score/c
    if good>bad and good>nutral and scaled_score<8:
        scaled_score+=2
    elif nutral>good and nutral>bad and scaled_score<5:
        scaled_score+=2
    elif scaled_score>5:
        scaled_score-=2
    
    return int(scaled_score)

score = sentiment_to_scale(text)
print(score)