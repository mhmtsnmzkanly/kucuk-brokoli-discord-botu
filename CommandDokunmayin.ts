import { Harmony } from "../Deps.ts";

const CommandDokunmayin = new Harmony.CommandBuilder()
  .setName("dokunmayın")
  .setAlias(["kötüyüm", "çok fenayım", "dokunmayın bana"])
  .setDescription("İyi değilseniz size bir parça çalalım...")
  .onExecute((Ctx: Harmony.CommandContext) => {
    Ctx.message.reply(`Dokunmayın çok fenayım...
https://www.youtube.com/watch?v=7WC4rh3flII`);
  });

export { CommandDokunmayin };
