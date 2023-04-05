import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

const usuario = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
	const user = req.body;
	usuario.push(user);
	res.send("OK");
});

app.get("/tweets", (req, res) => {
	const tweet = req.body;
	tweets.push(tweet);
	res.send("OK");
});

app.listen(5000);
