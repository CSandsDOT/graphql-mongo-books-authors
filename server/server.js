const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

async function startServer(){
    const app = express()

    const apolloServer = new ApolloServer({ typeDefs, resolvers })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

     await mongoose.connect('mongodb://localhost:27017/library',{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log("mongoose connected.")

    // default route
    app.use((req, res) => { res.send("Hello from apollo server.")})

    const PORT = 4000
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}
startServer()