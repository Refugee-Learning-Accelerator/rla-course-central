# Welcome

In this online course, we will use GitLab projects to store all of the course materials and the work your team is doing. If you are new to git or GitLab and some of this doesn't yet make sense, don't worry! We highly recommend working through some of the tutorials on Git and GitLab (for example [this one](https://about.gitlab.com/2016/10/25/gitlab-workflow-an-overview/)) but we will continue to give you step by step instructions, so you should be able to follow along.

# Getting started with GitLab and Mattermost

Follow these steps to set up your GitLab and Mattermost accounts. We will be using GitLab to host all our code and instructions. We will be using Mattermost as our chat platform.
1. Go [here](https://gitlab.refugeelearning.site) and register a new account. This is an instance of GitLab specifically for the accelerator, so you will need to create a new account even if you already have one on GitLab.com.
2. Go [here](https://mattermost.refugeelearning.site) and click `GitLab`.
3. Join the RLA team.
4. Introduce yourself in the General channel!
5. Go back to [GitLab](https://gitlab.refugeelearning.site). Click `Groups`, then `Explore public groups`, then `RLA`, then `Request Access`. Your request should be approved within a few seconds.
6. Now you will need to add your information in [this file](https://gitlab.refugeelearning.site/rla/course-central/blob/master/participants.json). There are two options for how to do this--you may pick whichever you prefer.

#### Option 1: Registering through web interface

1. Go to the [here](https://gitlab.refugeelearning.site/rla/course-central) page.
2. Under the project navigation bar, click the `+` button and choose `New branch` from the dropdown.
3. Write `register-yourusername` (replacing `yourusername` with your actual username) for your branch name.
4. Click `participants.json` to open the file.
5. Click `Edit` in the top right and make your edits as described below.
6. Click `Commit changes` at the bottom.
7. Navigate back to [course-central](https://gitlab.refugeelearning.site/rla/course-central). In the project navigation bar, click `Branches`, then find your branch and click `Merge Request`.
8. Set `Assignee` to be `@vahidfazelrezai`.
9. Click `Submit merge request`. An instructor will review and merge your request. Once it is merged, you will be added to a subgroup for your team.

#### Option 2: Registering with Git

1. Run the following in your command line (Terminal on Mac and Command Prompt on Windows), replacing `yourusername` with your actual username:
    - `git --version`--if this command fails, you must first [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
    - `git clone https://gitlab.refugeelearning.site/rla/course-central`
    - `cd course-central`
    - `git checkout -b register-yourusername` (for example: git checkout -b register-*vahidfazelrezai*)
    - Edit `participants.json` as described below.
    - `git add participants.json`
    - `git commit -m 'Register yourusername'`
    - `git push origin register-yourusername`
2. Go [here](https://gitlab.refugeelearning.site/rla/course-central). In the project navigation bar, click `Branches`, then find your branch and click `Merge Request`.
3. Set `Assignee` to be `@vahidfazelrezai`.
4. Click `Submit merge request`. An instructor will review and merge your request. Once it is merged, you will be added to a subgroup for your team.

## Editing `participants.json`
This file will be how we maintain a record of all participants and teams. It must follow a very specific format.

#### Adding a Team (for primary contacts)

*If you are the primary contact for your team*, choose a name for your team (you may not change this later, so pick wisely!), and add your team as follows:

1. Each team has a teamName followed by a number of team members. 
2. Each team gets their own block.
3. When adding a new team, you have to add a `,` after the closing `}` for the previous team. 
4. Starting on the next line after the comma, add the following text (you'll have to enter your own team name, your name, and your GitLab username):
5. You do NOT need to add the other team members. They will be asked to add themselves. 

```
{
  "teamName": "team name",
  "members": [
    {
      "name": "PRIMARY CONTACT NAME",
      "username": "PRIMARY CONTACT GITLAB USERNAME"
    }
  ]
},
{
  "teamName": "team 2 name",
  "members": [
    {
      "name": "PRIMARY CONTACT NAME for team 2",
      "username": "PRIMARY CONTACT GITLAB USERNAME for team 2"
    }
  ]
}
```

#### Adding yourself to an existing team (all others)

If you are *not the primary contact for your team*, you just need to add yourself as a member. 
1. Find your team entry. (If it doesn't exist yet, contact your team's primary contact). 
2. Team members need to be separated by `,`. Add a comma after the last `}` in the list of your team members. 
3. Starting on the next line after the comma, add your entry. For example, if you were to add to the team above, it would look like:

```
{
  "teamName": "team name",
  "members": [
    {
      "name": "PRIMARY CONTACT NAME",
      "username": ":PRIMARY CONTACT GITLAB USERNAME"
    },
    {
      "name": "YOUR NAME",
      "username": "YOUR GITLAB USERNAME"
    }
  ]
}
```

