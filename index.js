import express, {json} from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

const users = [
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
]

const tweets = [
    {
        username: 'bobesponja',
      tweet: "eu amo o hub"
    }
]

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body

    if(!username || !avatar){
        res.status(400).send("Preencha todos os campos")
        return;
    }
    const user = req.body
    users.push(user)
    res.status(201).send("OK");
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body

    
    if(!username || !tweet){
        res.status(400).send("Tweet ou user inválido")
        return;
    }
    const tweetmessage = req.body
    tweets.push(tweetmessage);
    res.status(201).send("OK")
})

app.get("/tweets", (req, res) => {

    let len = tweets.length
    if(len>10){
        const limitTweets = []
        
        for(let i = len-1; i>=len-10;i--){
            limitTweets.push(tweets[i])
            limitTweets[limitTweets.length-1].avatar = users.find(({username}) => username === tweets[i].username).avatar
        }
        
        res.status(200).send(limitTweets)
        return;
    }
    else{
        const completeTweets = []
        for(let i=len-1; i>=0;i--){
            completeTweets.push(tweets[i])
            completeTweets[completeTweets.length-1].avatar = users.find(({username}) => username === tweets[i].username).avatar
        }
        res.status(200).send(completeTweets)
        return;
    }
})



app.listen(5000, ()=> {
    console.log("Running http://localhost:5000")
})