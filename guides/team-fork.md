# Setting up your team fork

In GitLab, there is an [RLA group](https://gitlab.refugeelearning.site/rla) that includes all the accelerator participants. There is also a subgroup under RLA with your team name that includes your team members.

Follow the steps below to create your team's project in your subgroup as a fork of the [team-template project](https://gitlab.refugeelearning.site/rla/team-template) project. You will commit all your work for the design challenges to this project. You will also be able to receive materials for the new challenges by pulling from the upstream fork.

1. Go to the [team-template project](https://gitlab.refugeelearning.site/rla/team-template).
2. Click `Fork` under the project name.
3. Choose `RLA/[team name]` as your fork destination. It will take a few moments to finish.
4. If you'd like, you can rename your project by clicking `Settings` in the left sidebar, then under `General project settings` you can change `Project name` and click `Save changes`.

### Adding your picture

We would like to create a roster of all accelerator participants with their names and photos. For this, you should add a photo of yourself in your team project as follows.
1. Clone your project:
  - Copy the URL of your project.
  - Go to your terminal and run `git clone [project url]` (without the `[]`).
2. Browse to the `photos` directory and add a photo of yourself. Name the file with your gitlab username, e.g. `vahidfazelrezai.jpg`.
3. Add, commit, and push your changes:
  - Go to the root directory of your project.
  - Run `git add .`.
  - Run `git commit -m 'Add picture'`.
  - Run `git push -u origin master`.
