const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;

//midlleware ====
app.use(cors());
app.use(express.json());




//====================================///

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wce8t4u.mongodb.net/?retryWrites=true&w=majorit`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(client);

async function run(){
    try{
        await client.connect();
        const decisionCollection = client.db('allBehaviours').collection('decision');
        const thinkingCollection = client.db('allBehaviours').collection('thinking');
        const influencingCollection = client.db('allBehaviours').collection('influencing');
        const conflictCollection = client.db('allBehaviours').collection('conflict');
        const drivingCollection = client.db('allBehaviours').collection('driving');

       
    }
    finally{
        
    }

}

run().catch(console.dir);
//========================



app.get('/',(req,res)=>{
    res.send('john is running and waiting for you')
})


app.listen(port,()=>{
    console.log('john is running in runnig ',port);
})

