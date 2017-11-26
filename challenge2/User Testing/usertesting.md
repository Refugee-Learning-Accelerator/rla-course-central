# Test it with users - Due: Sun Nov/26 (midnight Amman)

## Tasks:

* Identify a group of potential users (fall back: ask your friends and family)
* Have them use the prototype and collect as much feedback as possible
* Describe how you would change the prototype based on the feedback (you don't have to make a new version of the prototype!)

## Questions to Answer

1. How did you select your test users?

    We do not have access to teachers that teach at refugees' schools. So we aimed at teachers of a various backgrounds, locations, and ones who have different set of tools to use in the classroom. Some of these teachers taught in the states, others in Dubai, and in local schools.

2. What was the setting of the test?

    The paper UI we had before was developed on [Axure](https://www.axure.com/) and we shared it using [Axure Share](https://share.axure.com/)
    You can check it yourself here
    * https://ghwxyk.axshare.compass
    * *pass:* BBBApp
    
    We sent the following [form](https://ebrahimkaram.typeform.com/to/MUcOwh) to those we couldn't reach out to. To those who had the time we took their detailed feedback through a *Messenger* or *WhatsApp* conversation.
    However the form allowed the teachers to give their feedback anonymously. They had enough time to test the UI and get comfortable with the notion of the app.
    
3. What were the main points of feedback you received (share a summary)?

    Most of the teachers were enthusiastic about the idea, liked the idea of immediate feedback during their lessons, and enjoyed the simple UI.

    However, we did get a few constructive criticisms:
    
    a. One of the teachers uses https://teacher.desmos.com/popular during his class sessions and he was hoping we could integrate some of their features into our system.
    >it's a powerful graphing tool at the up-front but the teacher-facing interface is a powerful interactive tool I've used in my classes before
    https://teacher.desmos.com/popular .It lets me see what students are saying in real time.

    b. Another crucial point, we receive that this kind of method is limited to subjects that have concrete answers. For example, if the course or session was about abstract reading or analysis, the answers would have to be an essay format and there would be no definitive right choice that would be easy for us to determine the class's performance.
    >"I’m curious to see the effectiveness of this chart in regards to essay topics or complex topics like social sciences and urban theory"

    >"The app is still diagrammatic so my worry just lies in its effective for essays, essay topics and fields of study that require critical analysis"

    c. We also received criticism about introducing the phone/tablet to the classroom would be more of a distraction then a benefit.
    >What I'm worried about is how well will the students, admins, and teachers themselves use it. My students tend to waste time and foul around every time they have a device in their hands ( iPad/ laptop/etc...)

    d. Some teacher were requesting if the app could give more insight on how the teacher proceed if the most of class answers wrong.
    >When the student chooses an incorrect answer, what is the role of the teacher in identifying the misconception behind the incorrect answer? For example, it could be a simple math error or a more conceptual misunderstanding. Is there a way to integrate more nuanced data taking into this process?

    You can see the detailed reviews in the `BBBApp-report` in **.csv** and **.xlsx** format.

    We recommend you check the **.xlsx** format [here]( https://gitlab.refugeelearning.site/rla/BeirutByByte/team-template/blob/master/challenge2/User%20Testing/BBBApp-report.xlsx)

4. What changes would make to your idea/project based on the feedback?

    a. We would probably add some interactive tutorials from desmos.com to make the app more interactive in certain subjects.
    
    When designing the app, we were thinking of a platform, rather than a tool, plugin, or content. It was beneficial to know that there are some tools and plugins that we can incorporate into our app, but that point still does not affect the logic the app is using.
    
    b. We could add an essay entry for the more subjective subjects and we would have a button on the app that the student could press to indicate he needs help. If a lot of students need help, then the teacher would re-explain it to all. If only a few students don't get it. he will be redirected to student that does know.
    
    Another suggestion to remedy this section is adding some AI that will do some analysis over the answer, getting the word choice and the sentiment of the written response and scoring the question based on that. For sure, the teacher will have all the responses recorded at her end for later assessment, but this tool will act as an initial rough grader of the answers to understand the pulse of the class.

    c. We would also have to limit the tablets/phone functionality when it isn't in `Question Mode`. The same way you feel a survey on an iPad in a restaurant you can't use anything but the app. This would require that the school use their own devices

    d. This will be targeted in the curriculum analysis phase, when each question will target a section of explained lecture and then the system will suggest to the teacher the ambiguous part of the lecture to restate or explain.

    In order to give more valued feedback. We can send back to the teacher the following features
    * Average time of the response for the class
    * How many options were selected before submitting a response
        * It indicates if the student just got it right or not. And if it was from the first attempt or after how many attempts
            * It makes no sense if they got it right after 4 attempts of a four-choice mcq! Then it is trial and error at its worst case scenario.
    * An option to go to a specific students response

    We would also like give the option where the app would recommend a seating plan for the current students so we could spread the `high ranking` students among the `lower ranking` students. That way the `higher ranking` students could easily aid those in their close proximity who need it. In addition, the `high ranking` won't get bored

5. What parts of the Human Centered Design process were new to you?

    The constant feedback from users and showing users an incomplete product. We were afraid that users wouldn't get the idea if it wasn't complete yet. So we were a bit hesitant about sharing the UI, we expected a lot more questions from the teachers but everything seemed to work out.
    
    Another part was the process of testing that was emphasized in the seminars.
        1- NOT telling the user how to use the app, let them use it and record where they are stuck
        2- Listening and learning from the user and NEVER trying to explain what we meant by a feature, just get their feedback on how did they get it, and improve.
        
        * For some, the two points mentioned above may seem trivial to follow, however, we noted that we constantly rush to explaining how to use our product or what we meant, ignoring the fact that we will NOT be there for all users to explain to them what we meant or how they should use our app!

6. What parts of the Human Centered Design process seemed most useful to you?

    The design that was centered around the User. We realized at the start that we have to put them at ease that this wasn't a tool that would be a burden, instead it was a tool to be formed by their feedback to ease their job and give them more visibility and realiability.
    
    For sure, the new learned parts mentioned above had very effective results over our testing methodology.
