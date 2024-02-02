import App from "@/app";
import UserRoute from "@routes/user.route";
import IndexRoute from "@routes/index.route";
import UserController from "@controllers/user.controller";
import IndexController from "./controllers/index.controller";

const app = new App([
  new IndexRoute(IndexController),
  new UserRoute(UserController),
]);

app.listen();
