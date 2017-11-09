# Challenge 1 Concept Sketch

## Description

Abot, or Assessment Bot, will help students that have no traditional school access to the Lebanese school curriculum, to start using alternative resources based on the curriculum by assessing the student´s level in all major subjects. To do this, the bot will engage the student and ask him/her questions. The questions will be designed to test official learning outcomes according to the curriculum. To limit the number of questions, we will arrange the outcomes in a `stacked´ way, i.e. if several learning outcomes are about prime numbers, the bot will ask if the student knows what prime numbers are before asking more difficult questions involving prime numbers. If the student answers with a ‘no’, it will skip the rest of the outcomes. Once a student finishes a subject, the bot will know and remember what grade the student should start in, tell the student and ask if the student wants to continue testing, start learning or come back later. If the student wants to come back later, the bot will send reminder messages to continue where the student left off.

For a first prototype we will aim to develop a bot that will test math outcomes for grade 7 - 8 - 9 in english. We will try to push for more but due to time and technical constraint we believe that its the best approach for us.


Concept design also includes:
ConceptScenario-Abot.png     >> A scenario of an interaction between a student and Abot
Flowchart-Abot.pdf           >> A flowchart detailing the action of the chatbot

## Questions

### What problem/challenge will the chatbot solve? 

Together with the Lebanese government, the development community executed the Reaching All Children with Education programs, RACE I and RACE II. While it was a valiant effort, recent research by the American University of Beirut shows disconcerting statistics. 61% of all school-aged Syrian children in lebanon is currently out-of-school. While large amounts of resources are spent to run accelerated learning programs (ALP) and to open public schools for a second shift, only 1.4% of refugees are using the ALP and 70% of refugee children that go to school drop out. Among the main reasons cited are the language barrier, bullying, adaptation problems and lack of financial resources. While the idea of an ALP is sound, these numbers show that children facing the above mentioned barriers as well as problems with transportation and child labor to support their families have trouble even attending organized assessments for these programs to gauge their level and determine which class they would need to attend. As such these children cannot benefit from the traditional educational sector that is limited to a certain place and a certain time in order to deliver education. Remedial programs can help but suffer from the same time and location constraints. Quality e-learning programs aligned with the official curriculum can solve the big issue of clashing priorities by giving access to learning materials 24/7, anywhere. However, the beneficiaries of these programs have very limited access to teachers testing their level of proficiency in a certain subject and assigning the relevant parts of the curriculum accordingly. 
However, The Alternative Team believes a well-built chatbot could solve this issue. 

### How will the chatbot solve it? 

The user will connect to a facebook page which links to digital resources and or offers digital copies of the official school books. There is also a messenger function which features our chatbot. Here the student can test their level on specific subjects. The chatbot will engage with the student with a series of questions aimed to get some insight on the student’s educational level. Abot (Short for Assessment Bot) will ask questions according to the learning outcomes of a specific chapter in the Lebanese curriculum and from the student's answer determine if this learning outcome has been assimilated or not.


### Who is the primary user and how will the chatbot engage the user?

The primary users will be out-of-school children that, because of time-constraints, lack of safe transportation or lack of available services do not have access to the Lebanese Curriculum in a traditional school or even a non-formal educational center. They do have access however to facebook to use the bot on one hand and the Lebanese curriculum (preferably in digital form, but school books would work as well) on the other hand.


### What activity does the chatbot facilitate that would not otherwise be possible? 

The activity that the chatbot will facilitate is assessment of out-of-school children without human intervention. It will, on a subject level, provide an indication of what a student knows and what would be an appropriate place to start studying the Lebanese curriculum (or any curriculum the bot is programmed for). Linked to specific resources, it will subsequently tell the student where to start providing links to learning material. 
A more advanced version could do test the student again after the student finished the material. It could cheer the student on and motivate the student by showing his or her progress and complimenting him or her.


### What challenges do you expect to encounter?

The Alternatives will face a number of challenges building the Assessment Bot, which will fall in two categories:

Conceptual challenges:
Language barrier: for technical reasons, we will program the bot to speak English. While the bot will be able to determine whether a student answers a question incorrectly, it will be very hard to make the bot understand whether that is because of a language barrier or lack of knowledge in the subject. 
Answering by repetition: unless the bot can test every single learning outcome with a multitude of randomized questions, a student could ´cheat´the bot by repeating the test and looking up the answers.
Attention span: children, especially if they suffered trauma, have short attention span. Testing on multiple subjects will require long engagement with the bot.

Technical challenges:
Limited coding experience in the team
Limited options using the arabic language for the bot, which would be ideal for this application
Limited amount of time and the conversion of the curriculum's learning outcomes to usable questions will take time.
