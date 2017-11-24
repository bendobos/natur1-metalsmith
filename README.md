# Natur1 Metalsmith
> A website based on [Metalsmith](http://www.metalsmith.io/) which fetches content from [Contentful](http://contentful.io) and is easily deployable on [Netlify](http://netlify.com).

## Contentful
Content is delivered via Contentful. The API-key and space id must be set in `index.js`.

## Plugins
The website relies on several plugins:
### [contentful-metalsmith](https://github.com/contentful/contentful-metalsmith)
The official Metalsmith-plugin to consume the API.
### [metalsmith-data-markdown](https://github.com/majodev/metalsmith-data-markdown)
Used to render markdown coming from Contentful. All tags where markdown should be rendered needs to have the `data-markdown` attribute like so:
```
  <div class="content-div" data-markdown>...</div>
```
### [metalsmith-inline-svg](https://github.com/meatysolutions/metalsmith-inline-svg)
All SVGs inside an `<img>` tag with the class `inline-svg` will get inlined automatically. Note that inlined SVGs won't be cached so it is wise to only use when the SVG is not used on multiple pages.
### metalsmith-if
Used to only use the watcher when `NODE_ENV` is other than `production`

## Icons
A special set of [Fontawesome](http://fontawesome.io/) is used. It was generated using [Fontello](http://fontello.com/) and needs to be updated every time a new icon is needed.

Icons currently used:
- `icon-phone` - `\e800`
- `icon-mail` - `\e801`
- `icon-clock` - `\e802`
- `icon-ok-circled` - `\e803`
- `icon-paper-plane-empty` - `\f1d9`
- `icon-map-pin` - `\f276`
- `icon-menu` - `\f0c9`
- `icon-cancel` - ``

JSON-config for Fontello:
```
{
  "name": "fontawesome",
  "css_prefix_text": "icon-",
  "css_use_suffix": false,
  "hinting": true,
  "units_per_em": 1000,
  "ascent": 850,
  "glyphs": [
    {
      "uid": "9f7e588c66cfd6891f6f507cf6f6596b",
      "css": "phone",
      "code": 59392,
      "src": "fontawesome"
    },
    {
      "uid": "bf882b30900da12fca090d9796bc3030",
      "css": "mail",
      "code": 59393,
      "src": "fontawesome"
    },
    {
      "uid": "598a5f2bcf3521d1615de8e1881ccd17",
      "css": "clock",
      "code": 59394,
      "src": "fontawesome"
    },
    {
      "uid": "43ab845088317bd348dee1d975700c48",
      "css": "ok-circled",
      "code": 59395,
      "src": "fontawesome"
    },
    {
      "uid": "4b2321afcbe0505a70b80abd5c25e09b",
      "css": "paper-plane-empty",
      "code": 61913,
      "src": "fontawesome"
    },
    {
      "uid": "8b4584b43f9858f2d38b3741ecdfe15c",
      "css": "map-pin",
      "code": 62070,
      "src": "fontawesome"
    },
    {
      "uid": "559647a6f430b3aeadbecd67194451dd",
      "css": "menu",
      "code": 61641,
      "src": "fontawesome"
    },
    {
      "uid": "5211af474d3a9848f67f945e2ccaf143",
      "css": "cancel",
      "code": 59396,
      "src": "fontawesome"
    }
  ]
}
```

To use an icon:
```
<i class="icon icon-phone"></i>
```

## Building
A build can be triggered by running `NODE_ENV=production node index.js`. The `NODE_ENV` flag can be omitted if it is set as an environment variable.

## Deployment
This repository can be linked with Netlify. The `NODE_ENV` can be set as an environment variable in the Netlify settings. The build command is `node index.js`.
