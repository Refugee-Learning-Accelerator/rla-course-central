# Challenge 3 Final Project

## Description

*[I first searched for shapes' pictures to be detected, however the shapes didn't seem easy to be recognized by the AR camera. For this, I changed to 
detecting numbers and displaying each number as a 3D text after detecting its picture. 
Before starting with this process, I tested the application with the Vuforia built in images such as the 'astronaunt' image and displayed 
a corresponding 3D text 'Astronaunt' on this image. Then, I applied the same process on my 'Numbers' database pictures that I developed in
Vuforia Target Manager.]*

## Questions

### How did you build it? (Platform and technology)

*[The application is built using Unity-Vuforia platform.
First, I developed my own database "Numbers" that contains detectable images of numbers(from 0 till 10), then I added these images as image targets
after importing the "Numbers" database in the project.
I assigned for each picture its corresponding number name as a 3D text child.]*

### What challenges did you face?

*[I faced the challenge of finding pictures of shapes that can be recognized by the AR camera. When I added pictures of shapes as targets in Vuforia Target
Manager, the rating was always low, which means that the pictures can't be detected easily in the Unity.
For this, I switched the purpose of my application from detecting shapes to detecting numbers, where it seemed that recognizing pictures of numbers is easier
than that of shapes (Pictures had a rating of 4 or 5).]*

### What aspect of the AR experience do you like best? 

*[The best aspect of the AR experiene is that we can add more than one child for the same image target, that is when detecting a certain image,
a 3D object and a 3D text for example can appear at the same time]*

### What would you different in the future? 

*[In the future, I would improve my application so that it can read any picture having a certain number, for example number five, irrespective of the
 color or background of the picture and not limited to the number five pictures that are only found in the developed database.
 Another thing I would add is an audio file to corresponding to each number such that when detecting each number's picture, an audio file is played 
 stating what this number is in both languages (Arabic and English)]*

### Please also add a link to your code!

*[You can find the project in the "Final Project" submitted folder]*
