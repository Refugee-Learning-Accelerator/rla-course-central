# Challenge 1 Final Project

## Description

### Commands for our chatbot
There are a few  main commands for our Chabot
* `\help` gives a list of all the commands the Chabot understands and a short description of each
* `\hint` gives a hint to the question being displayed to the user
* `\set_nickname` allows the user to set his nickname. He would type `\set_nickname bob`
* `\join_group` allows the user to join an already existing study group. He would type for example \join_group ABC
* `\create_group` allows the user to create a group. He would type `\create_group ABC`
* `\show_group_members` would show the current group members in the group

All of these can be viewed instantly by pressing the `\` button on the telegram app when talking with our Chabot.

### Chatbot Scenario

Each individual logs into their own phone. They go to `telegram` and start a conversation with `@BeirutByByte_bot`. The Bot would ask the user to set a username using `\set_nickname`. Then the user would decide if he wants to `\join_group` or `\create_group`. Whenever he joins a group all users would get a message from the bot of the new users in the group

Then when all users are ready, the app would begin sending sample SAT vocab questions. Each question has inline keyboard Keys that represent a letter in the multiple choice. He would click the letter and the Chabot would present the next question to all the members.

You can see how the question looks when asked [here](https://gitlab.refugeelearning.site/rla/BeirutByByte/team-template/blob/master/challenge1/Project/Visual%20Aid/Screenshots/Sample%20Question.jpg)


### Other Info
Platform: Telegram

Chatbot Username: @BeirutByByte_bot

Chatbot Name: Beirut By Byte

Description: Helps you and your friends to better tackle the SATS


Check the screenshots [here](https://gitlab.refugeelearning.site/rla/BeirutByByte/team-template/tree/master/challenge1/Project/Visual%20Aid/Screenshots)

If you would like to see the repository for the code please check it on:
https://gitlab.refugeelearning.site/rla/BeirutByByte/BBBChat


## Questions

### How did you build it (platform and technology)?

We are using [python 2.7](https://www.python.org/download/releases/2.7/) and the [telegram api](https://core.telegram.org/bots/api) to build our bot. The database is controlled via [Django](https://www.djangoproject.com/).

### What challenges did you face?

* Familiarizing with the Api and the documentation for the Chabot was a lot of grunt work.
* Time was not really on our side since most of the members had prior engagements before hand during this week

### What aspect of the chatbot do you like best?

* I liked that if you can get over the API documentation, you can have full fledged app running and going into the platform without the need of doing your own UI or app.
* Telegram was very nice in terms of you just need to do HTTP requests which means we had the liberty of doing the code in whichever language and web framework we wanted.


### What would you different in the future?

* We would have wanted this to be Bluetooth based instead of Wi-Fi so that users would be forced to sit in close proximity to each other. The messages would be via Wi-Fi and the database would be reserved locally on each phone instead of on a server.
* We didn't have time to fully integrate Arabic translation of words into the Chabot
* The code runs locally on our PCs hopefully in the future it would be up on a server where it would be constantly running 24/7


### Are there any parts of your code you'd like to highlight?

*
