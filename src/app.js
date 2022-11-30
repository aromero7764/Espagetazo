const express = require('express')
const port =  process.env.PORT || 9000

const app = express()
app.use(express.json())



app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
