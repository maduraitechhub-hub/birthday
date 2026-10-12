// ✏️ EDIT ONLY THIS FILE to personalise the whole website.
// Put your photos/GIFs/music in /public/assets/... and use paths starting with "/assets/".
// Missing files never break the site - a cute placeholder is shown instead.

const birthdayData = {
  birthdayGirlName: "Kowshalya",
  myName: "Kunju",
  coupleName: "Boo Kunju & Booboo",
  callName: "Boo Ma", // the nickname used in headings

  // Page 1 - unlock
  secretKeyword: "booboo",
  unlockHint: "It's the cute name I call you 💕",

  // Page 5 - second secret
  secretQuestion: "What is my another name? ❤️",
  secretAnswer: "dinesh",
  secretHint: "Ennoda another name 💕",

  music: "/assets/music/Neeyum-Naanum-Anbe.mp3",

  images: {
    unlock: "/assets/gifs/bubukiss.gif",
    hero: "/assets/birthday/celebration.png",
    couple: "/assets/couple/couple-main.jpeg",
  },

  // Page 3 - story timeline (image / gif optional)
  story: [
    { date: "The beginning", title: "It all started here...", description: "Un kooda start aana indha journey, en life-oda beautiful beginning.", image: "/assets/memories/memory-1.jpeg" },
    { date: "A special day", title: "Our first touching kissing bujuku bujuku", description: "The moment I knew you were the one.", image: "/assets/memories/memory-2.jpeg" },
    { date: "Kodai Kuthu", title: "A memory I'll always keep...", description: "Indha photo paakumbodhellam, unna innum konjam adhigama love panren. ❤️", image: "/assets/memories/memory-3.jpeg" },
    { date: "Our Little Moments 🛵", title: "Special moments, unforgettable memories...", description: "Place edhuva irundhaalum, nee kooda irundha adhu special dhaan. 💕", image: "/assets/memories/memory-4.jpeg" },
    { date: "My Favourite Memory 🌷", title: "One moment, a thousand feelings...", description: "Indha memories ellam en heart-la forever safe-ah irukkum. 🫂", image: "/assets/memories/memory-5.jpeg" },
    { date: "My Happiness 🥰", title: "You make everything better...", description: "Un smile-um, un presence-um dhaan enakku romba precious. ❤️‍🩹", image: "/assets/memories/memory-6.jpeg" },
    { date: "Our Forever ♾️", title: "Our story isn't over yet...", description: "Innum neraya memories create pannanum, baby. En future full-ah nee venum. I love you forever. ❤️💍", image: "/assets/memories/memory-7.jpeg" },
    { date: "Always", title: "Another memory I'll never forget", description: "And many more are coming." },
  ],

// Page 4 - memories gallery
memories: [
  {
    image: "/assets/memories/memory-1.jpeg",
    title: "Our First Memory ❤️",
    caption: "Indha moment-la irundhu dhaan nee enakku special aana."
  },
  {
    image: "/assets/memories/memory-2.jpeg",
    title: "Silly Little Us 🥹",
    caption: "Unkooda sirikkura ovvoru moment-um en favourite."
  },
  {
    image: "/assets/memories/memory-3.jpeg",
    title: "That Beautiful Evening 🌙",
    caption: "Indha moment mattum konjam neram ninnirukkalam."
  },
  {
    image: "/assets/memories/memory-4.jpeg",
    title: "Our Little Adventure 🛵",
    caption: "Destination vida, nee kooda irundha journey dhaan azhagu."
  },
  {
    image: "/assets/memories/memory-5.jpeg",
    title: "My Happy Place 🌿",
    caption: "Nee pakkathula irundha podhum, ellame beautiful dhaan."
  },
  {
    image: "/assets/memories/memory-6.jpeg",
    title: "Just You & Me 💗",
    caption: "Un smile-ku reason-ah eppovum naan irukkanum."
  },
  {
    image: "/assets/memories/memory-7.jpeg",
    title: "My Favourite Person 🫶🏻",
    caption: "Unna paakumbodhellam, yen love panren nu puriyudhu."
  },
  {
    image: "/assets/memories/memory-7.jpeg",
    title: "Us, Always ♾️",
    caption: "Innum neraya memories create pannanum, un kooda mattum."
  },
],
  // Page 6 - surprise. type: video | youtube | spotify | image | gif | audio | message
  surprise: [

    // { type: "youtube", src: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    // { type: "spotify", src: "https://open.spotify.com/track/XXXXXXXX" },
    // { type: "audio", src: "/assets/music/voice-note.mp3" },
    { type: "message", text: "You deserve all the happiness in the world 💗" },
    { type: "gif", src: "/assets/gifs/surprise-gift.png" },
    // { type: "video", src: "/assets/videos/surprise.mp4" },

  ],

reasons: [
  "Un smile paatha en world-e bright aagidum. ❤️",
  "Un cute kovam kooda enakku romba pidikkum. 🥹",
  "Un voice ketta en manasu peaceful-ah aagum. 💗",
  "Un chinna chinna habits dhaan unna innum special aakkudhu. 🫶",
  "Nee enna care panra vidham enakku romba precious. ❤️‍🩹",
  "En worst day-ah kooda nee oru smile-ah maathiduva. 🥰",
  "Namma mokka conversations kooda en favourite memories. 💕",
  "Un kooda spend panra ovvoru moment-um enakku special. 📸",
  "Nee irundha ordinary days kooda magical-ah maaridum. ✨",
  "Nee nee-ah irukkuradhukkaagave unna romba love panren, baby. Enakku eppovume nee dhaan venum. ❤️♾️",
],
  // Page 8 - letter (blank line = new paragraph)
  loveLetter: `booboo,
En chellame Booma… ❤️🥹

Indha website unakkaaga create pannumbodhu, namma rendu peroda memories ellathayum thirumbi thirumbi nenachu paathen. Appo dhaan purinjadhu, nee en life-la evlo periya part-ah irukka nu. Namma love story-a oru letter-la explain panradhu romba kashtam, booboo… aana en manasula irukkuradha unakku sollanum nu romba aasai. 💗

Namma story office-la start aachu la, baby… 🥹❤️ Appo namma rendu perum ippadi rendu varusham love pannuvom, ivlo memories create pannuvom nu nenachiruppoma? Office-la unna paakuradhu, un kooda pesuradhu, chinna chinna vishayathukku sirikkuradhu, work mudinju serndhu veliya poi cake saapidrathu, edhaavadhu saapida aasai vandha udane poi saapidrathu… idhellam appo normal moments-ah therinjirukkalam. Aana ippo andha memories-a nenacha, adhu dhaan en life-la romba precious moments nu puriyudhu. 🥹🎂💕

Namma plan panni leave potutu ooru suthunadhu, onna time spend pannadhu, evlo chinna vishayama irundhaalum adha serndhu enjoy pannadhu… ayyo booboo, namakku evlo memories irukku! 📸❤️ Andha days-ku thirumbi poganum nu sila neram romba aasaiya irukku. Andha time-la nee en pakkathula irundha, enakku vera edhuvum thevai illa. Nee irundha podhum, andha naal special aagidum. 🫂💗

Aana baby, nee office-a vittu pona appuram dhaan, unna daily paakuradhu enakku evlo mukkiyam nu innum nalla purinjadhu. 🥺 Office-la unna paaka mudiyadhu, sudden-ah un kitta poi pesa mudiyadhu, work mudinju unna paathutu pogura andha happiness-um ippo miss aagudhu. Six months-ku mela aagiyum, sila neram office days ellam nyabagam varumbodhu manasu romba heavy aagidum, booboo. Unna miss panradhu na enakku just unna paakanum ngra feeling mattum illa… namma daily share pannina andha chinna chinna moments ellathayum miss panren. ❤️‍🩹

Aana namma love inga mudinjidala, chellam. Distance vandhaalum, daily routine maarinaalum, namma rendu peroda love maarakoodadhu nu dhaan naan aasai padren. Ippo namma FaceTime calls dhaan namakku romba special-aana time. 🥹📱 Un face screen-la theriyumbodhu, naal full-ah irundha tiredness konjam konjama marandhudum. Un kural kekkuradhu, un face paakuradhu, unkooda mokka pesuradhu, sirikkuradhu… call cut panna vendiya neram vandha kooda innum konjam pesanum nu thonum. ❤️

Namma FaceTime usage paatha, namakku pesuradhukku topics illaadha naal kooda, call-la onna irukkanum ngra aasai irukku nu thonum. 😂❤️ Sila neram enna pesurom nu kooda mukkiyam illa, nee opposite-la irundha podhum. Unna paathukitte irukkanum, un kural kettukitte irukkanum, un kooda andha moment-a share pannanum… avlodhaan enakku venum, Booma. 🫶🏻💗

Enakku theriyum, namma life-la ellaa naalum easy-ah irukkaadhu. Sila neram sandaigal varalam, misunderstandings varalam, busy-a irukkalam, distance kashtama irukkalam. Aana edhu nadandhaalum, namma rendu perum orutharoda feelings-a innoruthar purinjukka try pannanum. Kovam vandhaalum pesi sari pannikanum. Ego vida namma love perusu nu eppovum nyabagam vechikkanum. Enakku perfect relationship venam, baby… nee naan rendu perum mistakes pannalum, adha correct pannitu innum strong-ah serndhu pogura relationship dhaan venum. ❤️🫂

Booma, nee en lover mattum illa… nee en favourite person, en happiness, en comfort, enakku romba close-aana oru soul. Un kooda irundha moments-a naan eppovum marakka maatten. Office-la start aana namma story, cake saapitta memories, leave pottu suthuna days, namma photos, late-a pesuna calls… idhellam en heart-la eppovum special place-la irukkum. 💌

Rendu varusham love pannirukkom, booboo… innum namma serndhu celebrate panna neraya anniversaries irukku, serndhu poganum nu neraya places irukku, saapidanum nu neraya foods irukku, create pannanum nu neraya memories irukku. 😂❤️ Oru naal indha distance ellam oru old memory-ah maaranum. Ippo FaceTime screen-la paakura unna, oru naal en pakkathula ukkaara vechuttu, namma pazhaya memories ellathayum solli sirikkanum. Andha naal varaikkum, namma love-a azhaga paathukkanum nu aasai padren. 🥹💍

I miss you more than I can explain, Booma. Unna daily paaka mudiyala ngra kurai irukku, aana unna love panradhu mattum oru naal kooda kuraiyala. Distance namma time-a change pannirukkalam, aana nee enakku evlo special ngra feeling-a change pannala. ❤️‍🩹

Indha chinna website-la namma memories ellathayum save panni vechirukken, because enakku oru vishayam unakku theriyanum… Namma spend panna ovvoru moment-um enakku worth it. Un kooda irundha andha naatkalum, ippo unna miss panra indha naatkalum, ellathukkum naduvula irukkura en love-um enakku romba precious. ❤️

Thank you, Booma, en life-la vandhadhukku. Enakku ivlo beautiful memories kuduthadhukku. Enna sirikka vechadhukku. En life-la love-na enna nu innum azhaga feel panna vechadhukku.

I love you, en Booma… innikum, naalaikum, namma future-la vara ovvoru naalum. 🫂❤️♾️

Namma story office-la start aachu… aana adhu office-oda mudinjidala. Adhoda beautiful chapters innum neraya irukku.

Forever un booboo. ❤️🥹💋`,
};

export default birthdayData;
