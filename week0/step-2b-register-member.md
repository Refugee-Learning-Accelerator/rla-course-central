# Register as a team member

## Important

* Make sure you have completed [Getting started with GitLab and Mattermost](step-1-onboarding.md)!
* Make sure your primary contact has [registered your team](step-2a-register-team.md).
* As always, post in the Mattermost [Help Channel](https://mattermost.refugeelearning.site/rla/channels/help) if you get stuck!
* You can find all [week 0 instructions here](https://gitlab.refugeelearning.site/rla/course-central/blob/master/week0/README.md)

## Joining your team

There are two options for how to do this--you may pick whichever you prefer below.

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

#### How to edit the `participants.json`

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

**That's it. Well done! Feel free to check in on Mattermost to let us know!**
