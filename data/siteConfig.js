const name = 'Toni'
const surname = 'Figuera'
const fullName = `${name} ${surname}`
const today = new Date();
const year = today.getFullYear();
module.exports = {
  name,
  surname,
  siteTitle: fullName,
  copyright: `© ${year} ${fullName}`,
  pathPrefix: '/tonifi'
}
