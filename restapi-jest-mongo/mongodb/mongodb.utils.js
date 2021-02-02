const mongoose = require('mongoose');

const URL = `mongodb+srv://${login}:${pw}@cluster0.l6tbh.mongodb.net/${db}?retryWrites=true&w=majority`;


const connect = async () => {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        // .then((result) => app.listen(3000))
        .catch((err) => console.log(err));
}

const disconnect = async () => {
    await mongoose.disconnect()
        // .then((result) => app.listen(3000))
        .catch((err) => console.log(err));
}

const dropCollection = async (collectionName) => {
    await mongoose.connection.collection.apply(collectionName).drop()
        .catch((err) => {
            if (err.code === 26) {
                console.log('namespace %s not found', collectionName);
            } else throw new Error(err)
        })
}