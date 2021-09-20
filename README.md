# Küçük Brokoli (Discord Botu) - Türkçe:
[Deno](https://deno.land/), [Typescript](https://www.typescriptlang.org/) ve [Harmony (v2.1.3)](https://github.com/harmonyland/harmony) kullanılarak oluşturulmuş basit bir discord botu.
Merakım üzerine oluşturduğum ve sonra fazla uğraşmadığım bir bot.

## Kurulum:
- Ana dizinde ki **.env** dosyasını açtıktan sonra "BOT_TOKEN" kısmının karşısına kendi discord botunuza ait **Token**i girin.
- Çalıştırmak için:
  - Windows için **.run.bat** dosyasını çalıştırabilirsiniz.
  - Diğer sistemler için **"deno run --allow-all index.ts"** komutun çalıştırabilirsiniz.
    - **--allow-all** kullanmak istemiyorsanız **--allow-net**'te kullanabilirsiniz.

## Dosyalar:
- **.run.bat** Projeyi çalıştırmak için kullanılır.
- **.fmt.bat** Projede ki kodları formatlamak için kullanılır.
- **.env** Ayar dosyasıdır.
- **Config.ts** Ayar dosyasından verileri alıp, değişkene yansıtan kod dosyasıdır.
- **Deps.ts** Projede ki tüm kütüphanelerin bulunduğu kod dosyasıdır.
- **Commands/List.ts** Projede ki tüm komutların kayıt edildiği kod parçasıdır.
- **Commands/x.ts** Harmony için temel komut dosyası.
- **Commands/y.ts** Harmony için prototip temelli (zincirleme) komut dosyası.
- **Commands/x.ts** Harmony için gelişmiş komut dosyası.

## Görseller:
![Komut Ekranı](https://i.hizliresim.com/nm7ueq3.PNG)
![Selamlama](https://i.hizliresim.com/lvd1b7e.PNG)
![Günaydın](https://i.hizliresim.com/sa51m7z.PNG)
![Kötüyüm](https://i.hizliresim.com/hw8k4gj.PNG)

## Destek olmak için:
- Destek olmak için __kendi yazdığınız kodları__ benimle paylaşabilirsiniz.
- Komutlarınızı benimle paylaşabilirsiniz.
