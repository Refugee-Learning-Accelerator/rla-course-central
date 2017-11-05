# Challenge 1 Concept Sketch

## Description

Study Planner Chatbot

A major problem facing the refugee students is lacking the guidance support when selecting course materials that best suits their career and educational level. In addition, language may be a barrier if they want to do a search on their own and navigate through the materials offered in such courses. 
We will tackle this problem by offering a study planner chatbot that can understand the students needs, guide them toward the relevant courses, customize a study plan for each, and keep them engaged. The chatbot will access a database that contains a list of the major courses taught free and available online. Then it will pull those that are relevant (sorted according to the best ranked courses) to the student while offering a translation service as needed. The chatbot will also report the workload per course (# weeks and # study hours per week). After customizing their study plan, the students can ask the chatbot to email them a copy of it and receive a study reminders from it to keep them on track. The student can revise their study plan at any later time to add new courses or modify the selection of the current ones.


## Questions

### What problem/challenge will the chatbot solve? 

Support guidance to refugee students when selecting course materials and help them on translation some sentences and concepts.

### How will the chatbot solve it? 

The chatbot will access a database that contains a list of the major courses taught free and available online. Then it will pull those that are relevant (sorted according to the best ranked courses) to the student while offering a translation service as needed.

### Who is the primary user and how will the chatbot engage the user?

Refugee Students

### What activity does the chatbot facilitate that would not otherwise be possible? 

Easy use, translate english to arabic and vice versa and choose the perfect course depends on age and education.

### What challenges do you expect to encounter?

1) Indexing major arabic and english materials taught on well known platforms such as khan academy and coursera.
2) The students may opt to jump to certain level directly (e.g. asking for the translation service or want to change one of the courses in their study plan) rather than going through the sequential chatbot pipeline. We plan to tackle this by defining a set of keywords that enable such change in the flow (e.g. the word “translate” will let the chatbot move to translation level to address the request quickly).
3) Integrate Yandex translation solution (open-source service) into the chatbot. We plan to use wit.ai as it supports arabic and may be accessed through messenger.
4) Design a simple template to illustrate how the selected courses are populating the study plan.

