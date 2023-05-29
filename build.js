// Metalsmith

var Metalsmith = require('metalsmith'),
    assets = require('metalsmith-assets'),
    sass = require('metalsmith-sass'),
    markdown = require('metalsmith-markdown'),
    collections = require('metalsmith-collections'),
    permalinks = require('metalsmith-permalinks'),
    layouts = require('metalsmith-layouts'),
    watch = require('metalsmith-watch'),
    serve = require('metalsmith-serve');

Metalsmith(__dirname)
    .metadata({
      site: {
        name: 'William Dingwall | Product designer | Identity Design',
        description: "I build stuff"
      }
    })
    .source('./src')
    .use(markdown())
    .use(collections({
      pages: {
        pattern: '*.md'
      },
      posts: {
        pattern: 'src/posts/**/*.md',
        sortBy: 'date',
        reverse: true
      }
    }))
    .use(permalinks({
      relative: false,
      pattern: ':collections/:title'
    }))
    .use(layouts({
      engine: 'handlebars',
      directory: './src/layouts',
      default: 'article.html',
      pattern: ["*/*/*html","*/*html","*html"],
      partials: {
        experience: 'partials/experience',
        feature: 'partials/feature',
        footer: 'partials/footer',
        header: 'partials/header',
        headerHead: 'partials/header-head',
        headerNav: 'partials/header-navigation',
        iconBehance: 'partials/icon-behance',
        iconDownload: 'partials/icon-download',
        iconGithub: 'partials/icon-github',
        iconLinkedin: 'partials/icon-linkedin',
        iconPinterest: 'partials/icon-pinterest',
        iconMedium: 'partials/icon-medium',
        logo: 'partials/logo',
        photoswipe: 'partials/photoswipe'
      }
    }))
    .use(assets({
      source: './src',
      destination: './'
    }))
    .use(sass({
      outputDir: 'css/'
    }))
    .destination('./build')
    .build(function(err, files) {
      if (err) throw err;
      else console.log('Success!! Portfolio Built');
    });
