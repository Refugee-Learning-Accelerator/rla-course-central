# Getting started with GitLab and Mattermost

Follow these steps to set up your GitLab and Mattermost accounts. We will be using GitLab to host all our code and instructions. We will be using Mattermost as our chat platform.
1. Go [here](https://gitlab.refugeelearning.site) and register a new account.
2. Click `Groups`, then `Explore public groups`, then `RLA`, then `Request Access`.
3. Run the following in command line (replace `yourusername` with your actual username):
  - `git clone https://gitlab.refugeelearning.site/rla/ideate-central`
  - `cd ideate-central`
  - `git checkout -b register-yourusername`
  - Edit `participants.json` as described below.
  - `git add participants.json`
  - `git commit -m 'Register yourusername'`
  - `git push origin register-yourusername`
4. Go [here](https://gitlab.refugeelearning.site/rla/ideate-central). In the project navigation bar, click `Branches`, then `Merge Request`.
5. Set `Assignee` to be ``@vahidfazelrezai`.
6. Click `Submit merge request`.
7. Go [here](https://mattermost.refugeelearning.site) and click GitLab.
8. Join the RLA team.
9. Introduce yourself in the General channel!


### Editing `participants.json`
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

