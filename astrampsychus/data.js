// Oracles of Astrampsychus - Complete Data
// From "Ancient Greek Popular Literature" translated by Randall Stewart and Kenneth Morrell

// Questions: numbered 12-103
const questions = {
  12: "Will I sail safely?",
  13: "Is it time to consult the oracle?",
  14: "Will I serve in the army?",
  15: "Will I have a share in the business?",
  16: "Will I advance in office?",
  17: "Will I go out of town?",
  18: "Is it to my advantage to enter into an agreement?",
  19: "Will I be successful?",
  20: "Will I get what is offered?",
  21: "Will I marry, and will it be to my advantage?",
  22: "Can I be harmed in the case?",
  23: "Will it be from this place?",
  24: "Is my affair with another?",
  25: "Is my wife going to have a baby?",
  26: "Will I be able to borrow money?",
  27: "Will I pay back what I owe?",
  28: "Will the traveler return?",
  29: "Will I soon give an accounting?",
  30: "Will I be safe from prosecution?",
  31: "Will I be harmed in the business?",
  32: "Will I be freed from servitude?",
  33: "Will I inherit from my father?",
  34: "Will I inherit from my mother?",
  35: "Will I be an official in this matter?",
  36: "Will I be a fugitive?",
  37: "Will I find a good friend?",
  38: "Will I inherit from someone?",
  39: "Will I have hope of trust?",
  40: "Will I find what I have lost?",
  41: "Will I be a teacher?",
  42: "Will I survive the sickness?",
  43: "Will I open a workshop?",
  44: "Will I have a long life?",
  45: "Will I obtain the petition?",
  46: "Will I come to terms with my mates?",
  47: "Will I have children?",
  48: "Will I inherit from them?",
  49: "Will I get the dowry?",
  50: "Will I get possession of my property?",
  51: "Will I argue my case?",
  52: "Will I inherit from my wife?",
  53: "Will I inherit from a friend?",
  54: "Will the one who is sick survive?",
  55: "Will I get the woman I desire?",
  56: "Will I sell my cargo?",
  57: "If I lend money, will I lose it?",
  58: "Is my wife going to miscarry?",
  59: "Will I be acknowledged?",
  60: "Will I be an oikonomos?",
  61: "Will it benefit me?",
  62: "Will I have an inheritance from someone?",
  63: "Will I defeat my opponent in the trial?",
  64: "Am I going to see a death?",
  65: "Will I be a general?",
  66: "Will I get the call to office?",
  67: "Will I have hope of trust?",
  68: "Will I win if I put down a deposit?",
  69: "Will I win for an appeal?",
  70: "Am I going to marry my girlfriend?",
  71: "Will I get my deposit back?",
  72: "Will I get provisions back?",
  73: "Will I remain where I'm going?",
  74: "Am I going to be sold?",
  75: "Will I get some benefit from my friend to me to have dealings with another?",
  76: "Will I be restored to my place?",
  77: "Will I get an escort?",
  78: "Will I get the money?",
  79: "Will I profit from the undertaking?",
  80: "Are my belongings going to be sold at auction?",
  81: "Will I find a way to sell?",
  82: "Will I buy the thing I have in mind?",
  83: "Will I buy land or a house?",
  84: "Will I be banished?",
  85: "Will I be an ambassador?",
  86: "Will I be a senator?",
  87: "Will the fugitive escape my detection?",
  88: "Will I be set free?",
  89: "Will I be estranged from my wife?",
  90: "Have I been poisoned?",
  91: "Will I get a bequest?",
  92: "Will I finish what I undertake?",
  93: "Will I be able to see my homeland?",
  94: "Will I become a decurion?",
  95: "Will I receive favor from my lot?",
  96: "Will my wife stay with me?",
  97: "Will I remain an elder?",
  98: "Will I buy land or a house?",
  99: "Will I be caught as an adulterer presently?",
  100: "Will I become a bishop?",
  101: "Will I be estranged from my girlfriend?",
  102: "Will the one who is detained be set free?",
  103: "Will I be set free?"
};

// Table of Correspondences
// Maps (question number + lot number) to decade number
const correspondenceTable = {
  13: 10, 14: 5, 15: 16, 16: 98, 17: 93, 18: 56, 19: 18, 20: 68, 21: 6, 22: 78,
  23: 101, 24: 30, 25: 38, 26: 18, 27: 68, 28: 33, 29: 75, 30: 6, 31: 56, 32: 81,
  33: 19, 34: 45, 35: 31, 36: 66, 37: 8, 38: 68, 39: 51, 40: 41, 41: 71, 42: 97,
  43: 70, 44: 47, 45: 31, 46: 43, 47: 56, 48: 45, 49: 35, 50: 71, 51: 9, 52: 47,
  53: 61, 54: 96, 55: 68, 56: 88, 57: 12, 58: 79, 59: 33, 60: 47, 61: 9, 62: 82,
  63: 73, 64: 89, 65: 5, 66: 70, 67: 39, 68: 51, 69: 21, 70: 96, 71: 67, 72: 87,
  73: 1, 74: 33, 75: 14, 76: 75, 77: 50, 78: 86, 79: 4, 80: 48, 81: 38, 82: 95,
  83: 57, 84: 81, 85: 3, 86: 54, 87: 29, 88: 62, 89: 17, 90: 83, 91: 60, 92: 91,
  93: 24, 94: 58, 95: 42, 96: 103, 97: 52, 98: 72, 99: 11, 100: 77, 101: 44, 102: 84,
  103: 27, 104: 59, 105: 36, 106: 99, 107: 49, 108: 87, 109: 23, 110: 65, 111: 40, 112: 100,
  113: 57
};

// Decades of Answers (1-103, each with answers 1-10)
const decades = {
  1: {
    1: "It is not granted to you now.",
    2: "You will have a rich old age.",
    3: "It is going well for you. Don't be upset.",
    4: "You will not be sold.",
    5: "You will get the dowry quickly.",
    6: "It is not to your advantage to go away.",
    7: "You won't be caught as an adulterer.",
    8: "You will fare well and accomplish your purpose.",
    9: "The omen says you will marry the one you love.",
    10: "You will not be harmed by the person who poisoned you."
  },
  2: {
    1: "You won't have hope of trust.",
    2: "You won't get the call to office just now.",
    3: "You'll be made a slave, but later freed.",
    4: "You're going to see a death and you'll be distinguished.",
    5: "You'll have satisfaction. You'll win. Do battle.",
    6: "If you take a chance, you'll be the sole heir.",
    7: "You'll be reconciled with your wife and with your girlfriend.",
    8: "You'll be reconciled with your wife. She's safe and will give birth safely.",
    9: "The omen says you will marry the one you love.",
    10: "Sell wisely, but she'll be safe."
  },
  3: {
    1: "You won't be freed, just yet.",
    2: "You'll be harmed, but not excessively. Don't expect to.",
    3: "With effort the baby will survive."
  },
  4: {
    1: "You won't be safe from charges just yet. Be concerned.",
    2: "The traveler will return. You'll benefit greatly.",
    3: "It is going well for you. Don't be upset.",
    4: "You will not be sold.",
    5: "You will get the dowry quickly.",
    6: "It is not to your advantage to go away.",
    7: "You won't be caught as an adulterer.",
    8: "You will fare well and accomplish your purpose.",
    9: "The omen says you will marry the one you love.",
    10: "You will not be harmed by the person who poisoned you."
  },
  5: {
    1: "You won't give an accounting, but not for a while.",
    2: "You won't come to terms with your masters now.",
    3: "Submit the petition. You'll be successful.",
    4: "You won't be made a slave; you'll be freed.",
    5: "You'll survive your sickness, but it will take a while.",
    6: "You won't be a teacher in a foreign country and become rich.",
    7: "You won't inherit from your friend; you'll be forsaken.",
    8: "You won't inherit from that one. It won't be now.",
    9: "Don't make the petition. Don't hope for it.",
    10: "Through your friends you'll be safe from the allegation."
  },
  6: {
    1: "He will recover from the sickness. Circumvent it.",
    2: "You won't be safe from the allegation. Don't hope for it.",
    3: "You'll inherit from your wife, because she'll die first.",
    4: "Don't argue your case right now. You'll lose."
  },
  7: {
    1: "You'll get the call to office.",
    2: "You won't be made a slave.",
    3: "You'll be registered and be in peril.",
    4: "You'll win soon and rejoice.",
    5: "You'll have a good end, but pray.",
    6: "You'll have an inheritance: you'll bury them.",
    7: "Your wife won't miscarry. Don't be distinguished.",
    8: "If you land the money, make the loan once you have collateral."
  },
  8: {
    1: "You won't purchase what is offered.",
    2: "You'll succeed, at last, when you have grown a little older.",
    3: "Don't travel out of town. It's not to your advantage.",
    4: "You'll be harmed a little, but you'll benefit.",
    5: "You'll have satisfaction, and you'll manage.",
    6: "You'll be successful and finally. Don't worry.",
    7: "You'll come out of town good and be distinguished.",
    8: "You'll go out of town and find blessing. Wait."
  },
  9: {
    1: "You'll advance in the business well and benefit.",
    2: "You'll serve in the army with suffering and you'll regret it.",
    3: "Don't inquire. The army will be freed from his confinement.",
    4: "The one who is detained will be freed by force.",
    5: "You'll be reconciled with your wife and be protected.",
    6: "You'll become a bishop and be prophesied.",
    7: "You won't remain an elder until that time. Wait.",
    8: "You won't buy the property just now."
  },
  10: {
    1: "You won't sail well.",
    2: "The one who is detained will be set free.",
    3: "You'll become a bishop in a way you don't expect.",
    4: "You'll be caught in adultery soon.",
    5: "Your wife won't remain with you. She's getting married.",
    6: "You won't buy land now.",
    7: "Your wife won't remain with you. She's getting married.",
    8: "You'll get free from your girlfriend.",
    9: "You'll become a decurion in a way you don't know."
  },
  11: {
    1: "Not all of your property will remain in your possession.",
    2: "You won't inherit from them. It will be after a time.",
    3: "You'll benefit from your parents, but not as the sole heir.",
    4: "You'll bear children, rear them, and bury them.",
    5: "With effort you'll come to terms with your masters.",
    6: "You'll submit your petition worth.",
    7: "You'll become a slave; you'll find great happiness in them.",
    8: "She'll soon have a baby; move from your place. Don't fear."
  },
  12: {
    1: "You have been poisoned. Treat your wife.",
    2: "You won't be estranged from your wife until you die.",
    3: "The fugitive is escaping from your detection.",
    4: "You'll be a senator, but not just yet.",
    5: "You won't be completely prosperous.",
    6: "You won't buy the thing you have in mind just yet.",
    7: "You won't sell to your detractors.",
    8: "Your belongings won't be sold at auction. Don't be afraid."
  },
  13: {
    1: "The fugitive won't escape your detection.",
    2: "You'll become a senator by yourself and you'll profit.",
    3: "You'll be banished for a time and you'll profit.",
    4: "You won't buy it just yet. Get it out of your mind.",
    5: "You won't find a way to sell just now.",
    6: "Your belongings will be sold at auction.",
    7: "You'll profit from the undertaking a little.",
    8: "The traveler is alive and will return in good health."
  },
  14: {
    1: "You won't be restored to your place.",
    2: "It's not granted to you to have dealings with another.",
    3: "You'll benefit from your friend's business.",
    4: "You won't profit from this, but not just yet.",
    5: "You won't remain, but rejoice.",
    6: "You won't get your deposit back.",
    7: "You won't get provisions with your girlfriend. She's committed adultery.",
    8: "You'll get free from your hometown soon.",
    9: "You'll become a decurion in your advantage.",
    10: "You won't get a bequest. You've been discarded."
  },
  15: {
    1: "You won't pay back what you owe.",
    2: "Your wife will have a baby and it will survive.",
    3: "You'll be harmed, but only a little.",
    4: "You'll move from your place for the worse.",
    5: "You'll purchase what is offered and you'll manage.",
    6: "You'll be successful and finally. Don't worry.",
    7: "You'll be harmed up to the point of death.",
    8: "You'll give an accounting, but not for a while."
  },
  16: {
    1: "It's not your lot to be a bishop.",
    2: "You'll be caught in adultery soon.",
    3: "You'll buy the thing you have in mind as you want.",
    4: "Your wife won't stay with you. She's committing adultery.",
    5: "You'll get free from your lot soon.",
    6: "You'll become a decurion in your advantage.",
    7: "You won't get a bequest. You've been discarded.",
    8: "You'll finish quickly what you undertake. Don't worry."
  },
  17: {
    1: "You won't get your deposit back.",
    2: "Don't put down a deposit. You'll be defeated.",
    3: "You'll have excellent hope of trust.",
    4: "You'll get the call to office.",
    5: "You'll be made a slave."
  },
  18: {
    1: "You won't be a general. It's that it is advantageous.",
    2: "You'll inherit from your friend. Don't be distressed.",
    3: "You'll inherit from that one. It will be after a while.",
    4: "You won't be in peril.",
    5: "You won't be harmed. Don't be distressed.",
    6: "You won't find what is lost.",
    7: "You won't have a long life. Pray instead.",
    8: "You won't open a workshop. It's not granted to you.",
    9: "You'll have a long life. It will take a while.",
    10: "You'll get the woman you want."
  },
  19: {
    1: "You'll advance in the business well and benefit.",
    2: "You'll quickly purchase what is offered.",
    3: "You won't come to terms with your masters now.",
    4: "You'll soon give the accounting for the good.",
    5: "You'll be safe and the traveler will return.",
    6: "You'll be reconciled with your wife and be freed by force.",
    7: "The one who is detained will be freed from his confinement.",
    8: "You'll be reconciled with your wife and be protected.",
    9: "You won't become a bishop and be prophesied.",
    10: "You won't buy the property just now."
  },
  20: {
    1: "You won't sail well.",
    2: "The one who is detained will be set free.",
    3: "You'll become a bishop in a way you don't expect.",
    4: "You'll be caught in adultery soon.",
    5: "Your wife won't remain with you. She's getting married.",
    6: "You'll get free from your girlfriend.",
    7: "Your wife won't remain with you in a way you don't expect.",
    8: "You'll become a decurion in a way you don't know."
  },
  21: {
    1: "You won't do what is for an advantage just yet. Wait.",
    2: "You won't find the fugitive in your place. She'll be happy.",
    3: "You'll inherit from your mother.",
    4: "You'll be freed from your father.",
    5: "You won't be an official now. You'll be honored.",
    6: "You'll find the fugitive early, but you'll be fine.",
    7: "You won't have a good friend. You'll ransack him.",
    8: "You won't inherit from someone; you'll be distinguished."
  },
  22: {
    1: "You'll get your deposit back.",
    2: "You won't be able to marry your girlfriend.",
    3: "You'll get the call to office.",
    4: "You're going to see deaths. Don't be distinguishable.",
    5: "You won't be a while. Don't think about it.",
    6: "You won't inherit from your friend. Don't hope for it.",
    7: "You won't inherit from that one. It won't be now.",
    8: "Don't make the petition. Don't hope for it."
  },
  23: {
    1: "You won't be able to be a teacher.",
    2: "You won't soon find what is lost.",
    3: "You'll have a good end.",
    4: "You won't inherit from your friend. He has sailed away.",
    5: "It's not your lot to be an official. He has sailed away.",
    6: "You won't inherit from your mother. She'll bury you.",
    7: "You'll inherit a third of your father's estate.",
    8: "You won't be freed."
  },
  24: {
    1: "You'll be harmed greatly.",
    2: "You'll purchase what is offered if you desire.",
    3: "You'll succeed, having inherited from others.",
    4: "You'll come to an agreement and benefit greatly.",
    5: "You'll go out of town and have second thoughts."
  },
  25: {
    1: "You'll advance as a result of the unexpected.",
    2: "It's not to your advantage to inquire tomorrow. You'll suffer losses.",
    3: "You'll have an inheritance soon.",
    4: "You'll be harmed a little, but it will be to your advantage.",
    5: "She'll won't have a baby; move from your place. Don't fear.",
    6: "She'll soon have a baby; move from your place. Don't fear."
  },
  26: {
    1: "You won't buy the thing you have in mind just now. Make preparations.",
    2: "You won't find a way to sell and make a profit just now.",
    3: "Your belongings will be sold and you'll be distressed by it.",
    4: "The fugitive will escape your detection for a little while.",
    5: "You'll be a senator and a bankrupt fraud.",
    6: "You'll be banished. Don't be afraid at all.",
    7: "You'll be prosperous and distinguished."
  },
  27: {
    1: "You'll buy the thing you have at once. Don't expect it.",
    2: "You won't find a way to sell and make a profit just now.",
    3: "You won't become a slave; you undertake. Don't hope for it.",
    4: "You'll get a bequest from your petition right away.",
    5: "You won't finish what you undertake. Don't be upset. Pray instead.",
    6: "You'll have an unsuccessful lifespan. Don't be upset. Pray instead.",
    7: "You'll open a workshop a struggle."
  },
  28: {
    1: "You'll sail well.",
    2: "The one who is detained will be set free.",
    3: "You'll become a bishop in a way you don't expect.",
    4: "You'll be caught in adultery soon.",
    5: "You'll remain where you are for your advantage.",
    6: "You won't be estranged from your girlfriend for many years.",
    7: "You'll be an oikonomos and you'll regret it.",
    8: "Don't have dealings with another just now. You'll be harmed."
  },
  29: {
    1: "You'll be reconciled with your girlfriend and you'll benefit.",
    2: "You won't be caught in adultery. Don't be distressed.",
    3: "You'll buy land and a house.",
    4: "You will not remain an elder; you'll get the property.",
    5: "You'll find what you undertake.",
    6: "You'll become a slave; get poisoned. Don't be distressed.",
    7: "You'll become a slave; you'll find it in the case.",
    8: "You'll get free from your lot until you die.",
    9: "You won't profit what you undertake.",
    10: "You'll lay like the thing you have in mind, if you want to."
  },
  30: {
    1: "You'll get the money just now with no effort.",
    2: "You'll get an escort to your place.",
    3: "You'll be restored to all your place.",
    4: "You won't be sold, but it won't benefit you.",
    5: "You won't remain where you are going.",
    6: "You'll get your deposit back.",
    7: "You won't inherit from your friend. Don't expect it."
  },
  31: {
    1: "You'll submit your petition and it's in vain.",
    2: "You won't have a long life.",
    3: "You'll eventually open a workshop.",
    4: "You'll become a teacher suddenly.",
    5: "You won't find what is lost.",
    6: "You'll be an oikonomos and you'll benefit.",
    7: "You won't inherit from your friend. Don't ramble.",
    8: "Don't put down a deposit, you'll be worried."
  },
  32: {
    1: "Don't sail just yet. You'll be harmed.",
    2: "The one who is detained won't be set free for a while.",
    3: "You won't be reconciled.",
    4: "Don't sail. I'm saying be careful.",
    5: "You won't get any benefit.",
    6: "You won't be estranged from your wife.",
    7: "You'll remain an elder.",
    8: "Your wife won't stay with me.",
    9: "The traveler will survive.",
    10: "You won't get more than you owe."
  },
  33: {
    1: "The traveler will return unhurt.",
    2: "She'll give birth safely and have a boy.",
    3: "You won't marry a woman. You'll marry your girlfriend.",
    4: "You'll poorly purchase and benefit.",
    5: "You won't come to terms with your masters.",
    6: "The baby will survive the sickness at once.",
    7: "You'll have dealings with another. Great benefit. Good business."
  },
  34: {
    1: "You'll rear the baby.",
    2: "You'll be safe and have someone.",
    3: "You'll keep what you have. Don't be distressed.",
    4: "The traveler won't return. He has married.",
    5: "You won't pay back what you profit.",
    6: "You'll leave from your place. Get packed.",
    7: "You won't be harmed. Don't be distressed."
  },
  35: {
    1: "You'll be successful.",
    2: "You'll suddenly come to an agreement and you'll profit.",
    3: "You won't go out of town for a while.",
    4: "Don't shake quickly to a good place.",
    5: "If you serve, you'll be sorry.",
    6: "You'll become an elder. Rejoice.",
    7: "You'll find what is lost now. Give it some thought.",
    8: "Now is the time. Give up just now."
  },
  36: {
    1: "The one who is detained won't be set free.",
    2: "The traveler is alive, but has delayed a little while. He'll come.",
    3: "You won't be estranged from your wife for a little while, to your advantage.",
    4: "You'll become a bishop after a little while.",
    5: "You won't be caught in adultery. Relax.",
    6: "Your wife won't stay with you. She's committed adultery.",
    7: "You'll come to the homeland just now. Wait. It's time.",
    8: "You'll get free from your lot just now.",
    9: "You'll become a decurion when you don't expect it.",
    10: "You'll get a bequest. Relax."
  },
  37: {
    1: "The traveler won't return.",
    2: "She'll give birth to a fine baby and do well.",
    3: "You won't move from your place just yet.",
    4: "You won't be harmed from your wife. You'll be decided.",
    5: "You have already purchased the marriage, you'll be married and prospered.",
    6: "You won't come to terms with your masters."
  },
  38: {
    1: "You'll improve for the good.",
    2: "You with's be safe from the accusation. Don't expect twice.",
    3: "The traveler won't return just yet. Wait twice.",
    4: "You're not going to get your advantage. You'll profit.",
    5: "You'll succeed as a woman you offered. Wait twice.",
    6: "She'll have a baby girl who won't live for a short season.",
    7: "You'll some come to an agreement and profit greatly.",
    8: "You'll soon go out of town for a while.",
    9: "Don't shake it to the beauty when you don't realize it.",
    10: "You'll leave, but not to your advantage."
  },
  39: {
    1: "Await your case.",
    2: "Your property will remain in your possession.",
    3: "You'll soon have children.",
    4: "You won't inherit from them.",
    5: "Wait for your parents. You'll be the sole heir.",
    6: "You'll get the dowry with difficulty.",
    7: "Your affair is from someone else.",
    8: "You'll be able to borrow money.",
    9: "You won't pay back what you owe.",
    10: "Don't lend money. You'll lose it."
  },
  40: {
    1: "You won't obtain the dowry after you're alive. Just be cheerful.",
    2: "You raise the children and be parents.",
    3: "You'll soon to terms with your masters distressed by them.",
    4: "You'll submit your petition. You'll ask for more.",
    5: "You'll have a long life in the petition quickly. Just be cheerful.",
    6: "You'll have a long life. Pray and be successful.",
    7: "You'll inherit from your mother. You'll be distressed.",
    8: "You'll be an official, and you'll be honored.",
    9: "You'll find the fugitive in your place. She'll be happy.",
    10: "You'll have good friends. Treat yourself."
  },
  41: {
    1: "Your property will remain and grow.",
    2: "You won't obtain the dowry. Don't fret.",
    3: "You won't inherit from your parents. You'll die first.",
    4: "You'll come to terms with your parents. You'll die first.",
    5: "You'll submit your petition. It will be to your advantage.",
    6: "You'll submit the petition and be a workshop.",
    7: "You won't be a teacher. Do something else.",
    8: "You won't be a teacher. Do something else.",
    9: "After a time you'll succeed and grow old.",
    10: "You won't open a workshop and be rich."
  },
  42: {
    1: "You won't be free. Keep alert.",
    2: "You'll have an inheritance when you are not hoping for it.",
    3: "You'll be at a loss now. Wait. Don't rush.",
    4: "You'll advance on and in words, because you're hindered.",
    5: "You'll share in the business, but it won't benefit you, since you're hindered.",
    6: "You'll serve in the army now and will benefit greatly."
  },
  43: {
    1: "Your wife won't miscarry. Be happy.",
    2: "Don't lend the money. You'll recover it slowly.",
    3: "You'll sell your cargo and profit.",
    4: "You'll well now and you'll have great enjoyment."
  },
  44: {
    1: "It isn't granted to you to be a bishop.",
    2: "You'll be caught in adultery soon.",
    3: "Your wife won't stay with you. She desires someone else.",
    4: "You'll get free from your lot in this time.",
    5: "Your girlfriend won't remain with you until old age.",
    6: "You'll become an elder."
  },
  45: {
    1: "You'll inherit from your parents. You'll die first.",
    2: "You'll be the father of a boy and a girl and you'll rejoice.",
    3: "You'll inherit a portion in the sickness and benefit.",
    4: "You won't have a long life. Put your affairs in order.",
    5: "You won't open a workshop. It's not granted to you.",
    6: "You'll recover from your illness, but it will take some time.",
    7: "You'll find what is lost. Give it some thought.",
    8: "You won't be an oikonomos. You'll be hindered."
  },
  46: {
    1: "You'll inherit from your mistress.",
    2: "You won't be able to have dealings with another.",
    3: "You won't inherit but will be distressed.",
    4: "The baby won't survive but will die.",
    5: "You won't be the father of an escort with another.",
    6: "You won't get the money after a while.",
    7: "You'll profit from the undertaking after a while.",
    8: "You'll be sold, but it won't be so harsh.",
    9: "You'll come home from your place.",
    10: "You won't get your deposit back."
  },
  47: {
    1: "You won't get paid what you are owed.",
    2: "You'll borrow money from someone else.",
    3: "Ask with faith and hear the truth.",
    4: "If you sail, you'll have good luck. It won't be later.",
    5: "The person is alive. He will return.",
    6: "You will give an accounting after a while and divorce your time to the business."
  },
  48: {
    1: "You won't be a general. Don't hope for it.",
    2: "You'll be going to see a death soon. Don't be distressed.",
    3: "You'll soon inherit from your friend. Don't be distressed.",
    4: "You'll never be a senator. Don't hope for it.",
    5: "You won't take a lease and you'll die soon.",
    6: "You'll be at an oikonomos, and you'll be charged, and you'll be successful.",
    7: "You'll lend the money and gratefully recover it.",
    8: "You'll sell your cargo without a problem.",
    9: "You won't be released from detention. Be cheerful."
  },
  49: {
    1: "You'll get the woman you want.",
    2: "The sick person will recover with considerable effort.",
    3: "You won't be safe from the allegation. Circumvent it.",
    4: "You'll inherit from your wife, because she'll die first.",
    5: "Don't argue your case right now. You'll lose."
  },
  50: {
    1: "You'll inherit from your wife, but you won't be the sole heir.",
    2: "You'll inherit from your wife. She dies first.",
    3: "Your property will remain in your possession.",
    4: "You won't be given an escort with your girlfriend. Be afraid.",
    5: "You will still remain where you are going.",
    6: "You will get your deposit back."
  },
  51: {
    1: "The one who is detained won't be set free.",
    2: "You'll become a bishop soon and you'll be sorry.",
    3: "You'll be caught as an adulterer and you won't suffer at all.",
    4: "You'll buy the property you desire and you won't committing adultery.",
    5: "Your wife won't stay with you, since she's committing adultery.",
    6: "You'll get free from your lot. See it.",
    7: "You'll get free from your homeland. Count on it."
  },
  52: {
    1: "If you take a lease just now, you'll suffer a loss.",
    2: "Very soon you'll leave well as an oikonomos.",
    3: "You'll lend the money. You'll recover it with a light.",
    4: "You'll let your cargo quickly and be pleased.",
    5: "You'll be released from detention quickly.",
    6: "You'll get the woman you desire to your ill.",
    7: "The sick person will recover with risk."
  },
  53: {
    1: "You'll be safe from the allegation by means of a bribe. Don't hope for it.",
    2: "You won't inherit from your wife. Don't hope for it."
  },
  54: {
    1: "You won't get an escort.",
    2: "You'll be removed from your place.",
    3: "You'll stay in your orders.",
    4: "You'll get a great benefit from your friend. Stand fast.",
    5: "You won't be sold. It won't benefit you. Stand fast.",
    6: "You won't remain where you're going for a short season.",
    7: "You'll get your deposit back without peril.",
    8: "You won't marry your girlfriend. Don't ramble.",
    9: "Don't put down a deposit, you'll be worried."
  },
  55: {
    1: "You won't get an escort.",
    2: "You'll be removed from your place.",
    3: "You'll benefit from your dealings with another and you'll profit from the friend.",
    4: "You won't be sold but will be for a short season.",
    5: "You won't remain where you're going for a little while. Wait.",
    6: "You'll get your deposit back after a while.",
    7: "You'll marry your girlfriend after a while. Don't ramble."
  },
  56: {
    1: "You'll give an accounting.",
    2: "The traveler won't return just yet."
  },
  57: {
    1: "You won't get a bequest. Treat yourself.",
    2: "You'll be reconciled with your wife. Don't hope for it.",
    3: "You are been a poisoned. Don't hope for it.",
    4: "You won't be reconciled with your wife.",
    5: "The fugitive will escape your detection for a little while.",
    6: "You'll be a senator and a bankrupt fraud.",
    7: "You'll benefit. You'll get the money.",
    8: "You won't be harm.",
    9: "You'll her stay find a way.",
    10: "You won't be harmed."
  },
  58: {
    1: "You'll build walk from the undertaking. Don't be sorry.",
    2: "You'll get the money after a while. Wait. It's time.",
    3: "You'll get an escort.",
    4: "You'll be restored to your place for your benefit.",
    5: "You'll have dealings with another and benefit for a little while.",
    6: "You'll profit from your friend. Stand fast.",
    7: "You won't be sold. It won't benefit you. Stand fast.",
    8: "You'll remain where you're going. Benefit. Get a little ahead.",
    9: "You won't get your deposit back."
  },
  59: {
    1: "You won't be made a slave.",
    2: "You won't be a general just now. Don't hope for it.",
    3: "You're not going to see a death. Don't worry it.",
    4: "You'll have an inheritance, but you won't be the sole heir.",
    5: "You'll take a lease and be distinguished.",
    6: "The traveler is alive. He was poisoned.",
    7: "You'll get the money with much trouble.",
    8: "You'll get an escort presently."
  },
  60: {
    1: "Don't lend anything. You'll suffer losses.",
    2: "You won't put your cargo just now. Wait.",
    3: "You'll be released from detention. You won't be harmed.",
    4: "You'll get the woman you desire. Pray instead.",
    5: "The traveler is alive but has delayed a little while. He's coming.",
    6: "You'll get more money after a while.",
    7: "You'll be released from detection for a while.",
    8: "Don't have dealings with another just now. You'll be harmed."
  },
  61: {
    1: "You won't have a lot of money. You'll suffer.",
    2: "You'll have dealings with another after a while and benefit for your place.",
    3: "You'll benefit from your friend and you'll profit from the friend.",
    4: "You'll be sold, but it won't be so harsh.",
    5: "You won't remain where you're going. You'll suffer.",
    6: "You'll get your deposit back.",
    7: "You'll marry your girlfriend. Don't ramble.",
    8: "Don't put down a deposit, you'll be worried."
  },
  62: {
    1: "You won't have a long life.",
    2: "You won't open a workshop just yet.",
    3: "You'll be a teacher in time.",
    4: "You won't find what is lost.",
    5: "You'll be an oikonomos and you'll regret it.",
    6: "Don't have dealings with another. You'll be hindered.",
    7: "You won't inherit from your friend. Don't expect it.",
    8: "You'll inherit from that one; you'll be distressed, but take heart.",
    9: "Submit your petition. Don't hope for it.",
    10: "The baby will survive the sickness. Give some thought."
  },
  63: {
    1: "You'll work with pain to your detriment.",
    2: "You'll work with all to your detriment.",
    3: "You'll inherit from your wife, because she'll die first.",
    4: "The traveler is alive and will return in good health."
  },
  64: {
    1: "The traveler is detained won't be set free just now.",
    2: "It's not your lot to be a bishop. Don't hope for it.",
    3: "You won't be caught in adultery. Relax.",
    4: "Your wife won't stay with you. She desires someone else.",
    5: "You'll remain an elder until death.",
    6: "Your wife will remain with you. Marry someone else.",
    7: "You'll get free from your lot if you want to.",
    8: "You'll become a decurion very soon.",
    9: "You'll be able to see your homeowner soon.",
    10: "You won't finish what you're considering. Don't expect to."
  },
  65: {
    1: "You won't remain an elder until old age.",
    2: "You'll become a decurion very quickly.",
    3: "You won't be able to see your homeland.",
    4: "You'll get a bequest. Don't be so fine one.",
    5: "You've been poisoned. Treat yourself.",
    6: "The fugitive will escape your detection for a little while, to your advantage.",
    7: "You'll become a senator after a while. Wait.",
    8: "You won't be banished. Relax."
  },
  66: {
    1: "You'll be prosperous.",
    2: "You won't buy what you have in mind, since it won't be to your advantage.",
    3: "You'll sell and you'll profit a great deal.",
    4: "Your belongings will be sold at auction and you'll acquire others.",
    5: "You'll profit from the undertaking a little.",
    6: "The traveler is alive and will return in good health.",
    7: "You won't get an escort just now."
  },
  67: {
    1: "You'll find what is lost now.",
    2: "You'll be an oikonomos for a time.",
    3: "You'll have a good end.",
    4: "You'll have a good friend for a long time.",
    5: "You won't inherit from someone. It's not time.",
    6: "You'll remain an elder. Remarry another wife."
  },
  68: {
    1: "You'll inherit. You'll be harmed in this.",
    2: "You'll be harmed in this way.",
    3: "You'll go out of town and find trouble.",
    4: "You'll go out of town and have a time.",
    5: "If you sail, you'll be safe. Don't be afraid.",
    6: "You won't inherit from the person you detect."
  },
  69: {
    1: "You won't be safe from another. You'll be harmed.",
    2: "If you have dealings with another, you'll be harmed.",
    3: "You'll benefit from your friend. Stand fast.",
    4: "You won't be sold for a while, to your advantage.",
    5: "You'll remain where you're going. It will be to your benefit.",
    6: "You'll get your deposit back very quickly.",
    7: "Your wife will remain with you. She has self-control.",
    8: "You'll get free from your lot in a hurry.",
    9: "You'll become a decurion when you're hindered.",
    10: "You won't ever become a decurion."
  },
  70: {
    1: "You'll recover from your illness.",
    2: "You won't be a teacher. Do something else."
  },
  71: {
    1: "You'll find what is lost soon. Wait.",
    2: "You'll suddenly move from your place for the better.",
    3: "You'll be harmed in this affair, but in the other you'll benefit.",
    4: "You won't purchase. Don't be in peril of your detection. You don't have the meals.",
    5: "You won't go to an agreement and profit through others.",
    6: "You'll go out of town suddenly and profit.",
    7: "You won't advance in the last moments. Don't expect it.",
    8: "If you later let the money, make it the loan once you have collateral."
  },
  72: {
    1: "So it have a baby with your.",
    2: "You'll suddenly move from your place for the better.",
    3: "You'll be harmed in this affair. Wait. It won't benefit you.",
    4: "You'll find the thing you have in mind and you'll be sorry.",
    5: "You'll buy the way to sell and be in a trouble.",
    6: "Your belongings won't be sold. Work at it.",
    7: "The traveler is returning with a good friend.",
    8: "You won't get all the money."
  },
  73: {
    1: "You won't buy land or a house.",
    2: "You'll remain an elder until old age.",
    3: "Your wife won't stay with you. She's committing adultery.",
    4: "You'll get free from your lot in your old age.",
    5: "You'll be able to see your homeland, but late.",
    6: "You'll finish quickly what you undertake."
  },
  74: {
    1: "You'll get from someone. Wait.",
    2: "You'll be safe from the allegation. Don't hope for it.",
    3: "You'll inherit from your wife. Don't hope for it.",
    4: "Don't read the baby. I command you.",
    5: "You'll be in peril with regard to the accusation.",
    6: "You'll give an accounting with insolence.",
    7: "You won't know the result of your effort.",
    8: "Doesn't trust you."
  },
  75: {
    1: "You'll be a senator. Wait.",
    2: "You'll be able to sell.",
    3: "You'll finish what you undertake.",
    4: "You haven't been poisoned. Don't be afraid.",
    5: "You'll be estranged from your wife.",
    6: "The fugitive will escape your detection for a little while."
  },
  76: {
    1: "You'll inherit one care of your mother.",
    2: "You won't inherit from your father. Don't hope for it.",
    3: "You'll be freed, no not just yet.",
    4: "You'll inherit from that one, care for for a time.",
    5: "Don't rush the baby. I command you.",
    6: "You'll be in peril with regard to the accusation.",
    7: "Asper Yourself. You'll win. Then it true."
  },
  77: {
    1: "You're going to see a death but be very being.",
    2: "You'll become a decurion. Don't hope for it.",
    3: "You'll find what you're seeking. Don't expect it to happen.",
    4: "You'll become a decurion. Don't be afraid.",
    5: "You won't come to terms with your masters. Don't expect it.",
    6: "You'll be returned from your wife in good faith until death.",
    7: "If you take a chance, you'll be the sole heir.",
    8: "You'll be reconciled with your wife and with your girlfriend.",
    9: "You won't inherit from your wife. She'll be safe.",
    10: "You won't be harmed by the person who poisoned you."
  },
  78: {
    1: "You'll be going to see a death that you don't want.",
    2: "You'll not be successful in this matter. It will benefit you.",
    3: "You'll quickly purchase what is offered. Wait.",
    4: "You'll come to an agreement with the others. Benefit. You'll profit.",
    5: "You'll go out of town and find blessing.",
    6: "You'll advance to the top in business. Don't expect it.",
    7: "You won't serve in the army. Relax.",
    8: "You'll sail safely for now."
  },
  79: {
    1: "It's not to your advantage to enter an agreement.",
    2: "You won't leave well in the business and be hindered by others.",
    3: "You'll serve in the army just now. Don't hope for it.",
    4: "You'll sail after being delayed, and it is to your advantage.",
    5: "The one who is detained will be set free with effort.",
    6: "You'll be reconciled with your wife. Don't be afraid.",
    7: "You'll marry your girlfriend. You'll be without care."
  },
  80: {
    1: "You'll remain where you're going.",
    2: "You won't get your deposit back. Don't expect it.",
    3: "You'll become husband. You'll be without care.",
    4: "You'll marry your girlfriend. You'll be without care."
  },
  81: {
    1: "You'll down a deposit because you'll suffer. Wait a little onto benefit you.",
    2: "The fugitive won't escape your detection; you'll stumble onto benefit.",
    3: "You'll be an ambassador and you'll suffer a loss.",
    4: "You'll buy the thing you'll acquire many good things.",
    5: "You'll buy the thing I'll in mind and then sell it.",
    6: "Your belongings will be sold at auction presently. Be concerned.",
    7: "You won't profit from the undertaking presently. Be afraid."
  },
  82: {
    1: "Don't lend to the accounting for your advantage.",
    2: "You'll work, laboring for the good, and you'll take pleasure.",
    3: "If it isn't successfully the wool, you'll be safe free.",
    4: "You won't be estranged from your girlfriend for many years.",
    5: "You won't be caught in adultery. Don't be afraid.",
    6: "You'll buy land with your toil.",
    7: "You'll be made an elder."
  },
  83: {
    1: "You won't be released from detention.",
    2: "You'll recover quickly from the sickness, you'll be her guardian.",
    3: "He'll recover quickly from the sickness. He'll require his health.",
    4: "You won't be safe from the allegation although your friends had your sentence.",
    5: "You'll inherit from your wife. It's granted to someone else.",
    6: "If you present your case, you'll win. Fight it out.",
    7: "A little of your property will remain in your possession."
  },
  84: {
    1: "You won't get the dowry after you've fought many battles.",
    2: "You won't inherit from them.",
    3: "You'll inherit from your parents. Don't be worried.",
    4: "Don't let there in this business and be safely. You'll be hindered.",
    5: "You'll come to terms with your masters. Wait.",
    6: "You'll submit your petition. It will be for good.",
    7: "You'll have great happiness in them.",
    8: "You'll survive the sickness. Wait. Relax."
  },
  85: {
    1: "Your belongings will be sold at auction.",
    2: "You'll profit from the undertaking after a while.",
    3: "You'll be made a slave. Don't be distressed.",
    4: "You'll find the money from the undertaking. Wait. Don't expect it to happen."
  },
  86: {
    1: "Don't lend anything.",
    2: "You'll sell your cargo very soon.",
    3: "You'll get part of the money.",
    4: "You'll get an escort.",
    5: "You won't have any place very soon.",
    6: "You won't have any benefit from your friend.",
    7: "You'll be sold, but then be freed."
  },
  87: {
    1: "You'll find a way to sell, go do it. Go.",
    2: "Your belongings will be sold at auction. Don't worry. You will profit. Count on it.",
    3: "You won't have anything from the undertaking.",
    4: "You'll be able to have true profit from your mistress.",
    5: "You'll get the money. Count on it.",
    6: "You'll get an escort. Count on it.",
    7: "You'll be restored to your place. Count on it.",
    8: "You'll have dealings with another and profit a great deal.",
    9: "You'll benefit from your friend.",
    10: "You'll be sold. The buyer will free you of expense."
  },
  88: {
    1: "You'll advance well. It's not to your advantage.",
    2: "Don't serve in the army and advance quickly.",
    3: "At length the marriage will be finalized out of necessity.",
    4: "The one who is detained from your girlfriend because of jealousy.",
    5: "You won't be caught as an adulterer just now. Take heed.",
    6: "You won't buy land or for a house."
  },
  89: {
    1: "You'll become a decurion.",
    2: "You'll be able to see homeland and to rejoice.",
    3: "You'll get a large bequest, if treat yourself.",
    4: "You've indeed been poisoned. Treat yourself.",
    5: "You'll be estranged and you'll profit in a good way.",
    6: "You'll be a senator and you'll profit in the matter.",
    7: "You'll be banished and you'll profit in the matter.",
    8: "You'll be made a slave and you'll become a person."
  },
  90: {
    1: "You'll marry your girlfriend presently.",
    2: "You always deposit because you'll win. Be cheerful.",
    3: "You'll get the call to office and you've proved.",
    4: "You'll be made a slave and you'll become a pet."
  },
  91: {
    1: "You'll be able to go out of town. It's not your lot.",
    2: "You'll advance in the affairs of your place. It won't happen just yet.",
    3: "Don't share in the army and advance greatly. You'll profit.",
    4: "If you take a clause, you'll suffer a great financial loss.",
    5: "If you have an inheritance, don't hope for it.",
    6: "You'll serve in the army and suffer and you'll be harmed.",
    7: "You'll become a bishop after a while and you'll be harmed.",
    8: "If you sail soon, you'll hear the truth.",
    9: "You'll want's be made just yet. Don't expect it to come.",
    10: "You won't be able to be a bishop. Don't worry."
  },
  92: {
    1: "You won't go out of town now.",
    2: "You'll advance in the suddenly when you don't realize it.",
    3: "You'll share in the business to require.",
    4: "If you're inquiring in good faith, and it is to your advantage.",
    5: "You'll sail after being delayed, and it to.",
    6: "The one who is detained will be set free.",
    7: "You'll marry your girlfriend. You'll be without care."
  },
  93: {
    1: "You won't be go out of town now.",
    2: "You'll advance in the suddenly when you don't realize it.",
    3: "You'll serve in the army great benefit and you'll profit.",
    4: "If you inquire, you'll hear the truth.",
    5: "Appear safe for and you'll hear the truth.",
    6: "You'll leave sail, but not just yet. Don't hope for it.",
    7: "You'll be set free, but not now. You'll lose."
  },
  94: {
    1: "You'll succeed happily.",
    2: "You won't enter an agreement. Wait for the time being.",
    3: "You'll advance on in words, because you're hindered.",
    4: "You'll share in the business, but it won't benefit you, since you're hindered.",
    5: "You'll serve in the army now and will benefit greatly.",
    6: "You'll serve in the army and you'll benefit greatly."
  },
  95: {
    1: "Consult with a pure conscience.",
    2: "The one who is detained will be set free from his confinement. Stay's with someone.",
    3: "You'll be estranged from your girlfriend. She's and wait.",
    4: "Justify. It will benefit you."
  },
  96: {
    1: "It's not time for consultation. Wait.",
    2: "You won't benefit from your girlfriend. She's an adulteress.",
    3: "You won't be caught as an adulterer now. Wait.",
    4: "Your wife won't stay with you. She desires someone else.",
    5: "You'll get free from your lot in this time.",
    6: "You'll become a decurion very quickly.",
    7: "You'll be able to see your homeland, but late.",
    8: "You'll finish quickly what you undertake."
  },
  97: {
    1: "You'll succeed happily.",
    2: "You won't enter an agreement. Wait for the time being.",
    3: "You'll advance on in words, because you're hindered.",
    4: "You'll share in the business, but it won't benefit you.",
    5: "You'll serve in the army now and benefit greatly."
  },
  98: {
    1: "You'll lose in the businessmen. Wait.",
    2: "The one who is detained won't be set free just now.",
    3: "It's not your lot to be a bishop. Don't hope for it.",
    4: "You won't be caught in adultery. Relax.",
    5: "Your wife won't stay with you. She desires someone else.",
    6: "You'll remain an elder until death.",
    7: "Your wife will remain with you. Marry someone else.",
    8: "You'll get free from your lot if you want to.",
    9: "You'll become a decurion very soon.",
    10: "You'll be able to see your homeowner soon."
  },
  99: {
    1: "You won't open a workshop.",
    2: "You'll have time and recover from sickness. It will be your lot.",
    3: "You'll find what is lost. Give it some thought. Wait.",
    4: "You'll be harmed, and you'll be an oikonomos. It will be your lot.",
    5: "You'll share in this matter. Don't be worried.",
    6: "You won't inherit from your friend. He's sailed away.",
    7: "You won't inherit from that one; you'll be distressed but take heart.",
    8: "Submit your petition. Don't hope for it.",
    9: "You won't be a teacher. Do something else.",
    10: "You won't have a long life. Pray instead."
  },
  100: {
    1: "You won't get the dowry. Don't be upset.",
    2: "You won't inherit from your parents. You'll suffer.",
    3: "You'll bear children, rear them, and bury them.",
    4: "You'll come to terms with your masters with difficulty.",
    5: "You won't submit your petition. Pray instead.",
    6: "You'll have great happiness. Wait.",
    7: "She'll soon have a baby and it will survive.",
    8: "You'll be harmed a little, but it will be to your advantage.",
    9: "You'll move from your place. Wait.",
    10: "You'll purchase what is offered and it's going well for you."
  },
  101: {
    1: "Consult only once in the third hour every morning.",
    2: "You'll serve in the army and be very happy.",
    3: "You'll share in the business and be safely. You'll be being hindered.",
    4: "You'll come where you desire. You for your good.",
    5: "You'll succeed as a come where offer is desired. Wait.",
    6: "You'll submit your petition. It will be for good.",
    7: "You'll have great happiness in them."
  },
  102: {
    1: "You'll soon be safe from the accusation.",
    2: "You'll inherit from your wife. She'll be fine.",
    3: "You won't pay back just yet what you owe.",
    4: "You'll borrow money and you'll suffer a loss. You'll lose.",
    5: "You'll move from your place. Don't be distressed.",
    6: "You'll marry and you'll be distressed.",
    7: "You'll marry and you'll be distressed.",
    8: "You'll marry and you'll purchase what is offered. You won't be filled with regret.",
    9: "You won't purchase what is offered. You won't be able to."
  },
  103: {
    1: "You won't be made a slave.",
    2: "You'll be found to be an adulterer. Don't wait for it.",
    3: "You won't buy land or a house.",
    4: "Your wife will remain with an elder. Despise yourself.",
    5: "You'll get free from your lot in a hurry.",
    6: "You'll become a decurion and be distinguished.",
    7: "You won't set eyes on your homeland."
  }
};
