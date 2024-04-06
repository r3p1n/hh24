import { Pool } from "pg";

let conn: any;

if (!conn) {
  conn = new Pool({connectionString: process.env.PGSQL});
}

export default conn;