import * as dotenv from "dotenv";
import koa from "koa";
import { Pool } from "pg";

const app = new koa();
dotenv.config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(async (ctx) => {
  try {
    await pool.connect();
    const queryResult = await pool.query("select * from hotel");
    ctx.response.body = queryResult.rows;
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log("listening on port 3005");
});
