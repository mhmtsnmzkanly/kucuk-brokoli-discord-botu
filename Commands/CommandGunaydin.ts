import { Harmony } from "../Deps.ts";

const CommandGunaydin = new Harmony.CommandBuilder()
  .setName("günaydın")
  .setAlias([
    "günaydin",
    "gunaydın",
    "gunaydin",
    "gm",
    "gnyn",
    "gn",
    "güno",
    "günoş",
  ])
  .setDescription("Günaydın Mesajı")
  .onExecute((Ctx: Harmony.CommandContext) => {
    const Mesajlar = [
      `Günaydıııın💖💖🐥🥳🥳🍓😺`,
      `Günaydın💖💖🥳😽🥰🥰💖💖`,
      `Günaydıııın💖🐣`,
      `Günaydın🥲🍷`,
      `Günaydıın🤧🍫🍬🍰🧁🍭🍪🍩`,
      `Günaydııııın😻❤😘`,
      `Günaydın😋🍑`,
      `Günaydıııın😇🕌🧿`,
      `Günaydın😎📿`,
      `https://tenor.com/view/cat-peek-a-boo-kitty-white-cat-cute-cat-gif-16415828`,
    ];
    const SecilenMesaj = Mesajlar[Math.floor(Math.random() * Mesajlar.length)];
    Ctx.message.reply(SecilenMesaj);
  });

export { CommandGunaydin };
