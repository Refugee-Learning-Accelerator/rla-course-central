# AR Design Concept– Challenge 3
OCR-Based Translation Tool - AR App
To Infinity and Beyond Team

## Challenge: How might we use Augmented Reality (AR) to support refugee language learning outside the classroom?

## Description:

Continuing our work on an Optical Character Recognition (OCR)-based instant translation tool, we have decided to make an augmenter reality (AR) version to make it efficient, simple, and easily accessible from smartphones and tablets devices. To recap, the app uses the device’s camera to capture the content to be translated. Then it performs OCR (by Google) to recognize and localize the characters within the images and output them as a text script. The text script will be augmented inside a frame overlaid on top of the original textural content of the captured image. The latter is then parsed and sent to a state-of-art translator (by Yandex) to output it in Arabic. The user is given an option to interrupt and edit the output of both OCR and translation stages to correct the typos. Finally, the results including the original image, OCR output, and translator output can be exported to pre-entered email so the user can further process later if needed.
To demonstrate the concept, we have created a mockup sketch below illustrating the whole concept:

![alt text](ArFlowchart.png)
## Questions:

### What problem/challenge will the AR experience solve?
Most translation apps deployed on mobile devices operates by taking an input text (e.g. word, sentence, and paragraph) and output its translation in the desired language. However, they are not practical for real-world utilization as it is tedious and time consuming for users to fully write the texts in English (and correcting typos) to get the translations.

### How will the AR experience solve it?
AR experience shall make the translation process more natural, simple, instant, and efficient. The recognized textural content and its translation in Arabic will be augmented in the captured images. The process to realize that is explained in the description section above.
 
### Who is the primary user and how will the AR experience engage the user?
Refugee students may simply capture pages from their textbooks or photos for the instructor’s whiteboard and have the English content being translated in seconds and augmented in the scene. Refugees (or even Arabs) living in non-Arab countries and want to use instant translators to understand their surroundings (street signs, restaurant’s menu, bus schedule, travel instructions at airports, ingredients description in food items … etc).
	
### What hardware does the user need? Is this realistic in the refugee context? 
A handheld device equipped with a camera (smartphone, tablets, or laptops). The app shall be installed once and functions without need for data-coverage which avoid any extra costs on refugees. We think low-quality smartphones are accessible by refugees thus need to verify if OCR can still operates on low-fidelity content (captured by low-quality camera) to fit better the refugees usage case. 

### What activity does the AR experience facilitate that would not otherwise be possible? 
The OCR stage can localize the content to be translated, hence we can use such information to center a frame with suitable size over the original textured content and augment the recognized texts and its translation within it. The AR experience makes it more natural and instant. We hope to reduce the latency of our translation and increase its translation accuracy to deliver a real-time AR service where video streamed from camera may have the translated content augmented instantly in it.    

### What challenges do you expect to encounter?
We are porting our codes from Python to C# and relinking the libraries to better fit Unity environment. We expect some difficulties designing the interface screens for the app (since we are still learning Unity!) and probably accessing the camera when deploying it on smartphones. The latency and accuracy of our implementation are still far from real-world usage and will require further efforts to make the whole experience promising for refugees.
