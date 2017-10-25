# Register your team

## Important

* Make sure you have completed [Getting started with GitLab and Mattermost](onboarding.md)!
* Only **one member of each team** needs to do this (check with your teammates)!
* As always, post in the Mattermost [Help Channel](https://mattermost.refugeelearning.site/rla/channels/help) if you get stuck!
* You can find all [week 0 instructions here](https://gitlab.refugeelearning.site/rla/course-central/blob/master/week0/README.md)


## Step 1 - Register your team

*If you are the designated person registering your team*, work with your team to choose a team name (you may not change this later, so pick wisely!), and add your team to `participants.json`. There are two options for how to do this--you may pick whichever you prefer below.

#### Option 1: Using the GitLab web interface

1. Go to the [here](https://gitlab.refugeelearning.site/rla/course-central) page.
2. Under the project navigation bar, click the `+` button and choose `New branch` from the dropdown.
3. Write `register-yourusername` (replacing `yourusername` with your actual GitLab username) for your branch name.
4. Click `participants.json` to open the file.
5. Click `Edit` in the top right and make your edits as described below.
6. Once you're done, press the `Commit changes` button at the bottom.
7. Navigate back to [course-central](https://gitlab.refugeelearning.site/rla/course-central). In the project navigation bar, click `Branches`, then find your branch and click `Merge Request`.
8. Set `Assignee` to be `@vahidfazelrezai`.
9. Click `Submit merge request`. An instructor will review and merge your request. Once it is merged, you will be added to a subgroup for your team.
10. Make sure you create your team fork using the instructions below.

#### Option 2: Using git on the command line

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
5. Make sure you create your team fork using the instructions below.

#### How to edit the `participants.json` file

The participants.json file contains a record of all participants and teams. It uses a specific format. Please read the following carefully. 

1. Each team has a teamName followed by a number of team members.
2. Each team gets their own block.
3. When adding a new team, you have to add a `,` after the closing `}` for the previous team.
4. Starting on the next line after the comma, add a new block for your team (including your team name, your name, and your GitLab username):
5. You do NOT need to add all of the other team members in your team. They will be asked to add themselves.

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

## Step 2 - Create a team workspace

Once you've added your team in `participants.json`, we will automatically create a subgroup under the RLA group just for your team. You can use this sub-group to create a team work space. The work space is a fork of the [team-template project](https://gitlab.refugeelearning.site/rla/team-template). You will commit all your work for the design challenges through this repository. You will also be able to receive materials for the new challenges by pulling from the upstream fork (more about that soon).

To get started, you need to fork the `team-template` project into your subgroup:
1. Go to the [team-template project](https://gitlab.refugeelearning.site/rla/team-template).
2. Click `Fork` under the project name.
3. Choose `RLA/[your team name]` as your fork destination. It will take a few moments to finish.

**That's it. Well done! Make sure you let your team members know that they can go ahead and register themselves now.**


