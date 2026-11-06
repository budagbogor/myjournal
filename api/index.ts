import app, { initNeonDb } from "../server.ts";

let isDbInit = false;

export default async function handler(req: any, res: any) {
  if (!isDbInit) {
    try {
      await initNeonDb();
      isDbInit = true;
    } catch (e) {
      console.warn("Neon DB init in serverless warning:", e);
    }
  }

  return app(req, res);
}
