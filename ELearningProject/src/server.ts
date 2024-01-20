import App from "@/app";
import UserRoute from "@routes/user.route";
import IndexRoute from "@routes/index.route";

const app = new App([new IndexRoute(), new UserRoute()]);

app.listen();
