import { Harmony } from "../Deps.ts";

const CommandSelamlama = new Harmony.CommandBuilder()
  .setName("selam")
  .setAlias(["sa", "slm", "selamlar"])
  .setDescription("Brokoli'yi Selamla!")
  .onExecute((Ctx: Harmony.CommandContext) => {
    const Mesajlar = [
      `Selaaam 🥳🥳🥳`,
      `Slm`,
      `Selam`,
      `Selam babe`,
      `Aleyküm selam yiğidim...`,
      `Selam bro`,
      //``,
    ];
    const SecilenMesaj = Mesajlar[Math.floor(Math.random() * Mesajlar.length)];
    Ctx.message.reply(SecilenMesaj);
  });

export { CommandSelamlama };
