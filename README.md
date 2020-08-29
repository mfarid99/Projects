# projects
Project 1 comments: 

I created a News Search website "The Digital Newsstand" through The API offered by the Atlantic newspaper. The first challenge was to find a useful API. Some were scams portraying free API's and when you try to get a key, they are asking for a credit card. Lesson learned. 
Originally, I was supposed to pull data through Kelly Blue Book API but they never responded to my request. 
One of the valuable lessons I learned was to read the API instructions re how to use it. I did not know where to insert ${news} in the url to pull the data but it makes sense now. Look for the "q="...more or less. 
Pulling data through ajax and using the for let loop was pretty straight forward. Overall, the initial set up was ok in terms of difficulty. 

In HTML, there were 4 divs: 1 wrapper, 2 main divs and a bottom one for the footer. 

The leftdiv contained a still image of stacked newspaper. Once you type the keyword search (Biden, Clinton, Lamborgini, COVID19...etc), the newspapers image fades out and a list of related articles + the link appear instead. 

When you hover over the articles/link, the font size increase and the articles turn red. When the mouse moves away, they turn to original state. I used .on('mouseenter') and ('mouseleave'). 

I also researched a function that makes the submit button works when Enter is pushed. That was exciting. 

The second DIV is a slideshow outlining some of the content that the website offer such as news related to politics, sports, elections, entertainment..etc with a photo representing every them. I tried everything in my power to have the description of each slide at the bottom or on top of the images but it would not work no matter what I do. 

I also created a background that covers the entire page iwth a traditional classic newsstand image. I changed the opacity so that it does not distract or overcrowd the rest of the page. 

Note: I tried to change the opacity thru CSS but it kept changing the rest of the elements as well. I researched it online and followed some recommendations to no avail. So, I changed the opacity outside of VS then I used it in the background as a new image. 

I imported 2 fonts: 1 for the main headline and one for the sub. 

CSS was the most time consuming. 

I had challenges with the responsive design. I am not satisfied with the way it looks. Per the project instructions, I made it responsive to iphone (5,6,7) which is 375px width and to desktop which is 1000 px using the following  @media only screen and (min-width:). I was under the impression that the website won't change in terms of layout unless the screen size is changed but it was distorting the original page that I created so I commented them out in CSS so for the purspoe of the presentation on Saturday. 

So here are the items that I wanted to improve: 

-Prevent the last slide from jumping abruptly to slide # 1. Apparently a common problem that many coders complained about. 
-Change the opacity of the background image without impacting other elements. 
-Improve responsive design skills. 
-learn how to reset the page after every search. it keeps adding new searches and filling out the pages unless you hit refresh. 
-Add tab before each article. 
-Affecting $news and not $url ($url is child of $news)



