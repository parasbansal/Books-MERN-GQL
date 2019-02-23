const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');

// Constants
const PORT = 4000;

const app = express();

mongoose.connect("mongodb://localhost:27017/books", {useNewUrlParser: true});

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(PORT, () => { console.log(`Listening to port: ${PORT}`); })