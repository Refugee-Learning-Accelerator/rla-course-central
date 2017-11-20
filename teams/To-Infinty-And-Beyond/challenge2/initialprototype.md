# Challenge 2 Initial Prototype

Problem Statement:
How might we design a translation tool that makes refugee students feel empowered?

Description:
One of the major obstacles facing the Syrian refugee students is the language. Most hosting countries including Lebanon have their educational curriculum (e.g. textbooks, presentations, reference materials) in English especially at the academic level. In addition, many places whether restaurants/hotels/streets have their signs, menus, receipts, instructions in English which add additional barriers for integrating the refugees in the hosting societies.
Most translation apps deployed on mobile devices made a good handy alternative as opposed to carrying hardcopies of heavy dictionaries all the time. These apps mostly operates by taking an input text (e.g. word, sentence, and paragraph) and output its translation in the desired language. However, they are not practical for real-world utilization as it is tedious and time consuming for the students to fully write the texts in English (and correcting typos) to get the translations.
Using the human-centered design, we as a team set a brainstorming session to synthesize from what we learnt in the lectures and from our previous observations, defined the problem, ideated for solutions, and came up with a prototype to tackle this problem. The design objectives is to get a translation tool that is simple, handy, practical, and efficient! The idea is to use cameras equipped already in most smartphones to capture photos of the content to be translated. The captured images are then uploaded and inputted to state-of-art OCR (Optical Character Recognition) stage to recognize and locate the characters within the images and output them as a text script. The latter is then parsed and sent to a state-of-art translator to output it in Arabic. All these steps are automated by a one-stop app to ease the functionality for users. Note that the users can interrupt to correct any typos resulted from the OCR or translation stages. Below is a flow chart illustrating the prototype design concepts;
You can see flow chart in images and please check word file to see results. 

### What solution are you testing? (and why did you choose it?)

A translation tool that can empower Syrian refugee students so they can be more productive in their coursework and better integrated in the hosting societies. Please check the description above for the motivations behind this project.

### Submit your prototype (use photos, video, diagrams etc.)

Please see the description above.

### Describe the prototype and why you chose this prototyping method. 

First, We take picture from mobile app and then process it using OpenCV library. Second, we pass picture to OCR library (pytesseract google library) and get text from picture. Then we send text to translation to arabic language and show result in mobile app. (All code in ocr.py file)
We have also worked on the Yandex translation service which is a state-of-art API similar to google translation one to bring the translation service. This will enable translating a word, a sentence, or a full paragraph from English to Arabic. (On a side: Please note that both Yandex and Google translators are equally bad when translating sentences or paragraphs to Arabic in a technical contest and that’s why we proposed our original project idea “neural machine translation” to train and give better translations in such content).

### What did you learn during the prototyping process?

The human-centered design concept helped us develop a mindset to start by understanding the user’s needs (empathize), do deep dive (synthesize), ideate with the team (teamwork), organize and filter ideas toward the best prototype. Later on, we are looking to iterate based on the pilot feedback.

### Who are your intended users for testing?

Given the lack of time, we plan to make a rough executable version of our prototype and share it on social media (mainly Syrians) along with a questionnaire to collect their feedback, analyze, and iterate to further improve our prototype.
