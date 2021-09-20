import { Harmony } from "./Deps.ts";
import * as Config from "./Config.ts";
import * as Commands from "./Commands/List.ts";

// Oluştur ve ayarla
const client = new Harmony.CommandClient({
  prefix: Config.Bot.Prefix,
  caseSensitive: false,
});

/* Commandları */
// Örnekleri Ekle
client.commands.add(Commands.x);
client.commands.add(Commands.y);
client.commands.add(Commands.z);

// Günlük Mesajlar
client.commands.add(Commands.CommandGunaydin);
client.commands.add(Commands.CommandSelamlama);
client.commands.add(Commands.CommandDokunmayin);

// Bilgilendirme & Bota bağlanma
client.on("ready", () => {
  console.log(
    `Bot Hazır ve Sistem Çalışır Durumda!\nBot: ${client.user?.tag}`,
  );
});

client.connect(Config.Bot.Token, [
  Harmony.GatewayIntents.GUILD_MESSAGES,
  Harmony.GatewayIntents.GUILDS,
  Harmony.GatewayIntents.DIRECT_MESSAGES,
]);
