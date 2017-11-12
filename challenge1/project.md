# Challenge 1 Final Project

## Description

For the first challenge, we came up with the concept of a chatbot that we're calling "**Ustaz Fahmi**" (الأستاذ فهمي) to serve both refugees students and teachers. Ustaz Fawzi's main purpose is to make it easy for students who need tutoring or help in a certain subject at school to find a suitable teacher. It is common for refugees to find it difficult to find a tutor that suits them, for example, cost and location wise. Nevertheless, many people who are willing and able to help are available, but don’t know where to start or how to help. Ustaz Fahmi is a useful link between these people and students that need tutoring sessions. Each time a student requests help, Ustaz Fahmi asks him for contact information and specific tutoring needs (material, number of sessions...) and provides him with several tutors options based on his specifications. When a tutor contacts Ustaz Fahmi, he must provide his contact information and teaching preferences (material, level of students, session duration…) and Ustaz Fahmi will store these data for future students’ requests.

## Questions

### How did you build it (platform and technology)?

Ustaz Fahmi will play the role of a virtual tutor implemented on Facebook Messenger.  We used **ASP.NET MVC** to build our chatbot. 

### What challenges did you face?

We faced many challenges during the implementation of our chatbot. Some of these challenges were solved at the current stage. Others still exist and we are still working to overcome them. At the beginning we thought we will have a problem while implementing the chatbot in Arabic. However, this was a straightforward procedure and our chatbot is fully functional in Arabic. We will develop another version of it in English as a future extension. We had another challenge in understanding the concept of  MVC and developing code based on it. We were able though to handle this and write the code. The remaining challenges so far are: In the conversation workflow, we are forcing the user to choose an option from a menu when he replies to the chatbot. Thus, we are not able yet to get the personal information of a user i.e., name or phone number that must be typed by the user. However, all the remaining info are retrieved easily. Next, we are still having some issues with the interaction with the database. We have implemented the corresponding functions (create, delete, read, update) and we have tested the functionality. We still need to use these functions in the corresponding controller class to maintain the communication with the chatbot interface.

### What aspect of the chatbot do you like best? 

The best part of this chatbot is that it has a very realistic goal in mind. Instead of having the chatbot substitute for a teacher directly, the matching process that we are proposing is easy and very within reach. We liked to keep our chatbot simple yet efficient, so that no complications arise. And with its simplicity, it solves many issues. It reduces the hassle for students of finding a convenient teacher and the time and effort put to look up for one. It also helps teachers and tutors to find a job and an opportunity to help and live in a better way.

### What would you different in the future? 

In the future, we work on the following extensions
1.	First we will allow the user to type his reply especially in the contact information. 
2.	We will finalize the code related to the interaction with the database.
3.	We will optimize the range of parameters students and tutors can set for the matching system to be useful and more efficient.
4.	 We will work on the safety and protection issues and how to keep cheaters / bad tutors away. Mainly, we will ask tutors to upload copies of their CVs and degrees. Future steps may include also the creation of a complete private platform (including payment options) where we can hire the tutors and vet them and the student can rate them afterwards.

### Are there any parts of your code you'd like to highlight?

A more detailed description of the code development and implementation will be presented once the code is finalized and optimized. For now, the main steps that we followed in the implementation of our chatbot are:
1. Create the Facebook page of “الأستاذ فهمي”
2. Create a Facebook app and link it to the Facebook page
3. Create a local sever using IIS
4. Expose the local created server to the internet using ngrok
5. Create an SQL server and a local database to store data
6. Set Up the Webhook
7. Implement the main functions of the chatbot using ASP.NET MVC

The bulk of the prototype development resides mainly in step 6 and 7 where the code is developed. In step 6 we have implemented our Webhook. The Messenger Platform sends events to the Webhook to notify the bot when a variety of interactions or events happen, including when a person sends a message. Webhook events are sent by the Messenger Platform as POST requests to the Webhook. In our code, we have created a Webhook controller class “_WebhookController_” as inherent of the “_ApiController_” class already existing. The _WebhookController_ class’s main functionality is to handle the communication with Facebook, mainly the http get and http post requests. The main functions implemented in the WebhookController class are:
-	ValidateApp(challenge, token): Authentication and Validation
-	PostAsyn
-	ProcessEntryAsync
-	ProcessMessagingAsync

MVC allows us to build the chatbot as a composition of three logic layers: Model (business layer), View (display layer) and Controller (input control). The model represents the state of a particular aspect of the application. The controller handles interactions and updates the model to reflect a change in state of the application, and then passes information to the view. A view accepts necessary information from the controller and renders a user interface to display that information. By creating components that are independent of one another, we are able to reuse components quickly and easily in other applications. 
The Controller layer includes the **WebhookController** class and another class called “**StudentController**” that handles the interaction with the database, mainly the create, update, delete, and read requests.

The created controllers will manipulate the different created models to create the corresponding responses to the users’ requests. For instance, the StudentController will use a student model which models an entry to the database of students with corresponding data (Id of the student, FB id, name, phone number,…).
The **WebhookController** is using different models including: a **StateModel**, a **SessionModel** and a **StateNode**. The **StateModel** corresponds to the workflow state of the current user in the current session and the **SessionModel** corresponds to the session related information.
Two additional classes have been created:
-	The **SessionUtil** class that includes all the functions needed to handle several simultaneous sessions using the chatbot.
-	The **BotUtil** class that defines all the functions used in the WebhookController to communicate with the chatbot.

