const nextConnect = require('next-connect')

const handler = nextConnect()

handler
.get(async (req, res) => {
    fetch({ method: 'get', url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imprakashraghu'})
    .then(result => result.json())
    .then(html => {
            res.send(html)
    }).catch(error => {
        console.log(error);
    })
})

export default handler