const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const expressPlayground = require("graphql-playground-middleware-express").default

const app = express()

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.use("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen('4000', () => {
    console.log('listening on port 4000')
})