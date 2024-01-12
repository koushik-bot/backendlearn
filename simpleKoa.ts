import koa from "koa";
import Router from "koa-router";

const app = new koa();
const router = new Router();

app.use((ctx, next) => {
  ctx.response.body = "koa server";
  next();
});

router.get("/a", (ctx) => {
  ctx.response.body = "a url has been invoked from koa server";
});

app.use(router.routes());

app.listen(3005, () => {
  console.log("app is listening on server port 3005");
});
