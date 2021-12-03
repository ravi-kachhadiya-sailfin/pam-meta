const express = require('express');
const request = require('request')
const path = require('path');
const fs = require("fs");
// require('dotenv').config();
const { DEPLOY_ENV } = require('../public/env');
// const { getPostById } = require('./stub/posts');
const app = express();

const PORT = process.env.PORT || 3001;
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

// here we serve the index.html page
app.get('/*', (req, res, next) => {

  const validPath = [
    "tool-details",
    "fillbucket",
    "probsolve",
    "flexiblethinking",
  ]

  const path = req.originalUrl.split('/')[1];
  const toolId = req.originalUrl.split('/')[2];

  console.log("DEPLOY_ENV", DEPLOY_ENV);

  // const DEPLOY_ENV = "dev";
  // console.log("env:", process.env);

  var baseURL = `https://pam-api-${DEPLOY_ENV}.med.stanford.edu/api/v1`;

  console.log(path, toolId, req.originalUrl, validPath.includes(path))
  console.log(validPath.includes(path) && toolId && toolId.length === 36);
  if (validPath.includes(path)) {
    console.log(req.originalUrl.split('/')[1]);
    if (toolId && toolId.length === 36) {
      let options = {
        url: baseURL + "/tool/details?toolId=" + toolId,
        method: "GET"
      }

      request(options, (err, data) => {
        if (err) {
          return res.send(err);
        } else {
          if (data && data.body) {
            console.log(JSON.parse(data.body))
            const meta = JSON.parse(data.body).data.tool;

            console.log("meta:", meta)

            fs.readFile(indexPath, 'utf8', (err, htmlData) => {
              if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
              }
              // get post info
              // const postId = req.query.id;
              // const post = getPostById(postId);
              // if (!post) return res.status(404).send("Post not found");

              // inject meta tags
              htmlData = htmlData.replace(
                "<title>Pause A Moment</title>",
                `<title>${meta.title}</title>`
              )
                // .replace('__META_URL__', meta.url)
                .replace('__META_TITLE__', meta.title)
                .replace('__META_DESCRIPTION__', meta.summary)

                // .replace('__META_OG_URL__', meta.url)
                .replace('__META_OG_TITLE__', meta.title)
                .replace('__META_OG_DESCRIPTION__', meta.summary)
                .replace('__META_OG_IMAGE__', meta.thumbnailImage)

                // .replace('__META_OG_URL__', meta.url)
                .replace('__META_TWITTER_TITLE__', meta.title)
                .replace('__META_TWITTER_DESCRIPTION__', meta.summary)
                .replace('__META_TWITTER_IMAGE__', meta.thumbnailImage)

              return res.send(htmlData);
            });
          }
        }
      })
    }

  } else {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('Error during file reading', err);
        return res.status(404).end()
      }
      // get post info
      const meta = {
        title: "Pause A Moment",
        description: "The COVID-19 pandemic has taken a toll. Pause a moment to focus on your well-being.",
      }

      // inject meta tags
      htmlData = htmlData.replace(
        "<title>Pause A Moment</title>",
        `<title>${meta.title}</title>`
      )
        // .replace('__META_URL__', meta.url)
        .replace('__META_TITLE__', meta.title)
        .replace('__META_DESCRIPTION__', meta.description)

        // .replace('__META_OG_URL__', meta.url)
        .replace('__META_OG_TITLE__', meta.title)
        .replace('__META_OG_DESCRIPTION__', meta.description)
        // .replace('__META_OG_IMAGE__', meta.thumbnail)

        // .replace('__META_OG_URL__', meta.url)
        .replace('__META_OG_TITLE__', meta.title)
        .replace('__META_OG_DESCRIPTION__', meta.description)
      // .replace('__META_OG_IMAGE__', meta.thumbnail)

      return res.send(htmlData);
    });
  }
});

// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log("listening on " + PORT + "...");
});