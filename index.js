const Handlebars   = require('handlebars');
const Swag         = require('swag');
const Metalsmith   = require('metalsmith');
const datamarkdown = require('metalsmith-data-markdown');
const layouts      = require('metalsmith-layouts');
const contentful   = require('contentful-metalsmith');
const permalinks   = require('metalsmith-permalinks');
const sass         = require('metalsmith-sass');
const assets       = require('metalsmith-assets');
const subsetfonts  = require('metalsmith-subsetfonts');
const inlineSVG    = require('metalsmith-inline-svg');
const imagemin     = require('metalsmith-imagemin');

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
  .use(assets({
    source: './js',
    destination: './js'
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
  .use(imagemin({
    optimizationLevel: 3,
    svgoPlugins: [{ removeViewBox: false }]
  }))
  .use(subsetfonts())
  .use(permalinks())
  .build(function(err, files) {
    if (err) { throw err; } else { console.log("Build successful") }
  });
