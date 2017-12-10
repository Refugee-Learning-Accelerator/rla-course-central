# Challenge 3 Final Project

## Description

*
Our initial plan was to make an app that would translate and say the words from Arabic then ask for the user to repeat it. Then go on with a discussion relying on a chatbot engine. We started with that and then we found that actually there is an Asset on the store that does that already and supports arabic, based on the Google Translate API. Then we found out that Dialogflow, the chatbot engine we used in the first challenge, also supports doing audio conversations and that it had Assets on the Unity store to do that. So we ended up doing small components to make sure we got the needed knowledge to develop later on AR experiences using Unity/Vuforia. We did:
- A small "rotate the cube" app and we got it downloaded on an android device to make sure we got the building and installing part right
- An app that would take a text written in any language, translate it and then say it out loud for the user to hear (we attached the small c# code for this one: textToSpeech.cs)
- We downloaded and tested positively the frostweepGames asset that relies on Google Speech Recognition. We were able to test arabic speech in it and it supports several arabic dialects (we tried the lebanese one)
- We did a small app that displays a 3D model on a target picture
- We did a small app that displays a small 3D text on a couple of images to explain what each image is (We attached the small modifications on the C# code for this one too RestartTrackEventHandler)

*

## Questions

### How did you build it? (Platform and technology)

*
The app is built using unity. On top of the standard Unity and Vuforia tools, we relied on Google Cloud Platform and mainly Google cloud translation api and the textToSpeech. The coding done is in C# 
*

### What challenges did you face?

*
We faced the challenge that we got disoriented when we found that most of the ideas we had are already there and easily accessible. We still wanted to make sure our learning curve on AR is going in the correct direction
We faced a technical challenge with Arabic. Seems Unity and Arabic text are not friends yet. There are some assets in the store that promise support for displaying properly rendered RightToLeft arabic text but we didn't find yet one that would support textfields with correct arabic support
We faced a couple of small issues as the resources and videos we found online where for an older version of Unity/Vuforia and the assets where different. 
We also faced a problem in adding dll files. Seems it is not enough to add it to the References in the MonoDevelop project and build, it MUST be added in the Assests folder. This is even for standard dll like System.Web.Extensions for JSON parsing

*

### What aspect of the AR experience do you like best? 

*
We were amazed how much developing AR apps is actually easy to start with. We used to play Pokemon Go and what we managed to learn in 1 week gives us the "feeling" that we can actually do something like that or at least we understand the technology behind it. We can imagine a inifinite possible use for AR experience
*

### What would you different in the future? 

*Althoug as we said above we can imagine a infinite possible use case for AR experience, we think it is not easy to build something that will actually survive the hype and become a really useful application that will help make lives easier and make learning more attractive on the long run. Next time we would research more what is already there and make sure to design something innovative*

### Please also add a link to your code!

*We uploaded the main code we have written and not the codes we relied on and found in the asset store. We didn't upload unity projects/scenes as they are straight forward Vuforia imageTargets, 3D text, Canvas UI items, polymodels'*
