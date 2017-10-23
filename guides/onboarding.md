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
4. Go [here](https://gitlab.refugeelearning.site/rla/ideate-central). In the top navigation bar, click `Branches`, then `Merge Request`.
5. Set `Assignee` to be ``@vahidfazelrezai`.
6. Click `Submit merge request`.
7. Go [here](https://mattermost.refugeelearning.site) and click GitLab.
8. Join the RLA team.
9. Introduce yourself in the General channel!


### Editing `participants.json`
This file will be how we maintain a record of all participants and teams. It must follow a very specific format.

If you are the primary contact for your team, choose a name for your team, and add yourself as follows:
1. Add a comma after the last `}`.
2. Starting on the next line after the comma, add the following text (you'll have to enter your own team name, name, and GitLab username):

```
{
  "teamName": "team name",
  "members": [
    {
      "name": "person A name",
      "username": "person A username"
    }
  ]
}
```

If you are not the primary contact for your team, you just need to add yourself as a member. 
1. Find your team entry. Add a comma after the last `}` in your team's members.
2. Starting on the next line after the comma, add your entry. For example, if you were to add to the team above, it would look like:

```
{
  "teamName": "team name",
  "members": [
    {
      "name": "person A name",
      "username": "person A username"
    },
    {
      "name": "person B name",
      "username": "person B username"
    }
  ]
}
```

