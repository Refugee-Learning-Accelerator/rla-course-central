# Challenge 1 Concept Sketch

## Description

*We will start with a little history to explain that the problem we are tackling is a lot bigger than what we can handle in the scope of a project and how the impact on refugees is aggravated. Then we will show how we will focus on a specific topic that can be treated as a project.

Education started to take shape a long time ago in the early human history and it was offered to an elite of the people gathered in small groups around temples, city centers... The first revolution in eduction started when the schools where set in place and targeted a wider audience. This was later supported by the invention of the printed books that allowed the spread of eductation to an even wider audience.
Why is this important? Because today we are observing a "reversed evolution". In the digital world we are in, information is made even more available and this can be considered another revolution in the information reach. BUT, the educational approach is lagging behind! We are still following the same Majistral Educational approach. We are seeing now more and more trials to do some improvements like interactive learning and books that are digitaly connected. The major trial in this direction, is a Differentiated Education approach. In this approach, the teacher follows a specific process tailored to each student, allowind a different content and knowledge testing by student. In a traditinal classroom, this is easier said then done. But, adding to this classroom an interactive intelligent tool that supports the teacher, relying on the abundance of easily accessible information and channeled in a way to help the students according to each one's specific need at the different stages. 
This Differentiated Education approach is now available again to only an elite of the people gathered in specific very expensive schools. There is a need for a next revolution in education when this will be widely spread, and this is where PEDD (-in french- Programmes d'Education Differenciee Digital) would like to put a seed. The target is to make this approach available to a wider audience and we would like to target refugees, because this is where the approach is really needed and will make a major impact quickly. The refugees don't usually have access to the normal supporting aspects other students have, like access to personalised expensive tutoring or access to after school help centers. 
Without being seen as over ambitious trying to acheive world peace, we want to apply this approach on a specific topic, choosing one level, one course, one topic. As a second phase, we want to make available a framework for educators to easily apply this approach to more topics, courses, levels. *

## Questions

### What problem/challenge will the chatbot solve? 

*During the schooling period, the students face several challenges and difficulties in different courses. One of the major difficulties that secondary students, following the lebanese curriculum face is the "unification" of the first secondary year (called "Seconde" in french). This was done following a reform of the lebanese educational system, forcing all students reaching this level to take the same courses, independetly of their level in each course and their target graduation specialiasation. 
Due to this fact, students in this level face a major jump in the difficulty of the courses. In classes like Mathmatics and Sciences, this is also coupled with a lot of new concepts introduced for the first time.
This is already difficult for lebanese students and almost impossible to refugees! When refugees in Lebanon go to lebanese schools, they are not offered with the alternative to follow the curriculum in their country of origin, but have to follow the lebanese one. Due to the difficulties mentioned above, most of them are not able to keep up and drop out. 

We will consider in our case the notion of trigonometry taught in secondary schools. This topic is very difficult for students to grasp and to relate to. As teachers of such a topic and based on experience with our students, the best way to overcome this difficulty for students lagging behind in this topic is a personalised dialog with each one, with a series of Q&A, until the student reaches an acceptable understanding level allowing further investigation on their own. This work requires a huge amount of time, at least 1-2 hours by student outside normal class hours, which is not possible in standard schools and even almost impossible for refugees attending shools in Lebanon.
We want our chatbot to be able to engage in such a discussion. Prensenting this solution to all students, allowing them to autonomously learn on their own and making this available to all with no discrimination.*

### How will the chatbot solve it? 

*The chatbot will be able to engage in the discussion with the students. It will be able to master this discussion based on the feed of Entities and Intents that we will be able to provide based on experience and then we will be able to finetune and enrich based on a testing and training period. 
The discussion will be divided in phases:
1- start by a handshake with the student to get the name, possible background and link this to an existing account or create a new one for the student. The account would store informatin of history of problems faced and in a later phase, store some specific chatting fingerprint for this user (phrases they like to repeat, phrases they didn't like)
2- By a series of previously fed questions, identify the level of understanding of the student on the different aspects of the topic. These aspects or sub-topics are organized in a mind map, and the mind map will be surfed by the chatbot's engine to define the understanding level of the student
3- At this stage, propose to the student a specially designed series of explanations, drawings, videos, ineractive exercises. At the same time, cut in between the explanations asking the student if the area of the topic is now clear and proposing exercises to confirm this understanding.
4- A closure with the student providing positive feedback and encouragements and inviting to engage again, giving some insight of the topics that come after the discussed one in the curriculum*

### Who is the primary user and how will the chatbot engage the user?

*The target users are specificaly students in the first secondary year, or any student learning trigonometry for the frist time and reaching out for help to understand it.*

### What activity does the chatbot facilitate that would not otherwise be possible? 

*The chatbot will allow helping all the students that are learning trigonometry in the classroom (other topics later on) and having difficulties, to have their concerns answered and to reach a good understanding of the topic with 0 extra cost on the teachers and no need for special tutoring, saving time and money for all. This help will come in 2 ways, answering questions AND asking understanding questions.*

### What challenges do you expect to encounter?

*We divided challenges in several layers, some we will try to solve to now, some will require more investment to solved later:
= immidiate challenges: 
Be able to build a good base of intents in a short time, that can be adapted to french. 
    Mitigation: 
        + we will ask some of our current students to test it. 
        + We want to add a failover system that redirects the messages that are not understood by the chatbot to a human to answer and to enrich the chatbot library
Also build the trgonometry mind map and provide the learning materials in a short time
    Mitigation:
        + build a subset of the mindmap and provide the corresponding materials, respond as "Under development" to other areas
= Long term challenges: In order to be able to serve better the refugees, this chatbot needs to support conversations in Arabic and also be able to understand questions that could have multiple languages, and latin-arabic (writing in arabic using latin letters and numbers) which is a common practice in Lebanon. Also, this chatbot should at some point be able to understand voice and support Whatsapp*
