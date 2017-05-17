var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var watch       = require('metalsmith-watch');

Metalsmith(__dirname)
  .use(watch(
    watch({
      paths: {
        "${source}/**/*": true,
        "layouts/**/*": "**/*"
      },
      livereload: true
    })
  ))
  .metadata({
    title: "Natur1 Naturheilzentrum",
    description: "Das Naturheilzentrum im Herzen Düsseldorfs",
    generator: "Metalsmith",
    url: "http://www.natureins.de"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(markdown())
  .use(require('contentful-metalsmith')({
    'access_token': '48f2dd2572a725053eaa6e8455a6be9fa0c49b3fdb54beabbb515dfafe70a764',
    'space_id': 'uyzbu4k0mvui'
  }))
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
