import "dotenv/config"

import e from "express";
import user_router from "./http/routes/user-route.js";
const app = e();


app.use(e.json());
app.use("/user", user_router);

app.listen(API_PORT, () => {
  console.log("Aplicação rodando");
});