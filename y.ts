import { Harmony } from "../Deps.ts";

const y = new Harmony.CommandBuilder()
  .setName("y")
  .setAlias("cmd-y")
  .setDescription("y command")
  .onExecute((Ctx: Harmony.CommandContext) => {
    Ctx.message.reply(`y command`);
  });

export { y };
