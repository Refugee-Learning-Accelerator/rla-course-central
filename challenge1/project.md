# Challenge 1 Final Project

*Reference: International Baccalaureate "Meeting Student Learning Diversity in The Classroom"*

## Description

*Our Chatbot aims to tackle problems with learning disabilities among students at refugee camps. With education, people expect chatbots to be used by students for facilitate the learning. However, students are not expected to notice their own abnormalities in their learning progress. Therefore, the primary users of our chatbot shall be parents and/or teachers. When users notice abnormal behavior from their students, they can use the chatbot to communicate their observation. The chatbots job is to detect the problem by matching the users’ observation, and symptoms from learning disabilities that are stored (or pulled from) specific databases. The Chatbot is certainly not a doctor’s substitute, which does not give it the right to inform the users of the possible disabilities from which the students are facing. This is a critical issue because a faulty diagnosis by the chatbot could trigger anxiety among users, or even lead to the wrong action plan with the student that could damage their learning progress significantly. Therefore, the chatbot contacts the centers or NGO’s that deal with the possible learning disabilities detected, and let the users know how to deal with the students until the respective centers contact the user for a professional opinion. For demonstration, kindly refer to the Video attached.*
=======

## Questions

### How did you build it (platform and technology)?

=======

*The platform we used was Chatfuel, which operates on Facebook Messenger. The chatbot allows user to type their answers rather than creating a “multiple choice environment” which makes it closer to a real life interaction. The chatbot is based on the flow chart we included in the concept. Using user input, we allow the user to store the gender and age in separate attributes. The chatbot also asks for the child’s current school name and saves it in another attribute in order for the center in charge to contact the school if necessary. Then we allow the user to speak freely about the student. Since this is a proof of concept, the chatbot only serves 3 learning disabilities: Dyslexia, ADD/ADHD, and Autism in addition to a section that aims at giving the user general advice/activities that could help the child depending on the answers of the user on a specific set of questions. The databases of each disability are stored in separate groups in the “Set UP AI” option. The databases in this chatbot are keywords (added by Brain Tank members based on our basic research) that users may include describing their students’ learning behavior. The description by the user is stored in another attribute. If the user input matches keywords in the AI, a possible disability is detected and stored, but not shared with the user (refer to the last question). After that, the student’s gender, age, behavior and possible learning disability are sent by email to the centers specialized in the learning disabilities respectively.*

### What challenges did you face?

*Chatfuel is very powerful tool for Chatbot beginners and even for people who have little to know background in programming. The fact that our team has good experience in coding, we found Chatfuel to be a bit limited when it comes to programming freedom. Without storing variables, conditional statements, and some flexibility to connect the user interface with other programs (Unity3D, MATLAB, Visual Studio…), we found it a bit challenging to cope with the interface that Chatfuel provided. However, it is worth noting that Chatfuel is very easy to use, given that our task is a proof of concept. But we doubt that we can use this platform if our Chatbot becomes an official interface that connects vulnerable communities and centers for learning disabilities.*
=======

### What aspect of the chatbot do you like best? 

*All our team members have backgrounds in Engineering. Learning disabilities is something we see around us, but we never researched before. There are types of disabilities we were never aware of in the past, and all of a sudden we found ourselves reading more about these disabilities and remembering real life examples of the symptoms we read. Discalculia, a general term for dyslexia that is used to describe a specific learning difficulty in mathematics, is the most shocking to us. We also enjoyed appreciating how much we take logical sequences for granted: We had to teach the chatbot how to carry a conversation about a specific topic from scratch. This, surprisingly, gave us some sense of what challenges teachers face when they deal with autistic, dyslexic, hyperactive students who, in fact, suffer from maintaining a logical flow in conversations. It is fascinating how we can deal with a computer as a student with learning disabilities!*

### What would you different in the future? 

=======
*To begin with, we would definitely use a more advanced platform to include more options for users. The main difference, however, would be interviewing several organizations in Jordan that work closely with refugees. This is a crucial step to make sure that the databases of chatbot’s AI are as comprehensive as possible. After consulting professional centers and organizations, we would spend some quality time with refugees (possibly a month or two) to understand their colloquial patterns which would make the input easier for the AI response. After that, we would have wandered through the streets of the camp, allowing random people to use it, so we can collect and fix the flaws in the AI.*
=======

### Are there any parts of your code you'd like to highlight?

*Technological Enthusiasm is an ethical issue that many companies have suffered from for many years. It is define as the strong enthusiasm for a new technology that reaches the level of apathy to the social aspect of the product. That being said, one might think that our chatbot, if professionally designed, would have the potential to replace learning disability specialists and doctors. However, when dealing with vulnerable communities, there is little to no tolerance for mistakes given that students face multiple traumas and circumstances that may hinder a smooth learning process. In other words, students face unique situations that need meticulous analysis and evaluation by professionals. Taking the aforementioned into consideration, when the chatbot receives feedback from the user, the possible learning disability detected is solely shared with the professional centers, and not with the user. When a center receives the feedback and believe that this case belongs to another center with another specialty, they would immediately forward the case to them. Users will only receive a precautionary advice on how to deal with the student in the coming days until the professional consult contacts them.*
