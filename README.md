# decentpatterns.xyz

This repository holds the sources for the [decentpatterns.xyz](https://decentpatterns.xyz) website. It's built using the static site generator Eleventy, the tailwindcss framework and Javascript.

## Installation and development

First, make sure that you have initialized and updated the `dots-patterns` submodule.

```
git submodule update --init
```

The site is developed for Node v12, you can use `nvm use` to load the specific version from `.nvmrc` or install it yourselves. Now you can pull the dependencies.

```
npm install
```

To start the development server, run the `npm start` command in terminal and open [`localhost:3000`](http://localhost:3000/). The development server is configured to automatically reload when you make changes.

We use prettier and eslint to maintain a consistent and maintainable code style. Use the npm commands `npm run lint` to validate sources and `npm run prettier` to reformat sources on disk.

## Content Updates

The bulk of the content - the pattern library - is organized in an [external repository](https://github.com/simplysecure/dots-patterns) that is included as a submodule at `/dots-patterns`. Whenever changes to that repository are made, a combination of Github Actions publishes the changes automatically. Here is how that happens:

1. Changes are pushed to `dots-patterns/master`
2. The Github action ["Update dots-website"](https://github.com/simplysecure/dots-patterns/blob/master/.github/workflows/update-website.yml) runs in `dots-patterns` and calls the Github action "Update pattern library" in `dots-website` by issuing an http request.
3. The Github action ["Update pattern library"](https://github.com/simplysecure/dots-website/blob/develop/.github/workflows/update-patterns.yml) in `dots-website` updates the `dots-patterns` submodule and makes an automatic commit to the master branch.
4. Pushing to the master branch triggers a rebuild by Netlify
5. The changes are published.

## Folder Structure

### Editing site content

The `site` folder contains all the templates, partials and content - which Eleventy will parse into HTML for us. Within our `site` folder, lives a `globals` folder. Here you'll find a `site.json` file - for general config stuff e.g site name, author, email, social media links etc. You'll also find a `navigation.json` file, which we use to loop over in our nav partial to generate our navigation. It's possible to hide navigation entries from the production deployment by setting `"draft": true` on them. There's also a `helpers.js` file, which just contains a simple environment helper.

The repository [dots-patterns](https://github.com/simplysecure/dots-patterns) contains markdown-formatted patterns that are included in the site. The repository contents are symlinked into the folders `site/library` and `site/topics`.

### Assets

Some of the assets are bundled using Webpack. This includes client-side Javascript, which you can find in the `scripts` folder and SCSS stylesheets, which are in the `styles` folder.

Other assets are copied as-is for deployment. This includes fonts in `styles/fonts`, images in `images` and downloadable files in the `public` folder.

### Tooling

The repository root contains configuration files for the various tools we use. In addition, you will find the more elaborate config for 11ty in the `11ty` folder.

## Ready to deploy?

Type the `npm run build` command to minify scripts, styles and run Purgecss.
