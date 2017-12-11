# Challenge 3 Concept Sketch

## Description

*
Based on the seminars we attended so far with RLA and checking around for the best approach for language learning, we will follow the approach of immersive language learning, using AR to allow contextual conversations, this will also need to be supported by a chatbot engine to be able to sustain a meaningful conversation.
The idea is divided in 2 parts or cases, we will describe the 2 cases and provide a diagram that explains the sequence and the calls we will need to different existing technologies.

Case 1: This is for learners that are very new to the target language. 
The purpose is to help them:
- Transform basic contexts from their native language into the target language
- Help them hear how this is pronounced in the target language
- Help them train in how to actually pronouce it in the target language
Once this is acquired, then we will be able to move to a more immersive language approach. This is a first step as we have noticed that even in immersive education approach, the first steps is to be able to translate back and forth between the native and target languages and help in the pronounciation
How:
We will build a smart phone app that will take as input a phrase sent by the learner in the native language, transform it into text, display the text, translate it in target language, say it in target language using text-to-speech, ask for the learner to repeat it, transform the repetition into text, compare it to the target text and give feedback.
Please check the full diagram in the uploaded picture "RLA - PEDD - Challenge 3 - Case 1.jpg"


Case2: This is the main focus for learners who want to integrate well in their context. This is where the immersive learning will be used. The target is to help learners:
- Acquire conversations in the target language related to their daily tasks
- Acquire conversations related to the environment they live in
How:
The same app will take a "Trigger". This Trigger can be:
- An image that the app will show and wait for the user to scan it with the AR Camera. The image will be linked to a specific context that will trigger a specific conversation to teach specific phrases around a concept
- A specific logo of the app that will be distributed around the Refugee camp or City and based on the location, provide a context to the app that will trigger again a specific conversation
Once the Trigger is passed to the application, the context will be deduced and sent to a chatbot engine, that will send a corresponding text with a question. The question can be something like: "(Arabic) if you want to ask for coffee say: (english) 'Can I have a coffee please?'. " OR it can be directly a question in english: like "How do you ask for coffee?". The text question of the chatbot will be taken by the app, transformed into speech and played for the user. The user will answer again in the target language, the app will transform this answer into a text and send it to the chatbot, get the next reply of the chatbot and again transform it into speech and play it back for the user. 
Note that the user can answer something like "Repeat again", " I didn't understand", and also the chatbot will need to take this into account

The conversation can continue until the chatbot closes it by providing the final point or the user stopping the interaction
Please check the full diagram in the uploaded picture "RLA - PEDD - Challenge 3 - Case 2.jpg"

*

## Questions

### What problem/challenge will the AR experience solve? 

*The problem we are trying to solve is to allow refugees to acquire the language of the hosting country. This will allow easier integration in the work force for adult refugees and also easier access to schools and the surrounding culture and society for refugee students.*

### How will the AR experience solve it? 

*The use of AR will help providing learning experiences guided by the surroundings. We will use AR to enable contextual conversations in the target language between the learner and a chatbot that will guide the conversations towards needed sentences that will help the learner be more integrated in the society*

### Who is the primary user and how will the AR experience engage the user?

*The primary user is anyone moving into a new country and wanting to learn its language to integrate in it. The focus will be put on refugees. It can target refugees who have no skills in the hosting country language and also refugees who have some understanding and want to get enough to be able to integrate better.  *

### What hardware does the user need? Is this realistic in the refugee context? 

*We decided to skipp the high tech needs of AR and VR and adapt the solution to refugees. The user will just need an android phone with data access. This is actually chosen to be adapted to the refugee context. Also our aim is to move as much as possible the components (speech-to-text, text-to-speech) into the application on the phone to reduce the exchange needed with the internet to only some text. This will allow the application to have a negligeable impact on the phone's data usage.*

### What activity does the AR experience facilitate that would not otherwise be possible? 

*The AR experience will allow the language learning based on the location and physical presence of the learner. The discussion will be triggered according to where they are and the surrounding objects around them*

### What challenges do you expect to encounter? 

*We have identified some technical and functional challenges. 
Technical challenges:
- Although the speech-to-text technology is becoming quite public and well advertised, the testing has showed us that it is not the level we would like it to be yet. We will probably have to acquire some license for good quality tools or will need to contribute to the enhancement of an open-source one
- The AR technology seems very much linked to the underlying hardware/OS that is using it. This will put some constraints when building the app to make it cross-platform and will eventually make the testing heavier.

Functional:
- It will be difficult to implement the "Trigges" without clear consent of authorities in the hosting countries. We will need at least municipality approvals to add triggers around the town and also officials approval when adding triggers inside the refugee camps"
- The large scale spreading of this application will require physical presence to set in place triggers. A possible workaround could be to rely on GPS location as triggers or on images found online for public monuments and use that as triggers. For refugee camps, a physical presence will be needed*
