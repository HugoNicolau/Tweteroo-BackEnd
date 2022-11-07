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
        username: "bobesponja",
      tweet: "eu amo o hub"
    }
]

app.post("/sing-up", (req, res) => {
    const {username, avatar} = req.body

    if(!username || !avatar){
        res.status(400).send("Preencha todos os campos")
        return;
    }
    const user = req.body
    users.push(user)
    res.status(200).send("OK");


})































app.listen(5000, ()=> {
    console.log("Running http://localhost:5000")
})