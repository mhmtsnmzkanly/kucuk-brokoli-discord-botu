import { Harmony } from "../Deps.ts";

export class x extends Harmony.Command {
  name = "x";
  aliases = "cmd-x";

  execute(Ctx: Harmony.CommandContext) {
    Ctx.message.reply(`x command`);
  }
}
