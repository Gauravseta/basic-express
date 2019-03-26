const express = require('express')
const app = express()
const args = process.argv;
const port = args[2];
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.argv[2], () => console.log(`Example app listening on port ${port}!`))