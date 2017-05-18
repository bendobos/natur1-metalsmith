var Metalsmith   = require('metalsmith');
var markdown     = require('metalsmith-markdown');
var layouts      = require('metalsmith-layouts');
var contentful   = require('contentful-metalsmith');
var permalinks   = require('metalsmith-permalinks');
var sass         = require('metalsmith-sass');
var assets       = require('metalsmith-assets');
var msIf         = require('metalsmith-if');
var watch        = require('metalsmith-watch');
var watcher      = false;
var datamarkdown = require('metalsmith-data-markdown');

if (process.env.NODE_ENV !== 'production') {
  var watcher = true
}

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
  .use(markdown())
  .use(permalinks())
  .build(function(err, files) {
    if (err) { throw err; } else { console.log("Build successful") }
  });
