# Toni Figuera personal page
This is code for personal page of Toni Figuera.

## Node
`v8.11.0`

### Development
```sh
cd project-folder
npm run start
```

### Deploy
```sh
cd project-folder
npm run deploy
```

### Generate CV
CV now are some JSONs with info from places entities and the cv. There is an script to put all toguether and generate a new JSON file with the result.

You can debug the script with `--inspect-brk`. It will open a Chrome Dev tools panel and you can iterate on the code.
```
node --inspect-brk scripts/cv/generate.js
```
You have to go to `chrome://inspect` in your Chrome browser to start debugging

### TODO
- [x] Boostrap GatsbyJs project and deploy to gh-page
- [x] Initial style the page with Sass and custom font
- [x] Data in JSON for image galleries
- [x] Image Gallery layout 1 and 2 cols
- [x] Image Gallery modal view image
- [x] Proccess CV JSON on gatsby-node.js to put categories and places
- [x] C.V. HTML version
- [x] Generate PDF from JSON with [pdfmake](http://pdfmake.org)
- [x] Sidebar footer with Instagran Link and Download C.V.
- [x] Mobile menu
- [x] SEO with React Helmet
- [ ] Contact form with Google app link and Formik
- [ ] Send emails via [Google app script](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server)
- [ ] Videos section

This is the Google app URL to put on Contact form: `https://script.google.com/macros/s/AKfycbwSzORHBSE-no7C4et5Trm_64w28881aa5wH7DZ/exec`

### Issues
[pathPrefix does not work](https://github.com/gatsbyjs/gatsby/issues/2440). We need `pathPrefix` for deploying to Github pages. Let's see with custom domain if it's needed. If not need remove `cleanCache` task from package.json.


### SEO
https://reactgo.com/gatsbyblog/seogatsby/
