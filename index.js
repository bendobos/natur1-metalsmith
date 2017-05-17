var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

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
  .use(require('contentful-metalsmith')({
    'access_token': '48f2dd2572a725053eaa6e8455a6be9fa0c49b3fdb54beabbb515dfafe70a764',
    'space_id': 'uyzbu4k0mvui'
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .build(function(err, files) {
    if (err) { throw err; } else { console.log("Build successful") }
  });
