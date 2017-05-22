const Handlebars   = require('handlebars');
const Swag         = require('swag');
const Metalsmith   = require('metalsmith');
const datamarkdown = require('metalsmith-data-markdown');
const layouts      = require('metalsmith-layouts');
const contentful   = require('contentful-metalsmith');
const permalinks   = require('metalsmith-permalinks');
const sass         = require('metalsmith-sass');
const assets       = require('metalsmith-assets');
const msIf         = require('metalsmith-if');
const watch        = require('metalsmith-watch');
const subsetfonts  = require('metalsmith-subsetfonts');
const inlineSVG    = require('metalsmith-inline-svg');
let watcher        = false;

if (process.env.NODE_ENV !== 'production') {
  watcher = true
}

Swag.registerHelpers(Handlebars);

Metalsmith(__dirname)
  .metadata({
    title: "Natur1 Naturheilzentrum",
    description: "Das Naturheilzentrum im Herzen Düsseldorfs",
    generator: "Metalsmith",
    url: "http://www.natureins.de"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(msIf(
    watcher,
    watch({
      paths: {
        "${source}/**/*": true,
        "layouts/**/*": "**/*.md",
        "partials/**/*": "**/*.md"
      }
    })
  ))
  .use(contentful({
    'access_token': '48f2dd2572a725053eaa6e8455a6be9fa0c49b3fdb54beabbb515dfafe70a764',
    'space_id': 'uyzbu4k0mvui'
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .use(assets({
    source: './assets',
    destination: './assets'
  }))
  .use(sass({
    outputDir: 'css/',
    sourceMap: true,
    sourceMapContents: true,
    outputStyle: 'compressed'
  }))
  .use(datamarkdown({
    removeAttributeAfterwards: true,
    marked: {
      gfm: false
    }
  }))
  .use(inlineSVG({
    selector: 'img.inline-svg'
  }))
  .use(subsetfonts())
  .use(permalinks())
  .build(function(err, files) {
    if (err) { throw err; } else { console.log("Build successful") }
  });
