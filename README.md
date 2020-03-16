# gatsby-contentful-starter

Gatsby [Contentful](https://www.contentful.com) starter for creating a covid-19 info website

TODO: change this
![The index page of the starter blog](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/screenshot.jpg "The index page of the starter blog")

Static sites are scalable, secure and have very little required maintenance. They come with a drawback though. Not everybody feels good editing files, building a project and uploading it somewhere. This is where Contentful comes into play.

With Contentful and Gatsby you can connect your favorite static site generator with an API that provides an easy to use interface for people writing content and automate the publishing using services like [Travis CI](https://travis-ci.org/) or [Netlify](https://www.netlify.com/).

## Contribution

This project is part of [contentful-userland](https://github.com/contentful-userland) which means that we’re always open to contributions **and you can be part of userland and shape the project yourself after your first merged pull request**. You can learn more about how contentful userland is organized by visiting [our about repository](https://github.com/contentful-userland/about).

## Requirements

To use this project you have to have a Contentful account. If you don't have one yet you can register at [www.contentful.com/sign-up](https://www.contentful.com/sign-up/).

## Getting started

Install [Yarn](https://yarnpkg.com/en/docs/install) (if you haven't already).

### Get the source code and install dependencies.

```
$ git clone git@github.com:contentful/covid-19-site-template.git
$ yarn install
```

Or use the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

```
$ gatsby new covid-19-site-template
 https://github.com/contentful/covid-19-site-template

```

### Set up of the needed content model and create a configuration file

This project comes with a Contentful setup command `yarn setup`.

![Command line dialog of the yarn run setup command](https://rawgit.com/contentful-userland/gatsby-contentful-starter/master/setup.jpg "Command line dialog of the yarn run setup command")

This command will ask you for a space ID, and access tokens for the Contentful Management and Delivery API and then import the needed content model into the space you define and write a config file (`./contentful.json`).

`yarn run setup` automates that for you but if you want to do it yourself rename `.contentful.json.sample` to `.contentful.json` and add your configuration in this file.

## Crucial Commands

This project comes with a few handy commands for linting and code fixing. The most important ones are the ones to develop and ship code. You can find the most important commands below.

### `yarn develop`

Run in the project locally.

### `yarn build`

Run a production build into `./public`. The result is ready to be put on any static hosting you prefer.

## Roadmap

- [] Add Search

## Other resources

- Tutorial video series ["Building a blazing fast website with GatsbyJS and Contentful"](https://www.youtube.com/watch?v=Ek4o40w1tH4&list=PL8KiuH6vpACV-F7jXribe4YveGBhBeG9A) by @Khaledgarbaya
