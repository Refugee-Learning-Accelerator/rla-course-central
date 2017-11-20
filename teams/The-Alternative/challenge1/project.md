# Challenge 1 Final Project

## Description

At first, we wanted our chatbot to sort student into the grades that fit their educational level knowing that most refugee children start their education and, for various reasons, drop out of school and loose track of what they have learned during their educational parkour.Thus, preventing us from sorting students by their age-related grade. 
After breaking down the issue we decided that to have a working prototype we will stick to grade 7-8-9 and only test their knowledge in math in the English language. While doing so, we faced a few setbacks, described below, and ended up rethinking our idea and creating a bot that assesses a student's knowledge on all math chapters of grade 7. If the student gets all the answers right, he/she will be redirected to grade 8. If the student gets an incorrect response, he/she will be redirected to the interactive activity,on our e-learning platform, related to the misunderstood concept.

We know that the idea in general sounds simple but we believe in its potential on a larger scale if all subjects in Arabic, English and French are included.

The bot is online and available on that link: https://www.facebook.com/BetaAbot/
        
*  ![Basic-Transcript.png](https://gitlab.refugeelearning.site/rla/The-Alternative/team-template/blob/master/challenge1/Basic-Transcript.png)    : A basic conversation.
*  ![Full-Transcript.png](https://gitlab.refugeelearning.site/rla/The-Alternative/team-template/blob/master/challenge1/Full-Transcript.png)     : A conversation detailing all questions and few of the bot's reactions.
*  ![Chatfuel-Screenshot.png](https://gitlab.refugeelearning.site/rla/The-Alternative/team-template/blob/master/challenge1/Chatfuel-Screenshot.png) : A look at our Chatfuel interface.

## Questions

### How did you build it (platform and technology)?

We used Chatfuel and Facebook Messenger because of their ease-of-use. Messenger has a good shared API that allows websites like Chatfuel to make the process as easy as possible.
We researched a lot and decided that it is the best approach for what we are trying to accomplish with our bot. We needed a platform that could support buttons to help children with trouble typing. Furthermore, the concept behind our bot is straight forward, built for specific tasks (Question-answer), and for these purposes, chatfuel is effective and user friendly. In addition to that, Chatfuel's integrated AI allowed us to filter out 'bad words' and insert reactions to specific phrases giving our bot a 'human' touch.

### What challenges did you face?

Few setbacks we faced:
1. To have a useful and precise test we will need a detailed set of questions that goes through all the learning outcomes of each chapter and for each grade.
<<<<<<< HEAD
2. Our test would only be useful if these students are to go back to school and in most cases, that doesn't happen. 
3. This type of assessment gives a general idea of where students should be placed but doesn't necessarily mean that they are of that certain level.
   
=======
2. Our test would only be useful if these students are to go back to school and in most cases, that doesn't happen.
3. This type of assessment gives a general idea of where students should be placed but doesn't necessarily mean that they are of that certain level.
      
    
>>>>>>> 58548f1599847dc7aebb07838c4a13f2684a4d8b

We believe in alternative learning, more precisely e-learning for it is accessible and free and does not require an infrastructure. While we are working with an NGO that aims to teach refugees through a learning-by-doing approach we have concluded the following:
    
A few questions is not enough to determine a student’s level and implementing a detailed positioning test in a chatbot isn’t really a neat idea. So, we finally decided to develop a bot that would ask 1 question per chapter for all math chapters of grade 7 in the English language, based on the Lebanese curriculum. This will let us determine if a student knows the basic learning outcomes of each chapter. And if not, it will help him fill the gaps of the corresponding chapter, by redirecting the student to our online platform, specifically to the interactive activity of the chapter at hand.


### What aspect of the chatbot do you like best? 

<<<<<<< HEAD
Its ability to reach any student anywhere at any time, all you need is a phone and a mediocre connection.
Its ability to be tailored to fit the needs at hand.
Its ability to speak and understand many languages. (Even if our prototype supports English only)
The fact that it is easy to build.

=======
   Its ability to reach any student anywhere at any time, all you need is a phone and a mediocre connection.
   Its ability to be tailored to fit the needs at hand.
   Its ability to speak and understand many languages. (Even if our prototype supports English only)
   The fact that it is easy to build.
>>>>>>> 58548f1599847dc7aebb07838c4a13f2684a4d8b

### What would you different in the future? 

Chatfuel allowed us to have a working prototype to present, but our vision for this bot is to integrate multiple languages, especially Arabic, and test multiple subjects for all grades. To do that we will need a much more complex platform to process a large amount of information without affecting its performance. In this case it would be easier to code it rather than drag and dropping blocks to build a conversation.

### Are there any parts of your code you'd like to highlight?

As we did not use actual code, we would simply like to highlight the methodology we used to determine if a student knows, or doesn't know the learning outcomes of a chapter.
Also, the ease-of-use of our bot and its "fun" side fit for the children we are targeting. We worked on creating a fun and interactive environment, where an incorrect response, leads to a feedback that encourages the child to learn by discovering the concepts she/he missed. As opposed to learning a written lesson and being unable to fill the gaps.
We have also implemented a filter for bad words making Abot even more child-friendly.

    Misc.: try asking "are you a bot?", "tell me a joke" or cursing.
<<<<<<< HEAD

=======
>>>>>>> 58548f1599847dc7aebb07838c4a13f2684a4d8b
