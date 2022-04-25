import { createServer } from 'http';
import { MongoClient } from 'mongodb';

const dbURL = 'mongodb://localhost:27017';
const dbName = 'mean';

const dbConnect = async () => {
    const dbClient = new MongoClient(dbURL);
    await dbClient.connect();
    const db = dbClient.db(dbName);
    // await db.collection('test').insertMany([
    //     { name: 'ahmed', age: 20 },
    //     { name: 'mahmoud', age: 25 },
    // ]);
    console.log(await db.databaseName);
};

dbConnect();

const server = createServer(({ url }, res) => {
    res.end('server => url => ' + url);
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
