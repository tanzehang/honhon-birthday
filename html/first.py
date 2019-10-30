from wordcloud import wordCloud
import matplotlib.pyplot as plt
from scipy.misc import imread

text = open('test.txt', 'r').read()
bg_pic = imread(test.png)

wordcloud = wordCloud(mask=bg_pic, background_color='white',
                      scale=1.5).generate(text)
