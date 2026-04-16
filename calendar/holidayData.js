var holidayData = {

  shabbat: {
    title: "Shabbat",
    subtitle: "Weekly, Friday evening to Saturday night",
    hebrewName: "שַׁבָּת",
    category: "weekly",
    desc: "Shabbat is the Jewish day of rest, observed from Friday sunset to Saturday nightfall when three stars appear. It commemorates the seventh day of creation, when God rested, and is considered the holiest day of the Jewish week — a sanctuary in time. The rhythms of Shabbat — candle lighting, shared meals, prayer, rest, and havdalah — structure the boundary between the sacred and the ordinary.",
    steps: [
      { name: "Prepare the home", desc: "Clean the house, set the table with a white tablecloth, place two challah loaves (or a symbolic covering over them), and have wine or grape juice ready. All cooking should be complete before sunset.", location: "home" },
      { name: "Light the candles", desc: "Traditionally done by the woman of the household (though anyone may do it) 18 minutes before sunset. Two candles are lit, the hands are waved over the flames three times drawing light inward, eyes are covered, and the blessing is recited. Opening the eyes 'sees' Shabbat for the first time.", location: "home" },
      { name: "Kabbalat Shabbat", desc: "A synagogue service welcoming Shabbat, consisting of six psalms and the poem Lecha Dodi, which greets Shabbat as a bride. The congregation turns toward the entrance at the final stanza.", location: "shul" },
      { name: "Maariv / Arvit", desc: "The Friday evening prayer service, including a special Amidah for Shabbat with seven blessings instead of the weekday nineteen.", location: "shul" },
      { name: "Shabbat dinner", desc: "Begins with Shalom Aleichem (welcoming the Shabbat angels), followed by Eishet Chayil, Kiddush over wine, handwashing (netilat yadayim), the blessing over challah (motzi), the meal, and Birkat Hamazon (grace after meals).", location: "home" },
      { name: "Shacharit", desc: "Saturday morning synagogue service, longer than a weekday service and including Torah reading. The weekly Torah portion is read aloud, divided into seven aliyot.", location: "shul" },
      { name: "Musaf", desc: "An additional service following Shacharit, corresponding to the additional Temple sacrifice once offered on Shabbat and holidays.", location: "shul" },
      { name: "Shabbat lunch", desc: "Another festive meal following the morning service, with Kiddush (a shorter, daytime version) and motzi over challah.", location: "home" },
      { name: "Afternoon rest and study", desc: "The spirit of Shabbat encourages rest, reading, quiet walks, and Torah study. Mincha (afternoon prayer) may also be attended.", location: "either" },
      { name: "Havdalah", desc: "The ceremony marking Shabbat's end, performed after nightfall when three stars are visible. Blessings are made over wine, fragrant spices, and a braided multi-wick candle.", location: "home" },
    ],
    blessings: [
      { name: "Candle lighting", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל שַׁבָּת", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu l'hadlik ner shel Shabbat.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us to kindle the Shabbat light." },
      { name: "Kiddush (Friday night)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, borei p'ri hagafen.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who creates the fruit of the vine." },
      { name: "Motzi (blessing over bread)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, hamotzi lechem min ha-aretz.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who brings forth bread from the earth." },
      { name: "Havdalah", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמַּבְדִּיל בֵּין קֹדֶשׁ לְחֹל", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, hamavdil bein kodesh l'chol.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who distinguishes between the sacred and the ordinary." },
    ]
  },

  roshChodesh: {
    title: "Rosh Chodesh",
    subtitle: "The new month — monthly, 1–2 days",
    hebrewName: "רֹאשׁ חֹדֶשׁ",
    category: "monthly",
    desc: "Rosh Chodesh, the new month, is the minor festival marking the appearance of the new moon. In the ancient world it was a major celebration announced by the Sanhedrin when witnesses spotted the crescent moon. Today it is observed with additional prayers and, traditionally, a slightly more festive meal. Some months have a two-day Rosh Chodesh (when the preceding month had 30 days). The Jewish calendar is lunar, so Rosh Chodesh anchors every holiday to the rhythm of the moon — which is why you'll see it trending on Jewish Twitter every few weeks.",
    steps: [
      { name: "Hallel", desc: "An abbreviated Hallel (praise psalms, Psalms 113–118) is recited during the morning service. Unlike full holidays, only a partial Hallel is said — two psalms are abbreviated — reflecting the minor status of the day.", location: "shul" },
      { name: "Musaf for Rosh Chodesh", desc: "An additional Musaf Amidah is added to the morning service, referencing the new moon and the Temple offerings once brought on this day.", location: "shul" },
      { name: "Yaaleh V'Yavo", desc: "A paragraph added to the Amidah and to Birkat Hamazon (grace after meals) throughout the day, mentioning Rosh Chodesh and asking for remembrance and blessing.", location: "either" },
      { name: "Festive meal (optional)", desc: "Traditionally, Rosh Chodesh is marked with a slightly nicer meal than usual — some communities have the custom of eating a special food. There is no formal requirement, but the day has a mild celebratory character.", location: "home" },
      { name: "Kiddush Levana (sanctification of the moon)", desc: "Recited sometime between 3 and 14 days after the new moon appears, ideally on a Saturday night when the moon is visible. The congregation goes outside, greets one another with 'Shalom aleichem,' and recites blessings and psalms in the moonlight.", location: "either" },
    ],
    blessings: [
      { name: "Yaaleh V'Yavo (opening)", hebrew: "יַעֲלֶה וְיָבֹא וְיַגִּיעַ וְיֵרָאֶה וְיֵרָצֶה וְיִשָּׁמַע וְיִפָּקֵד וְיִזָּכֵר זִכְרוֹנֵנוּ", transliteration: "Ya'aleh v'yavo v'yagia v'yeira'eh v'yeiratzeh v'yishama v'yipaked v'yizacher zichroneinu...", translation: "May our remembrance rise and come and reach and be seen and be accepted and be heard and be recalled and be remembered before You..." },
      { name: "Blessing on the moon (Kiddush Levana)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר בְּמַאֲמָרוֹ בָּרָא שְׁחָקִים", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher b'ma'amaro bara sh'chakim.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who with His word created the heavens." },
    ]
  },

  roshHashanah: {
    title: "Rosh Hashanah",
    subtitle: "1–2 Tishrei (September–October)",
    hebrewName: "רֹאשׁ הַשָּׁנָה",
    category: "major",
    desc: "Rosh Hashanah, the Jewish New Year, is also called Yom Hadin — the Day of Judgment — and Yom HaZikaron — the Day of Remembrance. According to tradition, God opens the Book of Life and inscribes each person's fate for the coming year; this judgment is sealed ten days later on Yom Kippur. The two-day holiday is characterized by introspection, prayer, the sound of the shofar, and symbolic foods expressing hopes for a sweet new year.",
    steps: [
      { name: "Erev Rosh Hashanah preparations", desc: "The home is prepared festively. Round challah — symbolizing the cyclical year and a crown — replaces the braided Shabbat loaf. The table is set with honey, apples, and other symbolic foods.", location: "home" },
      { name: "Candle lighting", desc: "Candles are lit at sundown with the Yom Tov blessing. On the second night, candles are lit from a pre-existing flame after nightfall, and the Shehecheyanu is recited.", location: "home" },
      { name: "Maariv / evening service", desc: "The holiday evening service includes the Amidah with special Rosh Hashanah insertions: Malchuyot (God's kingship), Zichronot (remembrance), and Shofarot (the shofar sections). The shofar is not blown at night.", location: "shul" },
      { name: "Festival meal with symbolic foods", desc: "Apples dipped in honey (for a sweet new year), round challah dipped in honey, pomegranate seeds (to be fruitful as its seeds), fish head or ram's head (to be at the head, not the tail), and other simanim (signs) with accompanying short blessings.", location: "home" },
      { name: "Shacharit and Musaf", desc: "The morning service is among the longest of the year. The Unetaneh Tokef prayer ('who shall live and who shall die') is recited. The Torah reading recounts the birth of Isaac and the binding (day two). Musaf follows Shacharit.", location: "shul" },
      { name: "Shofar blowing", desc: "One hundred shofar blasts are sounded during Musaf in four patterns: Tekiah (one long blast), Shevarim (three medium), Teruah (nine short staccato), and Tekiah Gedolah (one sustained long blast). The shofar's cry calls the soul to waking and repentance.", location: "shul" },
      { name: "Tashlich", desc: "An afternoon ritual performed near flowing water. Breadcrumbs or pocket lint are cast in, symbolically casting off the sins of the past year. Psalms are recited. Often done as a community, it has a strangely festive, outdoor feeling.", location: "either" },
      { name: "Second day", desc: "Rosh Hashanah is uniquely observed for two full days even in Israel, considered a single 'long day.' The second day repeats the structure of the first, with its own Torah reading and shofar blowing.", location: "either" },
      { name: "Havdalah / Yom Tov end", desc: "A brief havdalah is recited at the close of the second night, without spices. The ten days of awe (Aseret Yemei Teshuvah) leading to Yom Kippur now begin.", location: "home" },
    ],
    blessings: [
      { name: "Candle lighting (Yom Tov)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל יוֹם טוֹב", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu l'hadlik ner shel Yom Tov.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us to kindle the festival light." },
      { name: "Apples and honey", hebrew: "יְהִי רָצוֹן מִלְּפָנֶיךָ שֶׁתְּחַדֵּשׁ עָלֵינוּ שָׁנָה טוֹבָה וּמְתוּקָה", transliteration: "Y'hi ratzon milfanecha shetehadesh aleinu shanah tovah um'tukah.", translation: "May it be Your will that You renew for us a good and sweet year." },
      { name: "Shofar", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לִשְׁמֹעַ קוֹל שׁוֹפָר", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu lishmo'a kol shofar.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us to hear the sound of the shofar." },
      { name: "Shehecheyanu", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, shehecheyanu v'kiy'manu v'higi'anu laz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has given us life, sustained us, and brought us to this season." },
    ]
  },

  fastOfGedaliah: {
    title: "Fast of Gedaliah",
    subtitle: "3 Tishrei (day after Rosh Hashanah)",
    hebrewName: "צוֹם גְּדַלְיָה",
    category: "fast",
    desc: "The Fast of Gedaliah is a minor fast day observed the day after Rosh Hashanah (or the 4th of Tishrei when the 3rd falls on Shabbat). It commemorates the assassination of Gedaliah ben Ahikam, the Jewish governor appointed by Babylon over the remaining Jews in the land of Israel after the destruction of the First Temple. His murder — recorded in the book of Jeremiah — extinguished the last ember of Jewish political life in Israel for generations. The fast mourns not just a person but the loss of hope itself.",
    steps: [
      { name: "Fast from dawn to nightfall", desc: "This is a minor fast, lasting from dawn (alot hashachar) to nightfall — unlike the major fasts of Yom Kippur and Tisha B'Av, which begin the night before. Food and drink are abstained from.", location: "home" },
      { name: "Selichot", desc: "Penitential prayers (selichot) are added to the morning and afternoon services, as with all minor fast days. These poetic prayers ask for forgiveness and recall the mercy of God.", location: "shul" },
      { name: "Torah reading", desc: "A special Torah portion (Vayechal, Exodus 32–34) is read at both Shacharit and Mincha, describing Moses pleading for the people after the golden calf — a fitting text for a day of communal contrition.", location: "shul" },
      { name: "Mincha with Haftarah", desc: "The afternoon service includes a special haftarah reading from Isaiah about fasting and its true purpose: justice, compassion, and feeding the hungry.", location: "shul" },
    ],
    blessings: [
      { name: "Aneinu (answer us) — fast day addition", hebrew: "עֲנֵנוּ יְיָ עֲנֵנוּ, בְּיוֹם צוֹם תַּעֲנִיתֵנוּ", transliteration: "Aneinu Adonai aneinu, b'yom tzom ta'aniteinu.", translation: "Answer us, Lord, answer us, on this day of our fast." },
    ]
  },

  yomKippur: {
    title: "Yom Kippur",
    subtitle: "10 Tishrei (September–October)",
    hebrewName: "יוֹם כִּפּוּר",
    category: "major",
    desc: "Yom Kippur — the Day of Atonement — is the holiest day of the Jewish year. It is the culmination of the Ten Days of Awe that begin on Rosh Hashanah, the day on which, according to tradition, God seals the Book of Life for the coming year. It is a full 25-hour fast, during which Jews abstain from food, drink, bathing, leather shoes, cosmetics, and marital relations. The day is spent almost entirely in prayer, moving through five distinct services. The dominant mood is one of profound seriousness, but also of hope — tradition holds that on Yom Kippur, humans are likened to angels, and that sincere repentance genuinely changes one's fate.",
    steps: [
      { name: "Erev Yom Kippur meal (Seudah Mafseket)", desc: "A full festive meal is eaten before the fast begins — it is actually a mitzvah to eat well on the eve of Yom Kippur. The meal should be finished well before sunset to allow digestion. White clothing is traditional; some wear a kittel (white robe).", location: "home" },
      { name: "Candle lighting", desc: "Candles are lit before sunset (earlier than usual, to allow time to reach synagogue). The blessing differs slightly from Shabbat. Some also light a 25-hour memorial candle (yahrzeit candle) in memory of deceased family members.", location: "home" },
      { name: "Kol Nidre", desc: "The iconic evening service, named for its opening legal declaration that annuls vows made to God under duress or in error. Kol Nidre is chanted three times to a melody of extraordinary antiquity and power — it is one of the most recognizable sounds in Jewish musical tradition. The ark remains open throughout.", location: "shul" },
      { name: "Maariv and Vidui", desc: "The evening service following Kol Nidre includes the Vidui — the confession — recited collectively, striking the chest lightly with each sin named. The confession is plural: we confess together, as a community.", location: "shul" },
      { name: "Shacharit", desc: "The morning service is long and includes extensive liturgical poetry (piyyutim). The Torah reading describes the Yom Kippur Temple service; the Haftarah is the book of Jonah, whose theme of repentance and divine mercy is central to the day.", location: "shul" },
      { name: "Musaf", desc: "Includes the Avodah — a dramatic retelling of the ancient High Priest's Temple service on Yom Kippur, complete with the mysterious rite of the two goats (one sacrificed, one the 'scapegoat' sent into the wilderness). Congregants traditionally prostrate fully at certain moments.", location: "shul" },
      { name: "Mincha", desc: "The afternoon service, again with Torah reading and the book of Jonah as haftarah. Jonah's story — flight, consequence, mercy — is read in its entirety.", location: "shul" },
      { name: "Neilah", desc: "The closing service, unique to Yom Kippur, takes place as the sun sets and the gates of heaven are imagined to close. The word neilah means 'closing.' The mood intensifies; the ark remains open throughout. The service ends with a single long blast of the shofar.", location: "shul" },
      { name: "Break the fast", desc: "After the shofar sounds, Havdalah is recited and the fast is broken — traditionally with something light before a fuller meal. Community break-the-fast gatherings are common.", location: "home" },
    ],
    blessings: [
      { name: "Kol Nidre (opening declaration)", hebrew: "כָּל נִדְרֵי וֶאֱסָרֵי וּשְׁבוּעֵי וַחֲרָמֵי וְקוֹנָמֵי וְקִנּוּסֵי וְכִנּוּיֵי", transliteration: "Kol nidrei ve'esarei ushvu'ei vacharamei v'konamei v'kinusei vchinuyei...", translation: "All vows, and prohibitions, and oaths, and consecrations, and vow-terms, and penalties, and equivalent expressions..." },
      { name: "Vidui — short confession (Al Chet)", hebrew: "עַל חֵטְא שֶׁחָטָאנוּ לְפָנֶיךָ בְּאֹנֶס וּבְרָצוֹן", transliteration: "Al chet shechatanu lefanecha b'ones uvratzon.", translation: "For the sin we have sinned before You under compulsion or willingly." },
      { name: "Closing of Neilah", hebrew: "יְיָ הוּא הָאֱלֹהִים", transliteration: "Adonai hu ha'Elohim.", translation: "The Lord, He is God. (Declared seven times as the day closes.)" },
    ]
  },

  sukkot: {
    title: "Sukkot",
    subtitle: "15–21 Tishrei (October)",
    hebrewName: "סֻכּוֹת",
    category: "major",
    desc: "Sukkot, the Feast of Tabernacles, is one of the three biblical pilgrimage festivals (Shalosh Regalim). It commemorates the forty years the Israelites dwelt in temporary shelters in the desert, and it is also a harvest festival — the ancient autumn thanksgiving. For seven days, Jews build and dwell in a sukkah: a temporary outdoor hut with a roof of branches through which the stars must be visible. The four species — etrog, lulav, myrtle, and willow — are held together and waved in six directions, symbolizing God's presence everywhere. Sukkot is called z'man simchateinu, the time of our joy.",
    steps: [
      { name: "Build the sukkah", desc: "The sukkah must be built before the holiday begins — traditionally right after Yom Kippur. It requires at least three walls and a roof of natural plant material (schach) that is not still attached to the ground. Decorating the sukkah with hanging fruits, paper chains, and artwork is a beloved custom.", location: "home" },
      { name: "Candle lighting", desc: "Candles are lit on the first evening (and second evening in the diaspora) with the Yom Tov blessing and Shehecheyanu.", location: "home" },
      { name: "Evening Kiddush in the sukkah", desc: "The holiday Kiddush is recited in the sukkah over wine. Meals throughout the holiday are eaten in the sukkah; some sleep there as well, weather permitting.", location: "home" },
      { name: "Waving the four species (Arba Minim)", desc: "The lulav (palm branch bundled with myrtle and willow) and etrog (citron) are held together and waved in six directions — east, south, west, north, up, and down — during Hallel in the morning service. Each species is thought to represent a different type of Jew; held together, they are unified.", location: "either" },
      { name: "Hallel", desc: "Full Hallel (all six psalms, 113–118) is recited each morning of Sukkot, reflecting the holiday's full festival status.", location: "shul" },
      { name: "Hoshana Rabbah", desc: "The seventh day of Sukkot is called Hoshana Rabbah (the great Hoshana). The congregation circles the bimah seven times with the four species while chanting Hoshana prayers. It is considered the final day of judgment from the High Holiday season — a last chance for the decree to be sweetened.", location: "shul" },
    ],
    blessings: [
      { name: "Dwelling in the sukkah", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לֵישֵׁב בַּסֻּכָּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu leishev basukkah.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us to dwell in the sukkah." },
      { name: "Taking the four species", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל נְטִילַת לוּלָב", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu al netilat lulav.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us concerning the taking of the lulav." },
      { name: "Shehecheyanu (first night)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, shehecheyanu v'kiy'manu v'higi'anu laz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has given us life, sustained us, and brought us to this season." },
    ]
  },

  sheminiAtzeretSimchatTorah: {
    title: "Shemini Atzeret & Simchat Torah",
    subtitle: "22–23 Tishrei (diaspora: two days; Israel: one)",
    hebrewName: "שְׁמִינִי עֲצֶרֶת וְשִׂמְחַת תּוֹרָה",
    category: "major",
    desc: "Shemini Atzeret — the Eighth Day of Assembly — immediately follows the seven days of Sukkot but is a distinct holiday in its own right. The Torah offers almost no explanation for it; the Talmud imagines God saying to Israel: 'Stay with Me one more day — it is hard for Me to part from you.' In the diaspora, the following day is Simchat Torah: the day the annual Torah reading cycle ends and immediately begins again. The Torah scroll is danced with joyously around the synagogue in circles called hakafot. It is one of the most exuberant celebrations in the Jewish year.",
    steps: [
      { name: "Shemini Atzeret evening service", desc: "A standard Yom Tov Maariv service. The sukkah is no longer used — we have left it behind — though some eat one final meal there on the afternoon before.", location: "shul" },
      { name: "Prayer for rain (Geshem)", desc: "On Shemini Atzeret morning, a special liturgical poem called Geshem (rain) is inserted into Musaf. From this point, the phrase 'who makes the wind blow and the rain fall' is added to daily prayers through Passover. In Israel, this also marks the beginning of the season when people pray for rain.", location: "shul" },
      { name: "Hakafot (Torah dancing)", desc: "On Simchat Torah, all the Torah scrolls are taken from the ark and carried in seven joyful circuits around the synagogue. Everyone dances and sings. Children wave flags. The atmosphere is deliberately festive and exuberant — alcohol is traditional in some communities.", location: "shul" },
      { name: "Completing and restarting the Torah", desc: "The final portion of Deuteronomy is read, followed immediately by the first verses of Genesis — the cycle begins again without pause. Two people are honored: the Chatan Torah (groom of the Torah, who completes Deuteronomy) and the Chatan Bereishit (groom of Genesis, who begins anew).", location: "shul" },
      { name: "Yizkor", desc: "The memorial prayer for the deceased is recited on Shemini Atzeret morning (the last of its four annual appearances — the others being Yom Kippur, Passover, and Shavuot).", location: "shul" },
    ],
    blessings: [
      { name: "Geshem (opening)", hebrew: "אַף בְּרִי אֲזַכִּיר, גְּבוּרוֹת מַטָּר, לְהַפְשִׁיר אֵימִים בְּיוֹם צַחּוֹת", transliteration: "Af bri azakir, g'vurot matar, l'haphshir eimim b'yom tzachot.", translation: "The power of rain I recall, making the mighty fearful on a parched day." },
      { name: "Shehecheyanu", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, shehecheyanu v'kiy'manu v'higi'anu laz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has given us life, sustained us, and brought us to this season." },
    ]
  },

  hanukkah: {
    title: "Hanukkah",
    subtitle: "25 Kislev – 2/3 Tevet (November–December), 8 days",
    hebrewName: "חֲנֻכָּה",
    category: "minor",
    desc: "Hanukkah, the Festival of Lights, is a post-biblical holiday commemorating the Maccabean revolt against the Seleucid Greek empire in the 2nd century BCE. When the Maccabees recaptured and rededicated the Temple in Jerusalem, they found only enough ritually pure oil to light the menorah for one day — but it burned for eight. Hanukkah is a relatively minor holiday in the halachic sense (no work prohibitions, no special prayer services), but it carries enormous cultural weight, particularly in the Ashkenazi diaspora where proximity to Christmas amplified its significance. Its essential act is the lighting of the hanukkiah (the eight-branched menorah) and placing it where it can be seen — publicizing the miracle.",
    steps: [
      { name: "Light the hanukkiah", desc: "Each night after nightfall, candles are added left to right (new candle first) but lit right to left (newest candle first). On the first night, one candle plus the shamash (helper candle used for lighting); on the eighth night, all eight plus the shamash. The hanukkiah is placed where it can be seen from the street — ideally in a window.", location: "home" },
      { name: "Recite the blessings and Hanerot Halalu", desc: "Two blessings are recited each night before lighting (three on the first night, adding Shehecheyanu). After lighting, Hanerot Halalu — a declaration of the candles' sacred purpose — is recited, along with Maoz Tzur (Rock of Ages) or other songs.", location: "home" },
      { name: "Hallel and Al HaNisim", desc: "Full Hallel is recited in the morning service each day of Hanukkah. Al HaNisim (for the miracles) is added to the Amidah and to Birkat Hamazon throughout the holiday.", location: "shul" },
      { name: "Traditional foods", desc: "Foods fried in oil are traditional — latkes (potato pancakes) in Ashkenazi tradition, sufganiyot (jelly doughnuts) in Israeli and Sephardic tradition — commemorating the miracle of the oil.", location: "home" },
      { name: "Gifts and games", desc: "Gift-giving and the dreidel game (a spinning top with Hebrew letters standing for 'a great miracle happened there') are widely observed customs, particularly with children. These are customs, not commandments.", location: "home" },
    ],
    blessings: [
      { name: "Lighting the hanukkiah", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל חֲנֻכָּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu l'hadlik ner shel Hanukkah.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us to kindle the Hanukkah light." },
      { name: "She'asa Nisim (for the miracles)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁעָשָׂה נִסִּים לַאֲבוֹתֵינוּ בַּיָּמִים הָהֵם בַּזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, she'asa nisim la'avoteinu bayamim hahem baz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who performed miracles for our ancestors in those days at this season." },
      { name: "Shehecheyanu (first night only)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, shehecheyanu v'kiy'manu v'higi'anu laz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has given us life, sustained us, and brought us to this season." },
    ]
  },

  tuBiShvat: {
    title: "Tu BiShvat",
    subtitle: "15 Shvat (January–February)",
    hebrewName: "טוּ בִּשְׁבָט",
    category: "minor",
    desc: "Tu BiShvat — the fifteenth of Shvat — is the new year for trees, one of four new years mentioned in the Mishnah. Originally an agricultural marker determining the age of fruit trees for tithing purposes, it was transformed in the 16th century by the Kabbalists of Safed into a mystical seder: an elaborate ritual meal of fruits and wine, ordered by the four worlds of Kabbalah, celebrating the divine sparks hidden within nature. In modern times it has become associated with environmental consciousness and tree planting in Israel. It is a day of no particular restriction or obligation — just a quiet invitation to notice the natural world.",
    steps: [
      { name: "Tu BiShvat seder (optional but beautiful)", desc: "Modeled on the Passover seder, the Kabbalistic Tu BiShvat seder moves through four cups of wine (progressing from white to red, symbolizing winter into spring) and four categories of fruit: those with inedible shells (like pomegranate), those with inedible pits (like olives), those eaten whole (like figs), and a fourth mystical category with no earthly fruit. Readings from Kabbalah, Torah, and poetry accompany each stage.", location: "home" },
      { name: "Eat fruits of Israel", desc: "It is customary to eat the seven species of the land of Israel: wheat, barley, grapes, figs, pomegranates, olives, and dates. Some communities have the custom of trying a new fruit and reciting Shehecheyanu.", location: "home" },
      { name: "Tree planting", desc: "Particularly in Israel, Tu BiShvat is a day for planting trees — a practice encouraged since the early Zionist period and now broadly observed as a Jewish environmental gesture.", location: "either" },
    ],
    blessings: [
      { name: "Shehecheyanu (on a new fruit)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, shehecheyanu v'kiy'manu v'higi'anu laz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has given us life, sustained us, and brought us to this season." },
      { name: "Blessing on fruit of the tree", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הָעֵץ", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, borei p'ri ha'etz.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who creates the fruit of the tree." },
    ]
  },

  fastOfEsther: {
    title: "Fast of Esther",
    subtitle: "13 Adar (day before Purim)",
    hebrewName: "תַּעֲנִית אֶסְתֵּר",
    category: "fast",
    desc: "The Fast of Esther is observed on the day before Purim, commemorating the three-day fast that Queen Esther asked the Jewish people to undertake before she approached King Ahasuerus uninvited — at risk of her life — to plead for her people's survival. It is a minor fast, from dawn to nightfall, and carries a particular intimacy: it is a fast of courage and solidarity, in memory of a woman who risked everything. When Purim falls on Sunday, the fast is moved to Thursday.",
    steps: [
      { name: "Fast from dawn to nightfall", desc: "A minor fast lasting from dawn to nightfall. Food and drink are abstained from. The fast ends when Purim begins at nightfall.", location: "home" },
      { name: "Selichot and special prayers", desc: "Penitential prayers are added to the morning and afternoon services, as on other minor fasts.", location: "shul" },
      { name: "Torah reading", desc: "Vayechal is read at Shacharit and Mincha, as on other minor fast days.", location: "shul" },
      { name: "Break fast and begin Purim", desc: "The fast ends at nightfall, which is also when Purim begins. The Megillah is read the same evening.", location: "home" },
    ],
    blessings: [
      { name: "Aneinu (answer us)", hebrew: "עֲנֵנוּ יְיָ עֲנֵנוּ, בְּיוֹם צוֹם תַּעֲנִיתֵנוּ", transliteration: "Aneinu Adonai aneinu, b'yom tzom ta'aniteinu.", translation: "Answer us, Lord, answer us, on this day of our fast." },
    ]
  },

  purim: {
    title: "Purim",
    subtitle: "14 Adar (February–March)",
    hebrewName: "פּוּרִים",
    category: "minor",
    desc: "Purim celebrates the events of the Book of Esther: the deliverance of the Jewish people of Persia from the genocidal decree of Haman, foiled through the courage of Queen Esther and her cousin Mordecai. The name comes from pur — the lot that Haman cast to choose the date of the massacre. Purim is the most carnivalesque holiday in the Jewish calendar: costumes, drinking, loud noisemaking, festive meals, gifts of food, and charity to the poor are all commanded. The tradition holds that one should drink until one cannot distinguish 'Cursed is Haman' from 'Blessed is Mordecai' — though many interpret this loosely.",
    steps: [
      { name: "Megillah reading (evening)", desc: "The Book of Esther (Megillat Esther) is read aloud from a handwritten parchment scroll in the synagogue on the night of Purim. Whenever Haman's name is read, the congregation erupts with noisemakers (graggers/ra'ashanim) to blot out his name. Children in costumes are everywhere.", location: "shul" },
      { name: "Megillah reading (morning)", desc: "The Megillah is read again in the morning. Both readings are obligatory.", location: "shul" },
      { name: "Mishloach manot (gifts of food)", desc: "Each person is obligated to send at least two different ready-to-eat foods to at least one friend. This mitzvah promotes friendship and communal joy. Creative themed gift baskets are a beloved custom.", location: "home" },
      { name: "Matanot la'evyonim (gifts to the poor)", desc: "Gifts of money (or food) are given to at least two poor people on Purim day. This is considered equal in importance to the festive meal and mishloach manot — Purim's joy is not complete without including those in need.", location: "either" },
      { name: "Purim seudah (festive meal)", desc: "A full festive meal is held in the afternoon, with wine, good food, song, and celebration. This is when the drinking tradition is observed. Hamantaschen — triangular filled cookies — are traditional, though their shape's meaning is much debated.", location: "home" },
      { name: "Al HaNisim", desc: "Added to the Amidah and Birkat Hamazon throughout Purim, recounting the miracle of the holiday.", location: "either" },
    ],
    blessings: [
      { name: "Reading the Megillah", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל מִקְרָא מְגִלָּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu al mikra megillah.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us concerning the reading of the Megillah." },
      { name: "She'asa Nisim", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁעָשָׂה נִסִּים לַאֲבוֹתֵינוּ בַּיָּמִים הָהֵם בַּזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, she'asa nisim la'avoteinu bayamim hahem baz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who performed miracles for our ancestors in those days at this season." },
    ]
  },

  pesach: {
    title: "Pesach (Passover)",
    subtitle: "15–22 Nisan (March–April), 8 days in diaspora",
    hebrewName: "פֶּסַח",
    category: "major",
    desc: "Pesach — Passover — is the great festival of liberation, commemorating the Exodus of the Israelites from slavery in Egypt. It is one of the three pilgrimage festivals and arguably the most elaborately observed holiday in the Jewish year. For eight days (seven in Israel), leavened bread (chametz) is entirely forbidden — not just eating it but owning it. The home is thoroughly cleaned and the kitchen kashered for Passover. The central ritual is the Passover seder, a ceremonial meal with a specific order (the word seder means 'order') retelling the Exodus through food, song, questions, and storytelling. The obligation is not merely to remember but to experience liberation as if you yourself came out of Egypt.",
    steps: [
      { name: "Search for chametz (Bedikat Chametz)", desc: "On the night before Passover, the home is searched by candlelight for any remaining leavened bread. Ten pieces of bread are traditionally hidden beforehand for the children to find. The chametz found is set aside to be burned the next morning.", location: "home" },
      { name: "Burn the chametz (Biur Chametz)", desc: "The following morning, all remaining chametz is burned and a formal declaration of nullification is recited, declaring any chametz one may have missed to be ownerless as the dust of the earth.", location: "home" },
      { name: "Seder night (first and second night)", desc: "The Passover seder follows the Haggadah through fifteen steps: Kaddesh (Kiddush), Urchatz (handwashing), Karpas (vegetable dipped in salt water), Yachatz (breaking the middle matzah), Maggid (the retelling), Rachtzah (handwashing with blessing), Motzi Matzah, Maror (bitter herbs), Korech (Hillel sandwich), Shulchan Orech (the meal), Tzafun (the afikoman), Bareich (grace), Hallel, Nirtzah (conclusion). The four cups of wine, the afikoman, Dayenu, and Chad Gadya are beloved landmarks.", location: "home" },
      { name: "Eating matzah", desc: "Matzah — unleavened bread — is eaten throughout the holiday. There is a positive commandment to eat matzah on the first night of Passover; the rest of the holiday it is obligatory to avoid chametz but not obligatory to eat matzah.", location: "home" },
      { name: "Chol HaMoed", desc: "The intermediate days of Passover (days 2–6 in the diaspora, after the first two full festival days) are semi-festive: work restrictions are relaxed but the holiday atmosphere continues. Matzah is still required; chametz remains forbidden.", location: "either" },
      { name: "Yizkor", desc: "The memorial prayer for the deceased is recited on the last day of Passover (the eighth day in the diaspora).", location: "shul" },
      { name: "Counting the Omer begins", desc: "Beginning on the second night of Passover, the counting of the Omer commences — 49 days counted nightly leading up to Shavuot. This agricultural and spiritual count connects the liberation of Passover to the revelation of Shavuot.", location: "home" },
    ],
    blessings: [
      { name: "Search for chametz", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל בִּיעוּר חָמֵץ", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu al biur chametz.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us concerning the removal of chametz." },
      { name: "Eating matzah (seder)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל אֲכִילַת מַצָּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu al achilat matzah.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us concerning the eating of matzah." },
      { name: "Eating bitter herbs (maror)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל אֲכִילַת מָרוֹר", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu al achilat maror.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us concerning the eating of bitter herbs." },
      { name: "Counting the Omer", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל סְפִירַת הָעֹמֶר", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu al sefirat ha'omer.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us concerning the counting of the Omer." },
    ]
  },

  lagBOmer: {
    title: "Lag B'Omer",
    subtitle: "18 Iyar — the 33rd day of the Omer (April–May)",
    hebrewName: "לַג בָּעֹמֶר",
    category: "minor",
    desc: "Lag B'Omer is the 33rd day of the Omer count between Passover and Shavuot (the letters lamed and gimel have the numerical value 33 — hence Lag). The Omer period is traditionally one of semi-mourning — weddings, haircuts, and music are restricted — in memory of a plague that killed 24,000 students of Rabbi Akiva. Lag B'Omer is a break in this mourning, though its exact reason is debated: some say the plague paused on this day, others connect it to the death anniversary (Yahrzeit) of the mystic Rabbi Shimon bar Yochai, who is said to have asked his students to celebrate rather than mourn his passing. In Israel, enormous bonfires are lit across the country the night of Lag B'Omer. Haircuts for young children, bows and arrows, and outdoor celebrations are traditional.",
    steps: [
      { name: "Bonfires", desc: "Bonfires are lit the night of Lag B'Omer in memory of Rabbi Shimon bar Yochai, whose teaching is compared to light and fire. In Israel this is a massive nationwide celebration; communities gather around fires, sing, and stay up late.", location: "either" },
      { name: "Haircuts (upsherin)", desc: "It is customary to give young boys (often those turning three) their first haircut on Lag B'Omer, particularly at the tomb of Rabbi Shimon bar Yochai in Meron, Israel. This ceremony is called upsherin.", location: "either" },
      { name: "Resumption of normal activities", desc: "Weddings, live music, and haircuts — restricted during the Omer — are permitted on Lag B'Omer. Many couples choose this day for their wedding for this reason.", location: "either" },
      { name: "Pilgrimage to Meron (in Israel)", desc: "Hundreds of thousands of Jews travel to the tomb of Rabbi Shimon bar Yochai in Meron on Lag B'Omer, making it one of the largest annual gatherings in Israel.", location: "shul" },
    ],
    blessings: [
      { name: "Counting the Omer (day 33)", hebrew: "הַיּוֹם שְׁלֹשָׁה וּשְׁלֹשִׁים יוֹם, שֶׁהֵם אַרְבָּעָה שָׁבוּעוֹת וַחֲמִשָּׁה יָמִים לָעֹמֶר", transliteration: "Hayom shloshah ushloshim yom, shehem arba'ah shavuot vachamishah yamim la'omer.", translation: "Today is thirty-three days, which is four weeks and five days of the Omer." },
    ]
  },

  shavuot: {
    title: "Shavuot",
    subtitle: "6–7 Sivan (May–June)",
    hebrewName: "שָׁבוּעוֹת",
    category: "major",
    desc: "Shavuot — the Feast of Weeks — falls exactly 50 days after Passover, at the end of the Omer count. It is the third pilgrimage festival and commemorates the giving of the Torah at Mount Sinai: the moment the Exodus found its purpose. It is also an agricultural harvest festival, celebrating the first wheat harvest. Shavuot has fewer widely-known rituals than Passover or Sukkot, but what it has are striking: an all-night Torah study session (tikkun leil Shavuot), the reading of the Book of Ruth (a story of loyalty and conversion, set at harvest time), and a traditional preference for dairy foods. The synagogue is decorated with flowers and greenery.",
    steps: [
      { name: "Candle lighting", desc: "Candles are lit on both evenings (in the diaspora) with the Yom Tov blessing and Shehecheyanu on the first night.", location: "home" },
      { name: "Tikkun Leil Shavuot (all-night study)", desc: "It is customary to study Torah all night on the first night of Shavuot, in preparation for 'receiving the Torah' at dawn. Many synagogues and communities organize learning sessions covering all sections of Torah. The tradition holds that the Israelites overslept before Sinai, so we stay up to show we won't make that mistake again.", location: "either" },
      { name: "Shacharit at dawn", desc: "Following the all-night study, the morning service is prayed at sunrise — a particularly moving experience after a night of learning.", location: "shul" },
      { name: "Torah reading and the Ten Commandments", desc: "The Torah portion for Shavuot includes the giving of the Ten Commandments at Sinai. It is traditional for the whole congregation to stand for this reading. The haftarah is Ezekiel's vision of the divine chariot (Merkavah).", location: "shul" },
      { name: "Book of Ruth", desc: "The Book of Ruth is read on Shavuot — a harvest story of loyalty and conversion set in the barley fields of Bethlehem, connecting themes of agricultural abundance, chosen people, and the possibility of joining the covenant.", location: "shul" },
      { name: "Dairy meal", desc: "It is traditional to eat dairy foods on Shavuot — cheesecake, blintzes, cheese kreplach. Explanations abound: the Torah is compared to milk and honey; the Israelites, newly given the laws of kashrut at Sinai, could not immediately eat meat; or simply that dairy is the food of late spring.", location: "home" },
      { name: "Yizkor", desc: "The memorial prayer for the deceased is recited on the second day of Shavuot.", location: "shul" },
    ],
    blessings: [
      { name: "Candle lighting (Yom Tov)", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ לְהַדְלִיק נֵר שֶׁל יוֹם טוֹב", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, asher kid'shanu b'mitzvotav v'tzivanu l'hadlik ner shel Yom Tov.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has sanctified us with His commandments and commanded us to kindle the festival light." },
      { name: "Shehecheyanu", hebrew: "בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה", transliteration: "Baruch atah Adonai, Eloheinu Melech ha-olam, shehecheyanu v'kiy'manu v'higi'anu laz'man hazeh.", translation: "Blessed are You, Lord our God, Sovereign of the universe, who has given us life, sustained us, and brought us to this season." },
    ]
  },

  seventeenthOfTammuz: {
    title: "17th of Tammuz",
    subtitle: "17 Tammuz (June–July)",
    hebrewName: "שִׁבְעָה עָשָׂר בְּתַמּוּז",
    category: "fast",
    desc: "The 17th of Tammuz is a minor fast day that begins the Three Weeks — a period of mourning culminating in Tisha B'Av. Five calamities are said to have occurred on this date: Moses broke the tablets at Sinai upon seeing the golden calf; the daily Temple offering ceased during the Babylonian siege; the walls of Jerusalem were breached before the destruction of the Second Temple; a Torah scroll was burned by a Roman general; and an idol was placed in the Temple. It is a dawn-to-nightfall fast, the opening gesture of the mourning season.",
    steps: [
      { name: "Fast from dawn to nightfall", desc: "A minor fast, dawn to nightfall. The Three Weeks of mourning begin: no weddings, no live music, no haircuts until Tisha B'Av.", location: "home" },
      { name: "Selichot", desc: "Penitential prayers added to morning and afternoon services.", location: "shul" },
      { name: "Torah reading (Vayechal)", desc: "Read at Shacharit and Mincha, as on other minor fast days.", location: "shul" },
    ],
    blessings: [
      { name: "Aneinu", hebrew: "עֲנֵנוּ יְיָ עֲנֵנוּ, בְּיוֹם צוֹם תַּעֲנִיתֵנוּ", transliteration: "Aneinu Adonai aneinu, b'yom tzom ta'aniteinu.", translation: "Answer us, Lord, answer us, on this day of our fast." },
    ]
  },

  tuBAv: {
    title: "Tu B'Av",
    subtitle: "15 Av (July–August)",
    hebrewName: "טוּ בְּאָב",
    category: "minor",
    desc: "Tu B'Av — the 15th of Av — is the Jewish day of love, sometimes called the Jewish Valentine's Day, though it predates that holiday by centuries. The Talmud describes it as one of the two happiest days of the year (the other being Yom Kippur — which says something interesting about the Jewish understanding of joy). In ancient times, unmarried women dressed in white and danced in the vineyards so that young men might choose a wife. Various historical explanations for the celebration exist — including the end of deaths in the desert from the sin of the spies, and the resumption of wood-cutting for the Temple altar. In modern Israel it has been revived as a popular romantic holiday.",
    steps: [
      { name: "No tachanun", desc: "The supplicatory prayers (tachanun) are omitted from services — a mark of a minor festive day.", location: "shul" },
      { name: "Celebration and romance", desc: "No formal obligations. Traditionally a day for matchmaking, celebration, and joy. In modern Israel, couples exchange flowers and gifts.", location: "either" },
      { name: "Increased Torah study", desc: "The Talmud notes that from Tu B'Av onward, the nights grow longer — and therefore one should increase one's nighttime Torah study. A quietly lovely observance.", location: "home" },
    ],
    blessings: []
  },

  tishaBAv: {
    title: "Tisha B'Av",
    subtitle: "9 Av (July–August)",
    hebrewName: "תִּשְׁעָה בְּאָב",
    category: "fast",
    desc: "Tisha B'Av — the ninth of Av — is the saddest day in the Jewish calendar, a major 25-hour fast commemorating the destruction of both the First and Second Temples in Jerusalem, as well as a catalog of other Jewish tragedies said to have occurred on this date: the sin of the spies that condemned the desert generation, the fall of Beitar in the Bar Kokhba revolt, the plowing of Jerusalem by the Romans, and in later history, the expulsion of the Jews from England (1290) and Spain (1492), and the beginning of World War I. The day has the character of a personal bereavement: leather shoes are not worn, bathing and cosmetics are forbidden, marital relations are prohibited, and the Book of Lamentations (Eicha) is chanted in a haunting minor key.",
    steps: [
      { name: "Begin fast at nightfall", desc: "Unlike minor fasts, Tisha B'Av begins the night before (like Yom Kippur) at nightfall. The final meal before the fast (seudah hamafseket) is traditionally simple and mournful — a hard-boiled egg and bread, eaten sitting on the floor.", location: "home" },
      { name: "Reading of Eicha (Lamentations)", desc: "The Book of Lamentations is chanted in the synagogue on the night of Tisha B'Av to a haunting, mournful melody. The lights are dimmed; some communities sit on the floor. Eicha's raw grief — 'Is it nothing to you, all who pass by?' — is one of the most powerful pieces of biblical poetry.", location: "shul" },
      { name: "Kinot (elegies)", desc: "Dirges and elegies (kinot) are recited throughout the morning service, mourning the Temple and subsequent Jewish tragedies. Many communities have added kinot for the Holocaust.", location: "shul" },
      { name: "Restrictions", desc: "As on Yom Kippur: no eating or drinking, no bathing or washing, no applying creams or cosmetics, no leather shoes, no marital relations. Unlike Yom Kippur, Torah study is also restricted (it brings joy) — only texts related to mourning may be studied.", location: "home" },
      { name: "Mincha — mood begins to shift", desc: "At Mincha, the tallit and tefillin are put on (they were omitted at Shacharit as signs of mourning). The Nachem prayer is added, asking for consolation. Tradition holds that the Messiah is born on Tisha B'Av — destruction and redemption are inseparable.", location: "shul" },
      { name: "Break the fast at nightfall", desc: "The fast ends at nightfall. Some customs prohibit bathing, meat, and wine until noon the following day.", location: "home" },
    ],
    blessings: [
      { name: "Eicha (opening verse)", hebrew: "אֵיכָה יָשְׁבָה בָדָד הָעִיר רַבָּתִי עָם הָיְתָה כְּאַלְמָנָה", transliteration: "Eichah yashvah vadad ha'ir rabati am, hay'tah k'almanah.", translation: "How does the city sit solitary, that was full of people! She has become like a widow." },
      { name: "Nachem (consolation prayer, Mincha)", hebrew: "נַחֵם יְיָ אֱלֹהֵינוּ אֶת אֲבֵלֵי צִיּוֹן וְאֶת אֲבֵלֵי יְרוּשָׁלָיִם", transliteration: "Nachem Adonai Eloheinu et avelei Tzion v'et avelei Yerushalayim.", translation: "Comfort, Lord our God, the mourners of Zion and the mourners of Jerusalem." },
    ]
  },

};

