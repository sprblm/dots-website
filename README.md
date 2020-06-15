# Decentral Patterns Website

This repository holds the sources for the [decentpatterns.xyz](https://decentpatterns.xyz) website. It's built using [Skeleventy](https://skeleventy.netlify.com/), a skeleton boilerplate built with Eleventy and TailwindCSS.

### Requirements

Node `>=` v8.9.0

### Installation

```
npm install
```

To start the development server (and Mix), run the `npm run dev` command in terminal. Eleventy has hot reloading baked in and will automatically watch your template files for changes. Mix will watch any changes to the JS and SCSS files.

### Folder Structure

The `site` folder contains all the templates, partials and content - which Eleventy will parse into HTML for us.

Within our `site` folder, lives a `globals` folder. Here you'll find a `site.json` file - for general config stuff e.g site name, author, email, social media links etc.

You'll also find a `navigation.json` file, which we use to loop over in our nav partial to generate our navigation. There's also a `helpers.js` file, which just contains a simple environment helper.

Uncompiled SCSS and JS reside in the `resources` folder - as mentioned above, Mix will be watching these folders for any changes (you should restart the server when creating new partials/folders).

In development mode, Skeleventy will reference `main.css` for it's stylesheet. This will be pretty chunky in filesize (around 800KB!), due to the amount of Tailwind utility classes - but don't worry, Skeleventy has you covered!

### Ready to deploy?

Type the `npm run production` command to minify scripts, styles and run Purgecss.

Purge will cross reference your templates/HTML with all those Tailwind classes and will remove any classes you haven't used - pretty cool huh?

Skeleventy will now reference `main.min.css` as the new stylesheet (annoyingly, Mix also minifies `main.css` as well - this bugs the hell out of me!).
