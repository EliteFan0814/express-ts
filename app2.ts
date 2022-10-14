import express from "express";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.use(express.raw());
app.use(express.static(path.join(__dirname, "public")));

app.locals.title = "我的测试express";

app.get("/userInfo", (request, respond) => {
  respond.send("123");
  // respond.send({ name: "返校超", age: 18 });
});
// app.use((request, respond, next) => {
//   console.log(request.url);
//   console.log(request.body);
//   respond.send("hi");
//   next();
// });

app.listen(3000, () => {
  console.log(`正在监听：http://localhost:3000`);
});
