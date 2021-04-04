global.client = client;

client.config = {

    token: "ODI3MTU4NTE4MjYzNzA5NzA2.YGW9Zg.nquN0mKq34MDcITAyEU6DZTvRTA", //Bot Token
  prefix : ".", //Bot Prefix
    guildid: "826918931921895495", //Sunucu ID
    sahip: "284389455606054912", //Sahip ID
  footer : "METE <3 İLAYDA", //Bot Bio
  status : "dnd", //online //çevrim içi || idle // boşta || dnd //rahatsız etmeeyin || invisible /görünmez
    botses: "827144744421425193", //Botun gireceği ses kanal id si  

    owner: "402887168827326474", //Sunucu Genel Kurucusu
    cezapuan: "810204808325496872", //Ceza Puan Log Kanalı
    booster: "809777947015249960", //Booster Rol


  taglar : {
      tag: "Rivá", //Tag 1
    TagVarYok : true, //False ise sadece tagı alır kayıtlarda eğer true ise 2. tagı aktif eder tag rolü olmayana tag2 verir
      tag2: "•", //Tag 2
      tagrol: "809763324643770428", //Tag Rolü
  },

  SadeceTaglı : false, //False ise herkes kullana bilir //True ise sadece taglı ve booster kullana bilir

  chatmute : {
      yetkili: "826918932324679788", //Chat Mute Yetkili
      log: "809763729901223976", //Chat Mute
      rol: "826918932324679781", //Chat Mute Rolü
  },
  
  voicemute : { 
      yetkili: "826918932324679787", //Voice Mute Yetkili
      log: "810205432329011221", //Voice Mute
      rol: "826918932324679785", //Voice Mute Rolü
  },

  meeting : {
      log: "827132150939385887", //Meeting Ses Kanalı
  },

  jail : {
      yetkili: "826918932333985842", //Jail Yetkili
      rol: "826918932316815428", //Jailli Rol
      log: "826918934820290595", //Jail Log
      şüpheli: "826918932324679782",
  },

  ban : {
      forceban: "826918932333985843", //Force Ban Yetkili
      banyetkili: "826918932384317454", //Normal Ban Yetkilisi
      log: "826918934820290594", //Logu
    banlimit : 3, //Ban Limitin Kaç olacağını yazınız Örnek (3 : yetkili 3 kere ban attıktan sonra yetkisini çeker)
  },

  allmute : {
      yetkili: "826918932384317454", //All Mute Yetkili
  },

  karaliste : {
      yetkili: "826918932384317454", //Kara Liste Yetkili 
      log: "826918934820290595", //Kara liste Log
  },
  cezabilgi : {
      yetkili: "826918932384317454", //Ceza Bilgi Yetkili
  },
  
  yetkilisay : {
      yetkili: "826918932384317454", //Komutu Kullanacak Yetkili
      altyetkili: "826918932355088390", //En Alt Yetkili
  },

  kilit : {
      yetkili: "826918932384317454", //Kanal Kilit Yetkili
  },

  guildMemberAdd : {
      guvenli: "827154784448413728", //7 Gün Önce Açılmış Hesap Log
      forceban: "826918934820290594", //Kalıcı Ban log (Kalıcı ban yemiş üyenin banı açılmıştır ve sunucuya tekrar girese ban atar bunu logu)
      jail: "826918934820290595", //Jailli üye çık gir yaparsa
  },

  trasport: {
      yetkili: "826918932324679789", //Çek Yetkili
  },

  register : {
      erkek: ["826918932333985847", "826918932333985847"], //Erkek Rollerini Sırayla Giriniz
      kız: ["826918932333985848","827151073960656916"], //Kız Rollerini Tek Tek Giriniz
      kayıtsız: "826918932324679783", //Kayıtsız Rol ID
      yetkili: "826918932355088390", //Register Yetkili
  },

  emoji : {

      sıfır: "<a:0_:27153143241375765>", //0 Emoji Örnek : <a:sıfır:1234567891011>
      bir: "<a:1_:827153186804203521>", //1 Emoji Örnek : <a:bir:1234567891011>
      iki: "<a:2_:827153213165142016>", //2 Emoji Örnek : <a:iki:1234567891011>
      üç: "<a:3_:827153224514535434>", //3 Emoji Örnek : <a:üç:1234567891011> 
      dört: "<a:4_:827153235943882793>", //4 Emoji Örnek : <a:dört:1234567891011>
      beş: "<a:5_:827153248548290561>" , //5 Emoji Örnek : <a:beş:1234567891011>
      altı: "<a:6_:827153261018087465>", //6 Emoji Örnek : <a:altı:1234567891011>
      yedi: "<a:7_:827153271511973889>", //7 Emoji Örnek : <a:yedi:1234567891011>
      sekiz: "<a:8_:827153282215837697>", //8 Emoji Örnek : <a:sekiz:1234567891011>
      dokuz: "<a:9_:827153293608353823>", //9 Emoji Örnek : <a:dokuz:1234567891011>

    onay : "✅", //Onay Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
    red : "❌", //Red Emoji ID Sayı Olarak Örnek : onay : "1123023109213",
  },

}
