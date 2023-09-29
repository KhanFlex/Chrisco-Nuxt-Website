### About this repository

This repository contains everything needed to create, configure and update the church website at this url https://benevolent-torte-3f5e20.netlify.app  
The backend and front end of the website was developed using [Nuxt 3 Framework](https://nuxt.com/docs/getting-started/introduction)  
The website content is managed separately using [StoryBlok](https://www.storyblok.com/).  
The site is hosted on [Netlify](https://www.netlify.com/)  
The domain name is registered with [Namecheap](https://www.namecheap.com/)  

### Development environment and Project dependencies

```bash
Nuxt: Version 3
nvm: Version 0.39.3
Node.js: Version 16.20.1 - Also declared in .nvmrc
Operating System: Ubuntu 22.04.3 LTS - Might be relevant information if symlinks don't work or file paths are invalid
```

### Project Dependencies Links

1. Nuxt 3 documentation: (https://nuxt.com/docs/getting-started/introduction)  
2. Node.js: (https://nodejs.org/en/about)  
3. nvm for Linux: (https://github.com/nvm-sh/nvm)  
4. nvm for Windows: (https://github.com/coreybutler/nvm-windows)  
5. Ubuntu: (https://ubuntu.com/)  
6. StoryBlok: (https://www.storyblok.com/)  
7. Netlify: (https://www.netlify.com/)  

## Setup

Clone the repository to your local machine

```bash
git clone https://github.com/KhanFlex/Chrisco-Nuxt-Website.git && cd Chrisco-Nuxt-Website
```

Change node version to the project's node version

```bash
nvm install # install the required node version if not already installed
nvm use # run this in the root directory to switch node versions
npm install # install npm dependencies
```

## Start Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Build for Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Deploy to Netflify using Github CI (Continous Integration)

```bash
git add . # if you added new files
git commit -m "Briefly describe the new changes made here"
git push -u origin master # sync the changes with the master branch in this repository. This will also trigger a deployment on Netlify reflecting the changes you made to the repository
```

## Website Pages

1.  Home/Landing page
2.  About - Our people
3.  About - Our beliefs
4.  About - Our governance
5.  About - Our story
6.  Master calendar
7.  Events
8.  Event - Single
9.  Weekly gatherings
10. Weekly gathering - Single
11. Resources - Sermons
12. Resources - Sunday bulletins / News
13. Resources - Daily Devotions
14. Contact
15. Giving

## Global Components

1. Navigation menu
2. Side Navigation menu for mobile
3. Footer

## Home page components

1. Header section
2. Join the sunday service card
3. Our services section
4. Latest News section
5. Upcoming events section

## Website link used as a template for the user interface

[Link to website's UI template](https://startertemplatecloud.com/g12/)
