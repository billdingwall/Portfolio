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
        name: 'William Dingwall | Designer + Developer',
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
        sortBy: 'date:desc'
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
        experience: 'partials/experience-item',
        portfolio: 'partials/portfolio-item',
        referral: 'partials/referral-item',
        gallery: 'partials/gallery-item',
        profilepic: 'partials/profile-pic',
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
    .use(
      watch({
        paths: {
          "${source}/**/*": true,
          "src/scss/**/*": "**/*",
          "src/layouts/**/*": "**/*",
          "src/img/**/*": "**/*",
          "src/js/**/*": "**/*",
          "src/posts/**/*": "**/*"
        },
        livereload: true,
      })
    )
    .use(serve({
      port: 8081,
      verbose: true
    }))
    .build(function(err, files) {
      if (err) throw err;
      else console.log('Success!! Start building!');
    });
