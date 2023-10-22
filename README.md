# Toni Figuera personal page

This is code for personal page of Toni Figuera.

## Node

`v16.13.2`

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

### Sent emails

Is managed by an Excel called: `Toni Figuera Contact form`
Tutorial on how works [Google app script](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server) for sending emails

### Issues

[pathPrefix does not work](https://github.com/gatsbyjs/gatsby/issues/2440). We need `pathPrefix` for deploying to Github pages. Let's see with custom domain if it's needed. If not need remove `cleanCache` task from package.json.

### SEO

https://reactgo.com/gatsbyblog/seogatsby/
