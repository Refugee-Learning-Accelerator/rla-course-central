# Challenge 1 Final Project

## Description

Our chatbot "Men7a", asks the student questions about his education level, study field, the languages he knows through a conversation on Facebook messanger, and then it searches in a scholarships database for the best matches to save time and effort for the student.
In the near future the chatbot will be able to provide the student with details about the scholarship he chose e.g: deadline, application URL,...

please see the screenshots in challenge1 folder

## Questions

### How did you build it (platform and technology)?

1)- We used Chatfuel with plugins (e.g: "Set up user attribute", "JSON API") for the user interface, since it supports Arabic.
2)- We used Facebook messenger platform webhooks on glitch.com, for the backend (processing user inputs and getting scholarships data).

### What challenges did you face?

Some limitations of buttons in Chatfuel (e.g: we can't add more than 3 buttons at once). Futhermore, the buttons can't save user inputs, otherwise "quick replies" should be used, but after googling for sometime we decided to use "Set up user attribute" plugin as a workaround.

### What aspect of the chatbot do you like best? 

We like that the student will feel like talking to somebody who cares about his interests, and future.

### What would you different in the future? 

We would provide assistance during the application process (e.g: guiding the student to write his resume and motivation letter).
And we would like to make the conversation more natural using AI.

### Are there any parts of your code you'd like to highlight?

Yes, the Scholarships array in app.js(in challenge1 folder), which contains the search results in Json format, after filtering the database using the user inputs.