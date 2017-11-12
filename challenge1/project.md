# Challenge 1 Final Project

## Description

* Demo: https://youtu.be/WZwXDnjOeR8
* code explanation: zip file uploaded https://youtu.be/PEgG_Dy-vkk
* Code: zip fie uploaded: PEDD - backup 20171112.zip
* 
* The Demo video uploaded on Youtube will show a sunny day scenario where a conversation is happening between a student and the chatbot
* We have tested with 2 actual students different aspects which lead to the current design
* For now, the chatbot can:
* engage in a welcoming chat, ask about and identify the topic to be discussed, ask about specific modules in this topic to elaborate
* then provide a link to a video to explain further the topic based on the level of understanding
* Then finalize with a closing message
* Due to a technical limitation, we couldn't add a checking knowledge acquired step (max 5 contexts in a chain in api.ai)  
* *

## Questions

### How did you build it (platform and technology)?

*we built our chat bot using api.ai (now called Dialogflow). 
We liked this product because it has a UI that allows any teacher to contribute without coding
If we provide the correct design and approach for entities and intents
it can also integrate with different messaging applications and supports extension with several APIs
It can also link to a webhook. For this, we selected scriptr.io , this is a webbased PAAS
Note that we did some tests with api.ai - scriptr.io 
but we didn't package anything as this is planned to be next phases's target to create and maintain student profiles
and also to maintain/redirect a list of unaswered questions*

### What challenges did you face?

*It was actually more difficult than expected to properly design the entities and intents
we also faced a limitation in the number of sequential contexts. 5 being the maximum number in api.ai
We noticed that api.ai is not designed to actually maintain a long chain of related conversations
WHat we wanted is a long chain that starts from very general to very specific topic, in a kind of mind map
We wanted to navigate easily this mindmap with the student (in several directions if needed).
Api.ai didn't help much in this. We would consider later on customizing and redoing the design to rely on external code
in order to allow this kind of navigations to more depth then just 5 levels. Also we want to make it "upward" or backword possible. 
Like go back from a specific topic to the more general concept, and then dive in again in another branch*

### What aspect of the chatbot do you like best? 

*We liked actually how easy it was to get it to work on facebook messenger and how we could get something to show around quickly
The support of the small-talk Agent in api.ai helped get more attention around us on this 
and it helped get more teachers and students wanting to contribute*

### What would you different in the future? 

*We would design more the entities and intents and we would try RASA
As it seems it support history and chain of conversations*

### Are there any parts of your code you'd like to highlight?

*Not really, it was sort of simple to do and not much of a coding yet
We would have highlighed the integration with scriptr.io if we would have packaged it. Maybe later*
