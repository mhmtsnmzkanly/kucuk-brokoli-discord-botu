import "https://deno.land/x/dotenv@v0.4.1/load.ts";

const Bot = {
  Name: String(Deno.env.get("BOT_NAME")),
  ProfilePhoto: String(Deno.env.get("BOT_PP")),
  Prefix: String(Deno.env.get("BOT_PREFIX")),
  Token: String(Deno.env.get("BOT_TOKEN")),
};
export { Bot };
