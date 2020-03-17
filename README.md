# gatsby-covid-19-template

Gatsby [Contentful](https://www.contentful.com) starter for creating a website for covid-19 information 

[Image goes here]

If you have information to share during the Covid-19 pandemic, we’re here to help. This solution enables organizations to quickly and easily publish a website. We hope to help communities stay better informed and connected in the midst of closures and quarantine.

## Contribution

This project is part of [contentful-userland](https://github.com/contentful-userland). We’re always open to contributions — **you can be part of userland and contribute to the project after your first merged pull request**. Learn more about how contentful userland is organized by visiting [our repository](https://github.com/contentful-userland/about).

## Requirements

You must have a Contentful account to use this project. If you don’t have an account yet, you can register for one at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install).

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful/covid-19-site-template.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new covid-19-site-template https://github.com/contentful/covid-19-site-template

```

### Set up of the needed content model and create a configuration file

```
npm i -g contentful-cli
```

```
contentful login
```

```sh
contentful space import --space-id=<space-id> --content-file ./contentful/export.json
```

```
yarn setup
```

![Command line dialog of the yarn run setup command](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/setup.jpg "Command line dialog of the yarn run setup command")

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API. It then imports the content model into the space you define and writes a config file (`.env`).

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are those to develop and ship code. You can find the most important commands below.

### `yarn develop`

Run in the project locally.

### `yarn build`

Run a production build into `./public`. The result is ready to be put on the static hosting you prefer.

## Roadmap

- [ ] Add Search

## Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
