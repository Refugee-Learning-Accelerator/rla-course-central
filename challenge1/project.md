# Challenge 1 Final Project

## Description

A major problem facing the refugee students is lacking the guidance support when selecting course materials that best suits their career and educational level. In addition, language may be a barrier if they want to do a search on their own and navigate through the materials offered in such courses. We are offering a study planner chatbot that can understand the students’ needs, guide them toward the relevant courses, customize a study plan for each, and keep them engaged.
We have built a short database (~23 course) listing the Arabic-supported courses (either taught in Arabic or have Arabic subtitles) available in Coursera (free and on-line) and let the chatbot access it to gather the related information as inquired by the user. The database is available as excel file TranslatedCourses.xlsx and it has the following fields: publisher, category, subcategory, course, instructor, university, level, work load, course language, subtitle language, rating, link, comment, and about. Below is a snapshot from it for your reference.

![alt text](DB.png "courses")

The chatbot will also report the workload per course (# weeks and # study hours per week). After customizing their study plan, the students can ask the chatbot to email them a copy of it and receive a study reminders from it to keep them on track. The student can revise their study plan at any later time to add new courses or modify the selection of the current ones. Below is a McokUp (flowchart) of chat bot as being currently implemented. Please refer to the following link so you can see it in its full resolution: https://botmock.com/mocks/4f4b0080-c255-11e7-b799-03d73ebcd5d6/export/4f53d190-c255-11e7-8c0b-c9003991fb9a.

## Questions

### How did you build it (platform and technology)?

Building the chatbot conversation nodes and connecting them was done by Chatfuel. The chatbot UI is the Facebook messenger whcih could be accessed from the messenger app or from a web browser on a computer.
The chatbot also uses the Facebook NLP wit.ai to understand more variaty of user input.
We also set up an independed web server on Heroku and connected it to a facebook bot. This is ready for future expanding when we might need to do more suficticated backend operations.

### What challenges did you face?

After switching between Arabic and English, having the bot capable of carying on in a similar flow int eh other langauge was chllenging.

### What aspect of the chatbot do you like best? 

I like that unlike a website, the chatbot provides a friendly feeling and more humanized support.
In addition to providing the service of presenting courses and helping to plan the study process, it helps to keep the student engaged with his study schedule and more connected to his study plan becasue of the humanized friendly flavor in the chatbot.

### What would you different in the future? 

I would try to get the protype to real enironment like actuall refugee students and see what type of blockers or complains they might face. That would help to tweek the conversation options to better solve the real life issues.

### Are there any parts of your code you'd like to highlight?

Chatfuel has a great way of utilizing the NLP within the conversation. We used it particularly for choosing the langauge English vs Arabic. it gives the user freedo to say his language choice in any way and in any of the two langugaes Arabic and English.
this is demonstrated in a seperate video named NLP.language.choice
