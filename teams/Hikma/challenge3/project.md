# Challenge 3 Final Project

## Description

*We developed an app that can teach a second language language in a natural manner like Rosetta Stone / DuoLingo, where instead of fixed cartoon images, the input image is a camera-acquired live feed from the user's Android phone. The user can direct their phone camera at any object, and the AR app will output an image superimposed with the most likely target objects' names in the second language (nouns). This structure will allow the Arabic-speaking user to learn the second language words most relevant to them in a natural and painless fashion. We have first implemented this for English as a second language.*

*See attached figures for a sketch of what the UI will look like. Fig. 1 shows the sofa object recognition powered by YOLO. Then the user can can see the Arabic and English words for "sofa".*

![pic1](https://gitlab.refugeelearning.site/rla/Hikma/team-template/tree/master/challenge3/pic1.png)

*Fig. 2 shows the sofa object recognition powered by YOLO. Then the user can can see the Arabic and English words for "bottle".*

![pic2](https://gitlab.refugeelearning.site/rla/Hikma/team-template/tree/master/challenge3/pic2.png)

## Questions

### How did you build it? (Platform and technology)

*Our app was built for Android. It uses YOLO algorithm for object recognition (https://pjreddie.com/media/files/papers/yolo.pdf). We changed the color of Bounding Boxes and Header Fill, and hard-coded translation to Arabic for a few words. Our app currently supports the recognition of these objects:  {"aeroplane", "bicycle", "bird", "boat", "bottle", "bus", "car", "cat", "chair", "cow", "table", "dog", "horse", "motorbike", "person", "plant", "sheep", "sofa", "train", "television"}. Our app only outputs recognition if confidence > 0.1.


### What challenges did you face?

*Recognition remains poor despite using a high-performing object recognition algorithm. Unity and Vuforia, which we originally tried to use, were not suitable tools for our project because object recognition is limited to 2d patterns printed on papers and 3d models. So we switched to deploying the app on Android, which required a high barrier to entry: Root the Android device and upload custom firmware.*

### What aspect of the AR experience do you like best? 

*We like how the AR experience is integrated into the user's natural environment. It is a seamless experience and can be applied to many use-cases for refugee language learners.*

### What would you different in the future? 

*The next feature we plan to implement: a tree of associated words (verbs, adjectives)  in the second language and Arabic.*

### Please also add a link to your code!

*https://github.com/mauriceaj/hikma-android*