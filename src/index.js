import express, { json } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());

const users = [];
const tweets = [];
let user;

app.post("/sign-up", (req, res) => {
	user = req.body;
	users.push(user);
	res.send("OK");
});

app.post("/tweets", (req, res) => {
	const tweet = req.body;
	tweets.push(tweet);
	if (!users.includes(user)) {
		return res.status(401).send("UNAUTHORIZED");
	} else {
		res.send("OK");
	}
});

app.get("/tweets", (req, res) => {
	const lastTen = [];
	if (tweets.length > 0) {
		for (let i = tweets.length - 1; i > tweets.length - 11 && i >= 0; i--) {
			const name = tweets[i].username;
			const user = users.find((i) => i.username === name);
			const body = {
				username: name,
				avatar: user.avatar,
				tweet: tweets[i].tweet,
			};
			lastTen.push(body);
		}
	}
	res.send(lastTen);
});

app.listen(5000);
