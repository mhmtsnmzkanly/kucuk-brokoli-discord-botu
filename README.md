# Küçük Brokoli (Discord Botu) - Türkçe:
[Deno](https://deno.land/), [Typescript](https://www.typescriptlang.org/) ve [Harmony (v2.1.3)](https://github.com/harmonyland/harmony) kullanılarak oluşturulmuş basit bir discord botu.
Merakım üzerine oluşturduğum ve sonra fazla uğraşmadığım bir bot.

## Kurulum:
- Ana dizinde ki **.env** dosyasını açtıktan sonra "BOT_TOKEN" kısmının karşısına kendi discord botunuza ait **Token**i girin.
- Çalıştırmak için **.run.bat** dosyasını çalıştırabilirsiniz, Linux kullanıyorsanız sadece dosya uzantısını değiştirmeniz yeterli.

## Dosyalar:
- **.env** Ayar dosyasıdır.
- **Config.ts** Ayar dosyasından verileri alıp, değişkene yansıtan kod dosyasıdır.
- **.run.bat** Projeyi çalıştırmak için kullanılır.
- **.fmt.bat** Projede ki kodları formatlamak için kullanılır.
- **Deps.ts** Projede ki tüm kütüphanelerin bulunduğu kod dosyasıdır.
- **Commands/List.ts** Projede ki tüm komutların kayıt edildiği kod parçasıdır.
- **Commands/x.ts** Harmony için temel komut dosyası.
- **Commands/y.ts** Harmony için prototip temelli (zincirleme) komut dosyası.
- **Commands/x.ts** Harmony için gelişmiş komut dosyası.