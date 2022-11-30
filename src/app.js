//Dependencies
const express = require('express')
const db = require('./utils/database')
const UsersRouter = require('./users/users.router')


//Initial config
const port =  process.env.PORT || 9000
const app = express()
app.use(express.json())

//To know if credentials are ok
db.authenticate()
            .then(()=> console.log('Database credentials are ok'))
            .catch((err)=> console.log(err))
//synchronization whith database

db.sync()
    .then(()=> console.log('Database correct sync'))
    .catch((err) => console.log(err) )


app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
})

app.use('/api/v1/', UsersRouter)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
