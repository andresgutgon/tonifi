# Toni Figuera personal page
This is code for personal page of Toni Figuera.

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


### TODO
- [x] Boostrap GatsbyJs project and deploy to gh-page
- [x] Initial style the page with Sass and custom font
- [ ] Mobile menu
- [ ] Image Gallery for Home and Photos sections
- [ ] Upload C.V. Pdf
- [ ] Sidebar footer with Instagran Link and Download C.V.
- [ ] Data in JSON for those image galleries
- [ ] Add Markdown or Json page for C.V. HTML version
- [ ] Contact form with Google app link
- [ ] Videos section
- [ ] Send emails via [Google app script](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server)

This is the Google app URL to put on Contact form: `https://script.google.com/macros/s/AKfycbwSzORHBSE-no7C4et5Trm_64w28881aa5wH7DZ/exec`

### Issues
[pathPrefix does not work](https://github.com/gatsbyjs/gatsby/issues/2440). We need `pathPrefix` for deploying to Github pages. Let's see with custom domain if it's needed. If not need remove `cleanCache` task from package.json.
