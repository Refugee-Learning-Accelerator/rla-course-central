# Getting started developing chatbots 

## Menu
* [Chatbots challenge overview](https://gitlab.refugeelearning.site/rla/Workspace/edit/master/challenge1/README.md)
* [Mattermost channel](https://mattermost.refugeelearning.site/rla/channels/challenge-1) for questions and comments

## What is a chatbot? 

"A chatbot is a service, powered by rules and sometimes artificial intelligence, that you interact with via a chat interface. The service could be any number of things, ranging from functional to fun, and it could live in any major chat product (Facebook Messenger, Slack, Telegram, Text Messages, etc.)."

For a brief nontechnical introduction to chatbots, how they work, their uses and a brief visualization, here is an [article by Chatbot Magazine](https://chatbotsmagazine.com/the-complete-beginner-s-guide-to-chatbots-8280b7b906ca). 

## Pick a platform

Consider the questions you answered in your concept sketch deliverable! Depending on the type of chatbot you plan to build, some platforms may be more suitable than others. 

We list a few platform choices with pros and cons below. Consider what features they offer, and how hard it will be for you to get started. Fortunately, there are a number of platforms that handle some of the lower-level groundwork. Most of the work you will be doing is customizing rules and bot responses in line with your project. Here are some questions to think about when choosing a platform:
* How much experience developing chatbots does my team have? 
* Is the platform flexible enough for the type of chatbot (the rules and responses) we plan to develop? 

As usual, feel free to post on [Mattermost](https://mattermost.refugeelearning.site/rla/channels/challenge-1) if you have any questions or comments! 

# Three platform options

While Whatsapp is undoubtedly the more popular messaging service amongst refugee populations, it does not currently have a public API (although we are expecting [something to be released](https://techcrunch.com/2017/09/05/whatsapp-business-app/) by the end of the year). As a result, we would suggest building for Facebook Messenger or Telegram, for now. 

## 1. Facebook Messenger (recommended!)
If you don’t have much experience with chatbot development, Facebook has a [helpful tutorial](	https://developers.facebook.com/docs/messenger-platform/getting-started
) with step-by-step instructions on how to build a bot using the Facebook Messenger platform. If you follow the “Getting Started” page process, you will have your first chatbot in **less than 30 minutes**!

For more guidance, this [series of Youtube videos](https://www.youtube.com/watch?v=J6NEj0aPkLs&list=PLYxzS__5yYQmKiSXXFxrgQ6_Ox0lHvExH) offers step-by-step instructions on developing a Facebook Messenger Chatbot.

After developing your first chatbot, you can [read more](	https://developers.facebook.com/docs/messenger-platform
) on how to utilize this platform for further extensions on the other pages such as on webhooks, personalizing your chatbot (ID & Profile), and more.  

Different platforms can be used to develop bots on Messenger specifically. Think of platforms as having done all the heavy lifting on the code: hooking to the API etc. You only need add a few specifications. Here are a few platforms to consider: 
[Bostify](https://botsify.com/)
[Chatsify](https://chatfuel.com/)
[Converse AI](http://www.converse.ai/#)

## 2. Telegram (for intermediate chatbot developers)

If you have more experience with chatbots, you can try build a bot on Telegram application using their platform. They are all free of charge and also have a documented tutorial on how to get started by getting their API and example code to start off with. They are very “developer-friendly”;  you can also easily find their documents on the explanations of the different methods used on the API.
[Overall Documentation](https://core.telegram.org/api#telegram-api)
[Example source codes](https://telegram.org/apps#source-code)
[Documentation on methods](https://core.telegram.org/methods)

If you want to first learn how Telegram actually works before developing an application, you can very easily create a Telegram bot using an application called [BotFather](https://core.telegram.org/bots#6-botfather). This will help you get an idea of how Telegram bots work. 

## 3. WhatsApp (only for advanced developers, not recommended!)

WhatsApp, unlike Facebook Messenger and Telegram, [doesn’t offer a public API](https://www.quora.com/WhatsApp-Why-doesnt-WhatsApp-have-an-API
) for developers.

There are documentations by WhatsApp allowing integration of WhatsApp into both [iPhone](https://faq.whatsapp.com/en/iphone/23559013) and [Android](https://faq.whatsapp.com/en/android/28000012) applications, but these are extremely limited.

WhatsApp has changed its Terms of Services that indicates that they will soon support bots, as mentioned above with them starting with the verified businesses. As noted in [this Quora discussion](https://www.quora.com/Has-anyone-made-a-chatbot-for-WhatsApp), there are ways you can get around in developing using the WhatsApp platform.
	
This is another [blog post](http://xameeramir.github.io/Whatsapp-Bot-Implementation-Technical-Feasibility-Study/) that shows how users online have use unofficial API to build a chatbot with WhatsApp. Since this is not an official use allowed by WhatsApp, there is a risk of your account being shut down. There has been github repositories that were forcibly shut down due to legal conditions, so it would be at your own risk to use the unofficial WhatsApp API to build your chatbot. 
