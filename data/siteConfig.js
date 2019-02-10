const name = 'Toni'
const surname = 'Figuera'
const secondSurname = 'Rojas'
const fullName = `${name} ${surname}`
const today = new Date();
const year = today.getFullYear();
module.exports = {
  name,
  surname,
  secondSurname,
  instagramUsername: 'tonifi',
  twitterUsername: 'tonifi',
  siteTitle: fullName,
  siteUrl: 'https://tonifiguera.com',
  copyright: `© ${year} ${fullName}`,
  pathPrefix: '/tonifi',
  fonts: 'Playfair+Display:400,700|Source+Sans+Pro:300,400,600'
}
