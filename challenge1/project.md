# Challenge 1 Final Project

## Description of the project

The goal of this chatbot is to help automate the process of providing early learning activities to parents who have 0 to 6 year old children. This service is conducted currently by Tembo Education Co. and is so far a one-sided process. The chatbot is supposed to:
Provide parents with a 24/7 service for answering questions.
Receiving their feedback.
Providing on-demand extra activities.
Replace the SMS current approach with a considerably cheaper one.
To accomplish this task, we needed  to summarise the prospective conversation scenarios between the company and parents, based on the needs of both sides (e.g. need for feedback or need for further explanations). These are shown below.


![alt text](Final Project/storylines.png)



After that, these scenarios need to be formed into predicted phrases and vocabulary. This, in turn, is analysed by a natural language understanding processor to extract meanings and build suitable responses upon them. We found this approach more flexible than plain (IF... THEN) rules since it can recognise more possibilities of sentence structures, giving more human like nature to the chatbot.
This service can be provided through any interface such as an independent mobile app or facebook messenger. We took the first approach and linked the app to the basic core of the bot. The working chatbot is shown in the video attached.

[![Please find the video here](https://img.youtube.com/watch?v=4nk62c6jnkw/0.jpg)]
(https://youtu.be/4nk62c6jnkw)

Here is an experiment with some spelling mistakes from the user.

![misspelling handling](Final Project/working_bot_1.mp4)


## Questions

### How did you build it (platform and technology)?

The chatbot is built as a mobile/desktop application to interface the chatbot processor with the parents. Rasa platform is adopted to process the natural language into structured data which is afterward used by Rasa core to build the dialogue of the conversation and connect with the app interface through an offline server.
Rasa platform was chosen due to the wide functionalities it provides. The usage of each part of the platform can be independent, which allows future development of the bot in several directions, along with the ability to use a third party platforms or add-ons, such as Wit, to expand the functions with adding Arabic language, for example.
Rasa platform contains two main parts, Rasa NLU and rasa Core.

**Rasa NLU (Natural Language Understanding):** is an intelligent open source platform that extract intents and entities of a given sentence based on trained AI algorithm. Where intents are what the user is expected  to say; and entities  are the information extracted from the message. 
To utilize Rasa NLU, the expected enquiries of the user are set in training samples and fed to rasa NLU to train the ANN. The trained neural network is then used by the core to analyse the meaning of each user sentence. Training samples include the main intentes the user is expected to use along with the different variations the entity can have, such as:

```python
## intent:greet
- hey
- hello
- moin
- hi
- good morning
- hi there
- whats up

## intent:unclear
- activity is not clear
- I do not understand
- I did not understand
- I dont get it
- It is difficult
- I need help
```
The more training samples are given to the network, the more accurate the responses will be. Also, proper synonyms of the entity help recognizing a wider range of user sentences. Below, the result of a poor trained network is shown, where the responses can be meaningless.


![alt text](Final Project/poor_training.PNG)


In the next figure the response of a better training sample set is shown.


![alt text](Final Project/better_training.PNG)



**Rasa Core:** interprets the user messages based on the imported trained network from rasa NLU, based on this  interpretation, a story path is decided and followed. This indicates the next action to be taken by the chatbot, and then forward the response to the user. The story path direction is chosen based on a trained ANN which links the interpreted meaning of the sentence with a corresponding story line. An extensive storyline training data leads to a better flexibility to move from storyline to another and help avoiding meaningless responses. The following are some samples of storyline:

```python
 ## get activity path            
  - action_greet
  - action_give_daily_activity
* _thanks            
  - action_welcome

## get feedback Positive path             
  - action_greet
  - action_ask_feedback          
* _affirm
  - action_happy
  - action_bye

## get feedback Negative  path             
  - action_greet
  - action_ask_feedback          
* _deny
  - action_unhappy
  - action_want_clarification
* _affirm
  - action_explain_detail
  - action_bye
```

Chatbot application: An interfacing mobile/desktop application was built to be the median between Rasa Core and the user.  This application transfers the input messages to the core through an offline server; and transfers the output responses from the core to the user. 
The app was programmed on MS Visual Studio environment using C#.NET. This app provides a user friendly interface which can perform on Android, iOS and Windows. 

### What challenges did you face?
The major challenge we faced was the linkage between facebook messenger and the rasa core, since this required an online server. This is technically and financially demanding, since it is not easy to upload the rasa core to an online domain.
Another challenge was getting Tensor Flow, and consequently Rasa core, to run on a 32-bit operating system.
Also, the proper training of both Rasa NLU and Rasa core demanded a sufficient volume of training samples. This volume was not clear in terms of its minimum value. Thus, a process of trial and error was adopted to get reasonable responses from the chatbot.

### What aspect of the chatbot do you like best? 
From the many advantages of using chatbots in general, these point were most appreciated by us in this work:
The considerable saving in human resources, efforts, time and finance.
The modularity of Rasa platform, which open many doors in front of development.
The important role that a chatbot can play in aspects like education and psychological support.
The long-term learning ability of a chabot, where i can improve continuously with more training samples taken from the online conversations.
The ability of chatbots to expand the scope of other application the developer has worked on; and considerably enhance the user experience in many of these applications.

### What would you different in the future? 
Future expansion and enhancement of the current chatbot include:
Using an online server to connect Rasa modules with services such as facebook messenger.
Expanding the training sample set for both Rasa NLU and Rasa Core to increase the accuracy and cover more storylines.
Tracking user information in order to personalise the chatbot responses. This function required a connection with a user database, which was postponed in this stage of the work due to some technical issues.
Including the Arabic language in the NLP to make the chatbot available to Arab speaking families. We believe this could be accomplished due to the modular characteristic of Rasa platform, however, it is not tested yet.


### Are there any parts of your code you'd like to highlight?
Perhaps, the part of the code regarding training the Rasa NLU was interesting for us. The training takes place through providing samples if the intents, and variations (synonyms) of the entities. It is predictable that increasing the synonyms will increase the accuracy (or confidence) of the network. However, it was noticeable that repeating the same synonym several times in the training sample helped, in fact, considerably in increasing the accuracy. The network shifted from the range [0.1-0.4] to reach values of confidence up to 0.9. That was rather interesting for the team as the reason was not clear to us. This approach was (well, normally!) not mentioned in the documentation of the platform.
