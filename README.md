# Slackbot
Build a Slackbot on top of Hubot

### Dependencies

**[Slack bot user](https://api.slack.com/bot-users):** You have probably seen automated "bots" on platforms like Twitter. Essentially, a bot is a script that is programmed to interact with users as if it's a person. In Slack, these are called "bot users," or "bots" for short. Slackbot is a bot user that is built into Slack, and you've probably heard from it when you joined. In this lab, we'll begin creating our own bots for use in the class Slack.

**[Hubot](https://hubot.github.com/):** `Hubot` is a framework built by GitHub to speed up the process of developing bot users on a variety of chat platforms, including Slack. It's built using `Node.js` and `CoffeeScript` (see below), and it includes built-in functionality for performing common bot tasks, *e.g.* replying to users. We'll be using `Hubot` to create our bot users.

**[CoffeeScript](http://coffeescript.org/):** `CoffeeScript` is a variant of JavaScript. Some people claim that `CoffeeScript` makes JavaScript more readable and faster to type. `CoffeeScript` has to go through an extra step to be translated into JavaScript so that it can be run in our browsers and `Node.js` since both environments only understand normal JavaScript.

`Hubot` scripts are often written using `CoffeeScript`; you don't need to know how to write `CoffeeScript` for this lab, but be aware that it will come up in `Hubot` examples and documentation. If you encounter a `CoffeeScript` file, *e.g.* the `example.coffee` file included with `Hubot`, and want to clarify what it's doing, **you can use the `CoffeeScript` converter on [CoffeeScript's website](http://coffeescript.org/) to translate it into JavaScript**.

**[Heroku](https://www.heroku.com/):** Heroku is a platform for hosting and running apps in the cloud. We refer to it to as a Platform-as-a-Service, or PaaS. We'll use Heroku to host the code for our bot, so the bot can be run independently of our machines. Otherwise, we would need to have our machines constantly connected to the internet and have `Hubot` running for our bot to function. Luckily for us, Heroku's free tier will suffice for this project. We'll be using `git` to push our app to Heroku.

**[Yeoman](https://yeoman.io):** Yeoman is a set of tools which provide scaffolding for getting web apps up and running quickly. We'll be using a Yeoman tool called `yo`, which takes care of things like dependencies, build tasks, and configurations, so we don’t have to.

### Installation and Configuration

In order to get our bots up and running, we need to perform a number of installations.

---

First, you'll need to [sign up for a free Heroku account](http://heroku.com). Next, [download the Heroku toolbelt](https://toolbelt.heroku.com/). This set of tools allows us to talk to Heroku's servers using the command line.

**Install Hubot and its dependencies***:

```bash
sudo npm install -g hubot coffee-script yo generator-hubot
```

Note that you will be prompted to type in the password for your laptop. Depending on how your laptop is configured, you may not need `sudo`, but you most likely will.

__*__ `CoffeeScript`, `yo`, and the `Hubot` generator

**Generate a Hubot bot using `yo`:**

```bash
yo hubot --adapter="slack"
```

**You will be prompted to answer a few questions regarding your bot:**

 * Owner: `type in your full name`
 * Bot Name: `whatever you like`
 * Description: `hit enter`

**Install hubot-slack dependency:**

```bash
sudo npm install hubot-slack --save
```

The `--save` flag will save the dependency to your `package.json` file. It's used by `npm` to determine which modules you'll need.

---

### Testing Your Hubot Locally

We can run `Hubot` locally on our machines, and then deploy to `Heroku`, or some other service.


```
HUBOT_SLACK_TOKEN=[your Slack API token] ./bin/hubot --adapter slack
```

Hit `ctrl-c` to exit the process. **You'll need to restart the local bot whenever you make a change to a script that you want to test.**

---
