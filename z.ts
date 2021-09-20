import { Harmony } from "../Deps.ts";

export class z extends Harmony.Command {
  name = "z"; // Komut
  aliases = "cmd-z"; // Komut
  description = "cmd-z desc"; // Komudun açıklaması
  category = "basic"; // Komudun kategorisi

  //extension = Harmony.Extension; // Komut için eklenti
  usage = "[prefix][name or aliases]"; // Komudun kullanımı
  examples = "Example usage for command"; // Örnek kullanım

  //roles = string[]; // Roller
  //permissions = string[]; // Yetkiler
  //userPermissions  = string[]; // Kullanıcı Yetkileri
  //botPermissions  = string[]; // Bot Yetkileri

  nsfw = false; // Komut +18 mi?
  ownerOnly = false; // Komut sadece bot sahibi tarafından mı kullanılabilir?
  dmOnly = false; // Komut sadece özel mesajlarda mı kullanılabilir?

  // Komut çalıştırılmadan önce
  beforeExecute(Ctx: Harmony.CommandContext) {
    Ctx.message.reply(`z command before`);

    return true; // Komut çalıştırmadan önce belirli şeyler kontrol edilebilir. bu kontrolden sonra ana komuta geçilebilir ve ya iptal olabilir.
  }

  // Komudun kendisi
  execute(Ctx: Harmony.CommandContext) {
    Ctx.message.reply(`z command`);
    //Ctx.argString; // Komuttan sonra girilen mesaj
  }

  // Komut çalıştırıldıktan sonra
  afterExecute(Ctx: Harmony.CommandContext) {
    Ctx.message.reply(`z command after`);
  }
}
