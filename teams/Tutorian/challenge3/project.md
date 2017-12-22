# Challenge 3 Final Project

## Description

In this challenge, we developed an AR assisted language learning game that convert conventional cards game to a useful and funny game. The designed game challenges mainly the players’ ability to construct sentences and recall the vocabulary. Different games can be played with the designed app in order to keep including MadLibs, sentence construction (explained in the concept file) and others. The proposed game encourages the concept of collaborative peer-to-peer learning. Since the game itself doesn’t require any supervisor to judge the correctness of the sentences, the learner players have the motive to check each other’s sentences and correct them, in order to increase their chances of winning.

In the following video, a part of the prototype test is shown:

[![Click the icture to go to the video](https://img.youtube.com/vi/7rBW5XOUIgQ/0.jpg)]
(https://youtu.be/7rBW5XOUIgQ)


## Questions

### How did you build it? (Platform and technology)

The app was built using Unity platform in the first place to support the AR experience through Vuforia development kit. This in turn was dependent on a C# script on MS Visual Studio. The words were built and exported as 3D objects using Blender 3D creation software.

### What challenges did you face?

- The symmetrical design of playing cards created a challenge of keeping the attached word unflipped and understandable to both players. This challenge could be solved by several methods (computational and design ones). We chose one of the simplest methods and rotated the word so that it could be read for sure even if it was flipped.
- The inability of Vuforia to recognize all playing cards due to the lack of captured features of some playing cards by the software. This could have been solved by choosing a more complex design of the playing cards. However, because we are eager to use a common card design, which is most probably available for most of the potential users, we tried our best to enhance the captured features of the cards. We ended up with three cards with low features from the whole deck, while the others have high quality features.
- The need of many definite and indefinite articles (a,an and the) in the context of the game. This can be solved by adding an auxiliary set of cards, where all players are free pull a limited number of these special cards from this set.
- Writing 3D texts in Unity was not clear as desired. For this reason, we used another 3D creation software (Blender) to write the words and then exported them to Unity. Using Blender enabled us also to solve other problem we faced of exporting words in other languages like Arabic to Unity platform.



### What aspect of the AR experience do you like best? 

- The ability of AR to make the educational experience interesting, enjoyable and attractive.
- The new opportunities that AR can provide to educational games with all visual effects that could be added, such as the visualised laboratory experiments which may not be available for many refugee learners.
- The fact that augmented reality does not replace the interaction between humans and physical objects as well as other humans, but rather enriches this interaction by projecting extra interesting animations within the environment.



### What would you different in the future? 

- Adding an option for the user to choose from more languages, scenarios and levels.
- Showing the score of the game and some more visual effects, such as pictures of the words.
- Expanding the playing cards database, in order to cover less common designs.


### Please also add a link to your code!

Please find it here:
https://gitlab.refugeelearning.site/rla/Tutorian/team-template/blob/master/challenge3/rotate.cs
