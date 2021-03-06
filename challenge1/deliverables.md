# Chatbots Challenge - Deliverables 

## Menu
* [Chatbots challenge overview](https://gitlab.refugeelearning.site/rla-staging/Workspace/blob/master/challenge1/README.md)
* [Mattermost channel](https://mattermost.refugeelearning.site/rla/channels/challenge-1) for questions and comments

## The Chatbot Challenge has **two deliverables** 

### Concept Sketch - Due: Sun Nov/5 (midnight Amman)

Describe your concept for a chatbot in one or two paragraphs. Use visuals (mockups, diagrams) if possible. It is important to be as specific as possible while mapping out the scope of the project as this will greatly influence implementation and the tools to use. 

Answer the following questions:
- What problem/ challenge will the chatbot solve? 
- How will the chatbot solve it? 
- Who is the primary user and how will the chatbot engage the user?
- What activity does the chatbot facilitate that would not otherwise be possible? 
- What challenges do you expect to encounter? 

**Step 1: Download the concept sketch instructions and templates**

Note: All of the following steps must be completed at least once per team (if all of your team members use git, you will want to replicate them on each team member’s computer). This week you need to use git in the terminal (Command Prompt application on Windows, Terminal application on Mac); ask for help on [Mattermost](https://mattermost.refugeelearning.site/rla/channels/help) if you run into trouble.

1. Download (pull) the instructions and templates from the updated `team-template` project. On the command line, run the following commands:  
  (a) If you've already cloned `team-template` on your hard-drive, you can just navigate to the folder.  
  (b) If not, go to the folder where you want to store the project files on your hard-drive, and run `git clone https://gitlab.refugeelearning.site/rla/[TEAM NAME]/team-template; cd team-template;` # replace the expession in `[]` and remove the `[]`
2. Run: `git remote add upstream https://gitlab.refugeelearning.site/rla/team-template; git fetch upstream;` # This points to our central project folder
3. Run: `git checkout master; git pull origin master;` # Downloading files into the project folder on your hard-drive
4. Run: `git rebase upstream/master;` 
5. Run: `git push origin master;` # Updating your project folder on GitLab

**Step 2: Work on your concept and prepare it for submission**

1. In your `team-template` folder you will find a new folder called `challenge1`. It contains two files ending in .md (markdown). Each contains a number of sections and questions for you to complete. 
2. Complete `concept.md` (We will work on `project.md` during the second week). Feel free to also add other files in your folder. We strongly encourage the use of visuals (screenshots, mockups, drawings)
3. Make sure you commit and push your work by **Sunday midnight (Amman time)**. At that point, the work in your team's workspace will be **automatically** copied into the central course project (thanks to a nifty little script that @vahidfazelrezai wrote). Run: `git push origin master;` 

### Final Project - Due: Sun Nov/12 (midnight Amman)
Demonstrate how your chatbot works. Videos, screenshots or images are encouraged. 

Add a short description and answer the following questions: 
- How did you build it? (Platform and technology)
- What challenges did you face?
- What aspect of the chatbot do you like best? 
- What would you different in the future? 
- Please also add a link to your code!

