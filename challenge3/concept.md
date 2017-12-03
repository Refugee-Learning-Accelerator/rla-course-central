# Challenge 3 Concept Sketch

## Description

*We will create an Augmented Reality app to teach a second language language in a natural manner like Rosetta Stone / DuoLingo, where instead of fixed cartoon images, the input image will be a camera-acquired live feed from the user?s phone. The user will be able to point their phone at any object, and the AR app will output an image superimposed with the most likely target objects? names in the second language (nouns), as well as a tree of associated words (verbs, adjectives)  in the second language and Arabic. This structure will allow the Arabic-speaking user to learn the second language words most relevant to them in a natural and painless fashion. We will first implement this for English as a second language. We will use the vuforia Unity library with a wrapper to conduct object recognition, Google Translate to translate between English and Arabic, and the word2vec library to show associated.*

*See attached figures for a sketch of what the UI will look like. Fig. 1 shows the default screen with continuous object recognition powered by vuforia. Then the user can tap on a highlighted object, such as the bed.*

![fig1](https://gitlab.refugeelearning.site/rla/Hikma/team-template/tree/master/challenge3/fig1.png)

*After tapping the bed object, Fig. 2 shows the screen will then show related words such as sleep, pillow, sheet, and an example sentence: ?the child slept in the bed.? In the app, we will make this screen superimposed on the background image.*

![fig2](https://gitlab.refugeelearning.site/rla/Hikma/team-template/tree/master/challenge3/fig2.png)

## Questions

### What problem/challenge will the AR experience solve? 

*Our AR app addresses the problem of how to teach Arabic-speaking refugees with limited education how to speak a second language in a way that is: (1) relevant to their daily lives; (2) very easy or even fun; (3) sensitive to their cultural and linguistic background.*

### How will the AR experience solve it? 

*Our AR app will allow refugees to engage with learning English on a daily basis as they go about their normal lives.*

### Who is the primary user and how will the AR experience engage the user?

*The primary user is a Syrian refugee living in a camp setting or in a non-Arabophone country or in an Arabophone country, preparing for migration into a non-Arabophone country. This AR experience will engage them throughout their lives, during work, commute, home life, shopping, errands, etc.*

### What hardware does the user need? Is this realistic in the refugee context? 

*The user will be able to use the AR app with any simple smartphone running Android. They can additionally use Google Glasses or other wearable devices with a camera, but these are unlikely to be found in the refugee population. Most refugees will be using a smartphone as their hardware to access the AR app.*


### What activity does the AR experience facilitate that would not otherwise be possible? 

*With this AR, the user can learn about objects in their immediate environment in a foreign language.*

### What challenges do you expect to encounter? 

*One major challenge will be using the word vectorization software (word2vec) to effectively construct trees of related words, and the example sentence. Another challenge will be integrating the output of the word2vec prediction and the translated output with Unity.*


