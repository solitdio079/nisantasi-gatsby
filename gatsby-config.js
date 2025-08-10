/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Nişantaşı Avukatlık`,
    description: `İstanbul Nişantaşı'nda uzman avukatlık hizmetleri: aile, ceza, iş hukuku ve daha fazlası.`,
    image: `/app-img.png`,
    siteUrl: `https://nisantasiavukatlik.com/`,
  },
  plugins: [
    "gatsby-plugin-sitemap"
  ],
}
