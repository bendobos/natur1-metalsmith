# Natur1 Metalsmith
> A website based on [Metalsmith](http://www.metalsmith.io/) which fetches content from [Contentful](http://contentful.io) and is easily deployable on [Netlify](http://netlify.com).

## Contentful
Content is delivered via Contentful. The API-key and space id must be set in `index.js`.

## Plugins
The website relies on several plugins:
### [contentful-metalsmith](https://github.com/contentful/contentful-metalsmith)
The official Metalsmith-plugin to consume the API.
### [metalsmith-data-markdown](https://github.com/majodev/metalsmith-data-markdown)
Used to render markdown coming from Contentful. All tags where markdown should be rendered need to have the `data-markdown` attribute.
### [metalsmith-inline-svg](https://github.com/meatysolutions/metalsmith-inline-svg)
All SVGs inside an `<img>` tag with the class `inline-svg` will get inlined automatically. Note that inlined SVGs won't be cached so it is wise to only use when the SVG is not used on multiple pages.
### metalsmith-if
Used to only use the watcher when `NODE_ENV` is other than `production`

## Icons
A special set of (Fontawesome)[http://fontawesome.io/] is used. It was generated using (Fontello)[http://fontello.com/] and needs to be updated every time a new icon is needed.

## Building
A build can be triggered by running `NODE_ENV=production node index.js`. The `NODE_ENV` flag can be omitted if it is set as an environment variable.

## Deployment
This repository can be linked with Netlify. The `NODE_ENV` can be set as an environment variable in the Netlify settings. The build command is `node index.js`.