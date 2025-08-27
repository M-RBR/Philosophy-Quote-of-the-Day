const quoteData = [
  {
    id: "29B2668B-4DBD-42A7-A0E5-232FB55AF008",
    work: "",
    quote:
      "Into that from which things take their rise they pass away once more, as is ordained; for they make reparation and satisfaction to one another for the injustice according to the appointed time.",
    internalID: "1",
    philosopher: {
      id: "F8320389-19D4-4095-95A3-A93A7F7F7997",
    },
    year: "",
  },
  {
    id: "83DB2BFF-A5C1-48E8-9DD0-3F0DE3660921",
    work: "Quoted by Plotinus in Enneads",
    quote: "For it is the same thing that can be thought and that can be.",
    internalID: "10",
    philosopher: {
      id: "73E6F183-7335-458F-883E-83A9A8F9E562",
    },
    year: "",
  },
  {
    id: "226DF91F-DA5E-4FF3-936D-61905BC8229B",
    work: "An Enquiry Concerning the Principles of Morals",
    quote:
      "He is happy, whose circumstances suit his temper; but he is more excellent, who can suit his temper to any circumstances.",
    internalID: "100",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    year: "1751 AD",
  },
  {
    id: "237A0B29-851D-40E2-99D9-F60569AEF3E1",
    work: "Essays, Moral, Political, and Literary",
    quote:
      "Nothing appears more surprising to those, who consider human affairs with a philosophical eye, than the easiness with which the many are governed by the few; and the implicit submission, with which men resign their own sentiments and passions to those of their rulers.",
    internalID: "101",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    year: "1748 AD",
  },
  {
    id: "20914480-6031-4E3D-9AD5-364D0AAD6E62",
    work: "Critique of Practical Reason",
    quote:
      "Act in such a way that you treat humanity, whether in your own person or in the person of any other, never merely as a means to an end, but always at the same time as an end.",
    internalID: "102",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1788 AD",
  },
  {
    id: "31786E1F-D43C-49E3-A9D8-A66C9EB44065",
    work: "What is Enlightenment?",
    quote:
      "Sapere aude! 'Have courage to use your own reason!'- that is the motto of enlightenment.",
    internalID: "103",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1784 AD",
  },
  {
    id: "66D4D760-2A50-45C7-977B-13757DC43701",
    work: "Groundwork of the Metaphysics of Morals",
    quote:
      "I ought never to act except in such a way that I could also will that my maxim should become a universal law.",
    internalID: "104",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1785 AD",
  },
  {
    id: "DAECDCBC-D90E-4CCE-9C43-184032F4170D",
    work: "Critique of Pure Reason",
    quote:
      "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.",
    internalID: "105",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1781 AD",
  },
  {
    id: "ED93B218-C5A4-441A-8427-E106897139F7",
    work: "Critique of Pure Reason",
    quote:
      "I have no knowledge of myself as I am, but merely as I appear to myself.",
    internalID: "106",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1781 AD",
  },
  {
    id: "3E15B455-84F6-4FCD-9BCC-58CD75AB2010",
    work: "Critique of Pure Reason",
    quote:
      "All thought must, directly or indirectly, by way of certain characters, relate ultimately to intuitions, and therefore, with us, to sensibility, because in no other way can an object be given to us.",
    internalID: "107",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1781 AD",
  },
  {
    id: "974EF7D3-FEA6-4918-9621-D3CD3A535F95",
    work: "Critique of Pure Reason",
    quote:
      "Thoughts without content are empty, intuitions without concepts are blind.",
    internalID: "108",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1781 AD",
  },
  {
    work: "Eternal Peace",
    id: "5453DC4F-1FA1-4CCF-845B-E25BBD01CF8D",
    philosopher: {
      id: "8D0D5B08-94A1-401D-AF81-25377AEE86DA",
    },
    year: "1795 AD",
    quote:
      "The universal and lasting establishment of peace constitutes not merely a part, but the whole final purpose and end of the science of right as viewed within the limits of reason.",
    internalID: "109",
  },
  {
    work: "Quoted by Proclus in Commentary on the Parmenides",
    id: "93FA6B7F-0B76-4962-BF60-9E9BCB0F21CB",
    philosopher: {
      id: "73E6F183-7335-458F-883E-83A9A8F9E562",
    },
    year: "",
    quote:
      "It is indifferent to me where I am to begin, for there shall I return again.",
    internalID: "11",
  },
  {
    work: "The Phenomenology of Spirit",
    id: "B4FD01F8-47E4-42B7-817C-981E93064CCB",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1807 AD",
    quote:
      "History, is a conscious, self-meditating process — Spirit emptied out into Time.",
    internalID: "110",
  },
  {
    work: "The Phenomenology of Spirit",
    id: "E5960259-AC76-465C-BFD1-47BDDE5BFA73",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1807 AD",
    quote:
      "The force of mind is only as great as its expression; its depth only as deep as its power to expand and lose itself.",
    internalID: "111",
  },
  {
    work: "The Phenomenology of Spirit",
    id: "2551A1C0-4562-4D78-A851-C387F264FDAE",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1807 AD",
    quote:
      "The goal to be reached is the mind’s insight into what knowing is. Impatience asks for the impossible, wants to reach the goal without the means of getting there. The length of the journey has to be borne with, for every moment is necessary, ... because by nothing less could that all-pervading mind ever manage to become conscious of what itself is — for that reason, the individual mind, in the nature of the case, cannot expect by less toil to grasp what its own substance contains.",
    internalID: "112",
  },
  {
    work: "Encyclopedia of the Philosophical Sciences",
    id: "1732B099-4F7F-4A0C-A0C0-EC8C9C00BDC7",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1816 AD",
    quote:
      "The heart is everywhere, and each part of the organism is only the specialized force of the heart itself.",
    internalID: "113",
  },
  {
    work: "Elements of the Philosophy of Right",
    id: "A480A1D6-923E-4259-9A8D-F311D021C0C8",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1821 AD",
    quote: "What is reasonable is real; that which is real is reasonable.",
    internalID: "114",
  },
  {
    work: "Elements of the Philosophy of Right",
    id: "24233710-A21E-4D45-B0C4-2B7B335A91B0",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1821 AD",
    quote:
      "The essence of the modern state is the union of the universal with the full freedom of the particular, and with the welfare of individuals.",
    internalID: "115",
  },
  {
    work: "Elements of the Philosophy of Right",
    id: "8B06C763-C3C2-405D-B0C8-0BB42FE55024",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1820 AD",
    quote: "The owl of Minerva first begins her flight with the onset of dusk.",
    internalID: "116",
  },
  {
    work: "Lectures on the Philosophy of History",
    id: "0610DABB-7B43-4086-BC5C-17C70A285A53",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    year: "1832 AD",
    quote:
      "What experience and history teach is this — that nations and governments have never learned anything from history, or acted upon any lessons they might have drawn from it.",
    internalID: "117",
  },
  {
    work: "Lectures on the Philosophy of History",
    year: "1832 AD",
    internalID: "118",
    id: "CC00731F-28F7-4427-BE5A-389107EF9882",
    philosopher: {
      id: "1180AEE2-37F0-4A03-A2F0-F8F63DD7A5E2",
    },
    quote:
      "To him who looks upon the world rationally, the world in its turn presents a rational aspect. The relation is mutual.",
  },
  {
    work: "The World as Will and Representation",
    year: "1819 AD",
    internalID: "119",
    id: "52580803-C6F2-47FD-A779-0087D15169D0",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      "All truth passes through three stages. First, it is ridiculed. Second, it is violently opposed. Third, it is accepted as being self-evident.",
  },
  {
    work: "Quoted in Plato's Theaetetus",
    year: "",
    internalID: "12",
    id: "89AB2333-0951-469D-943D-38C7AD224E76",
    philosopher: {
      id: "A839315F-7D16-4116-8352-D26707C36D6E",
    },
    quote: "Man is the measure of all things.",
  },
  {
    work: "The World as Will and Representation",
    year: "1819 AD",
    internalID: "120",
    id: "B610843A-B122-4CB8-A8D0-06436CEAA59A",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      "Talent hits a target no one else can hit; Genius hits a target no one else can see.",
  },
  {
    work: "The World as Will and Representation",
    year: "1819 AD",
    internalID: "121",
    id: "8228F7ED-504E-476B-87DD-9F6F134FCD5A",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote: "Life is a business that does not cover the costs.",
  },
  {
    work: "The World as Will and Representation",
    year: "1819 AD",
    internalID: "122",
    id: "791F2B70-CD9C-4C57-93B4-6172A34ABAA9",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      "Spinoza says that if a stone which has been projected through the air, had consciousness, it would believe that it was moving of its own free will. I add this only, that the stone would be right. The impulse given it is for the stone what the motive is for me, and what in the case of the stone appears as cohesion, gravitation, rigidity, is in its inner nature the same as that which I recognise in myself as will, and what the stone also, if knowledge were given to it, would recognise as will.",
  },
  {
    work: "",
    year: "",
    internalID: "123",
    id: "54C3C62A-5DF6-406C-80FA-E819B756EAC6",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote: "Change alone is eternal, perpetual, immortal.",
  },
  {
    work: "Studies in Pessimism",
    year: "",
    internalID: "124",
    id: "31BE5950-1B40-4032-A401-7D2E19AED22F",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      "If children were brought into the world by an act of pure reason alone, would the human race continue to exist? Would not a man rather have so much sympathy with the coming generation as to spare it the burden of existence, or at any rate not take it upon himself to impose that burden upon it in cold blood?",
  },
  {
    work: "On the Basis of Morality",
    year: "1840 AD",
    internalID: "126",
    id: "84C80F60-1D67-4BFC-BACB-E57821D0F0EE",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      'Thus, because Christian morals leave animals out of consideration … therefore in philosophical morals they are of course at once outlawed; they are merely "things," simply means to ends of any sort; and so they are good for vivisection, for deer-stalking, bull-fights, horse-races, etc., and they may be whipped to death as they struggle along with heavy quarry carts. Shame on such a morality … which fails to recognize the Eternal Reality immanent in everything that has life, and shining forth with inscrutable significance from all eyes that see the sun!',
  },
  {
    work: "On the Basis of Morality",
    year: "1840 AD",
    internalID: "127",
    id: "29ABDFBD-9CAE-40FE-BE8A-3C0A1631AB60",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      "Compassion for animals is intimately connected with goodness of character, and it may be confidently asserted that he, who is cruel to living creatures, cannot be a good man. Moreover, this compassion manifestly flows from the same source whence arise the virtues of justice and loving-kindness towards men.",
  },
  {
    work: "Parerga and Paralipomena",
    year: "1851 AD",
    internalID: "128",
    id: "C17FAFC5-BDBE-4BD0-AEAF-AAF32A00D52E",
    philosopher: {
      id: "51165051-8479-477C-8491-8D508EF230E3",
    },
    quote:
      "Dogma is intended for, and suited to, the great mass of the human race; and as such it can contain merely allegorical truth that it nevertheless has to pass off as truth sensu proprio.",
  },
  {
    work: "The Concept of Anxiety",
    year: "1844 AD",
    internalID: "129",
    id: "E9ECA8E3-132D-4BD7-AD96-6BAE2963E196",
    philosopher: {
      id: "EA908AB3-5EA0-41A3-A2F3-1A10C7117046",
    },
    quote:
      "Between these two moments lies the leap, which no science has explained and which no science will explain.",
  },
  {
    work: "Quoted in Plato's Protagoras",
    year: "",
    internalID: "13",
    id: "45193CC8-52BC-47F1-B8F9-53FCA3C2920E",
    philosopher: {
      id: "A839315F-7D16-4116-8352-D26707C36D6E",
    },
    quote:
      "The Athenians are right to accept advice from anyone, since it is incumbent on everyone to share in that sort of excellence, or else there can be no city at all.",
  },
  {
    work: "The Journals of Søren Kierkegaard",
    year: "1850 AD",
    internalID: "130",
    id: "22E10BF1-5722-4F23-AADC-5F6651268DCD",
    philosopher: {
      id: "EA908AB3-5EA0-41A3-A2F3-1A10C7117046",
    },
    quote:
      "The truth is a trap: you can not get it without it getting you; you cannot get the truth by capturing it, only by its capturing you.",
  },
  {
    work: "Either/Or ",
    year: "1843 AD",
    internalID: "131",
    id: "F9C14949-0271-462D-8CAF-F397B6973397",
    philosopher: {
      id: "EA908AB3-5EA0-41A3-A2F3-1A10C7117046",
    },
    quote:
      "Most men pursue pleasure with such breathless haste that they hurry past it.",
  },
  {
    work: "The Concept of Anxiety",
    year: "1844 AD",
    internalID: "132",
    id: "9845BBA2-B1E3-483B-98E7-82893F94D0B6",
    philosopher: {
      id: "EA908AB3-5EA0-41A3-A2F3-1A10C7117046",
    },
    quote:
      "Freedom succumbs to dizziness. Further than this, psychology cannot and will not go.",
  },
  {
    work: "Fear and Trembling",
    year: "1843 AD",
    internalID: "133",
    id: "96EB06A8-7FF8-4D1B-98E0-2131CB518CD4",
    philosopher: {
      id: "EA908AB3-5EA0-41A3-A2F3-1A10C7117046",
    },
    quote:
      "Philosophy cannot and should not give faith, but it should understand itself and know what it has to offer and take nothing away, and least of all should fool people out of something as if it were nothing.",
  },
  {
    work: "Fear and Trembling",
    year: "1843 AD",
    internalID: "134",
    id: "DF1F4888-FFA0-44FE-87DA-5C9FF9E65005",
    philosopher: {
      id: "EA908AB3-5EA0-41A3-A2F3-1A10C7117046",
    },
    quote:
      "The true knight of faith is a witness, never a teacher, and therein lies his deep humanity, which is worth a good deal more than this silly participation in others' weal and woe which is honored by the name of sympathy, whereas in fact it is nothing but vanity.",
  },
  {
    work: "The Manifesto of the Communist Party",
    year: "1848 AD",
    internalID: "135",
    id: "3B07AE44-5764-4BE6-A066-8C2AE6AF7CB3",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote: "A specter is haunting Europe—the specter of Communism.",
  },
  {
    work: "The Manifesto of the Communist Party",
    year: "1848 AD",
    internalID: "136",
    id: "E0E7F50E-C03A-4396-BEDF-AB56448EFC48",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "The history of all hitherto existing society is the history of class struggles.",
  },
  {
    work: "The Eighteenth Brumaire of Louis Bonaparte",
    year: "1852 AD",
    internalID: "137",
    id: "B1C6138D-EBE0-45A5-87BA-B56D4CEE37D5",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "Hegel remarks somewhere that all facts and personages of great importance in world history occur, as it were, twice. He forgot to add: the first time as a tragedy, the second time as farce.",
  },
  {
    work: "The Eighteenth Brumaire of Louis Bonaparte",
    year: "1852 AD",
    internalID: "138",
    id: "E206636E-A5E2-4209-8F72-33BDDD323FF0",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "Men make their own history, but they do not make it as they please; they do not make it under self-selected circumstances, but under circumstances existing already, given and transmitted from the past.",
  },
  {
    work: "The Manifesto of the Communist Party",
    year: "1848 AD",
    internalID: "139",
    id: "C86A94D0-1FED-4812-A7DE-0F28CFFF0372",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "All that is solid melts into air, all that is holy is profaned, and man is at last compelled to face with sober senses, his real conditions of life, and his relations with his kind.",
  },
  {
    work: "On the Gods",
    year: "",
    internalID: "14",
    id: "56708099-F703-449C-BAC8-BCEDAA0C5987",
    philosopher: {
      id: "A839315F-7D16-4116-8352-D26707C36D6E",
    },
    quote:
      "Concerning the gods, I have no means of knowing whether they exist or not, nor of what sort they may be, because of the obscurity of the subject, and the brevity of human life.",
  },
  {
    work: "The German Ideology ",
    year: "1845 AD",
    internalID: "140",
    id: "DFA55B95-53AC-4424-943A-57D5E1D4024B",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "The first premise of all human history is, of course, the existence of living human individuals. Thus the first fact to be established is the physical organisation of these individuals and their consequent relation to the rest of nature.",
  },
  {
    work: "The German Ideology ",
    year: "1845 AD",
    internalID: "141",
    id: "29781256-B10A-4649-A0DD-54A7742F8DCE",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "in communist society, where nobody has one exclusive sphere of activity but each can become accomplished in any branch he wishes, society regulates the general production and thus makes it possible for me to do one thing today and another tomorrow, to hunt in the morning, to fish in the afternoon, rear cattle in the evening, criticize after dinner, just as I have in mind, without ever becoming hunter, fisherman, shepherd or critic.",
  },
  {
    work: "Critique of Hegel's Philosophy of Right",
    year: "1843 AD",
    internalID: "142",
    id: "4A7D29D2-B938-49DF-ADD0-6E981BFEF578",
    philosopher: {
      id: "4952AE75-FBF7-47C7-B1D7-D2F70F843AE4",
    },
    quote:
      "Religious suffering is, at one and the same time, the expression of real suffering and a protest against real suffering. Religion is the sigh of the oppressed creature, the heart of a heartless world, and the soul of soulless conditions. It is the opium of the people.",
  },
  {
    work: "The Gay Science",
    year: "1882 AD",
    internalID: "143",
    id: "0F9442B5-21A0-4684-B271-96F6240C1BFF",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "God is dead! God remains dead! And we have killed him. How shall we comfort ourselves, the murderers of all murderers?",
  },
  {
    work: "The Gay Science",
    year: "1882 AD",
    internalID: "144",
    id: "2554C051-CEDD-4CAB-8488-9A514FE4C57F",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "Without art we would be nothing but foreground and live entirely in the spell of that perspective which makes what is closest at hand and most vulgar appear as if it were vast, and reality itself.",
  },
  {
    work: "The Gay Science",
    year: "1882 AD",
    internalID: "145",
    id: "676E0A47-14AD-455F-AC58-A5718DE0A638",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "Whatever has value in our world now does not have value in itself, according to its nature — nature is always value-less, but has been given value at some time, as a present — and it was we who gave and bestowed it.",
  },
  {
    work: "The Birth of Tragedy",
    year: "1872 AD",
    internalID: "146",
    id: "CAEB498C-44DE-48A9-8A36-70D8A53EE45F",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "Art is the supreme task and the truly metaphysical activity in this life...",
  },
  {
    work: "On the Genealogy of Morality",
    year: "1887 AD",
    internalID: "147",
    id: "7CDF9448-431F-4DE5-A7FE-428F4C3976A9",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote: "If a temple is to be erected, a temple must be destroyed.",
  },
  {
    work: "On the Genealogy of Morality",
    year: "1887 AD",
    internalID: "148",
    id: "4973216F-D509-4323-B762-EB5396C446FD",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      'To see others suffer does one good, to make others suffer even more: this is a hard saying but an ancient, mighty, human, all-too-human principle which even the apes might subscribe; for it has been said that in devising bizarre cruelties they anticipate man and are, as it were his "prelude."',
  },
  {
    work: "On the Genealogy of Morality",
    year: "1887 AD",
    internalID: "149",
    id: "5E1D1F53-29DA-4418-B76D-BF96E48AD4A2",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "That every will must consider every other will its equal — would be a principle hostile to life, an agent of the dissolution and destruction of man, an attempt to assassinate the future of man, a sign of weariness, a secret path to nothingness.",
  },
  {
    work: "Quoted by Plato in Apology",
    year: "399 BC",
    internalID: "15",
    id: "9CC6DED1-5D01-4F44-B691-346EF94F134A",
    philosopher: {
      id: "3F7ED55D-F092-445A-99BB-3C232FC9A132",
    },
    quote: "What I do not know I do not think I know either",
  },
  {
    work: "Twilight of the Idols",
    year: "1888 AD",
    internalID: "150",
    id: "306BDB1E-3737-4BDE-8C6D-7A3A700B7FD5",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote: "What does not kill me, makes me stronger.",
  },
  {
    work: "Twilight of the Idols",
    year: "1888 AD",
    internalID: "151",
    id: "A63462E1-749F-4C36-984E-77F8B78FF982",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote: "Man does not strive for happiness; only the Englishman does that",
  },
  {
    work: "Ecce Homo",
    year: "1888 AD",
    internalID: "152",
    id: "7788399A-18A9-4BAB-AB0A-F8FEFF091C53",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "I am a disciple of the philosopher Dionysus, I would rather be a satyr than a saint.",
  },
  {
    work: "Thus Spake Zarathustra.",
    year: "1883 AD",
    internalID: "153",
    id: "004C6A1E-E2DB-4CE8-A4B7-65682474188E",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "I teach you the Overman. Man is something which shall be surpassed.",
  },
  {
    work: "Human, All Too Human",
    year: "1878 AD",
    internalID: "154",
    id: "3B9FB73A-5D85-4DC0-A3E1-5EB3121F16E3",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote:
      "One will rarely err if extreme actions be ascribed to vanity, ordinary actions to habit, and mean actions to fear.",
  },
  {
    work: "Human, All Too Human",
    year: "1878 AD",
    internalID: "155",
    id: "15950248-D91F-4551-B2A1-0D4992C78BEE",
    philosopher: {
      id: "EEDE0B1A-815C-4456-8D2B-0D55028035F8",
    },
    quote: "The mother of excess is not joy but joylessness.",
  },
  {
    work: "Creative Evolution",
    year: "1907 AD",
    internalID: "156",
    id: "25614BA2-6131-403A-94E6-8B9B158F718C",
    philosopher: {
      id: "33164B45-3F93-45AC-8B88-FA48BC3FDFBD",
    },
    quote:
      "The present contains nothing more than the past, and what is found in the effect was already in the cause.",
  },
  {
    work: "",
    year: "",
    internalID: "158",
    id: "913CC5AA-A0AF-4F4E-B5AB-7165DD19D82C",
    philosopher: {
      id: "33164B45-3F93-45AC-8B88-FA48BC3FDFBD",
    },
    quote:
      "Intuition is a method of feeling one's way intellectually into the inner heart of a thing to locate what is unique and inexpressible in it.",
  },
  {
    work: "The Two Sources of Morality and Religion",
    year: "1932",
    internalID: "159",
    id: "528B88D1-2127-47D7-A57B-916675BF0052",
    philosopher: {
      id: "33164B45-3F93-45AC-8B88-FA48BC3FDFBD",
    },
    quote: "Religion is to mysticism what popularization is to science.",
  },
  {
    work: "Quoted by Plato in Apology",
    year: "399 BC",
    internalID: "16",
    id: "EBBBD478-7D0D-4DF5-99DD-C35EE1F07351",
    philosopher: {
      id: "3F7ED55D-F092-445A-99BB-3C232FC9A132",
    },
    quote: "The unexamined life is not worth living.",
  },
  {
    work: "The Two Sources of Morality and Religion",
    year: "1932",
    internalID: "160",
    id: "C851DB09-0876-42F6-B77E-ABB658353D1C",
    philosopher: {
      id: "33164B45-3F93-45AC-8B88-FA48BC3FDFBD",
    },
    quote:
      "The open society is one that is deemed in principle to embrace all humanity.",
  },
  {
    work: "The Two Sources of Morality and Religion",
    year: "1932",
    internalID: "161",
    id: "405DC1B9-7877-4001-8433-A7D417CA5F55",
    philosopher: {
      id: "33164B45-3F93-45AC-8B88-FA48BC3FDFBD",
    },
    quote:
      "Men do not sufficiently realise that their future is in their own hands. Theirs is the task of determining first of all whether they want to go on living or not.",
  },
  {
    work: "",
    year: "1880 AD",
    internalID: "162",
    id: "4165D89E-2D7D-444E-86CA-D2307671BC0D",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote:
      "All our scientific and philosophic ideals are altars to unknown gods.",
  },
  {
    work: "",
    year: "1900 AD",
    internalID: "163",
    id: "4774A2D4-6286-41DF-94D9-8F12F23A4452",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote: "Instinct leads, intelligence does but follow.",
  },
  {
    work: "The Sentiment of Rationality",
    year: "1882 AD",
    internalID: "164",
    id: "ECD55999-F773-426E-84DF-C9A336805810",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote:
      "Every way of classifying a thing is but a way of handling it for some particular purpose.",
  },
  {
    work: "The Principles of Psychology",
    year: "1890 AD",
    internalID: "165",
    id: "EA5E3966-6CAF-463E-BE7B-72C0C05FC9FE",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote:
      "An act has no ethical quality whatever unless it be chosen out of several all equally possible.",
  },
  {
    work: "The Principles of Psychology",
    year: "1890 AD",
    internalID: "167",
    id: "AE39930F-2D46-4032-8F7D-C9B6DDC38C41",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote:
      "There is no more miserable human being than one in whom nothing is habitual but indecision.",
  },
  {
    work: "Pragmatism: A New Name for Some Old Ways of Thinking",
    year: "1907 AD",
    internalID: "168",
    id: "F10AB296-04BD-4283-AC8F-C904DA4FC1AF",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote:
      "Truth happens to an idea. It becomes true, is made true by events. Its verity is in fact an event, a process: the process namely of its verifying itself, its veri-fication. Its validity is the process of its valid-ation.",
  },
  {
    work: "The Moral Equivalent of War",
    year: "1906 AD",
    internalID: "169",
    id: "7DACE2B7-20A5-4947-B246-540A5E4EF7DE",
    philosopher: {
      id: "779AABA4-26E6-4437-A979-03B83C75BA30",
    },
    quote:
      "I will now confess my own utopia. I devoutly believe in the reign of peace and in the gradual advent of some sort of socialistic equilibrium. The fatalistic view of the war function is to me nonsense, for I know that war-making is due to definite motives and subject to prudential checks and reasonable criticisms, just like any other form of enterprise.",
  },
  {
    work: "Quoted by Plato in Symposium",
    year: "385 BC",
    internalID: "17",
    id: "BD81EAC0-70BA-404D-8B9C-FAD8F1C846C9",
    philosopher: {
      id: "3F7ED55D-F092-445A-99BB-3C232FC9A132",
    },
    quote:
      "I only wish that wisdom were the kind of thing that flowed … from the vessel that was full to the one that was empty.",
  },
  {
    work: "The Problems of Philosophy",
    year: "1912 AD",
    internalID: "170",
    id: "9FBAA4C1-C4DB-43B4-9751-CBF92E77B6AF",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "Is there any knowledge in the world which is so certain that no reasonable man could doubt it?",
  },
  {
    work: "Our Knowledge of the External World",
    year: "1914 AD",
    internalID: "171",
    id: "B8F0AF9C-978F-4768-9A6D-B0331B9A88A1",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "Reason is a harmonising, controlling force rather than a creative one. Even in the most purely logical realms, it is insight that first arrives at what is new.",
  },
  {
    work: "Why Men Fight",
    year: "1917 AD",
    internalID: "172",
    id: "90690B47-8222-4DE5-86A7-11104D673290",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "Men fear thought as they fear nothing else on earth – more than ruin, more even than death.",
  },
  {
    work: "Proposed Roads To Freedom",
    year: "1918 AD",
    internalID: "173",
    id: "311CAEB1-0B5A-447B-AECB-62293B210E13",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "Often and often, a marriage hardly differs from prostitution except by being harder to escape from.",
  },
  {
    work: "Proposed Roads To Freedom",
    year: "1918 AD",
    internalID: "174",
    id: "9E0CA403-ACEA-4296-97B3-001B5E45B331",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "My own opinion—which I may as well indicate at the outset—is that pure Anarchism, though it should be the ultimate ideal, to which society should continually approximate, is for the present impossible, and would not survive more than a year or two at most if it were adopted.",
  },
  {
    work: "Proposed Roads To Freedom",
    year: "1918 AD",
    internalID: "175",
    id: "A91F4BD6-9605-4074-8F60-0226FC9224AD",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "Many of the actions by which men have become rich are far more harmful to the community than the obscure crimes of poor men, yet they go unpunished because they do not interfere with the existing order.",
  },
  {
    work: "Principles of Mathematics",
    year: "1903 AD",
    internalID: "176",
    id: "98565A5A-DD23-4AED-B10F-284781D60190",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      "The fact that all Mathematics is Symbolic Logic is one of the greatest discoveries of our age.",
  },
  {
    work: "Introduction to Mathematical Philosophy",
    year: "1919 AD",
    internalID: "177",
    id: "ED1C3732-8F1F-41B8-B4E5-4146B7A268AA",
    philosopher: {
      id: "FA2E9B06-057A-44A6-AD55-0771949584D3",
    },
    quote:
      'The method of "postulating" what we want has many advantages; they are the same as the advantages of theft over honest toil',
  },
  {
    work: "Letter on Humanism",
    year: "1947 AD",
    internalID: "178",
    id: "2CC274E0-A279-449B-9B09-BF340741AA03",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote:
      "The human being is not the lord of beings, but the shepherd of Being.",
  },
  {
    work: "The Question Concerning Technology",
    year: "1954 AD",
    internalID: "179",
    id: "89955AB7-1ED6-4351-BFF1-0281A61947B7",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote:
      "Everywhere we remain unfree and chained to technology, whether we passionately affirm or deny it.",
  },
  {
    work: "Quoted by Plato in Theaetetus",
    year: "369 BC",
    internalID: "18",
    id: "EEE22DCB-F935-4A18-B44B-778C589FA4B4",
    philosopher: {
      id: "3F7ED55D-F092-445A-99BB-3C232FC9A132",
    },
    quote:
      "Wonder is the feeling of a philosopher, and philosophy begins in wonder.",
  },
  {
    work: "Being and Time",
    year: "1927 AD",
    internalID: "180",
    id: "5009FA24-A900-4850-9F7E-7BD71C377E03",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote: "Being is only Being for Dasein",
  },
  {
    work: "Being and Time",
    year: "1927 AD",
    internalID: "181",
    id: "78CE32A2-1640-42D8-8398-FFFDAA22D1CF",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote: "We ourselves are the entities to be analyzed",
  },
  {
    work: "Being and Time",
    year: "1927 AD",
    internalID: "182",
    id: "5BD7FAB4-63F1-4F28-AC5E-4A87C2156584",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote:
      "Nevertheless, the ultimate business of philosophy is to preserve the force of the most elemental words in which Dasein expresses itself, and to keep the common understanding from levelling them off to that unintelligibility which functions in turn as a source of pseudo-problems.",
  },
  {
    work: "Being and Time",
    year: "1927 AD",
    internalID: "183",
    id: "A9DC6C5E-C4D5-4168-9956-62159BAB8A89",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote: "Death is the possibility of the absolute impossibility of Dasein.",
  },
  {
    work: "Letter on Humanism",
    year: "1947 AD",
    internalID: "184",
    id: "55AA2CE8-4A7F-45ED-990D-27FBB3D45BC9",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote: "Language is the house of the truth of Being.",
  },
  {
    work: "Nietzsche",
    year: "1961 AD",
    internalID: "185",
    id: "4166D1C8-A1F2-444C-BFE3-7DA3B137C6DB",
    philosopher: {
      id: "8B5AF904-C30C-4656-A054-C55CF714F22A",
    },
    quote: "We do not “have” a body; rather, we “are” bodily.",
  },
  {
    work: "Tractatus Logico-Philosophicus",
    year: "1922 AD",
    internalID: "186",
    id: "EEDA2C0A-07C6-4079-BECC-97BAAC238948",
    philosopher: {
      id: "DDF1B09F-D509-4476-AE27-CB52146A6A41",
    },
    quote: "The world is the totality of facts, not things.",
  },
  {
    work: "Tractatus Logico-Philosophicus",
    year: "1922 AD",
    internalID: "187",
    id: "63D50966-6D1A-40BF-AD52-1EB00180D470",
    philosopher: {
      id: "DDF1B09F-D509-4476-AE27-CB52146A6A41",
    },
    quote:
      "The whole sense of the book might be summed up the following words: what can be said at all can be said clearly, and what we cannot talk about we must pass over in silence.",
  },
  {
    work: "Philosophical Investigations",
    year: "1953 AD",
    internalID: "188",
    id: "B0E1137E-4470-4BBD-AFE7-52D6E5658E05",
    philosopher: {
      id: "DDF1B09F-D509-4476-AE27-CB52146A6A41",
    },
    quote:
      "For a large class of cases — though not for all — in which we employ the word meaning it can be explained thus: the meaning of a word is its use in the language.",
  },
  {
    work: "Philosophical Investigations",
    year: "1953 AD",
    internalID: "189",
    id: "8C0E837C-4B76-4292-B7CF-791FB956B4DB",
    philosopher: {
      id: "DDF1B09F-D509-4476-AE27-CB52146A6A41",
    },
    quote:
      "Uttering a word is like striking a note on the keyboard of the imagination.",
  },
  {
    work: "Quoted by Plato in Gorgias",
    year: "380 BC",
    internalID: "19",
    id: "FBA85A74-28E6-44C8-A6DA-E16A9CAA1A24",
    philosopher: {
      id: "3F7ED55D-F092-445A-99BB-3C232FC9A132",
    },
    quote:
      "It would be better for me... that multitudes of men should disagree with me rather than that I, being one, should be out of harmony with myself.",
  },
  {
    work: "Philosophical Investigations",
    year: "1953 AD",
    internalID: "190",
    id: "AA995297-9A7F-4C89-B3B3-95BA7BFF4EB2",
    philosopher: {
      id: "DDF1B09F-D509-4476-AE27-CB52146A6A41",
    },
    quote:
      "So in the end when one is doing philosophy one gets to the point where one would like just to emit an inarticulate sound.",
  },
  {
    work: "Existentialism Is a Humanism",
    year: "1946 AD",
    internalID: "191",
    id: "3F5EE459-83EB-4DE6-B9A2-849744BAA60B",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote:
      "What do we mean by saying that existence precedes essence? We mean that man first of all exists, encounters himself, surges up in the world – and defines himself afterwards.",
  },
  {
    work: "Nausea",
    year: "1938 AD",
    internalID: "192",
    id: "1C0B7807-9A63-4DAE-9DD4-05F032EBD073",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote: "I exist, that is all, and I find it nauseating.",
  },
  {
    work: "Nausea",
    year: "1938 AD",
    internalID: "193",
    id: "281A2D77-714E-4F0E-85A9-DECF7246C486",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote:
      "My thought is me: that's why I can't stop. I exist because I think … and I can't prevent myself from thinking.",
  },
  {
    work: "Being and Nothingness",
    year: "1943 AD",
    internalID: "194",
    id: "58FC80D9-9A07-4D19-87AF-7F92725665C5",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote:
      "I am responsible for everything…except for my very responsibility, for I am not the foundation of my being.",
  },
  {
    work: "Being and Nothingness",
    year: "1943 AD",
    internalID: "195",
    id: "A3959402-97B6-47F5-AFF1-B3A8967810EA",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote: "Nothingness haunts being.",
  },
  {
    work: "Being and Nothingness",
    year: "1943 AD",
    internalID: "196",
    id: "6CAC91BD-C960-4ECB-952F-BA0C02F8D991",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote:
      "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
  },
  {
    work: "Being and Nothingness",
    year: "1943 AD",
    internalID: "197",
    id: "7375F2B2-B2A6-4151-BE5E-63B0105D5EC5",
    philosopher: {
      id: "5C4140C8-E55F-42D3-A1A6-952D31F524F9",
    },
    quote:
      "Life has no meaning a priori … It is up to you to give it a meaning, and value is nothing but the meaning that you choose.",
  },
  {
    work: "The Myth of Sisyphus",
    year: "1942 AD",
    internalID: "199",
    id: "0B180098-14FF-4F59-92F0-D20525B21CC8",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "There is but one truly serious philosophical problem, and that is suicide. Judging whether life is or is not worth living amounts to answering the fundamental question of philosophy.",
  },
  {
    work: "",
    year: "",
    internalID: "2",
    id: "CA85FEE9-505F-4113-AD2A-F3089EEA281D",
    philosopher: {
      id: "F8E59A25-343E-4ACA-ACB2-BFC9514488B2",
    },
    quote:
      "There is geometry in the humming of the strings, there is music in the spacing of the spheres.",
  },
  {
    work: "",
    year: "",
    internalID: "20",
    id: "18024C8A-0560-4826-9231-138EAD648125",
    philosopher: {
      id: "3F7ED55D-F092-445A-99BB-3C232FC9A132",
    },
    quote: "I cannot teach anybody anything. I can only make them think.",
  },
  {
    work: "",
    year: "1938 AD",
    internalID: "200",
    id: "DE071838-C5F0-4123-9D8B-16E1ACE740F2",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote: "A novel is never anything but a philosophy put into images.",
  },
  {
    work: "",
    year: "1957 AD",
    internalID: "201",
    id: "104B4F9E-A4C0-40DA-A9DE-29607AEE7AD1",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote: "With rebellion, awareness is born.",
  },
  {
    work: "The Myth of Sisyphus",
    year: "1942 AD",
    internalID: "202",
    id: "8234E433-DCB7-4A96-96BC-EB0176192A57",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "This divorce between man and his life, the actor and his setting, is properly the feeling of absurdity.",
  },
  {
    work: "The Myth of Sisyphus",
    year: "1942 AD",
    internalID: "203",
    id: "A2C4B32F-4AD6-48DC-97F4-32774B971402",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "At any street corner the feeling of absurdity can strike any man in the face.",
  },
  {
    work: "The Myth of Sisyphus",
    year: "1942 AD",
    internalID: "204",
    id: "DA94B3C7-059B-4386-956C-D9CE1DD6EF5F",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "To two men living the same number of years, the world always provides the same sum of experiences. It is up to us to be conscious of them.",
  },
  {
    work: "The Plague",
    year: "1947 AD",
    internalID: "205",
    id: "F1A15E2D-045B-4BAE-AFFF-80872A05E821",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "When a war breaks out, people say: “It's too stupid; it can't last long.” But though the war may well be “too stupid,” that doesn't prevent its lasting. Stupidity has a knack of getting its way; as we should see if we were not always so much wrapped up in ourselves.",
  },
  {
    work: "The Rebel",
    year: "1951 AD",
    internalID: "206",
    id: "EB83C6F2-7C9F-460B-9091-B9C789ED1FC1",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "The most elementary form of rebellion, paradoxically, expresses an aspiration for order.",
  },
  {
    work: "The Rebel",
    year: "1951 AD",
    internalID: "207",
    id: "DBA210E7-0216-4206-B66D-32EF061A925A",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "Absolute freedom mocks at justice. Absolute justice denies freedom. To be fruitful, the two ideas must find their limits in each other.",
  },
  {
    work: "The Stranger",
    year: "1942 AD",
    internalID: "208",
    id: "ADDC4A5C-44A0-49F0-99EC-ADD22244A343",
    philosopher: {
      id: "68E5964C-2753-4873-8782-E95BDA30FD66",
    },
    quote:
      "I was assailed by memories of a life that wasn't mine anymore, but one in which I'd found the simplest and most lasting joys.",
  },
  {
    work: "History of Sexuality",
    year: "1984 AD",
    internalID: "209",
    id: "CB1B2B5D-17CD-45E0-93D8-59CD9CA0A9E7",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote:
      "The most defenseless tenderness and the bloodiest of powers have a similar need of confession. Western man has become a confessing animal.",
  },
  {
    work: "Cratylus",
    year: "",
    internalID: "21",
    id: "50270C13-9286-4F1A-ABC2-BB58E837E7BA",
    philosopher: {
      id: "4B7B8E3A-A01C-41B5-89B7-F6464C64A104",
    },
    quote: "I shall assume that your silence gives consent",
  },
  {
    work: "History of Sexuality",
    year: "1984 AD",
    internalID: "210",
    id: "91D3B368-A8B2-4B59-8B64-CE22D731A17B",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote:
      "Discourses are tactical elements or blocks operating in the field of force relations; there can exist different and even contradictory discourses within the same strategy; they can, on the contrary, circulate without changing their form from one strategy to another, opposing strategy.",
  },
  {
    work: "Truth, Power, Self",
    year: "1982 AD",
    internalID: "211",
    id: "F4236316-923E-4F67-9CE6-029AE60A4158",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote:
      "I don't feel that it is necessary to know exactly what I am. The main interest in life and work is to become someone else that you were not in the beginning.",
  },
  {
    work: "Lectures on the Will to Know",
    year: "1970 AD",
    internalID: "212",
    id: "BDCBA227-8817-441B-AF93-5C253B14A4FD",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote:
      "There is hardly a philosophy which has not invoked something like the will or desire to know, the love of truth, etcetera. But, in truth, very few philosophers—apart, perhaps, from Spinoza and Schopenhauer—have accorded it more than a marginal status; as if there was no need for philosophy to say first of all what the name that it bears actually refers to.",
  },
  {
    work: "Lectures on the Will to Know",
    year: "1970 AD",
    internalID: "213",
    id: "F0D2012E-4221-4860-868F-D889C4119740",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote:
      "Nietzsche was the first to release the desire to know from the sovereignty of knowledge itself: to re-establish the distance and exteriority that Aristotle cancelled.",
  },
  {
    work: "Discipline and Punish",
    year: "1977 AD",
    internalID: "214",
    id: "6C0B3915-8E15-4F44-B701-7EE7E5B44B2F",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote: "The soul is the prison of the body.",
  },
  {
    work: "History of Madness",
    year: "1961 AD",
    internalID: "215",
    id: "FCEAD829-B4C2-4475-A673-571F2EA6BC61",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote: "Unreason is to reason as dazzlement is to daylight.",
  },
  {
    work: "What is Enlightenment?",
    year: "1978 AD",
    internalID: "216",
    id: "1FBCDD39-9DDE-4FA2-90DA-54114C412C57",
    philosopher: {
      id: "3998C923-0B91-4150-8F41-E74D27EC11E7",
    },
    quote:
      "The critical ontology of ourselves has to be considered not, certainly, as a theory, a doctrine, nor even as a permanent body of knowledge that is accumulating; it has to be conceived as an attitude, an ethos, a philosophical life in which the critique of what we are is at one and the same time the historical analysis of the limits that are imposed on us and an experiment with the possibility of going beyond them.",
  },
  {
    work: "Political Treatise",
    year: "1677 AD",
    internalID: "216",
    id: "DF7C2E76-5547-4489-877E-2427B6E22CD1",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote: "He who seeks equality between unequals seeks an absurdity.",
  },
  {
    work: "Political Treatise",
    year: "1677 AD",
    internalID: "217",
    id: "4A7E8D83-7D1E-4EF3-8F24-F2A18E4CE380",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote:
      "Philosophers conceive of the passions which harass us as vices into which men fall by their own fault, and, therefore, generally deride, bewail, or blame them, or execrate them, if they wish to seem unusually pious.",
  },
  {
    work: "Ethics",
    year: "1677 AD",
    internalID: "217",
    id: "36E83588-0DFE-4371-9571-1C405ABBD75B",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote:
      "A free man thinks of death least of all things; and his wisdom is a meditation not of death but of life.",
  },
  {
    work: "Political Treatise",
    year: "1677 AD",
    internalID: "218",
    id: "78573D55-B562-48C9-ADA1-0497539BB79B",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote:
      "All laws which can be broken without any injury to another, are counted but a laughing-stock, and are so far from bridling the desires and lusts of men, that on the contrary they stimulate them.",
  },
  {
    work: "On the Improvement of the Understanding",
    year: "1662 AD",
    internalID: "218",
    id: "8E1A156A-C7F5-4810-9674-4C87B83867EB",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote:
      "A definition, if it is to be called perfect, must explain the inmost essence of a thing, and must take care not to substitute for this any of its properties.",
  },
  {
    work: "Ethics",
    year: "1677 AD",
    internalID: "219",
    id: "CE5F3937-3124-4998-ABBC-8A349CA28CB6",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote: "Truth is a standard both of itself and of falsity",
  },
  {
    work: "Discours de métaphysique",
    year: "1686 AD",
    internalID: "219",
    id: "881785D7-A63E-4FC4-9C70-0A56032E5CA2",
    philosopher: {
      id: "C752B815-05B8-4CAC-805E-856A35B46952",
    },
    quote:
      "In whatever manner God created the world, it would always have been regular and in a certain general order. God, however, has chosen the most perfect, that is to say, the one which is at the same time the simplest in hypothesis and the richest in phenomena.",
  },
  {
    work: "The Republic",
    year: "380 BC",
    internalID: "22",
    id: "434CB75E-7CE7-4640-86ED-77A1D9B0EAB5",
    philosopher: {
      id: "4B7B8E3A-A01C-41B5-89B7-F6464C64A104",
    },
    quote:
      "The price good men pay for indifference to public affairs is to be ruled by evil men.",
  },
  {
    work: "Letter to Bourguet",
    year: "1712 AD",
    internalID: "220",
    id: "1AEB1EEB-9D72-4B86-835F-6FD8DB7492B1",
    philosopher: {
      id: "C752B815-05B8-4CAC-805E-856A35B46952",
    },
    quote:
      "I do not believe that a world without evil, preferable in order to ours, is possible; otherwise it would have been preferred.",
  },
  {
    work: "Political Treatise",
    year: "1677 AD",
    internalID: "220",
    id: "E4DB43FB-1CB9-4674-A4B7-C4294B29B422",
    philosopher: {
      id: "93D94133-3DC0-42B9-A212-4348EC053CF3",
    },
    quote:
      "Peace is not the absence of war, it is a virtue, a state of mind, a disposition of benevolence, confidence, justice.",
  },
  {
    work: "The Monadology",
    year: "1714 AD",
    internalID: "221",
    id: "EBB3D604-BE8E-455F-B746-CBF6F196715D",
    philosopher: {
      id: "C752B815-05B8-4CAC-805E-856A35B46952",
    },
    quote:
      "And as every present state of a simple substance is naturally a consequence of its preceding state, so its present is pregnant with its future.",
  },
  {
    work: "The Monadology",
    year: "1714 AD",
    internalID: "222",
    id: "8F3F55A5-98B7-4121-9721-FF63125B093F",
    philosopher: {
      id: "C752B815-05B8-4CAC-805E-856A35B46952",
    },
    quote:
      "Thus it may be said that not only the soul, the mirror of an indestructible universe, is indestructible, but also the animal itself, though its mechanism may often perish in part and take off or put on an organic slough.",
  },
  {
    work: "The Theory of Moral Sentiments",
    year: "1759 AD",
    internalID: "223",
    id: "59F26C89-02D7-4F82-AB40-259B1C490DAA",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "Every man is, no doubt, by nature, first and principally recommended to his own care; and as he is fitter to take care of himself than of any other person, it is fit and right that it should be so.",
  },
  {
    work: "The Theory of Moral Sentiments",
    year: "1759 AD",
    internalID: "224",
    id: "2CEFA6A3-B7CB-4440-A381-2088DE7319DD",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "When I endeavour to examine my own conduct, when I endeavour to pass sentence upon it, and either to approve or condemn it, it is evident that, in all such cases, I divide myself, as it were, into two persons; and that I, the examiner and judge, represent a different character from that other I, the person whose conduct is examined into and judged of.",
  },
  {
    work: "The Wealth of Nations",
    year: "1776 AD",
    internalID: "225",
    id: "C779F8EA-51EC-452D-9F5A-841992B1F5D6",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "Every individual is continually exerting himself to find out the most advantageous employment for whatever capital he can command…He intends only his own gain, and he is in this, as in many other cases, led by an invisible hand to promote an end which was not part of his intention.",
  },
  {
    work: "The Wealth of Nations",
    year: "1776 AD",
    internalID: "226",
    id: "BBAA7B0C-D124-4B51-B043-92EA5CDC77E0",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
  },
  {
    work: "The Wealth of Nations",
    year: "1776 AD",
    internalID: "227",
    id: "7D2AEEE6-80EB-4478-9BF3-EA4924724C9E",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "Labour was the first price, the original purchase-money that was paid for all things. It was not by gold or by silver, but by labour, that all the wealth of the world was originally purchased.",
  },
  {
    work: "The Wealth of Nations",
    year: "1776 AD",
    internalID: "228",
    id: "BED62D4E-6A02-4828-BABB-29C1A30A24E9",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "As soon as the land of any country has all become private property, the landlords, like all other men, love to reap where they never sowed, and demand a rent even for its natural produce.",
  },
  {
    work: "The Wealth of Nations",
    year: "1776 AD",
    internalID: "229",
    id: "8789330B-43DD-489C-AAE7-0C8E527A6564",
    philosopher: {
      id: "FB944B6B-3638-496F-A6CC-66C4250ED9AD",
    },
    quote:
      "Consumption is the sole end and purpose of all production; and the interest of the producer ought to be attended to, only so far as it may be necessary for promoting that of the consumer.",
  },
  {
    work: "Critias",
    year: "",
    internalID: "23",
    id: "F44D2DE9-2D70-4A2D-80B7-F5CC808A57C7",
    philosopher: {
      id: "4B7B8E3A-A01C-41B5-89B7-F6464C64A104",
    },
    quote:
      "All that is said by any of us can only be imitation and representation.",
  },
  {
    work: "An Introduction to the Principles of Morals and Legislation",
    year: "1789 AD",
    internalID: "230",
    id: "7EDBDA02-CC8B-48A4-8429-1D77B660B622",
    philosopher: {
      id: "0775D2F7-5F3D-4003-B101-A27738F1DF5D",
    },
    quote:
      "Nature has placed mankind under the governance of two sovereign masters, pain and pleasure. It is for them alone to point out what we ought to do as well as to determine what we shall do.",
  },
  {
    work: "Principles of Legislation",
    year: "1830 AD",
    internalID: "231",
    id: "13274D4B-0C81-4E79-BECC-4288698CB485",
    philosopher: {
      id: "0775D2F7-5F3D-4003-B101-A27738F1DF5D",
    },
    quote:
      "Every law is an evil, for every law is an infraction of liberty: And I repeat that government has but a choice of evils",
  },
  {
    work: "An Introduction to the Principles of Morals and Legislation",
    year: "1789 AD",
    internalID: "232",
    id: "F469E3EA-C12B-4CFA-98A6-C796923F0003",
    philosopher: {
      id: "0775D2F7-5F3D-4003-B101-A27738F1DF5D",
    },
    quote:
      "The question is not, “Can they reason?” nor, “Can they talk?” but “Can they suffer?”",
  },
  {
    work: "An Introduction to the Principles of Morals and Legislation",
    year: "1789 AD",
    internalID: "233",
    id: "7FA908B8-576F-4BC0-9231-556D9BF4ADEA",
    philosopher: {
      id: "0775D2F7-5F3D-4003-B101-A27738F1DF5D",
    },
    quote: "...the rarest of all human qualities is consistency.",
  },
  {
    work: "On Liberty",
    year: "1859 AD",
    internalID: "234",
    id: "E44DAC9F-408F-4B3B-8941-07562954FB17",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "If all mankind minus one, were of one opinion, and only one person were of the contrary opinion, mankind would be no more justified in silencing that one person, than he, if he had the power, would be justified in silencing mankind.",
  },
  {
    work: "The Contest in America",
    year: "1862 AD",
    internalID: "235",
    id: "12246166-42D1-4A65-994B-F153CDC0F406",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "War is an ugly thing, but not the ugliest of things: the decayed and degraded state of moral and patriotic feeling which thinks that nothing is worth a war, is much worse.",
  },
  {
    work: "Inaugural Address Delivered to the University of St. Andrews",
    year: "1867 AD",
    internalID: "236",
    id: "846012F4-3099-4B8A-930C-5C9B24A301A4",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "Let not any one pacify his conscience by the delusion that he can do no harm if he takes no part, and forms no opinion. Bad men need nothing more to compass their ends, than that good men should look on and do nothing.",
  },
  {
    work: "On Liberty",
    year: "1859 AD",
    internalID: "237",
    id: "C66F84F4-914F-4BE9-BF97-E10779A96B0B",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "The only purpose for which power can be rightfully exercised over any member of a civilized community, against his will, is to prevent harm to others.",
  },
  {
    work: "A System of Logic",
    year: "1843 AD",
    internalID: "238",
    id: "2365B59B-52F1-4BD9-B52A-2F9DABB97D4E",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "As there were black swans, though civilized people had existed for three thousand years on the earth without meeting with them...The uniform experience, therefore, of the inhabitants of the known world, agreeing in a common result, without one known instance of deviation from that result, is not always sufficient to establish a general conclusion.",
  },
  {
    work: "Utilitarianism",
    year: "1861 AD",
    internalID: "239",
    id: "9662EE11-9A48-4497-BAE4-BAC94BC88BBB",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "It is better to be a human dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.",
  },
  {
    work: "Protagoras",
    year: "",
    internalID: "24",
    id: "1CC3859E-D017-4F04-8680-4FE8B345E5E1",
    philosopher: {
      id: "4B7B8E3A-A01C-41B5-89B7-F6464C64A104",
    },
    quote:
      "Knowledge is the food of the soul; and we must take care, my friend, that the Sophist does not deceive us when he praises what he sells, like the dealers wholesale or retail who sell the food of the body; for they praise indiscriminately all their goods, without knowing what are really beneficial or hurtful.",
  },
  {
    work: "The Subjection of Women",
    year: "1869 AD",
    internalID: "240",
    id: "94BFF91C-EF55-4E98-B2E8-77E0D97DDBD7",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "In early times, the great majority of the male sex were slaves, as well as the whole of the female. And many ages elapsed, some of them ages of high cultivation, before any thinker was bold enough to question the rightfulness, and the absolute social necessity, either of the one slavery or of the other.",
  },
  {
    work: "The Subjection of Women",
    year: "1869 AD",
    internalID: "241",
    id: "1D6AC0E9-F9B7-4201-A76C-2672522DDC23",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "That the principle which regulates the existing social relations between the two sexes — the legal subordination of one sex to the other — is wrong itself, and now one of the chief hindrances to human improvement; and that it ought to be replaced by a principle of perfect equality, admitting no power or privilege on the one side, nor disability on the other.",
  },
  {
    work: "On Nature",
    year: "1874 AD",
    internalID: "242",
    id: "CF64A8D2-7D78-453F-8E4E-5FE080579ECD",
    philosopher: {
      id: "7051875D-8E55-451A-A540-A1044F7F8015",
    },
    quote:
      "That a thing is unnatural, in any precise meaning which can be attached to the word, is no argument for its being blamable; since the most criminal actions are to a being like man not more unnatural than most of the virtues.",
  },
  {
    work: "What is Property?",
    year: "1840 AD",
    internalID: "243",
    id: "34440AA9-A4A8-480C-B1AA-B8433440E153",
    philosopher: {
      id: "EA176C3B-45C2-4814-8BC5-EF69D2643F4A",
    },
    quote:
      "Property is robbery! That is the war-cry of '93! That is the signal of revolutions!",
  },
  {
    work: "Confessions of a Revolutionary",
    year: "1849 AD",
    internalID: "244",
    id: "0F6C5C08-73A8-42E4-AB54-049CA02E6476",
    philosopher: {
      id: "EA176C3B-45C2-4814-8BC5-EF69D2643F4A",
    },
    quote:
      "Power, instrument of the collective force, created in society to serve as mediator between capital and labor, has become inescapably enchained to capital and directed against the proletariat.",
  },
  {
    work: "What is Property?",
    year: "1840 AD",
    internalID: "245",
    id: "880A295A-3B54-4E7C-A9AB-3065B62EEDDE",
    philosopher: {
      id: "EA176C3B-45C2-4814-8BC5-EF69D2643F4A",
    },
    quote:
      "AXIOM. — Property is the Right of Increase claimed by the Proprietor over any thing which he has stamped as his own.",
  },
  {
    work: "What is Property?",
    year: "1840 AD",
    internalID: "246",
    id: "B13664F2-0A07-41BD-A1BC-82D3A9294EEF",
    philosopher: {
      id: "EA176C3B-45C2-4814-8BC5-EF69D2643F4A",
    },
    quote:
      "Communism is inequality, but not as property is. Property is the exploitation of the weak by the strong. Communism is the exploitation of the strong by the weak.",
  },
  {
    work: "What is Property?",
    year: "1840 AD",
    internalID: "247",
    id: "599F0884-152C-4E1D-BB50-8423AB1E6E5B",
    philosopher: {
      id: "EA176C3B-45C2-4814-8BC5-EF69D2643F4A",
    },
    quote:
      "As man seeks justice in equality, so society seeks order in anarchy.",
  },
  {
    work: "Du principe Fédératif",
    year: "1863 AD",
    internalID: "248",
    id: "95326299-5DF0-4ABC-8E5F-8492DA513A82",
    philosopher: {
      id: "EA176C3B-45C2-4814-8BC5-EF69D2643F4A",
    },
    quote:
      "All my economic ideas as developed over twenty-five years can be summed up in the words: agricultural-industrial federation. All my political ideas boil down to a similar formula: political federation or decentralization.",
  },
  {
    work: "Cartesian Meditations",
    year: "1931 AD",
    internalID: "249",
    id: "21CFE385-6F90-4AC1-BCF1-89C38587B11D",
    philosopher: {
      id: "B03D878D-9657-4EB1-A886-59C19F52BDA5",
    },
    quote:
      'First, anyone who seriously intends to become a philosopher must "once in his life" withdraw into himself and attempt, within himself, to overthrow and build anew all the sciences that, up to then, he has been accepting.',
  },
  {
    work: "Phaedrus",
    year: "370 BC",
    internalID: "25",
    id: "B800D12C-8227-41D8-AA18-732F91381BD5",
    philosopher: {
      id: "4B7B8E3A-A01C-41B5-89B7-F6464C64A104",
    },
    quote:
      "Oh dear Pan and all the other Gods of this place, grant that I may be beautiful inside.",
  },
  {
    work: "Pure Phenomenology",
    year: "1917 AD",
    internalID: "250",
    id: "25F6CD63-B2B1-4B7F-ADFC-2C278B6D11A6",
    philosopher: {
      id: "B03D878D-9657-4EB1-A886-59C19F52BDA5",
    },
    quote:
      "A new fundamental science, pure phenomenology, has developed within philosophy: This is a science of a thoroughly new type and endless scope. It is inferior in methodological rigor to none of the modern sciences. All philosophical disciplines are rooted in pure phenomenology, through whose development, and through it alone, they obtain their proper force.",
  },
  {
    work: "Pure Phenomenology",
    year: "1917 AD",
    internalID: "251",
    id: "87F7FB15-E853-46C4-A173-32A4EE5B8BE2",
    philosopher: {
      id: "B03D878D-9657-4EB1-A886-59C19F52BDA5",
    },
    quote:
      "To every object there corresponds an ideally closed system of truths that are true of it and, on the other hand, an ideal system of possible cognitive processes by virtue of which the object and the truths about it would be given to any cognitive subject.",
  },
  {
    work: "Pure Phenomenology",
    year: "1917 AD",
    internalID: "252",
    id: "BFAF425E-3324-458A-B7D6-AAC8EA0B4940",
    philosopher: {
      id: "B03D878D-9657-4EB1-A886-59C19F52BDA5",
    },
    quote: "Experience by itself is not science.",
  },
  {
    work: "The Tragedy of Woman's Emancipation",
    year: "1906 AD",
    internalID: "253",
    id: "8154F401-04C0-45CC-BD96-7687C41DAF8D",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "There is no hope even that woman, with her right to vote, will ever purify politics.",
  },
  {
    work: "The Tragedy of Woman's Emancipation",
    year: "1906 AD",
    internalID: "254",
    id: "98CEBCB9-7420-44FD-AA16-2AD9C79F4AFB",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "The demand for equal rights in every vocation of life is just and fair; but, after all, the most vital right is the right to love and be loved.",
  },
  {
    work: "The Philosophy of Atheism",
    year: "1916 AD",
    internalID: "255",
    id: "A2F24B33-D6DE-4241-B49C-CE7724BC9E2C",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      'It is characteristic of theistic "tolerance" that no one really cares what the people believe in, just so they believe or pretend to believe.',
  },
  {
    work: "What is Patriotism?",
    year: "1908 AD",
    internalID: "256",
    id: "8EC6615B-FD29-43BD-95E0-B771AA252449",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "Thinking men and women the world over are beginning to realize that patriotism is too narrow and limited a conception to meet the necessities of our time.",
  },
  {
    work: "Anarchism: What it Really Stands For",
    year: "1910 AD",
    internalID: "257",
    id: "B9EE29F8-3791-400D-BDF2-37867618C46C",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "Anarchism is the only philosophy which brings to man the consciousness of himself; which maintains that God, the State, and society are non-existent, that their promises are null and void, since they can be fullfilled only through man's subordination.",
  },
  {
    work: "What is Patriotism?",
    year: "1908 AD",
    internalID: "258",
    id: "17868960-104B-4509-8F21-EC7DC81A380C",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "We Americans claim to be a peace-loving people. We hate bloodshed; we are opposed to violence. Yet we go into spasms of joy over the possibility of projecting dynamite bombs from flying machines upon helpless citizens.",
  },
  {
    work: "What is Patriotism?",
    year: "1908 AD",
    internalID: "259",
    id: "C464A8E6-D085-4C31-8089-91A3D0A663CE",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote: "...the greatest bulwark of capitalism is militarism.",
  },
  {
    work: "Metaphysics",
    year: "360 BC",
    internalID: "26",
    id: "859D07B9-F24F-40B6-AA3C-36DDC87E45E8",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote:
      "All men by nature desire to know. An indication of this is the delight we take in our senses; for even apart from their usefulness they are loved for themselves; and above all others the sense of sight.",
  },
  {
    work: "The Failure of Christianity",
    year: "1913 AD",
    internalID: "260",
    id: "7E15F48D-3156-4E33-98EC-5A88AA427A69",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "The Fathers of the Church can well afford to preach the gospel of Christ. It contains nothing dangerous to the regime of authority and wealth; it stands for self-denial and self-abnegation, for penance and regret, and is absolutely inert in the face of every [in]dignity, every outrage imposed upon mankind.",
  },
  {
    work: "Intellectual Proletarians",
    year: "1914 AD",
    internalID: "261",
    id: "B8CD1F45-A8EB-45AF-A5A3-203782D8F76B",
    philosopher: {
      id: "80EC6998-C414-4615-90F8-D7B18D5B3854",
    },
    quote:
      "Those who will not worship at the shrine of money, need not hope for recognition. On the other hand, they will also not have to think other people’s thoughts or wear other people’s political clothes. They will not have to proclaim as true that which is false, nor praise that as humanitarian which is brutal.",
  },
  {
    work: "Die russische Revolution. Eine kritische Würdigung",
    year: "1919 AD",
    internalID: "262",
    id: "01AAA5EF-345D-4688-8712-D100150DFBDA",
    philosopher: {
      id: "20B6AF0E-BCAA-4BEC-9C65-49E2BEC41585",
    },
    quote:
      "Freedom only for the members of the government, only for the members of the Party — though they are quite numerous — is no freedom at all. Freedom is always the freedom of dissenters.",
  },
  {
    work: "Order reigns in Berlin",
    year: "1919 AD",
    internalID: "263",
    id: "18DE0C23-4B62-4C62-98A2-0E16805167B5",
    philosopher: {
      id: "20B6AF0E-BCAA-4BEC-9C65-49E2BEC41585",
    },
    quote:
      "Tomorrow the revolution will 'rise up again, clashing its weapons,' and to your horror it will proclaim with trumpets blazing: I was, I am, I shall be!",
  },
  {
    work: "Peace Utopias",
    year: "1911 AD",
    internalID: "264",
    id: "43103DF7-2BA0-4853-8D1D-11978A6D103A",
    philosopher: {
      id: "20B6AF0E-BCAA-4BEC-9C65-49E2BEC41585",
    },
    quote:
      "The friends of peace in bourgeois circles believe that world peace and disarmament can be realised within the frame-work of the present social order, whereas we, who base ourselves on the materialistic conception of history and on scientific socialism, are convinced that militarism can only be abolished from the world with the destruction of the capitalist class state.",
  },
  {
    work: "The Junius Pamphlet",
    year: "1915 AD",
    internalID: "265",
    id: "8E4927D4-34B2-4415-A018-FE2754C3109F",
    philosopher: {
      id: "20B6AF0E-BCAA-4BEC-9C65-49E2BEC41585",
    },
    quote:
      "Bourgeois class domination is undoubtedly an historical necessity, but, so too, the rising of the working class against it. Capital is an historical necessity, but, so too, its grave digger, the socialist proletariat.",
  },
  {
    work: "The Open Society and Its Enemies",
    year: "1945 AD",
    internalID: "266",
    id: "B6FE71B5-AEDB-4FC2-8CE6-138C2D3ED86B",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "No rational argument will have a rational effect on a man who does not want to adopt a rational attitude.",
  },
  {
    work: "The Open Society and Its Enemies",
    year: "1945 AD",
    internalID: "267",
    id: "0076570C-C8D0-4B6B-AB72-C668405F0D41",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "Unlimited tolerance must lead to the disappearance of tolerance. If we extend unlimited tolerance even to those who are intolerant, if we are not prepared to defend a tolerant society against the onslaught of the intolerant, then the tolerant will be destroyed, and tolerance with them.",
  },
  {
    work: "In Passing: Condolences and Complaints on Death, Dying, and Related Disappointments",
    year: "",
    internalID: "268",
    id: "D9DD7DFA-065F-433E-85A0-AA4A705C36A9",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "Those who promise us paradise on earth never produced anything but a hell.",
  },
  {
    work: "The Logic of Scientific Discovery",
    year: "1934 AD",
    internalID: "269",
    id: "14FCB8F7-AF55-4432-A9F9-8630B3EE88E4",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "The game of science is, in principle, without end. He who decides one day that scientific statements do not call for any further test, and that they can be regarded as finally verified, retires from the game.",
  },
  {
    work: "Metaphysics",
    year: "360 BC",
    internalID: "27",
    id: "B919DF0E-0C77-435F-85E2-494B5951478C",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote:
      "That which is desirable on its own account and for the sake of knowing it is more of the nature of wisdom than that which is desirable on account of its results.",
  },
  {
    work: "The Poverty of Historicism",
    year: "1957 AD",
    internalID: "270",
    id: "7D2B625B-D4EB-4832-A778-57BCF94CF120",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "If we are uncritical we shall always find what we want: we shall look for, and find, confirmations, and we shall look away from, and not see, whatever might be dangerous to our pet theories.",
  },
  {
    work: "",
    year: "",
    internalID: "271",
    id: "16F72EC0-E6C3-4CA4-AA45-C16CCEE8A698",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "Philosophers should consider the fact that the greatest happiness principle can easily be made an excuse for a benevolent dictatorship.",
  },
  {
    work: "The Logic of Scientific Discovery",
    year: "1934 AD",
    internalID: "272",
    id: "7DD2D293-F503-4F84-AE05-2AF86F10C84B",
    philosopher: {
      id: "E3315583-3AD8-4AD0-BF0B-603D92C1D731",
    },
    quote:
      "...no matter how many instances of white swans we may have observed, this does not justify the conclusion that all swans are white.",
  },
  {
    work: "Dialectic of Enlightenment",
    year: "1944 AD",
    internalID: "273",
    id: "B82E6BA1-7FB7-428B-B4B9-D6BD80848D84",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "Bourgeois society is ruled by equivalence. It makes the dissimilar comparable by reducing it to abstract quantities. To the enlightenment, that which does not reduce to numbers, and ultimately to the one, becomes illusion.",
  },
  {
    work: "Dialectic of Enlightenment",
    year: "1944 AD",
    internalID: "274",
    id: "94E6C60D-868D-43CE-B667-3567C57C22D5",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "The blessing that the market does not ask about birth is paid for in the exchange society by the fact that the possibilities conferred by birth are molded to fit the production of goods that can be bought on the market.",
  },
  {
    work: "Dialectic of Enlightenment",
    year: "1944 AD",
    internalID: "275",
    id: "D6147837-8BFD-46CE-92C5-5848F3828FA7",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "The metaphysical apologia at least betrayed the injustice of the established order through the incongruence of concept and reality. The impartiality of scientific language deprived what was powerless of the strength to make itself heard and merely provided the existing order with a neutral sign for itself. Such neutrality is more metaphysical than metaphysics.",
  },
  {
    work: "On the Fetish Character in Music and the Regression of Listening",
    year: "1938 AD",
    internalID: "276",
    id: "A8573F6B-BB39-4275-9074-770E7C7A8977",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "Even the most insensitive hit song enthusiast cannot always escape the feeling that the child with a sweet tooth comes to know in the candy store.",
  },
  {
    work: "Minima Moralia",
    year: "1951 AD",
    internalID: "277",
    id: "28165F38-AF6F-440A-A7C5-0F62D675D816",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "In the end, glorification of splendid underdogs is nothing other than the glorification of the splendid system that makes them so.",
  },
  {
    work: "Culture Industry Reconsidered",
    year: "1963 AD",
    internalID: "278",
    id: "C72ABDF4-1E99-455E-963B-5F937AE681DE",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "In the products of the culture industry human beings get into trouble only so that they can be rescued unharmed, usually by representatives of a benevolent collective; and then, in illusory harmony, they are reconciled with the general interest whose demands they had initially experienced as irreconcilable with their own.",
  },
  {
    work: "Why still philosophy?",
    year: "1963 AD",
    internalID: "279",
    id: "69926344-71F1-4E60-AF79-041702365568",
    philosopher: {
      id: "C9D4FE75-42D4-4F88-9E9D-A8ECCC08CB7C",
    },
    quote:
      "Being, in whose name Heidegger’s philosophy increasingly concentrates itself, is for him—as a pure self-presentation to passive consciousness—just as immediate, just as independent of the mediations of the subject as the facts and the sensory data are for the positivists. In both philosophical movements thinking becomes a necessary evil and is broadly discredited.",
  },
  {
    work: "Nicomachean Ethics",
    year: "",
    internalID: "28",
    id: "7D3738C8-DF5C-40EF-98D4-72B8CB4CA71A",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote:
      "It is the mark of an educated man to look for precision in each class of things just so far as the nature of the subject admits; it is evidently equally foolish to accept probable reasoning from a mathematician and to demand from a rhetorician scientific proofs.",
  },
  {
    work: "Capitalism: The Unknown Ideal",
    year: "1966 AD",
    internalID: "280",
    id: "88EC32F3-AE21-43D1-8CDA-FD6F605A70A4",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote:
      "Remember also that the smallest minority on earth is the individual. Those who deny individual rights, cannot claim to be defenders of minorities.",
  },
  {
    work: "Capitalism: The Unknown Ideal",
    year: "1966 AD",
    internalID: "281",
    id: "CC68AECA-D734-480E-BC6A-8835E69C3902",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote:
      'Let anyone who believes that a high standard of living is the achievement of labor unions and government controls ask himself the following question: If one had a "time machine" and transported the united labor chieftains of America, plus three million government bureaucrats, back to the tenth century—would they be able to provide the medieval serf with electric light, refrigerators, automobiles, and television sets?',
  },
  {
    work: "Anthem",
    year: "1937 AD",
    internalID: "282",
    id: "5BFE0D40-78C9-4220-9ED5-03F08BF9204E",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote: "In the temple of his spirit, each man is alone.",
  },
  {
    work: "Anthem",
    year: "1937 AD",
    internalID: "283",
    id: "945F307A-8909-4D23-A541-08BA48BBB796",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote:
      "I need no warrant for being, and no word of sanction upon my being. I am the warrant and the sanction.",
  },
  {
    work: "Journals of Ayn Rand",
    year: "",
    internalID: "284",
    id: "54535BC0-0FFE-4A54-B77D-2D084CA833C4",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote:
      "Selfishness does not mean only to do things for one's self. One may do things, affecting others, for his own pleasure and benefit. This is not immoral, but the highest of morality.",
  },
  {
    work: "The Virtue of Selfishness",
    year: "1964 AD",
    internalID: "285",
    id: "6B3AAB18-DB07-41A3-8B0F-57AEBD2FD193",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote:
      "The moral cannibalism of all hedonist and altruist doctrines lies in the premise that the happiness of one man necessitates the injury of another.",
  },
  {
    work: "The Voice of Reason",
    year: "1989 AD",
    internalID: "286",
    id: "4361C408-D6A1-47CF-B95F-6745E89BDE10",
    philosopher: {
      id: "3ED20891-9043-47CC-BF2F-13F135A07246",
    },
    quote:
      "Every coercive monopoly was created by government intervention into the economy: by special privileges, such as franchises or subsidies, which closed the entry of competitors into a given field, by legislative action.",
  },
  {
    work: "The Life of the Mind",
    year: "",
    internalID: "287",
    id: "72859B8F-1038-4EF9-B53B-802E2CACA080",
    philosopher: {
      id: "E1D85DE9-595F-40A3-B281-E41B2A68F222",
    },
    quote:
      "The sad truth is that most evil is done by people who never make up their minds to be good or evil.",
  },
  {
    work: "Eichmann in Jerusalem",
    year: "1963 AD",
    internalID: "288",
    id: "E8FDC863-68F6-41CF-9FAD-0BD15EB7279E",
    philosopher: {
      id: "E1D85DE9-595F-40A3-B281-E41B2A68F222",
    },
    quote:
      "No punishment has ever possessed enough power of deterrence to prevent the commission of crimes. On the contrary, whatever the punishment, once a specific crime has appeared for the first time, its reappearance is more likely than its initial emergence could ever have been.",
  },
  {
    work: "The Origins of Totalitarianism",
    year: "1951 AD",
    internalID: "289",
    id: "3C660CCA-FE04-43C1-82CF-3CEFE4D316DF",
    philosopher: {
      id: "E1D85DE9-595F-40A3-B281-E41B2A68F222",
    },
    quote:
      "The concentration camps, by making death itself anonymous (making it impossible to find out whether a prisoner is dead or alive), robbed death of its meaning as the end of a fulfilled life.",
  },
  {
    work: "Nicomachean Ethics",
    year: "",
    internalID: "29",
    id: "E5DF3DA3-34FA-405F-91FC-F9A60DA2A957",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote: "Piety requires us to honor truth above our friends.",
  },
  {
    work: "Crises of the Republic",
    year: "1969 AD",
    internalID: "290",
    id: "79D1BFCB-DFDC-4A96-A9A0-7306D4C33B29",
    philosopher: {
      id: "E1D85DE9-595F-40A3-B281-E41B2A68F222",
    },
    quote:
      "Power and violence are opposites; where the one rules absolutely, the other is absent. Violence appears where power is in jeopardy, but left to its own course it ends in power's disappearance.",
  },
  {
    work: "Crises of the Republic",
    year: "1969 AD",
    internalID: "291",
    id: "29591DD1-8C72-4B80-8B84-24DD47501198",
    philosopher: {
      id: "E1D85DE9-595F-40A3-B281-E41B2A68F222",
    },
    quote:
      "Revolutionaries do not make revolutions! The revolutionaries are those who know when power is lying in the street and when they can pick it up. Armed uprising by itself has never yet led to revolution.",
  },
  {
    work: "The Origins of Totalitarianism",
    year: "1963 AD",
    internalID: "292",
    id: "BBA42BF2-986D-4215-9B9C-2B5FC12A17BC",
    philosopher: {
      id: "E1D85DE9-595F-40A3-B281-E41B2A68F222",
    },
    quote:
      "The trouble with Eichmann was precisely that so many were like him, and that the many were neither perverted nor sadistic, that they were, and still are, terribly and terrifyingly normal.",
  },
  {
    work: "Phenomenology of Perception",
    year: "1945 AD",
    internalID: "293",
    id: "C599D033-62E0-479E-BE1B-1B542E74CC9C",
    philosopher: {
      id: "E869677C-23CB-41F7-8F39-AB8F499CAAC2",
    },
    quote: "The world is nothing but 'world-as-meaning.'",
  },
  {
    work: "Phenomenology of Perception",
    year: "1945 AD",
    internalID: "294",
    id: "520B13EE-1298-4671-B59C-67B48E925284",
    philosopher: {
      id: "E869677C-23CB-41F7-8F39-AB8F499CAAC2",
    },
    quote: "Language transcends us and yet, we speak.",
  },
  {
    work: "In Praise of Philosophy",
    year: "1953 AD",
    internalID: "295",
    id: "B7A04FEA-A51C-4DE2-8E69-2F829D1AE820",
    philosopher: {
      id: "E869677C-23CB-41F7-8F39-AB8F499CAAC2",
    },
    quote:
      "Theology makes use of philosophical wonder only for the purpose of motivating an affirmation which ends it. Philosophy, on the other hand, arouses us to what is problematic in our own existence and in that of the world, to such a point that we shall never be cured of searching for a solution.",
  },
  {
    work: "Phenomenology of Perception",
    year: "1945 AD",
    internalID: "296",
    id: "91E46CD7-FFA9-4113-A1B2-7C50DAB15328",
    philosopher: {
      id: "E869677C-23CB-41F7-8F39-AB8F499CAAC2",
    },
    quote:
      "The function [of objective thinking] is to reduce all phenomena which bear witness to the union of subject and world, putting in their place the clear idea of the object as in itself and of the subject as pure consciousness. It therefore severs the links which unite the thing and the embodied subject, leaving only sensible qualities to make up our world (to the exclusion of the modes of appearance which we have described), and preferably visual qualities, because these give the impression of being autonomous, and because they are less directly linked to our body and present us with an object rather than introducing us into an atmosphere. But in reality all things are concretions of a setting, and any explicit perception of a thing survives in virtue of a previous communication with a certain atmosphere.",
  },
  {
    work: "In Praise of Philosophy",
    year: "1963 AD",
    internalID: "297",
    id: "B0AE7EC6-F7FD-4BDE-B6E6-D456F611B102",
    philosopher: {
      id: "E869677C-23CB-41F7-8F39-AB8F499CAAC2",
    },
    quote:
      "Philosophy is in history, and is never independent of historical discourse. But for the tacit symbolism of life it substitutes, in principle, a conscious symbolism; for a latent meaning, one that is manifest. It is never content to accept its historical situation. It changes this situation by revealing it to itself.",
  },
  {
    work: "The Second Sex",
    year: "1949 AD",
    internalID: "298",
    id: "D5B826E3-0D96-47D3-8DFA-D34388D5A517",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote: "One is not born, but rather becomes, a woman.",
  },
  {
    work: "The Ethics of Ambiguity",
    year: "1947 AD",
    internalID: "299",
    id: "9A17136D-1D28-482F-8C67-A45190ACEBD9",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote:
      "From the very beginning, existentialism defined itself as a philosophy of ambiguity.",
  },
  {
    work: "",
    year: "",
    internalID: "3",
    id: "66C049DC-FD59-4C83-A13F-3AFA6A87B0E7",
    philosopher: {
      id: "410D7B25-4F70-4346-A01A-CA556498FFFE",
    },
    quote: "The path up and down are one and the same.",
  },
  {
    work: "Politics",
    year: "",
    internalID: "30",
    id: "9AAD356A-2C14-4327-8998-BE47E3924F65",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote: "Man is by nature a political animal.",
  },
  {
    work: "The Ethics of Ambiguity",
    year: "1947 AD",
    internalID: "300",
    id: "8715C1A0-4C59-42F9-BE0A-BE5222EC3315",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote:
      "We must not confuse the present with the past. With regard to the past, no further action is possible. There have been war, plague, scandal, and treason, and there is no way of our preventing their having taken place; the executioner became an executioner and the victim underwent his fate as a victim without us; all that we can do is to reveal it, to integrate it into the human heritage, to raise it to the dignity of the aesthetic existence which bears within itself its finality; but first this history had to occur: it occurred as scandal, revolt, crime, or sacrifice, and we were able to try to save it only because it first offered us a form.",
  },
  {
    work: "The Second Sex",
    year: "1949 AD",
    internalID: "301",
    id: "8743A34C-5FE6-4068-AF35-7CCEAE2B4307",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote: "All oppression creates a state of war.",
  },
  {
    work: "Force of Circumstances",
    year: "1968 AD",
    internalID: "302",
    id: "3CC2E360-3D2E-4936-A399-37F951FD8B67",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote:
      "Self-knowledge is no guarantee of happiness, but it is on the side of happiness and can supply the courage to fight for it.",
  },
  {
    work: "The Coming of Age",
    year: "1970 AD",
    internalID: "303",
    id: "7E4FAD1C-F2E6-45F6-909B-1AA3C1DBB87A",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote:
      "Work almost always has a double aspect: it is a bondage, a wearisome drudgery; but it is also a source of interest, a steadying element, a factor that helps to integrate the worker with society. Retirement may be looked upon either as a prolonged holiday or as a rejection, a being thrown on to the scrap-heap.",
  },
  {
    work: "The Coming of Age",
    year: "1970 AD",
    internalID: "304",
    id: "501EDBD0-7C4B-4FA2-945B-0D961742D3F2",
    philosopher: {
      id: "0515F212-B273-41C9-8C90-C08414451714",
    },
    quote:
      "Society cares about the individual only in so far as he is profitable. The young know this. Their anxiety as they enter in upon social life matches the anguish of the old as they are excluded from it.",
  },
  {
    work: "A Theory of Justice",
    year: "1971 AD",
    internalID: "305",
    id: "8A59A28F-0AB1-4F48-A9CF-16CD5549FCC3",
    philosopher: {
      id: "9F487385-705B-4E30-A9A6-6D272E0D4DF4",
    },
    quote: "The principles of justice are chosen behind a veil of ignorance.",
  },
  {
    work: "A Theory of Justice",
    year: "1971 AD",
    internalID: "306",
    id: "223BB4CE-EE55-4286-AA2F-675A95C34EAD",
    philosopher: {
      id: "9F487385-705B-4E30-A9A6-6D272E0D4DF4",
    },
    quote:
      "The natural distribution is neither just nor unjust; nor is it unjust that persons are born into society at some particular position. These are simply natural facts. What is just and unjust is the way that institutions deal with these facts.",
  },
  {
    work: "A Theory of Justice",
    year: "1971 AD",
    internalID: "307",
    id: "7BFC6F84-DB09-41EF-BB74-290DCA2C0E80",
    philosopher: {
      id: "9F487385-705B-4E30-A9A6-6D272E0D4DF4",
    },
    quote:
      "Clearly when the liberties are left unrestricted they collide with one another.",
  },
  {
    work: "A Theory of Justice",
    year: "1971 AD",
    internalID: "308",
    id: "C83FF798-368F-404D-830E-01F0C30B12C0",
    philosopher: {
      id: "9F487385-705B-4E30-A9A6-6D272E0D4DF4",
    },
    quote: "Ideal legislators do not vote their interests.",
  },
  {
    work: "A Theory of Justice",
    year: "1971 AD",
    internalID: "309",
    id: "34CCC788-FD62-41A5-8130-68FCA8DD7764",
    philosopher: {
      id: "9F487385-705B-4E30-A9A6-6D272E0D4DF4",
    },
    quote:
      "In justice as fairness society is interpreted as a cooperative venture for mutual advantage.",
  },
  {
    work: "Rhetoric",
    year: "",
    internalID: "31",
    id: "C460E74E-3039-45EF-AD43-E5A000B9D01E",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote: "Wit is cultured insolence.",
  },
  {
    work: "A Theory of Justice",
    year: "1971 AD",
    internalID: "310",
    id: "487EBF0E-07F9-4209-A93D-3FD3C1FB8633",
    philosopher: {
      id: "9F487385-705B-4E30-A9A6-6D272E0D4DF4",
    },
    quote:
      "The fault of the utilitarian doctrine is that it mistakes impersonality for impartiality.",
  },
  {
    work: "Black Skin, White Masks",
    year: "1952 AD",
    internalID: "311",
    id: "22A61234-76B9-4601-9769-72198308ACBC",
    philosopher: {
      id: "98C768D9-67A3-44F9-9799-F80A0C29BED4",
    },
    quote: "To speak a language is to take on a world, a culture.",
  },
  {
    work: "Black Skin, White Masks",
    year: "1952 AD",
    internalID: "312",
    id: "3397577D-1647-49E2-81C6-7A682621187E",
    philosopher: {
      id: "98C768D9-67A3-44F9-9799-F80A0C29BED4",
    },
    quote: "What matters is not to know the world but to change it.",
  },
  {
    work: "Black Skin, White Masks",
    year: "1952 AD",
    internalID: "313",
    id: "349BC841-C999-43EB-88B0-89A296034B27",
    philosopher: {
      id: "98C768D9-67A3-44F9-9799-F80A0C29BED4",
    },
    quote: "O my body, make of me always a man who questions!",
  },
  {
    work: "The Wretched of the Earth",
    year: "1961 AD",
    internalID: "314",
    id: "F9430117-D62E-4A7C-BED4-1B2852FFF6F9",
    philosopher: {
      id: "98C768D9-67A3-44F9-9799-F80A0C29BED4",
    },
    quote:
      "The Church in the colonies is the white people’s Church, the foreigner’s Church. She does not call the native to God’s ways but to the ways of the white man, of the master, of the oppressor.",
  },
  {
    work: "The Wretched of the Earth",
    year: "1961 AD",
    internalID: "315",
    id: "ADDE5C21-10B8-47D0-98B5-3C69DBB72CAD",
    philosopher: {
      id: "98C768D9-67A3-44F9-9799-F80A0C29BED4",
    },
    quote:
      "The living expression of the nation is the collective consciousness in motion of the entire people.",
  },
  {
    work: "The Wretched of the Earth",
    year: "1961 AD",
    internalID: "316",
    id: "4053753A-DBDB-4651-A4B6-25B83CC7615F",
    philosopher: {
      id: "98C768D9-67A3-44F9-9799-F80A0C29BED4",
    },
    quote:
      "When the native hears a speech about Western culture he pulls out his knife—or at least he makes sure it is within reach. The violence with which the supremacy of white values is affirmed and the aggressiveness which has permeated the victory of these values over the ways of life and of thought of the native mean that, in revenge, the native laughs in mockery when Western values are mentioned in front of him.",
  },
  {
    work: "Anarchy, State, and Utopia",
    year: "1974 AD",
    internalID: "317",
    id: "B4FD48F0-BF89-4EE4-82BE-2297A9BEA6B4",
    philosopher: {
      id: "236B155A-FD0A-47E4-943A-14C0B57293BB",
    },
    quote:
      "Individuals have rights and there are things no person or group may do to them (without violating their rights).",
  },
  {
    work: "Anarchy, State, and Utopia",
    year: "1974 AD",
    internalID: "318",
    id: "72EAFA51-B99E-4CBA-96F4-4FFDE266442D",
    philosopher: {
      id: "236B155A-FD0A-47E4-943A-14C0B57293BB",
    },
    quote:
      "Our main conclusions about the state are that a minimal state, limited, to the narrow functions of protection against force, theft, fraud, enforcement of contracts, and so on, is justified, but any more extensive state will violate persons' rights not to be forced to do certain things, and is unjustified; and that the minimal state is inspiring as well as right.",
  },
  {
    work: "Anarchy, State, and Utopia",
    year: "1974 AD",
    internalID: "319",
    id: "E8ED7288-1212-450B-A92C-48371D3764C6",
    philosopher: {
      id: "236B155A-FD0A-47E4-943A-14C0B57293BB",
    },
    quote:
      "Our starting point then, though nonpolitical, is by intention far from nonmoral. Moral philosophy sets the background for, and boundaries of, political philosophy. What persons may and may not do to one another limits what they may do through the apparatus of a state, or do to establish such an apparatus.",
  },
  {
    work: "Rhetoric",
    year: "",
    internalID: "32",
    id: "DCD12C3B-B8A7-47F8-B885-D8BEF0040FC4",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote:
      "All human actions have one or more of these seven causes: chance, nature, compulsions, habit, reason, passion and desire",
  },
  {
    work: "Anarchy, State, and Utopia",
    year: "1974 AD",
    internalID: "320",
    id: "29E63572-47A3-40E9-B8CE-50065F5B4115",
    philosopher: {
      id: "236B155A-FD0A-47E4-943A-14C0B57293BB",
    },
    quote:
      "Taxation of earnings from labor is on a par with forced labor. Seizing the results of someone's labor is equivalent to seizing hours from him and directing him to carry on various activities.",
  },
  {
    work: "Anarchy, State, and Utopia",
    year: "1974 AD",
    internalID: "321",
    id: "AC2E91B7-AE65-4F7A-9E91-8B4B456C4F2C",
    philosopher: {
      id: "236B155A-FD0A-47E4-943A-14C0B57293BB",
    },
    quote:
      "You can't satisfy everybody; especially if there are those who will be dissatisfied unless not everybody is satisfied.",
  },
  {
    work: "Anarchy, State, and Utopia",
    year: "1974 AD",
    internalID: "322",
    id: "E4310B1E-675E-49D0-ADDB-6E89DBCE69FF",
    philosopher: {
      id: "236B155A-FD0A-47E4-943A-14C0B57293BB",
    },
    quote:
      "Utopia is a meta-utopia: the environment in which Utopian experiments may be tried out; the environment in which people are free to do their own thing; the environment which must, to a great extent, be realized first if more particular Utopian visions are to be realized stably.",
  },
  {
    work: "Between the Blinds",
    year: "1979 AD",
    internalID: "323",
    id: "4BDDB454-5576-49E7-81B2-2287618E5C8E",
    philosopher: {
      id: "4C870661-2E10-4B20-B3D0-2462DA8192DF",
    },
    quote: "What cannot be said above all must not be silenced but written.",
  },
  {
    work: "Limited Inc",
    year: "1977 AD",
    internalID: "324",
    id: "0F73F6A1-1CEB-4F3A-9D6A-83D78A6FF5D2",
    philosopher: {
      id: "4C870661-2E10-4B20-B3D0-2462DA8192DF",
    },
    quote:
      'What is called "objectivity," scientific for instance (in which I firmly believe, in a given situation) imposes itself only within a context which is extremely vast, old, firmly established, or rooted in a network of conventions … and yet which still remains a context.',
  },
  {
    work: "Philosophy and The Mirror of Nature",
    year: "1979 AD",
    internalID: "325",
    id: "2884BC23-2EA8-4C1D-8DE5-7CD312D3CC94",
    philosopher: {
      id: "5F255A15-B2C6-41A7-ACDB-ECF9B824C8E6",
    },
    quote: "Truth is what your contemporaries let you get away with.",
  },
  {
    work: "Contingency, Irony, and Solidarity",
    year: "1989 AD",
    internalID: "326",
    id: "4CDEBF22-E964-46D9-AB53-44A31C31A1AF",
    philosopher: {
      id: "5F255A15-B2C6-41A7-ACDB-ECF9B824C8E6",
    },
    quote:
      "The world does not speak. Only we do. The world can, once we have programmed ourselves with a language, cause us to hold beliefs. But it cannot propose a language for us to speak. Only other human beings can do that.",
  },
  {
    work: "Contingency, Irony, and Solidarity",
    year: "1989 AD",
    internalID: "327",
    id: "D8CAD081-B958-418A-A212-19EB36B616B4",
    philosopher: {
      id: "5F255A15-B2C6-41A7-ACDB-ECF9B824C8E6",
    },
    quote:
      "To abjure the notion of the “truly human” is to abjure the attempt to divinize the self as a replacement for a divinized world.",
  },
  {
    work: "Trotsky and the Wild Orchids",
    year: "1992 AD",
    internalID: "328",
    id: "4B8CF1B6-9179-46F7-87D7-4860F1D36B5E",
    philosopher: {
      id: "5F255A15-B2C6-41A7-ACDB-ECF9B824C8E6",
    },
    quote:
      "The orthodox tend to think that people who, like the postmodernists and me, believe neither in God nor in some suitable substitute, must feel that everything is permitted, that everybody can do what they like.",
  },
  {
    work: "The Priority of Democracy to Philosophy",
    year: "1991 AD",
    internalID: "329",
    id: "39F9DB92-715E-4B1A-83A2-9A4A19A09B06",
    philosopher: {
      id: "5F255A15-B2C6-41A7-ACDB-ECF9B824C8E6",
    },
    quote:
      "Citizens of a Jeffersonian democracy can be as religious or irreligious as they please as long as they are not “fanatical.” That is, they must abandon or modify opinion on matters of ultimate importance, the opinions that may hitherto have given sense and point to their lives, if these opinions entail public actions that cannot be justified to most of their fellow citizens.",
  },
  {
    work: "Politics",
    year: "",
    internalID: "33",
    id: "39F5B4A4-BB4F-4EB9-BA35-94CE7840943D",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote:
      "Man, when perfected, is the best of animals, but when separated from law and justice, he is the worst of all.",
  },
  {
    work: "The Priority of Democracy to Philosophy",
    year: "1991 AD",
    internalID: "330",
    id: "CEE5833C-9731-40C3-8621-A6330F12E2FB",
    philosopher: {
      id: "5F255A15-B2C6-41A7-ACDB-ECF9B824C8E6",
    },
    quote:
      "Contemporary intellectuals have given up the Enlightenment assumption that religion, myth, and tradition can be opposed to something ahistorical, something common to all human beings qua human.",
  },
  {
    work: "Gender Trouble: Feminism and the Subversion of Identity",
    year: "1990 AD",
    internalID: "331",
    id: "AE85554B-0472-4FCC-A669-D44435CBAEC4",
    philosopher: {
      id: "9FB6BB7A-086C-4FB8-B3EF-7E2857C7E0F3",
    },
    quote:
      'There is no gender identity behind the expressions of gender; that identity is performatively constituted by the very "expressions" that are said to be its results.',
  },
  {
    work: "Gender Trouble: Feminism and the Subversion of Identity",
    year: "1990 AD",
    internalID: "332",
    id: "C83B2CE5-4486-45B9-A982-5FC6ABA062D9",
    philosopher: {
      id: "9FB6BB7A-086C-4FB8-B3EF-7E2857C7E0F3",
    },
    quote:
      "If the immutable character of sex is contested, perhaps this construct called ‘sex’ is as culturally constructed as gender; indeed, perhaps it was always already gender, with the consequence that the distinction between sex and gender turns out to be no distinction at all.",
  },
  {
    work: "Gender Trouble: Feminism and the Subversion of Identity",
    year: "1990 AD",
    internalID: "333",
    id: "22847963-145B-4C81-AA8D-E8F398EAC086",
    philosopher: {
      id: "9FB6BB7A-086C-4FB8-B3EF-7E2857C7E0F3",
    },
    quote:
      "To operate within the matrix of power is not the same as to replicate uncritically relations of domination.",
  },
  {
    work: "Undoing Gender",
    year: "2004 AD",
    internalID: "334",
    id: "84673BA5-61AA-490B-8D80-00315F76346B",
    philosopher: {
      id: "9FB6BB7A-086C-4FB8-B3EF-7E2857C7E0F3",
    },
    quote:
      "What is most important is to cease legislating for all lives what is liveable only for some, and similarly, to refrain from proscribing for all lives what is unlivable for some.",
  },
  {
    work: "Further Reflections on the Conversations of Our Time",
    year: "1997 AD",
    internalID: "335",
    id: "16B6518C-F526-4B53-BACD-238CB703D401",
    philosopher: {
      id: "9FB6BB7A-086C-4FB8-B3EF-7E2857C7E0F3",
    },
    quote:
      "The move from a structuralist account in which capital is understood to structure social relations in relatively homologous ways to a view of hegemony in which power relations are subject to repetition, convergence, and rearticulation brought the question of temporality into the thinking of structure, and marked a shift from a form of Althusserian theory that takes structural totalities as theoretical objects to one in which the insights into the contingent possibility of structure inaugurate a renewed conception of hegemony as bound up with the contingent sites and strategies of the rearticulation of power.",
  },
  {
    work: "Candide",
    year: "1759 AD",
    internalID: "336",
    id: "5FBD78CE-5800-4499-A4DC-8B58CD2F73CA",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote:
      '"Optimism," said Cacambo, "What is that?" "Alas!" replied Candide, "It is the obstinacy of maintaining that everything is best when it is worst!"',
  },
  {
    work: "Épître à l'Auteur du Livre des Trois Imposteurs",
    year: "1770 AD",
    internalID: "337",
    id: "072B1B99-140F-4A79-8D4E-9A8A94DDB8E1",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote: "If God did not exist, it would be necessary to invent him.",
  },
  {
    work: "Le Siècle de Louis XIV",
    year: "1752 AD",
    internalID: "338",
    id: "31303A03-D440-4A5D-9E5B-320A8F4FEC8C",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote:
      "It is dangerous to be right in matters where established men are wrong.",
  },
  {
    work: "Oracles",
    year: "1770 AD",
    internalID: "339",
    id: "6D062A5F-5AB9-4051-AF87-FA6737894143",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote:
      "Nothing is so common as to imitate one's enemies, and to use their weapons.",
  },
  {
    work: "Posterior Analytics",
    year: "",
    internalID: "34",
    id: "E1783FA4-3FC0-444F-BC87-C051EEA0DD5F",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote:
      "Knowledge of the fact differs from knowledge of the reason for the fact.",
  },
  {
    work: "Rights",
    year: "1771 AD",
    internalID: "340",
    id: "4E8146AD-3CEE-4379-88BE-61AEC542E047",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote:
      "It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.",
  },
  {
    work: "Sept Discours en Vers sur l'Homme",
    year: "1738 AD",
    internalID: "341",
    id: "EAFE82CC-0EB0-4ED5-A0CA-6B8F58571217",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote: "The secret of being a bore is to tell everything.",
  },
  {
    work: "Le dîner du comte de Boulainvilliers",
    year: "1767 AD",
    internalID: "342",
    id: "6F843E0C-2E43-47F7-9C0A-1E85E81E5D2B",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote: "A witty saying proves nothing.",
  },
  {
    work: "Questions sur l'Encyclopédie",
    year: "1771 AD",
    internalID: "343",
    id: "8E96FF67-8D80-431D-B86C-F79F7FA00674",
    philosopher: {
      id: "0A1BF11A-9343-4EB1-BDFC-FDE556F448D5",
    },
    quote:
      "Divorce is probably of nearly the same age as marriage. I believe, however, that marriage is some weeks the more ancient.",
  },
  {
    work: "The Ego and the Id",
    year: "1923 AD",
    internalID: "344",
    id: "0BE40747-0DDE-4F58-BDC8-045336C02DC3",
    philosopher: {
      id: "197B49D7-F130-485D-A49F-9A89248E5958",
    },
    quote:
      "It is easy to see that the ego is that part of the id which has been modified by the direct influence of the external world.",
  },
  {
    work: "Civilization and Its Discontents",
    year: "1929 AD",
    internalID: "345",
    id: "B4B39C00-5CA1-4EF9-9DED-EBD44BC880F4",
    philosopher: {
      id: "197B49D7-F130-485D-A49F-9A89248E5958",
    },
    quote: "We are never so defenceless against suffering as when we love.",
  },
  {
    work: "Moses and Monotheism",
    year: "1938 AD",
    internalID: "346",
    id: "FB2DF23D-8C03-448D-B83E-66D9C7818948",
    philosopher: {
      id: "197B49D7-F130-485D-A49F-9A89248E5958",
    },
    quote:
      "The Mosaic religion had been a Father religion; Christianity became a Son religion. The old God, the Father, took second place; Christ, the Son, stood in His stead, just as in those dark times every son had longed to do.",
  },
  {
    work: "Civilization and Its Discontents",
    year: "1929 AD",
    internalID: "347",
    id: "A167589C-0AC7-443B-B4CE-87238C984F6B",
    philosopher: {
      id: "197B49D7-F130-485D-A49F-9A89248E5958",
    },
    quote:
      "The first requisite of civilization, therefore, is that of justice—that is, the assurance that a law once made will not be broken in favour of an individual.",
  },
  {
    work: "The Ego and the Id",
    year: "1923 AD",
    internalID: "348",
    id: "975F15D5-8F43-42CA-8E07-C8C849522601",
    philosopher: {
      id: "197B49D7-F130-485D-A49F-9A89248E5958",
    },
    quote:
      "The sexual wishes in regard to the mother become more intense and the father is perceived as an obstacle to the; this gives rise to the Oedipus complex.",
  },
  {
    work: "The Future of an Illusion",
    year: "1927 AD",
    internalID: "349",
    id: "F3CCFAA1-A618-4BF2-AA2B-4EEF77DF01B7",
    philosopher: {
      id: "197B49D7-F130-485D-A49F-9A89248E5958",
    },
    quote:
      'Religion is a system of wishful illusions together with a disavowal of reality, such as we find nowhere else but in a state of blissful hallucinatory confusion. Religion\'s eleventh commandment is "Thou shalt not question."',
  },
  {
    work: "Poetics",
    year: "",
    internalID: "35",
    id: "9B3BF261-FD88-4EFC-972D-EB942ECBE9E1",
    philosopher: {
      id: "29CAB993-0821-4680-B05C-3DD5892EEC55",
    },
    quote: "A whole is that which has beginning, middle, and end.",
  },
  {
    work: "The Souls of Black Folk",
    year: "1903 AD",
    internalID: "350",
    id: "1C866D4E-0681-4361-B539-8C7CCB5978ED",
    philosopher: {
      id: "3569A488-D7FE-4C58-BB4F-50AACF2A0FBA",
    },
    quote:
      "To be a poor man is hard, but to be a poor race in a land of dollars is the very bottom of hardships.",
  },
  {
    work: "The Souls of Black Folk",
    year: "1903 AD",
    internalID: "351",
    id: "062156D5-EA43-4025-9DBA-96C5C425C141",
    philosopher: {
      id: "3569A488-D7FE-4C58-BB4F-50AACF2A0FBA",
    },
    quote:
      "The worker must work for the glory of his handiwork, not simply for pay; the thinker must think for truth, not for fame.",
  },
  {
    work: "The Suppression of the African Slave Trade to the United States of America, 1638-1870",
    year: "1897 AD",
    internalID: "352",
    id: "DDC0F65B-2A34-4F74-9FA3-564B89B061E8",
    philosopher: {
      id: "3569A488-D7FE-4C58-BB4F-50AACF2A0FBA",
    },
    quote:
      "There is always a certain glamour about the idea of a nation rising up to crush an evil simply because it is wrong. Unfortunately, this can seldom be realized in real life; for the very existence of the evil usually argues a moral weakness in the very place where extraordinary moral strength is called for.",
  },
  {
    work: "The Study of the Negro Problems",
    year: "1898 AD",
    internalID: "353",
    id: "9EE8BE15-4C1E-426A-8AF4-0471A39DAC95",
    philosopher: {
      id: "3569A488-D7FE-4C58-BB4F-50AACF2A0FBA",
    },
    quote:
      "There is but one coward on earth, and that is the coward that dare not know.",
  },
  {
    work: "Feminist Theory: From Margin to Center",
    year: "1984 AD",
    internalID: "354",
    id: "7A6D6557-C236-4FF2-BDFE-2C6A1219C47D",
    philosopher: {
      id: "0862B666-7295-4882-AE1C-2D84BCE4D8C8",
    },
    quote:
      "There will be no mass-based feminist movement as long as feminist ideas are understood only by a well-educated few.",
  },
  {
    work: "Ain't I a Woman?",
    year: "1981 AD",
    internalID: "355",
    id: "8F5441ED-BFBD-4011-B95D-C52265AF5175",
    philosopher: {
      id: "0862B666-7295-4882-AE1C-2D84BCE4D8C8",
    },
    quote:
      "Racism has always been a divisive force separating black men and white men, and sexism has been a force that unites the two groups.",
  },
  {
    work: "Feminist Theory: From Margin to Center",
    year: "1984 AD",
    internalID: "356",
    id: "4846B295-52D1-44A0-89F8-5EB71527895D",
    philosopher: {
      id: "0862B666-7295-4882-AE1C-2D84BCE4D8C8",
    },
    quote:
      "The significance of feminist movement (when it is not co-opted by opportunistic, reactionary forces) is that it offers a new ideological meeting ground for the sexes, a space for criticism, struggle, and transformation.",
  },
  {
    work: "Feminist Theory: From Margin to Center",
    year: "1984 AD",
    internalID: "357",
    id: "B83E26A1-CFC8-4926-A5A0-5B588ECF2D00",
    philosopher: {
      id: "0862B666-7295-4882-AE1C-2D84BCE4D8C8",
    },
    quote:
      "If one assumes, as I do, that battery is caused by the belief permeating this culture that hierarchical rule and coercive authority are natural, then all our relationships tend to be based on power and domination, and thus all forms of battery are linked.",
  },
  {
    work: "Ain't I a Woman?",
    year: "1981 AD",
    internalID: "358",
    id: "39A576C3-5168-4D06-94FC-671225604654",
    philosopher: {
      id: "0862B666-7295-4882-AE1C-2D84BCE4D8C8",
    },
    quote:
      "The fear of being alone, or of being unloved, had caused women of all races to passively accept sexism and sexist oppression.",
  },
  {
    work: "Rock My Soul",
    year: "2003 AD",
    internalID: "359",
    id: "A47A99FA-C5F6-47CF-8C51-F1028A8EBE29",
    philosopher: {
      id: "0862B666-7295-4882-AE1C-2D84BCE4D8C8",
    },
    quote:
      "Popular escapist fiction enchants adult readers without challenging them to be educated for critical consciousness.",
  },
  {
    work: "On Free Choice Of The Will",
    year: "387 AD",
    internalID: "36",
    id: "43BFE67F-BA8E-4426-B708-E56D6E91BCF1",
    philosopher: {
      id: "6B723679-7DB0-47FB-8A19-EBDD7C812DE8",
    },
    quote: "An unjust law is no law at all.",
  },
  {
    work: "The Feminine Mystique",
    year: "1963 AD",
    internalID: "360",
    id: "80D8EB2C-C38C-46F6-BFF2-92FACD761B84",
    philosopher: {
      id: "70D74337-9BB7-4E5A-959B-7AA38D034313",
    },
    quote: "“Is this all?”",
  },
  {
    work: "The Feminine Mystique",
    year: "1963 AD",
    internalID: "361",
    id: "B913E1F4-48C1-4D3F-B587-D6F302B361A7",
    philosopher: {
      id: "70D74337-9BB7-4E5A-959B-7AA38D034313",
    },
    quote:
      "The feminine mystique has succeeded in burying millions of American women alive.",
  },
  {
    work: "The Feminine Mystique",
    year: "1963 AD",
    internalID: "362",
    id: "2F559D00-E814-4698-B3B5-B39D54B75979",
    philosopher: {
      id: "70D74337-9BB7-4E5A-959B-7AA38D034313",
    },
    quote:
      "It is easier to live through someone else than to become complete yourself.",
  },
  {
    work: "The Feminine Mystique",
    year: "1963 AD",
    internalID: "363",
    id: "E17DA652-9F0A-4716-8303-7DC77FFAC8AD",
    philosopher: {
      id: "70D74337-9BB7-4E5A-959B-7AA38D034313",
    },
    quote:
      "A girl should not expect special privileges because of her sex but neither should she 'adjust' to prejudice and discrimination.",
  },
  {
    work: "Understanding Media : The Extensions of Man",
    year: "1964 AD",
    internalID: "364",
    id: "556A0F5A-B9BE-42C5-8A5E-D2E393BFDDEC",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote: "The medium is the message.",
  },
  {
    work: "Understanding Media : The Extensions of Man",
    year: "1964 AD",
    internalID: "365",
    id: "D9F917F5-28E8-41E1-BEE3-9D757517BB45",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote: "War is never anything less than accelerated technological change.",
  },
  {
    work: "Understanding Media : The Extensions of Man",
    year: "1964 AD",
    internalID: "366",
    id: "2D4A9079-CCD2-45F4-A677-F3A37C043432",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote: "In the electric age we wear all mankind as our skin.",
  },
  {
    work: "Understanding Media : The Extensions of Man",
    year: "1964 AD",
    internalID: "367",
    id: "7A1B3FD6-F872-43B4-95A7-D053BE428729",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote: "Art is anything you can get away with.",
  },
  {
    work: "Understanding Media : The Extensions of Man",
    year: "1964 AD",
    internalID: "368",
    id: "9ACECB26-BD3F-42CC-BB41-6A715487402C",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote:
      'Electric technology is directly related to our central nervous systems, so it is ridiculous to talk of "what the public wants" played over its own nerves.',
  },
  {
    work: "Laws of Media: The New Science",
    year: "1988 AD",
    internalID: "369",
    id: "AB763957-5EA4-474E-B99B-CAB072A69A76",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote: "The audience, as ground, shapes and controls the work of art.",
  },
  {
    work: "The City of God",
    year: "400 AD",
    internalID: "37",
    id: "DDC4753C-6FC3-4AC8-8DB0-080F69245C29",
    philosopher: {
      id: "6B723679-7DB0-47FB-8A19-EBDD7C812DE8",
    },
    quote:
      "Beauty is indeed a good gift of God; but that the good may not think it a great good, God dispenses it even to the wicked.",
  },
  {
    work: "The Argument: Causality in the Electric World",
    year: "1973 AD",
    internalID: "371",
    id: "21132ECB-560D-40FB-AE22-CEDBEDE4ED96",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote:
      "Every innovation scraps its immediate predecessor and retrieves still older figures – it causes floods of antiques or nostalgic art forms and stimulates the search for museum pieces.",
  },
  {
    work: "The Gutenberg Galaxy",
    year: "1962 AD",
    internalID: "372",
    id: "53A95663-08ED-4709-A067-B79991A42E5D",
    philosopher: {
      id: "7C09B8AB-C552-421C-8740-EDBE668CFFF4",
    },
    quote:
      "The new electronic interdependence recreates the world in the image of a global village.",
  },
  {
    work: "Natural Right and History",
    year: "1953 AD",
    internalID: "373",
    id: "CC3F04DE-9249-463F-B46B-460C5F086BE7",
    philosopher: {
      id: "2CEA35DB-CBEA-462E-BADB-FAB360F437FA",
    },
    quote:
      "Liberal relativism has its roots in the natural right tradition of tolerance or in the notion that everyone has a natural right to the pursuit of happiness as he understands happiness; but in itself it is a seminary of intolerance.",
  },
  {
    work: "Persecution and the Art of Writing",
    year: "1952 AD",
    internalID: "374",
    id: "06B69860-BDFE-4A0C-8037-808F5CD8CA7A",
    philosopher: {
      id: "2CEA35DB-CBEA-462E-BADB-FAB360F437FA",
    },
    quote:
      "An exoteric book contains then two teachings: a popular teaching of an edifying character, which is in the foreground; and a philosophic teaching concerning the most important subject, which is indicated only between the lines.",
  },
  {
    work: "Natural Right and History",
    year: "1953 AD",
    internalID: "375",
    id: "2B86A184-3A03-4CB7-9687-CB647D620EDA",
    philosopher: {
      id: "2CEA35DB-CBEA-462E-BADB-FAB360F437FA",
    },
    quote:
      "It is of the essence of traditions that they cover or conceal their humble foundations by erecting impressive edifices on them.",
  },
  {
    work: "Thoughts on Machiavelli",
    year: "1958 AD",
    internalID: "376",
    id: "32CF5DFB-E3A3-4EC9-B047-4818D6311C39",
    philosopher: {
      id: "2CEA35DB-CBEA-462E-BADB-FAB360F437FA",
    },
    quote:
      "The problem inherent in the surface of things, and only in the surface of things, is the heart of things.",
  },
  {
    work: "Liberalism Ancient and Modern",
    year: "1968 AD",
    internalID: "377",
    id: "A78486E2-BFAE-4B3D-BD51-DDC144D1E0A5",
    philosopher: {
      id: "2CEA35DB-CBEA-462E-BADB-FAB360F437FA",
    },
    quote:
      "Democracy, in a word, is meant to be an aristocracy which has broadened into a universal aristocracy.",
  },
  {
    work: "Liberalism Ancient and Modern",
    year: "1968 AD",
    internalID: "378",
    id: "CC285EA2-CDEF-4AF9-81B1-2B648FCE8C7B",
    philosopher: {
      id: "2CEA35DB-CBEA-462E-BADB-FAB360F437FA",
    },
    quote:
      "The facile delusions which conceal from us our true situation all amount to this: that we are, or can be, wiser than the wisest men of the past. We are thus induced to play the part, not of attentive and docile listeners, but of impresarios and lion-tamers.",
  },
  {
    work: "",
    year: "1957 AD",
    internalID: "379",
    id: "09856071-093D-4DEE-BA3E-64E519938806",
    philosopher: {
      id: "9361456C-B420-49CC-A1CB-773BB44F079A",
    },
    quote:
      "The man who is born into existence deals first with language; this is a given. He is even caught in it before his birth.",
  },
  {
    work: "The City of God",
    year: "400 AD",
    internalID: "38",
    id: "64796F0B-AB28-4A29-B0F7-3A227F9F26D8",
    philosopher: {
      id: "6B723679-7DB0-47FB-8A19-EBDD7C812DE8",
    },
    quote:
      "For when God said, “Let there be light, and there was light,” if we are justified in understanding in this light the creation of the angels, then certainly they were created partakers of the eternal light which is the unchangeable Wisdom of God, by which all things were made, and whom we call the only-begotten Son of God",
  },
  {
    work: "Ecrits",
    year: "1966 AD",
    internalID: "380",
    id: "0A908B16-EDD7-4FEA-ACA6-A175AD8C8A2E",
    philosopher: {
      id: "9361456C-B420-49CC-A1CB-773BB44F079A",
    },
    quote:
      "The mirror stage is a phenomenon to which I assign a twofold value. In the first place, it has historical value as it marks a decisive turning-point in the mental development of the child. In the second place, it typifies an essential libidinal relationship with the body-image.",
  },
  {
    work: "Ecrits",
    year: "1966 AD",
    internalID: "381",
    id: "DAD63C92-C69A-4063-A830-CDA66D51F470",
    philosopher: {
      id: "9361456C-B420-49CC-A1CB-773BB44F079A",
    },
    quote:
      "Psychoanalytic experience has rediscovered in man the imperative of the Word as the law that has shaped him in its image. It exploits the poetic function of language to give his desire its symbolic mediation. May this experience finally enable you to understand that the whole reality of its effects lies in the gift of speech; for it is through this gift that all reality has come to man and through its ongoing action that he sustains reality.",
  },
  {
    work: "Ecrits",
    year: "1966 AD",
    internalID: "382",
    id: "D8B7ED5E-B00B-466E-BA6F-231C848FBE27",
    philosopher: {
      id: "9361456C-B420-49CC-A1CB-773BB44F079A",
    },
    quote:
      "What is realized in my history is neither the past definite as what was, since it is no more, nor even the perfect as what has been in what I am, but the future anterior as what I will have been, given what I am in the process of becoming.",
  },
  {
    work: "Practical Ethics",
    year: "2011 AD",
    internalID: "383",
    id: "4C05D18A-DC7C-48B7-B1C8-D0AEFC5086EF",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote:
      "It is easy for us to criticize the prejudices of our grandfathers, from which our fathers freed themselves. It is more difficult to search for prejudices among the beliefs and values that we hold.",
  },
  {
    work: "Writings on an Ethical Life",
    year: "2000 AD",
    internalID: "384",
    id: "E686B5AF-3FAC-4BAB-8B6F-4498A0A40B2C",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote:
      "We are responsible not only for what we do but also for what we could have prevented.",
  },
  {
    work: "The Expanding Circle: Ethics, Evolution, and Moral Progress",
    year: "1981 AD",
    internalID: "385",
    id: "6974712C-D3DE-475B-973F-F8A8A5C6156B",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote:
      "Science does not stand still, and neither does philosophy, although the latter has a tendency to walk in circles.",
  },
  {
    work: "Animal Liberation: A New Ethics for our Treatment of Animals",
    year: "1975 AD",
    internalID: "386",
    id: "4253ACDB-32C0-49D1-8E8E-295258344F03",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote: "Animal Liberation is Human Liberation too.",
  },
  {
    work: "Animal Liberation: A New Ethics for our Treatment of Animals",
    year: "1975 AD",
    internalID: "387",
    id: "CB3D20D8-FDFA-4B2F-A5C8-808A6A6FE003",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote:
      "Speciesism—the word is not an attractive one, but I can think of no better term—is a prejudice or attitude of bias in favor of the interests of members of one's own species and against those of members of other species.",
  },
  {
    work: "The Expanding Circle: Ethics, Evolution, and Moral Progress",
    year: "1981 AD",
    internalID: "388",
    id: "A3CA7137-2226-4137-B258-AC70F09C1601",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote:
      "There can be no brotherhood when some nations indulge in previously unheard of luxuries, while others struggle to stave off famine.",
  },
  {
    work: "The Expanding Circle: Ethics, Evolution, and Moral Progress",
    year: "1981 AD",
    internalID: "389",
    id: "37FBE11C-E446-4623-B9E8-40358AF2CEB1",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote:
      "Herbert Spencer is little read now. Philosophers do not regard him as a major thinker. Social Darwinism has long been in disrepute.",
  },
  {
    work: "The Expanding Circle: Ethics, Evolution, and Moral Progress",
    year: "1981 AD",
    internalID: "390",
    id: "181CB2BE-6FAA-4073-ABA4-E1CBCF55547D",
    philosopher: {
      id: "2C530DBE-E736-4F42-A285-3F2236174CA2",
    },
    quote: "Ethics is inescapable.",
  },
  {
    work: "Manufacturing Consent: Noam Chomsky and the Media",
    year: "1992 AD",
    internalID: "391",
    id: "7F648A2F-019A-4C0D-BEB9-238C80EE490C",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "States are violent to the extent that they're powerful, that's roughly accurate.",
  },
  {
    work: "Manufacturing Consent: Noam Chomsky and the Media",
    year: "1992 AD",
    internalID: "392",
    id: "FD4D8B80-64ED-4868-8F5F-2A8AA9D5CE07",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "If you believe in freedom of speech, you believe in freedom of speech for views you don't like. Goebbels was in favor of freedom of speech for views he liked. So was Stalin. If you're in favor of freedom of speech, that means you're in favor of freedom of speech precisely for views you despise.",
  },
  {
    work: "Chomsky on Miseducation",
    year: "1999 AD",
    internalID: "393",
    id: "308272B6-4959-4DF1-9824-BE03CB218BF1",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "The more there is a need to talk about the ideals of democracy, the less democratic the system usually is.",
  },
  {
    work: "Secrets, Lies and Democracy",
    year: "1994 AD",
    internalID: "394",
    id: "2FC7399D-59B4-4AB0-8553-EF328D202126",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "Spectator sports make people more passive, because you're not doing them—you're watching somebody doing them.",
  },
  {
    work: "International War Crimes Tribunal: Against the Crime of Silence: Proceedings",
    year: "1970 AD",
    internalID: "395",
    id: "46677195-9F7A-4B78-AC49-0EF5FE0575D3",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "It is the fundamental duty of the citizen to resist and to restrain the violence of the state.",
  },
  {
    work: "Government in the Future",
    year: "1970 AD",
    internalID: "396",
    id: "C1BF886F-516A-4367-99F9-7034AD23C429",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "Roughly speaking, I think it's accurate to say that a corporate elite of managers and owners governs the economy and the political system as well, at least in very large measure.",
  },
  {
    work: "Noam Chomsky: A Life of Dissent",
    year: "1992 AD",
    internalID: "397",
    id: "C8302B46-B05B-4F61-85ED-B56BB362BC46",
    philosopher: {
      id: "3CC9B965-9C88-423A-BDA0-481F078FA3A1",
    },
    quote:
      "There is a noticeable general difference between the sciences and mathematics on the one hand, and the humanities and social sciences on the other. It's a first approximation, but one that is real. In the former, the factors of integrity tend to dominate more over the factors of ideology. It's not that scientists are more honest people. It's just that nature is a harsh taskmaster. You can lie or distort the story of the French Revolution as long as you like, and nothing will happen. Propose a false theory in chemistry, and it'll be refuted tomorrow.",
  },
  {
    work: "Illness As Metaphor",
    year: "1978 AD",
    internalID: "398",
    id: "ED4EFAC7-FADE-493C-9EA7-A964BF9C1000",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "Everyone who is born holds dual citizenship, in the kingdom of the well and in the kingdom of the sick. Although we all prefer to use only the good passport, sooner or later each of us is obliged, at least for a spell, to identify ourselves as citizens of that other place.",
  },
  {
    work: "Against Interpretation and Other Essays",
    year: "1964 AD",
    internalID: "399",
    id: "0447DE0C-65A9-4450-8AE3-12BBFF17A981",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote: "In place of a hermeneutics we need an erotics of art.",
  },
  {
    work: "Fragments",
    year: "",
    internalID: "4",
    id: "14DD7C53-B341-4088-A14D-A76AB31B6C61",
    philosopher: {
      id: "410D7B25-4F70-4346-A01A-CA556498FFFE",
    },
    quote:
      "Though wisdom is common, yet the many live as if they had a wisdom of their own.",
  },
  {
    work: "The City of God",
    year: "400 AD",
    internalID: "40",
    id: "10F4748E-2BE5-46DB-A6C6-0354766C802D",
    philosopher: {
      id: "6B723679-7DB0-47FB-8A19-EBDD7C812DE8",
    },
    quote:
      "The Heavenly City outshines Rome, beyond comparison. There, instead of victory, is truth; instead of high rank, holiness; instead of peace, felicity; instead of life, eternity.",
  },
  {
    work: "Against Interpretation and Other Essays",
    year: "1964 AD",
    internalID: "400",
    id: "714C8410-1227-44EC-B2A0-03253C390DAC",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote: "Interpretation is the revenge of the intellect upon art.",
  },
  {
    work: "Against Interpretation and Other Essays",
    year: "1964 AD",
    internalID: "401",
    id: "20A6EB06-8BE6-4006-A850-0BD2554BFBCF",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "Real art has the capacity to make us nervous. By reducing the work of art to its content and then interpreting that, one tames the work of art. Interpretation makes art manageable, comformable.",
  },
  {
    work: "Against Interpretation and Other Essays",
    year: "1964 AD",
    internalID: "402",
    id: "F556CBF6-C03B-441E-9B0C-55DCD79E75AB",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "The discovery of the good taste of bad taste can be very liberating. The man who insists on high and serious pleasures is depriving himself of pleasure; he continually restricts what he can enjoy; in the constant exercise of his good taste he will eventually price himself out of the market, so to speak.",
  },
  {
    work: "On Photography",
    year: "1977 AD",
    internalID: "403",
    id: "BA947E24-F19B-4D09-AF5B-5D64323D5B0F",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "Reality has come to seem more and more like what we are shown by cameras.",
  },
  {
    work: "On Photography",
    year: "1977 AD",
    internalID: "404",
    id: "CEC62534-1B92-44C3-9EB6-18D3EBFE88E6",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "The camera makes everyone a tourist in other people's reality, and eventually in one's own.",
  },
  {
    work: "Regarding the Torture of Others",
    year: "2004 AD",
    internalID: "405",
    id: "AEA6A391-84DE-43FF-BFD0-D954368C272C",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "An erotic life is, for more and more people, that which can be captured on digital photographs and on video. And perhaps the torture is more attractive, as something to record, when it has a sexual component.",
  },
  {
    work: "On Photography",
    year: "1977 AD",
    internalID: "406",
    id: "1AEE2DF0-EC80-4FD6-A591-BAD47194FB17",
    philosopher: {
      id: "482D1A47-AE79-4B8F-B160-EFCB131D271E",
    },
    quote:
      "So successful has been the camera's role in beautifying the world that photographs, rather than the world, have become the standard of the beautiful.",
  },
  {
    work: "On the Laws",
    year: "0043 BC",
    internalID: "407",
    id: "DE128BFF-2E92-4FB9-BA18-A53B6A2C20A8",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote:
      "For there is but one essential justice which cements society, and one law which establishes this justice. This law is right reason, which is the true rule of all commandments and prohibitions.",
  },
  {
    work: "In Catilinam I – Against Catiline",
    year: "0063 BC",
    internalID: "408",
    id: "2FE1DD73-682C-44C3-9B8E-A9A191ADC660",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote:
      "I have always been of the opinion that infamy earned by doing what is right is not infamy at all, but glory.",
  },
  {
    work: "On Divination",
    year: "0044 BC",
    internalID: "409",
    id: "02BA715F-242C-4F23-8483-80CE446B0D00",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote:
      "There is nothing so absurd that it has not been said by some philosopher.",
  },
  {
    work: "De Libero Arbitrio",
    year: "395 AD",
    internalID: "41",
    id: "8D11B232-F26F-4C3D-9E51-E4C512F75A42",
    philosopher: {
      id: "6B723679-7DB0-47FB-8A19-EBDD7C812DE8",
    },
    quote:
      "If there is something more excellent than the truth, then that is God; if not, then truth itself is God.",
  },
  {
    work: "On Divination",
    year: "0044 BC",
    internalID: "410",
    id: "08AC7E15-59DC-451A-95F9-25B92BA872C1",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote: "We do not destroy religion by destroying superstition.",
  },
  {
    work: "On Duties",
    year: "44 BC",
    internalID: "411",
    id: "2052740A-91CA-4EE8-97F7-E8D918FF1AE0",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote:
      "We are not born for ourselves alone; a part of us is claimed by our nation, another part by our friends.",
  },
  {
    work: "On Duties",
    year: "0044 BC",
    internalID: "412",
    id: "39CC3DC4-B952-4D52-8E7B-997B66069042",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote: "Honorable things, not secretive things, are sought by good men.",
  },
  {
    work: "On Duties",
    year: "0044 BC",
    internalID: "413",
    id: "82ADD9A8-7049-485F-96FE-DE0661014530",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote:
      "True glory strikes root, and even extends itself; all false pretensions fall as do flowers, nor can anything feigned be lasting.",
  },
  {
    work: "Tusculan Disputations",
    year: "0045 BC",
    internalID: "414",
    id: "E7165C51-F99E-4A68-8261-BE1EAF8D1554",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote:
      "How few philosophers are to be found who are such in character, so ordered in soul and in life, as reason demands; who regard their teaching not as a display of knowledge, but as the rule of life; who obey themselves, and submit to their own decrees!",
  },
  {
    work: "On the Orator",
    year: "0055 BC",
    internalID: "415",
    id: "215B03E2-697B-4731-A216-FADC4CF3D1CE",
    philosopher: {
      id: "5068DB3C-3870-439A-B470-FEB4CFE4E78B",
    },
    quote: "I should prefer uneloquent good sense to loquacious folly",
  },
  {
    work: "A Vindication of Natural Society",
    year: "1756 AD",
    internalID: "416",
    id: "28FA5591-20C4-4EBA-AD17-E5BA70EF677C",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "The writers against religion, whilst they oppose every system, are wisely careful never to set up any of their own.",
  },
  {
    work: "A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful",
    year: "1757 AD",
    internalID: "417",
    id: "86BD475C-2385-47A2-9AEB-DCBF703E0027",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "The first and the simplest emotion which we discover in the human mind is Curiosity.",
  },
  {
    work: "A Philosophical Enquiry into the Origin of Our Ideas of the Sublime and Beautiful",
    year: "1757 AD",
    internalID: "418",
    id: "A877C6D9-DA43-483D-AA5B-FE77AC3B624B",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "I am convinced that we have a degree of delight, and that no small one, in the real misfortunes and pains of others.",
  },
  {
    work: "Thoughts on the Cause of the Present Discontents",
    year: "1770 AD",
    internalID: "419",
    id: "90866B65-99F8-4372-A54D-F7CD09A52B4F",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "When bad men combine, the good must associate; else they will fall one by one, an unpitied sacrifice in a contemptible struggle.",
  },
  {
    work: "Confessions",
    year: "397 AD",
    internalID: "42",
    id: "C6A542DA-D5B7-4F1C-8760-67CF28130BDC",
    philosopher: {
      id: "6B723679-7DB0-47FB-8A19-EBDD7C812DE8",
    },
    quote:
      'As a youth I prayed, "Give me chastity and continence, but not right now."',
  },
  {
    work: "Second Speech on Conciliation with America",
    year: "1775 AD",
    internalID: "420",
    id: "B4C9B807-0F6A-4A0F-A0FE-127E0260FC94",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "Abstract liberty, like other mere abstractions, is not to be found.",
  },
  {
    work: "Reflections on the Revolution in France",
    year: "1790 AD",
    internalID: "421",
    id: "E057F589-327A-44D9-8400-E08A1FF1A5CE",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "People will not look forward to posterity, who never look backward to their ancestors.",
  },
  {
    work: "Reflections on the Revolution in France",
    year: "1790 AD",
    internalID: "422",
    id: "77BEC7F9-8A67-4B21-B40A-A8E06CD1BACD",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "But what is liberty without wisdom, and without virtue? It is the greatest of all possible evils; for it is folly, vice, and madness, without tuition or restraint.",
  },
  {
    work: "Reflections on the Revolution in France",
    year: "1790 AD",
    internalID: "423",
    id: "9F3F8E33-C5A8-4751-8494-BEC53FE6DA40",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "Justice is itself the great standing policy of civil society; and any eminent departure from it, under any circumstances, lies under the suspicion of being no policy at all.",
  },
  {
    work: "Reflections on the Revolution in France",
    year: "1790 AD",
    internalID: "424",
    id: "228F55E0-499B-437A-88A2-58F21871748D",
    philosopher: {
      id: "2361B39D-5581-4134-97DC-ED03F1E325D1",
    },
    quote:
      "When the leaders choose to make themselves bidders at an auction of popularity, their talents, in the construction of the state, will be of no service. They will become flatterers instead of legislators; the instruments, not the guides, of the people.",
  },
  {
    work: "Ain't I a Woman?",
    year: "1851 AD",
    internalID: "425",
    id: "B92C7D1D-1B1E-4075-B5DB-9930D9D43196",
    philosopher: {
      id: "23D25599-26AE-4D64-BA4F-801B054D41DB",
    },
    quote:
      "That man over there says that women need to be helped into carriages, and lifted over ditches, and to have the best place everywhere. Nobody ever helps me into carriages, or over mud-puddles, or gives me any best place! And ain't I a woman?",
  },
  {
    work: "Ain't I a Woman?",
    year: "1851 AD",
    internalID: "426",
    id: "E7D7236B-7E3D-48FE-B31D-E9A29BAEC568",
    philosopher: {
      id: "23D25599-26AE-4D64-BA4F-801B054D41DB",
    },
    quote:
      "I have borne thirteen children, and seen most all sold off to slavery, and when I cried out with my mother's grief, none but Jesus heard me! And ain't I a woman?",
  },
  {
    work: "Ain't I a Woman?",
    year: "1851 AD",
    internalID: "427",
    id: "DE3764B5-26D8-46AD-8453-22EB2057AF6E",
    philosopher: {
      id: "23D25599-26AE-4D64-BA4F-801B054D41DB",
    },
    quote:
      "If the first woman God ever made was strong enough to turn the world upside down all alone, the women together ought to be able to turn back and get it right side up again! and now they is asking to do it, the men better let them.",
  },
  {
    work: "Ain't I a Woman?",
    year: "1851 AD",
    internalID: "428",
    id: "E530B26A-89F5-4266-BCC5-9C75D66BDBA6",
    philosopher: {
      id: "23D25599-26AE-4D64-BA4F-801B054D41DB",
    },
    quote:
      "That little man in black there, he says women can't have as much rights as men, 'cause Jesus Christ wasn't a woman! Where did your Christ come from? Where did your Christ come from? From God and a woman! Man had nothing to do with Him.",
  },
  {
    work: "Narrative of Sojourner Truth, a Bondswoman of Olden Time",
    year: "1878 AD",
    internalID: "429",
    id: "D3127AE3-BF52-4994-AED3-7B5C93855EC7",
    philosopher: {
      id: "23D25599-26AE-4D64-BA4F-801B054D41DB",
    },
    quote:
      "But then there came another rush of love through my soul, an' I cried out loud,- 'Lord, Lord, I can love even de white folks!",
  },
  {
    work: "Opuscule II, De Regno",
    year: "1270 AD",
    internalID: "43",
    id: "BAEB73CB-850F-4C5B-849F-FA39D7898B8B",
    philosopher: {
      id: "843F1E7E-6AE7-4E3E-8FD7-780CB10BA017",
    },
    quote: "Reason in man is rather like God in the world.",
  },
  {
    work: "Civil Disobedience",
    year: "1849 AD",
    internalID: "430",
    id: "255D9EF1-2581-4EB0-AD0F-7132EB6B60F1",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      'I heartily accept the motto, "That government is best which governs least"; and I should like to see it acted up to more rapidly and systematically. Carried out, it finally amounts to this, which also I believe — "That government is best which governs not at all"; and when men are prepared for it, that will be the kind of government which they will have.',
  },
  {
    work: "Civil Disobedience",
    year: "1849 AD",
    internalID: "431",
    id: "8FA1879B-A606-434F-941C-7A963818BC4E",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "To speak practically and as a citizen, unlike those who call themselves no-government men, I ask for, not at once no government, but at once a better government. Let every man make known what kind of government would command his respect, and that will be one step toward obtaining it.",
  },
  {
    work: "Civil Disobedience",
    year: "1849 AD",
    internalID: "432",
    id: "AF05182A-5699-413D-A36A-2B2C6BCA05B5",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "How does it become a man to behave toward this American government today? I answered that he cannot without disgrace be associated with it.",
  },
  {
    work: "Civil Disobedience",
    year: "1849 AD",
    internalID: "433",
    id: "7DE21FF2-508C-4652-A56E-D80CDFF14A58",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "Any man more right than his neighbors constitutes a majority of one.",
  },
  {
    work: "Civil Disobedience",
    year: "1849 AD",
    internalID: "434",
    id: "118245DC-F922-48C0-A862-CD7581C48AB7",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "Unjust laws exist: shall we be content to obey them, or shall we endeavor to amend them, and obey them until we have succeeded, or shall we transgress them at once?",
  },
  {
    work: "Walden",
    year: "1854 AD",
    internalID: "435",
    id: "D0C4C009-FB7F-4A48-9ED2-4C24BFFF61D6",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation.",
  },
  {
    work: "Walden",
    year: "1854 AD",
    internalID: "436",
    id: "36E188D7-8145-41B2-817D-B57E705F4DFA",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "Most of the luxuries, and many of the so-called comforts of life, are not only not indispensable, but positive hindrances to the elevation of mankind.",
  },
  {
    work: "Walden",
    year: "1854 AD",
    internalID: "437",
    id: "F991D5B1-23D3-418F-9EF6-9622A3DDFF94",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "If I knew for a certainty that a man was coming to my house with the conscious design of doing me good, I should run for my life.",
  },
  {
    work: "Walden",
    year: "1854 AD",
    internalID: "438",
    id: "B5733351-15D5-4925-88DF-483403B68BE9",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote: "Simplify, simplify.",
  },
  {
    work: "A Plea for Captain John Brown",
    year: "1859 AD",
    internalID: "439",
    id: "1001A240-0F43-474D-9BD4-1A628601D7D6",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote: "When were the good and the brave ever in a majority?",
  },
  {
    work: "Two Precepts of Charity",
    year: "1273 AD",
    internalID: "44",
    id: "B25428E6-CC94-4ADF-B1EF-DC8DEB588B5A",
    philosopher: {
      id: "843F1E7E-6AE7-4E3E-8FD7-780CB10BA017",
    },
    quote:
      "Three things are necessary for the salvation of man: to know what he ought to believe; to know what he ought to desire; and to know what he ought to do.",
  },
  {
    work: "A Plea for Captain John Brown",
    year: "1859 AD",
    internalID: "440",
    id: "A284EDF7-2EC0-438B-875C-8FF8C7E6E347",
    philosopher: {
      id: "9F6757B1-D0C9-4FAC-9ABE-A51F8E4C1961",
    },
    quote:
      "I do not wish to kill nor to be killed, but I can foresee circumstances in which both these things would be by me unavoidable.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "441",
    id: "CDB9561E-8EED-40B2-942A-F2CE43E5850F",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote:
      "He was a man who looked at what ought to be done, not to the reputation which is got by a man's acts",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "442",
    id: "01640E35-EDC3-4BB5-ADF8-239DDCAEA31F",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote:
      "There is a limit to the time assigned you, and if you don't use it to free yourself it will be gone and never return.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "443",
    id: "92788A73-5C39-4871-A646-CF9820CD4489",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote:
      "This thou must always bear in mind, what is the nature of the whole...",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "444",
    id: "594C594F-1007-4A67-9796-0AA4126FFB9E",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote:
      "Never esteem anything as of advantage to you that will make you break your word or lose your self-respect.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "445",
    id: "50C008F5-DCDD-4518-801C-8156FE0606AB",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote: "The universe is change; our life is what our thoughts make it.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "446",
    id: "D5BA16D2-46E1-4A61-B8B9-1DE5EC629627",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote:
      "Remember this— that there is a proper dignity and proportion to be observed in the performance of every act of life.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "447",
    id: "E8ADE87E-4DEF-43A8-A3FA-1AFDBF207EA1",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote: "Reverence the gods, and help men. Short is life.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "448",
    id: "1BF62C37-E740-452E-AA74-6CE8D850D866",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote:
      "Soon you will have forgotten the world, and soon the world will have forgotten you.",
  },
  {
    work: "Meditations",
    year: "180 AD",
    internalID: "449",
    id: "57D61D6A-DC05-47B9-B726-5DA875680F34",
    philosopher: {
      id: "9167C1C4-D3E7-4081-B3F8-00371397B356",
    },
    quote: "Waste no more time arguing what a good man should be. Be one.",
  },
  {
    work: "Summa Theologica",
    year: "1274 AD",
    internalID: "45",
    id: "87828A2D-39D9-477D-8551-1DCCAC20CA18",
    philosopher: {
      id: "843F1E7E-6AE7-4E3E-8FD7-780CB10BA017",
    },
    quote: "To love is to will the good of the other.",
  },
  {
    work: "The Philosophy of Style",
    year: "1852 AD",
    internalID: "450",
    id: "3029ACF5-0C19-49D1-9625-F5F3539D57C7",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      "There can be little question that good composition is far less dependent upon acquaintance with its laws, than upon practice and natural aptitude. A clear head, a quick imagination, and a sensitive ear, will go far towards making all rhetorical precepts needless.",
  },
  {
    work: "The Development Hypothesis",
    year: "1852 AD",
    internalID: "451",
    id: "594303FE-ED83-4064-A25F-C957054F2666",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      "Surely if a single cell may, when subjected to certain influences, become a man in the space of twenty years; there is nothing absurd in the hypothesis that under certain other influences, a cell may, in the course of millions of years, give origin to the human race.",
  },
  {
    work: "Social Statics",
    year: "1851 AD",
    internalID: "452",
    id: "3B59C239-70A2-4CC9-96BF-1A8CF402C9E6",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      "Opinion is ultimately determined by the feelings, and not by the intellect.",
  },
  {
    work: "The Philosophy of Style",
    year: "1852 AD",
    internalID: "453",
    id: "35DC905B-06BE-4EC6-8C64-E5C3170FC0B3",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      "We have a priori reasons for believing that in every sentence there is some one order of words more effective than any other; and that this order is the one which presents the elements of the proposition in the succession in which they may be most readily put together.",
  },
  {
    work: "First Principles",
    year: "1862 AD",
    internalID: "454",
    id: "3CCB64FF-A9DA-498B-ADF6-B0E1BAFE697B",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      'We too often forget that not only is there "a soul of goodness in things evil," but very generally also, a soul of truth in things erroneous.',
  },
  {
    work: "Principles of Biology",
    year: "1864 AD",
    internalID: "455",
    id: "F3F31BD0-5231-4B68-BCF9-2094B3392A88",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      "It cannot but happen that those individuals whose functions are most out of equilibrium with the modified aggregate of external forces, will be those to die; and that those will survive whose functions happen to be most nearly in equilibrium with the modified aggregate of external forces. \nBut this survival of the fittest, implies multiplication of the fittest.",
  },
  {
    work: "The Man versus the State",
    year: "1884 AD",
    internalID: "456",
    id: "E8368DDD-A1EF-4125-8290-8165FD1C0409",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote: "All socialism involves slavery.",
  },
  {
    work: "The Man versus the State",
    year: "1884 AD",
    internalID: "457",
    id: "83A87925-94EF-449B-92E1-4D668974D37A",
    philosopher: {
      id: "5A8FE409-3961-4472-B28D-2201CD4B9311",
    },
    quote:
      "Be it or be it not true that Man is shapen in iniquity and conceived in sin, it is unquestionably true that Government is begotten of aggression, and by aggression.",
  },
  {
    work: "Orientalism",
    year: "2003 AD",
    internalID: "458",
    id: "A7D9465A-0A44-47A4-AC51-98FEE1E083FC",
    philosopher: {
      id: "FD34BB43-EDB4-42D7-A484-4E97190C6061",
    },
    quote:
      "Every single empire in its official discourse has said that it is not like all the others, that its circumstances are special, that it has a mission to enlighten, civilize, bring order and democracy, and that it uses force only as a last resort. And, sadder still, there always is a chorus of willing intellectuals to say calming words about benign or altruistic empires, as if one shouldn't trust the evidence of one's eyes watching the destruction and the misery and death brought by the latest mission civilizatrice.",
  },
  {
    work: "Orientalism",
    year: "1978 AD",
    internalID: "459",
    id: "6676FF90-A627-4326-B3A5-7AF559CDFC64",
    philosopher: {
      id: "FD34BB43-EDB4-42D7-A484-4E97190C6061",
    },
    quote:
      "Ideas, cultures, and histories cannot seriously be understood or studied without their force, or more precisely their configurations of power, also being studied.",
  },
  {
    work: "Summa Theologica",
    year: "1274 AD",
    internalID: "46",
    id: "2D1C1A54-11E6-4179-8204-43EB1DD9BEC3",
    philosopher: {
      id: "843F1E7E-6AE7-4E3E-8FD7-780CB10BA017",
    },
    quote:
      "Whatever is in motion must be put in motion by another. If that by which it is put in motion be itself put in motion, then this also must needs be put in motion by another, and that by another again. But this cannot go on to infinity, because then there would be no first mover, and, consequently, no other mover; seeing that subsequent movers move only inasmuch as they are put in motion by the first mover; as the staff moves only because it is put in motion by the hand. Therefore it is necessary to arrive at a first mover, put in motion by no other; and this everyone understands to be God.",
  },
  {
    work: "Orientalism",
    year: "1978 AD",
    internalID: "460",
    id: "C0EB224C-EA15-4B6E-A64F-229D10343C1D",
    philosopher: {
      id: "FD34BB43-EDB4-42D7-A484-4E97190C6061",
    },
    quote:
      "The Orient that appears in Orientalism, then, is a system of representations framed by a whole set of forces that brought the Orient into Western learning, Western consciousness, and later, Western empire. ... The Orient is the stage on which the whole East is confined. On this stage will appear the figures whose role it is to represent the larger whole from which they emanate. The Orient then seems to be, not an unlimited extension beyond the familiar European world, but rather a closed field, a theatrical stage affixed to Europe.",
  },
  {
    work: "Culture and Imperialism",
    year: "1993 AD",
    internalID: "461",
    id: "00730045-56C9-41DC-BD43-17C091467223",
    philosopher: {
      id: "FD34BB43-EDB4-42D7-A484-4E97190C6061",
    },
    quote:
      "Theory is taught so as to make the student believe that he or she can become a Marxist, a feminist, an Afrocentrist, or a deconstructionist with about the same effort and commitment required in choosing items from a menu.",
  },
  {
    work: "The World, the Text, and the Critic",
    year: "1983 AD",
    internalID: "462",
    id: "6BDFBD66-70A2-4AB2-B883-86C6F8DF7595",
    philosopher: {
      id: "FD34BB43-EDB4-42D7-A484-4E97190C6061",
    },
    quote:
      "The traditional university, the hegemony of determinism and positivism, the reification of ideological bourgeois “humanism,” the rigid barriers between academic specialties: it was powerful responses to all these that linked together such influential progenitors of today’s literary theorist as Saussure, Lukács, Bataille, Lévi-Strauss, Freud, Nietzsche, and Marx. Theory proposed itself as a synthesis overriding the petty fiefdoms within the world of intellectual production, and it was manifestly to be hoped as a result that all the domains of human activity could be seen, and lived, as a unity.",
  },
  {
    work: "Capitalism as Religion",
    year: "1921 AD",
    internalID: "463",
    id: "99A9D3A9-4D40-46EF-9066-039EC1527051",
    philosopher: {
      id: "21EA4F15-56AC-40E0-9BA9-3CBF23D3A669",
    },
    quote:
      "A religion may be discerned in capitalism—that is to say, capitalism serves essentially to allay the same anxieties, torments, and disturbances to which the so-called religions offered answers.",
  },
  {
    work: "Theses on the Philosophy of History",
    year: "1940 AD",
    internalID: "464",
    id: "E9BEA6DE-24DC-47F3-B2A4-C997CC7ED709",
    philosopher: {
      id: "21EA4F15-56AC-40E0-9BA9-3CBF23D3A669",
    },
    quote:
      "There is a secret agreement between past generations and the present one. Our coming was expected on earth. Like every generation that preceded us, we have been endowed with a weak Messianic power, a power to which the past has a claim. That claim cannot be settled cheaply.",
  },
  {
    work: "Theses on the Philosophy of History",
    year: "1940 AD",
    internalID: "465",
    id: "FF484981-D4BC-4723-9D77-B97C8CFBAE32",
    philosopher: {
      id: "21EA4F15-56AC-40E0-9BA9-3CBF23D3A669",
    },
    quote:
      'The tradition of the oppressed teaches us that the "state of emergency" in which we live is not the exception but the rule.',
  },
  {
    work: "Arcades Project",
    year: "1940 AD",
    internalID: "466",
    id: "2C10B347-209F-4296-8984-74395AE8E127",
    philosopher: {
      id: "21EA4F15-56AC-40E0-9BA9-3CBF23D3A669",
    },
    quote:
      "Only a thoughtless observer can deny that correspondences come into play between the world of modern technology and the archaic symbol-world of mythology.",
  },
  {
    work: "The Storyteller",
    year: "1936 AD",
    internalID: "467",
    id: "25AEA3BE-0B6B-47DF-98B2-6EF8B7FC86DB",
    philosopher: {
      id: "21EA4F15-56AC-40E0-9BA9-3CBF23D3A669",
    },
    quote:
      "The art of storytelling is reaching its end because the epic side of truth, wisdom, is dying out.",
  },
  {
    work: "One Way Street",
    year: "1928 AD",
    internalID: "468",
    id: "DEB122FE-0D7B-423E-AED8-164B4FC44FBE",
    philosopher: {
      id: "21EA4F15-56AC-40E0-9BA9-3CBF23D3A669",
    },
    quote:
      "A curious paradox: people have only the narrowest private interest in mind when they act, yet they are at the same time more than ever determined in their behavior by the instincts of the mass. ... The diversity of individual goals is immaterial in face of the identity of the determining forces.",
  },
  {
    work: "Science as a Vocation",
    year: "1917 AD",
    internalID: "469",
    id: "536DBFA7-723D-4B0F-AB7B-D188179F0BDC",
    philosopher: {
      id: "96DB522E-2DB7-4F43-8D44-ABD78ECDF1E2",
    },
    quote:
      "The fate of our times is characterized by rationalization and intellectualization and, above all, by the disenchantment of the world.",
  },
  {
    work: "Summa Theologica",
    year: "1274 AD",
    internalID: "47",
    id: "A61ED5DC-BAFA-49D2-902C-2FCDBE8FE411",
    philosopher: {
      id: "843F1E7E-6AE7-4E3E-8FD7-780CB10BA017",
    },
    quote:
      "The image of God always abides in the soul, whether this image be obsolete and clouded over as to amount to almost nothing; or whether it be obscured or disfigured, as is the case with sinners; or whether it be clear and beautiful as is the case with the just.",
  },
  {
    work: "Science as a Vocation",
    year: "1917 AD",
    internalID: "470",
    id: "E5E0F2F9-7628-4413-9912-1DAE0F1BF9BA",
    philosopher: {
      id: "96DB522E-2DB7-4F43-8D44-ABD78ECDF1E2",
    },
    quote:
      "After Nietzsche’s devastating criticism of those “last men” who “invented happiness,” there is probably no need for me to remind you of the naïve optimism with which we once celebrated science, or the technology for the mastery of life based on it, as the path to happiness.",
  },
  {
    work: "The Protestant Ethic and the Spirit of Capitalism",
    year: "1920 AD",
    internalID: "471",
    id: "101DB631-60E9-47D1-9FA2-8719D23AA32A",
    philosopher: {
      id: "96DB522E-2DB7-4F43-8D44-ABD78ECDF1E2",
    },
    quote:
      '"Rationalism" is a historical concept that contains within itself a world of contradictions.',
  },
  {
    work: "Essays in Sociology",
    year: "",
    internalID: "472",
    id: "2546C41B-F5AC-49EB-843D-DC20B1A29DE8",
    philosopher: {
      id: "96DB522E-2DB7-4F43-8D44-ABD78ECDF1E2",
    },
    quote:
      "In a democracy the people choose a leader in whom they trust. Then the chosen leader says, 'Now shut up and obey me.' People and party are then no longer free to interfere in his business.",
  },
  {
    work: "Sociology of Religion",
    year: "",
    internalID: "473",
    id: "BB74133D-8C6E-457D-9B96-C5420F38A535",
    philosopher: {
      id: "96DB522E-2DB7-4F43-8D44-ABD78ECDF1E2",
    },
    quote:
      "The more a religion is aware of its opposition in principle to economic rationalization as such, the more apt are the religion’s virtuosi to reject the world, especially its economic activities.",
  },
  {
    work: "Essays in Sociology",
    year: "",
    internalID: "474",
    id: "05B468D8-4945-410A-AC81-95B9D5893341",
    philosopher: {
      id: "96DB522E-2DB7-4F43-8D44-ABD78ECDF1E2",
    },
    quote:
      "The capacity for the accomplishment of religious virtuosos — the “intellectual sacrifice”— is the decisive characteristic of the positively religious man. That this is so is shown by the fact that in spite of (or rather in consequence) of theology (which unveils it) the tension between the value-spheres of “science” and the sphere of “the holy” is unbridgeable.",
  },
  {
    work: "Sovereign Maxims",
    year: "",
    internalID: "475",
    id: "1C1C97BC-E86B-4959-BB43-8CB40C3E7569",
    philosopher: {
      id: "590E6793-C4CA-4BDE-B8DD-E828951339B3",
    },
    quote:
      "No pleasure is in itself evil, but the things which produce certain pleasures entail annoyances many times greater than the pleasures themselves.",
  },
  {
    work: "Sovereign Maxims",
    year: "",
    internalID: "476",
    id: "48478CC9-E366-4159-96FB-FC3CA309DE7B",
    philosopher: {
      id: "590E6793-C4CA-4BDE-B8DD-E828951339B3",
    },
    quote:
      "It is impossible to live a pleasant life without living wisely and honorably and justly, and it is impossible to live wisely and honorably and justly without living pleasantly.",
  },
  {
    work: "Sovereign Maxims",
    year: "",
    internalID: "477",
    id: "5B4B099D-4AF1-4D88-B8DE-11AA20579C32",
    philosopher: {
      id: "590E6793-C4CA-4BDE-B8DD-E828951339B3",
    },
    quote:
      "Where without any change in circumstances the things held to be just by law are seen not to correspond with the concept of justice in actual practice, such laws are not really just",
  },
  {
    work: "",
    year: "",
    internalID: "478",
    id: "A9AA6996-6577-4FAC-9E54-F11A0EA72375",
    philosopher: {
      id: "590E6793-C4CA-4BDE-B8DD-E828951339B3",
    },
    quote: "Self-sufficiency is the greatest of all wealth.",
  },
  {
    work: "Sovereign Maxims",
    year: "",
    internalID: "479",
    id: "5DDD59FA-29BB-49F0-B72F-AEB836E87268",
    philosopher: {
      id: "590E6793-C4CA-4BDE-B8DD-E828951339B3",
    },
    quote:
      "Of all the means which wisdom acquires to ensure happiness throughout the whole of life, by far the most important is friendship.",
  },
  {
    work: "The Prince",
    year: "1513 AD",
    internalID: "48",
    id: "BCEC4183-6612-4BF8-9EB9-11110C9B7FAC",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "Since love and fear can hardly exist together, if we must choose between them, it is far safer to be feared than loved.",
  },
  {
    work: "Simulacra and Simulation",
    year: "1988 AD",
    internalID: "480",
    id: "FD1F0925-5AE8-4789-BAEF-BFAE30B58F52",
    philosopher: {
      id: "78438BE8-DAE1-455A-81C1-2925921AE831",
    },
    quote:
      "Simulation is no longer that of a territory, a referential being or substance. It is a generation by models of a real without origin or reality: a hyperreal.",
  },
  {
    work: "Simulacra and Simulation",
    year: "1988 AD",
    internalID: "481",
    id: "5DD43DDD-30E7-4BC7-80B2-AB6BC9743931",
    philosopher: {
      id: "78438BE8-DAE1-455A-81C1-2925921AE831",
    },
    quote:
      "When the real is no longer what it was, nostalgia assumes its full meaning.",
  },
  {
    work: "The Ecstasy of Communication",
    year: "1987 AD",
    internalID: "482",
    id: "9BCCF817-A33E-4D56-B35B-4A928DDBD655",
    philosopher: {
      id: "78438BE8-DAE1-455A-81C1-2925921AE831",
    },
    quote:
      "The need to speak, even if one has nothing to say, becomes more pressing when one has nothing to say, just as the will to live becomes more urgent when life has lost its meaning.",
  },
  {
    work: "Cool Memories",
    year: "1987 AD",
    internalID: "483",
    id: "246C0999-5A2C-4FB5-A15C-FBB5F4977670",
    philosopher: {
      id: "78438BE8-DAE1-455A-81C1-2925921AE831",
    },
    quote:
      "Boredom is like a pitiless zooming in on the epidermis of time. Every instant is dilated and magnified like the pores of the face.",
  },
  {
    work: "The Ecstasy of Communication",
    year: "1987 AD",
    internalID: "484",
    id: "7825D788-DB08-47F7-9637-03824251C821",
    philosopher: {
      id: "78438BE8-DAE1-455A-81C1-2925921AE831",
    },
    quote:
      "The discourse of truth is quite simply impossible. It eludes itself. Everything eludes itself, everything scoffs at its own truth, seduction renders everything elusive. The fury to unveil the truth, to get at the naked truth, the one which haunts all discourses of interpretation, the obscene rage to uncover the secret, is proportionate to the impossibility of ever achieving this. …But this rage, this fury, only bears witness to the eternity of seduction and to the impossibility of mastering it.",
  },
  {
    work: "The Illusion of the End",
    year: "1992 AD",
    internalID: "485",
    id: "2494E8F1-CD8A-47AD-8D56-35F5AF588CF8",
    philosopher: {
      id: "78438BE8-DAE1-455A-81C1-2925921AE831",
    },
    quote:
      "The end of history is, alas, also the end of the dustbins of history. There are no longer any dustbins for disposing of old ideologies, old regimes, old values. Where are we going to throw Marxism, which actually invented the dustbins of history? (Yet there is some justice here since the very people who invented them have fallen in.) Conclusion: if there are no more dustbins of history, this is because History itself has become a dustbin. It has become its own dustbin, just as the planet itself is becoming its own dustbin.",
  },
  {
    work: "Women, Race and Class",
    year: "1983 AD",
    internalID: "486",
    id: "86BB21CC-83A1-4DF4-AFBE-8020802A6DA4",
    philosopher: {
      id: "E54F0371-327C-49FB-8EAA-53CEB7E4190A",
    },
    quote:
      "“Woman” was the test, but not every woman seemed to qualify. Black women, of course, were virtually invisible within the protracted campaign for woman suffrage. As for white working-class women, the suffrage leaders were probably impressed at first by the organizing efforts and militancy of their working-class sisters. But as it turned out, the working women themselves did not enthusiastically embrace the cause of woman suffrage.",
  },
  {
    work: "Are Prisons Obsolete?",
    year: "2003 AD",
    internalID: "487",
    id: "A3B36DCF-F328-4FA3-9377-85544C4CEEE4",
    philosopher: {
      id: "E54F0371-327C-49FB-8EAA-53CEB7E4190A",
    },
    quote:
      "The prison therefore functions ideologically as an abstract site into which undesirables are deposited, relieving us of the responsibility of thinking about the real issues afflicting those communities from which prisoners are drawn in such disproportionate numbers. This is the ideological work that the prison performs—it relieves us of the responsibility of seriously engaging with the problems of our society, especially those produced by racism and, increasingly, global capitalism.",
  },
  {
    work: "Women, Race and Class",
    year: "1983 AD",
    internalID: "488",
    id: "08509B95-CD0B-4A01-83B6-140DC83B2DFE",
    philosopher: {
      id: "E54F0371-327C-49FB-8EAA-53CEB7E4190A",
    },
    quote:
      "As a rule, white abolitionists either defended the industrial capitalists or expressed no conscious class loyalty at all. This unquestioning acceptance of the capitalist economic system was evident in the program of the women’s rights movement as well. If most abolitionists viewed slavery as a nasty blemish which needed to be eliminated, most women’s righters viewed male supremacy in a similar manner—as an immoral flaw in their otherwise acceptable society.",
  },
  {
    work: "Freedom is a Constant Struggle: Closures and Continuities",
    year: "2013 AD",
    internalID: "489",
    id: "8E82B1D2-F296-4566-9954-081250481364",
    philosopher: {
      id: "E54F0371-327C-49FB-8EAA-53CEB7E4190A",
    },
    quote:
      "There is this freedom movement and then there is an attempt to narrow the freedom movement so that it fits into a much smaller frame, the frame of civil rights. Not that civil rights is not immensely important, but freedom is more expansive that civil rights. And as that movement grew and developed it was inspired by and in turn inspired liberation struggles in Africa, Asia, Latin America and Australia.",
  },
  {
    work: "The Prince",
    year: "1513 AD",
    internalID: "49",
    id: "CAB35AE3-C590-4224-B2D5-1BDE62486613",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "The Romans never allowed a trouble spot to remain simply to avoid going to war over it, because they knew that wars don't just go away, they are only postponed to someone else's advantage.",
  },
  {
    work: "Freedom is a Constant Struggle: Closures and Continuities",
    year: "2013 AD",
    internalID: "490",
    id: "200587DF-04F3-4AD4-BA02-E83A391E0088",
    philosopher: {
      id: "E54F0371-327C-49FB-8EAA-53CEB7E4190A",
    },
    quote:
      "You know terrorism which is represented as external, as outside, is very much a domestic phenomenon. Terrorism very much shaped the history of the United States of America.",
  },
  {
    work: "Essais",
    year: "1595 AD",
    internalID: "491",
    id: "AC1314D5-F1EF-4848-86B4-EBCC5EBA17A3",
    philosopher: {
      id: "C3897DE8-3A6B-456E-9CEE-387FC96C738C",
    },
    quote:
      "I want to be seen here in my simple, natural, ordinary fashion, without straining or artifice; for it is myself that I portray...I am myself the matter of my book.",
  },
  {
    work: "Essais",
    year: "1595 AD",
    internalID: "492",
    id: "C427748E-7A2D-42AB-B4E5-85E0D02B1F0F",
    philosopher: {
      id: "C3897DE8-3A6B-456E-9CEE-387FC96C738C",
    },
    quote:
      "Wherever your life ends, it is all there. The advantage of living is not measured by length, but by use; some men have lived long, and lived little; attend to it while you are in it. It lies in your will, not in the number of years, for you to have lived enough.",
  },
  {
    work: "Essais",
    year: "1595 AD",
    internalID: "493",
    id: "711932FE-72F3-4CDB-B930-74CF70A20BFE",
    philosopher: {
      id: "C3897DE8-3A6B-456E-9CEE-387FC96C738C",
    },
    quote: "Que sais-je? (What know I?)",
  },
  {
    work: "Essais",
    year: "1595 AD",
    internalID: "494",
    id: "EB5F8E13-D27C-41BC-8E98-1C31A7EA20A1",
    philosopher: {
      id: "C3897DE8-3A6B-456E-9CEE-387FC96C738C",
    },
    quote:
      "We are brought to a belief of God either by reason or by force. Atheism being a proposition as unnatural as monstrous, difficult also and hard to establish in the human understanding, how arrogant soever, there are men enough seen, out of vanity and pride, to be the authors of extraordinary and reforming opinions, and outwardly to affect the profession of them; who, if they are such fools, have, nevertheless, not the power to plant them in their own conscience.",
  },
  {
    work: "Essais",
    year: "1595 AD",
    internalID: "495",
    id: "9AD3D3DF-EAD7-4489-8201-D1D1169A996E",
    philosopher: {
      id: "C3897DE8-3A6B-456E-9CEE-387FC96C738C",
    },
    quote:
      "There is no man so good that if he placed all his actions and thoughts under the scrutiny of the laws, he would not deserve hanging ten times in his life.",
  },
  {
    work: "Essais",
    year: "1595 AD",
    internalID: "496",
    id: "9EB49BA2-0356-4D69-981E-5D58940B6CC9",
    philosopher: {
      id: "C3897DE8-3A6B-456E-9CEE-387FC96C738C",
    },
    quote:
      "It is more of a job to interpret the interpretations than to interpret the things, and there are more books about books than about any other subject: we do nothing but write glosses about each other.",
  },
  {
    work: "The End of History and the Last Man",
    year: "1992 AD",
    internalID: "497",
    id: "F657B482-A8C2-450F-9259-AB9748C7192B",
    philosopher: {
      id: "18E45730-7891-48FD-A3EA-1447CBD25273",
    },
    quote:
      "That is, the end point of mankind's ideological evolution and the universalization of Western liberal democracy as the final form of human government.",
  },
  {
    work: "After Neoconservatism",
    year: "2006 AD",
    internalID: "498",
    id: "1904B971-A389-4484-99BC-B1A68E50E50D",
    philosopher: {
      id: "18E45730-7891-48FD-A3EA-1447CBD25273",
    },
    quote:
      "Neoconservatives believed that history can be pushed along with the right application of power and will.",
  },
  {
    work: "The End of History and the Last Man",
    year: "1992 AD",
    internalID: "499",
    id: "7B338E0B-E461-42AC-9B0B-AECFF6CD9B14",
    philosopher: {
      id: "18E45730-7891-48FD-A3EA-1447CBD25273",
    },
    quote:
      "The notion that mankind has progressed through a series of primitive stages of consciousness on his path to the present, and that these stages corresponded to concrete forms of social organization, such as tribal, slave-owning, theocratic, and finally democratic-egalitarian societies, has become inseparable from the modern understanding of man.",
  },
  {
    work: "Fragments",
    year: "",
    internalID: "5",
    id: "8F305FC7-9668-4805-94BA-999DC3A79D93",
    philosopher: {
      id: "410D7B25-4F70-4346-A01A-CA556498FFFE",
    },
    quote: "All entities come to be in accordance with this Logos.",
  },
  {
    work: "The Prince",
    year: "1513 AD",
    internalID: "50",
    id: "84C6E797-CC15-4E2D-B0A4-324D89AA8E04",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "A prince ought to have no other aim or thought, nor select anything else for his study, than war and its rules and discipline; for this is the sole art that belongs to him who rules, and it is of such force that it not only upholds those who are born princes, but it often enables men to rise from a private station to that rank.",
  },
  {
    work: "A Voice from the South",
    year: "1892 AD",
    internalID: "500",
    id: "3EA48794-3D75-4490-ABA6-5BCC8EFA911F",
    philosopher: {
      id: "D070CF3D-759D-47D0-8A7B-8B1637C89F78",
    },
    quote:
      "One muffled strain in the Silent South, a jarring chord and a vague and uncomprehended cadenza has been and still is the Negro. And of that muffled chord, the one mute and voiceless note has been the sadly expectant Black Woman...",
  },
  {
    work: "A Voice from the South",
    year: "1892 AD",
    internalID: "501",
    id: "1FCDBE8D-1C18-4C63-B1BE-6E4391FCEBAD",
    philosopher: {
      id: "D070CF3D-759D-47D0-8A7B-8B1637C89F78",
    },
    quote:
      "Then, too, the South represented blood-- not red blood, but blue blood. The difference is in the length of the stream and your distance from its source. If your own father was a pirate, a, robber, a murderer, his hands are dyed in red blood, and you don't say very much about it. But if your great great great grandfather's grandfather stole and pillaged and slew, and you can prove it, your blood has become blue and you are at great pains to establish the relationship.",
  },
  {
    work: "A Voice from the South",
    year: "1892 AD",
    internalID: "502",
    id: "8159E6CA-4CDD-413F-9FCD-3BDF244FF286",
    philosopher: {
      id: "D070CF3D-759D-47D0-8A7B-8B1637C89F78",
    },
    quote:
      "To-day America counts her millionaires by the thousand; questions of tariff and questions of currency are the most vital ones agitating the public mind. In this period, when material prosperity and well earned ease and luxury are assured facts from a national standpoint, woman's work and woman's influence are needed as never before; needed to bring a heart power into this money getting, dollar-worshipping civilization; needed to bring a moral force into the utilitarian motives and interests of the time; needed to stand for God and Home and Native Land versus gain and greed and grasping selfishness.",
  },
  {
    work: "A Voice from the South",
    year: "1892 AD",
    internalID: "503",
    id: "4C502AAB-2A27-4D66-9F40-D88F02A8087F",
    philosopher: {
      id: "D070CF3D-759D-47D0-8A7B-8B1637C89F78",
    },
    quote:
      "There are two kinds of peace in this world. The one produced by suppression, which is the passivity of death; the other brought about by a proper adjustment of living, acting forces. A nation or an individual may be at peace because all opponents have been killed or crushed; or, nation as well as individual may have found the secret of true harmony in the determination to live and let live.",
  },
  {
    work: "The Structure of Scientific Revolutions",
    year: "1962 AD",
    internalID: "504",
    id: "B1D5E789-8317-45D8-956D-77FC43F07424",
    philosopher: {
      id: "E503AC1C-CDCC-424B-A18F-5EDC57A41979",
    },
    quote:
      '"Normal science" means research firmly based upon one or more past scientific achievements, achievements that some particular scientific community acknowledges for a time as supplying the foundation for its further practice',
  },
  {
    work: "The Structure of Scientific Revolutions",
    year: "1962 AD",
    internalID: "505",
    id: "10FCCD54-7F26-485A-AE98-AA69D61C8290",
    philosopher: {
      id: "E503AC1C-CDCC-424B-A18F-5EDC57A41979",
    },
    quote:
      "In science, as in the playing card experiment, novelty emerges only with difficulty, manifested by resistance, against a background provided by expectation.",
  },
  {
    work: "The Structure of Scientific Revolutions",
    year: "1962 AD",
    internalID: "506",
    id: "2FAA0CF1-A304-41D0-AD32-B12709A22189",
    philosopher: {
      id: "E503AC1C-CDCC-424B-A18F-5EDC57A41979",
    },
    quote:
      "Scientific revolutions are inaugurated by a growing sense... that an existing paradigm has ceased to function adequately in the exploration of an aspect of nature to which that paradigm itself had previously led the way.",
  },
  {
    work: "The Structure of Scientific Revolutions",
    year: "1962 AD",
    internalID: "507",
    id: "B0B07021-71E2-468C-883A-806413524728",
    philosopher: {
      id: "E503AC1C-CDCC-424B-A18F-5EDC57A41979",
    },
    quote:
      "We may, to be more precise, have to relinquish the notion, explicit or implicit, that changes of paradigm carry scientists and those who learn from them closer and closer to the truth",
  },
  {
    work: "Epistolae",
    year: "",
    internalID: "508",
    id: "4FE6847F-48CA-471E-ABAD-9EAEB090E624",
    philosopher: {
      id: "9AB7B738-3926-4290-BA69-70D0A2F5EEC2",
    },
    quote:
      "Now the kind of philosophy under which we proceed in the whole and in the part is moral philosophy or ethics; because the whole was undertaken not for speculation but for practice.",
  },
  {
    work: "Paradiso",
    year: "1321 AD",
    internalID: "509",
    id: "FC45C4FA-CEEB-4216-8AEE-D489327EFADB",
    philosopher: {
      id: "9AB7B738-3926-4290-BA69-70D0A2F5EEC2",
    },
    quote:
      "The greatest gift which God in His bounty bestowed in creating, and the most conformed to His own goodness and that which He most prizes, was the freedom of the will, with which the creatures that have intelligence, they all and they alone, were and are endowed.",
  },
  {
    work: "A Vindication of the Rights of Woman",
    year: "1792 AD",
    internalID: "509",
    id: "751EC68E-3D95-424C-A9E6-394A6639D787",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote:
      "Independence I have long considered as the grand blessing of life, the basis of every virtue; and independence I will ever secure by contracting my wants, though I were to live on a barren heath.",
  },
  {
    work: "The Prince",
    year: "1513 AD",
    internalID: "51",
    id: "C48F8E4F-5D67-42F4-9D59-6F378CFFED79",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "A prudent man should always follow in the path trodden by great men and imitate those who are most excellent.",
  },
  {
    work: "Inferno",
    year: "1321 AD",
    internalID: "510",
    id: "6C1C4B4E-E006-4A7E-95A2-B6A3FB38BC78",
    philosopher: {
      id: "9AB7B738-3926-4290-BA69-70D0A2F5EEC2",
    },
    quote:
      "Consider your origin;\nyou were not born to live like brutes,\nbut to follow virtue and knowledge.",
  },
  {
    work: "A Vindication of the Rights of Woman",
    year: "1792 AD",
    internalID: "510",
    id: "B295D6BF-5113-4DCA-B9A7-06CC923641BF",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote:
      "Till women are more rationally educated, the progress in human virtue and improvement in knowledge must receive continual checks.",
  },
  {
    work: "The French Revolution",
    year: "1794 AD",
    internalID: "511",
    id: "315122AF-FA8D-4B5E-9824-D31948FA7CFB",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote:
      "The endeavor to keep alive any hoary establishment beyond its natural date is often pernicious and always useless.",
  },
  {
    work: "Paradiso",
    year: "1321 AD",
    internalID: "511",
    id: "4BDC2038-4418-454B-AA36-489C543B8683",
    philosopher: {
      id: "9AB7B738-3926-4290-BA69-70D0A2F5EEC2",
    },
    quote:
      "I saw within Its depth how It conceives\nall things in a single volume bound by Love,\nof which the universe is the scattered leaves.",
  },
  {
    work: "A Vindication of the Rights of Woman",
    year: "1792 AD",
    internalID: "512",
    id: "42972AEA-D72E-4116-B200-C48FC0319C6E",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote: "It is justice, not charity, that is wanting in the world.",
  },
  {
    work: "Letters Written in Sweden",
    year: "1796 AD",
    internalID: "513",
    id: "AA0D0745-D50B-4694-908A-AD7AD28B0E6D",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote: "We reason deeply, when we forcibly feel.",
  },
  {
    work: "The French Revolution",
    year: "1794 AD",
    internalID: "514",
    id: "3E01114A-8AA0-4351-8C5B-B6C7283EDF7C",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote:
      "Every political good carried to the extreme must be productive of evil.",
  },
  {
    work: "A Vindication of the Rights of Men",
    year: "1790 AD",
    internalID: "515",
    id: "23E0F281-30B4-4AD0-AAB5-257C041103A0",
    philosopher: {
      id: "CCC2816D-0CB9-44F4-98C9-CAE66F2EACD3",
    },
    quote:
      "No man chooses evil because it is evil; he only mistakes it for happiness, the good he seeks.",
  },
  {
    work: "Summa Totius Logicae",
    year: "",
    internalID: "516",
    id: "C7925109-7361-4611-94BF-C6A50FEA50C7",
    philosopher: {
      id: "3172E773-E550-47A1-AB2A-2FE312A5B2C0",
    },
    quote: "It is pointless to do with more what can be done with fewer.",
  },
  {
    work: "Summa Logicae",
    year: "1323 AD",
    internalID: "517",
    id: "7671675B-FA65-4D08-B2B4-BD8EBE499422",
    philosopher: {
      id: "3172E773-E550-47A1-AB2A-2FE312A5B2C0",
    },
    quote:
      "Logic is the most useful tool of all the arts. Without it no science can be fully known.",
  },
  {
    work: "Quaestiones et decisiones in quattuor libros Sententiarum Petri Lombardi",
    year: "",
    internalID: "518",
    id: "AD0A4ECE-4029-4CA3-8326-2DC50CA14156",
    philosopher: {
      id: "3172E773-E550-47A1-AB2A-2FE312A5B2C0",
    },
    quote: "Plurality is never to be posited without necessity.",
  },
  {
    work: "The Principles of the Most Ancient and Modern Philosophy",
    year: "1675 AD",
    internalID: "519",
    id: "AC0C4454-739B-4DB0-A6D5-728304FB1E31",
    philosopher: {
      id: "01CBC5D4-55DE-4579-8DBB-D3B8762E545C",
    },
    quote:
      "I say, life and figure are distinct attributes of one substance, and as one and the same body may be transmuted into all kinds of figures; and as the perfecter figure comprehends that which is more imperfect; so one and the same body may be transmuted from one degree of life to another more perfect, which always comprehends in it the inferior.",
  },
  {
    work: "Discourses on Livy",
    year: "1517 AD",
    internalID: "52",
    id: "94FBDA6C-9654-4F6D-AE13-0CF9823B5A24",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "Anyone who studies present and ancient affairs will easily see how in all cities and all peoples there still exist, and have always existed, the same desires and passions.",
  },
  {
    work: "The Principles of the Most Ancient and Modern Philosophy",
    year: "1675 AD",
    internalID: "520",
    id: "EAFE8EC9-1695-4487-A555-B3D4C6CC2501",
    philosopher: {
      id: "01CBC5D4-55DE-4579-8DBB-D3B8762E545C",
    },
    quote:
      "...the creature is always capable of a farther and perfecter degree of life, ad infinitum, and yet can never attain to be equal with God; for he is still infinitely more perfect than a creature, in its highest elevation or perfection...",
  },
  {
    work: "Quoted by Stobaeus",
    year: "",
    internalID: "521",
    id: "28C63809-BE64-4FA9-8751-1DAA5DAE1400",
    philosopher: {
      id: "28FC9356-FD10-49E5-A10B-F3B3D06B6A3B",
    },
    quote:
      "The noblest people are those despising wealth, learning, pleasure and life; esteeming above them poverty, ignorance, hardship and death.",
  },
  {
    work: "Quoted by Plutarch",
    year: "",
    internalID: "522",
    id: "1F7AC255-1B53-4DC1-ABCD-95C4B88E7AF5",
    philosopher: {
      id: "28FC9356-FD10-49E5-A10B-F3B3D06B6A3B",
    },
    quote:
      "Aristotle dines when it seems good to King Philip, but Diogenes when he himself pleases.",
  },
  {
    work: "Quoted by Stobaeus",
    year: "",
    internalID: "523",
    id: "C5771C2E-D710-4E24-92BA-A727B780564D",
    philosopher: {
      id: "28FC9356-FD10-49E5-A10B-F3B3D06B6A3B",
    },
    quote:
      "It is not that I am mad, it is only that my head is different from yours.",
  },
  {
    work: "Quoted by Plutarch",
    year: "",
    internalID: "524",
    id: "BF010A40-C8AB-4BB0-B54A-447545A5F2C6",
    philosopher: {
      id: "28FC9356-FD10-49E5-A10B-F3B3D06B6A3B",
    },
    quote:
      "If you are to be kept right, you must possess either good friends or red-hot enemies. The one will warn you, the other will expose you.",
  },
  {
    work: "Quoted by Stobaeus",
    year: "",
    internalID: "525",
    id: "42A5E7F7-1278-4A30-BE4A-4B6EBE19B410",
    philosopher: {
      id: "28FC9356-FD10-49E5-A10B-F3B3D06B6A3B",
    },
    quote:
      "Self-taught poverty is a help toward philosophy, for the things which philosophy attempts to teach by reasoning, poverty forces us to practice.",
  },
  {
    work: "A General View of Positivism",
    year: "1848 AD",
    internalID: "526",
    id: "662C46A3-EF57-4797-A426-B3753377D70C",
    philosopher: {
      id: "389472AB-3BF9-4E5E-BB9E-A5B858BFD20D",
    },
    quote:
      "The object of all true Philosophy is to frame a system which shall comprehend human life under every aspect, social as well as individual. It embraces, therefore, the three kinds of phenomena of which our life consists, Thoughts, Feelings, and Actions.",
  },
  {
    work: "Le Catéchisme positiviste",
    year: "1852 AD",
    internalID: "527",
    id: "AAD0CE6B-E982-4366-B576-41BF3706FE64",
    philosopher: {
      id: "389472AB-3BF9-4E5E-BB9E-A5B858BFD20D",
    },
    quote: "The dead govern the living.",
  },
  {
    work: "A General View of Positivism",
    year: "1848 AD",
    internalID: "528",
    id: "294518AE-C8C2-4BFA-A557-E07638D4230F",
    philosopher: {
      id: "389472AB-3BF9-4E5E-BB9E-A5B858BFD20D",
    },
    quote:
      "Reorganisation, irrespectively of God or king, by the worship of Humanity, systematically adopted. Man’s only right is to do his duty. The Intellect should always be the servant of the Heart, and should never be its slave.",
  },
  {
    work: "A General View of Positivism",
    year: "1848 AD",
    internalID: "529",
    id: "E3532BB8-674A-442E-A251-1B7A3CC13D3B",
    philosopher: {
      id: "389472AB-3BF9-4E5E-BB9E-A5B858BFD20D",
    },
    quote:
      "It lays down, as is generally known, that our speculations upon all subjects whatsoever, pass necessarily through three successive stages: a Theological stage, in which free play is given to spontaneous fictions admitting of no proof; the Metaphysical stage, characterized by the prevalence of personified abstractions or entities; lastly, the Positive stage, based upon an exact view of the real facts of the case.",
  },
  {
    work: "Discourses on Livy",
    year: "1517 AD",
    internalID: "53",
    id: "1166475A-A656-4DAC-80F6-ECAE440411E6",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "It is not titles that make men illustrious, but men who make titles illustrious.",
  },
  {
    work: "System of Positive Polity",
    year: "1852 AD",
    internalID: "530",
    id: "6FA9D065-90AF-43C2-8901-5BC99698DEEE",
    philosopher: {
      id: "389472AB-3BF9-4E5E-BB9E-A5B858BFD20D",
    },
    quote:
      "Language forms a kind of wealth, which all can make use of at once without causing any diminution of the store, and which thus admits a complete community of enjoyment; for all, freely participating in the general treasure, unconsciously aid in its preservation.",
  },
  {
    work: "Essex's Device",
    year: "1595 AD",
    internalID: "531",
    id: "36ACDFD6-936C-4383-AD96-8D6DCCA42D6C",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote: "The monuments of wit survive the monuments of power.",
  },
  {
    work: "Valerius Terminus: Of the Interpretation of Nature",
    year: "1603 AD",
    internalID: "532",
    id: "BAF60655-8E94-4140-94A4-979C37032A44",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote:
      "Knowledge, that tendeth but to satisfaction, is but as a courtesan, which is for pleasure, and not for fruit or generation.",
  },
  {
    work: "De Augmentis Scientiarum",
    year: "1623 AD",
    internalID: "533",
    id: "EC68A33F-4BDD-477C-A4A1-A3962A8037D8",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote: "Riches are a good handmaid, but the worst mistress.",
  },
  {
    work: "Sylva Sylvarum",
    year: "1626 AD",
    internalID: "534",
    id: "633A5DA4-9F12-477A-BF3C-4F0158F43081",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote:
      "It is true that may hold in these things, which is the general root of superstition; namely, that men observe when things hit, and not when they miss; and commit to memory the one, and forget and pass over the other.",
  },
  {
    work: "The Advancement of Learning",
    year: "1605 AD",
    internalID: "535",
    id: "DB7BC49C-097C-4DAC-A52F-B2244B100A23",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote:
      "If a man will begin with certainties, he shall end in doubts; but if he will be content to begin with doubts he shall end in certainties.",
  },
  {
    work: "The Advancement of Learning",
    year: "1605 AD",
    internalID: "536",
    id: "13395A5E-E531-43FA-9030-15BAC2FA4421",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote:
      "We are much beholden to Machiavel and others, that write what men do, and not what they ought to do.",
  },
  {
    work: "Novum Organum",
    year: "1620 AD",
    internalID: "537",
    id: "C37E78DD-1F3F-48D2-9200-D121782BA895",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote:
      "There are four classes of Idols which beset men's minds. To these for distinction's sake I have assigned names — calling the first class, Idols of the Tribe; the second, Idols of the Cave; the third, Idols of the Market-Place; the fourth, Idols of the Theater.",
  },
  {
    work: "Essays",
    year: "1625 AD",
    internalID: "538",
    id: "3C57CB0C-4062-4046-8505-11BABC3B3497",
    philosopher: {
      id: "4E6E7356-E6E7-4F0A-BA66-5502F858E1CF",
    },
    quote:
      "Nothing doth more hurt in a state than that cunning men pass for wise.",
  },
  {
    work: "Sexes et Parentés",
    year: "1987 AD",
    internalID: "539",
    id: "CB5905B7-48AD-4118-8FE0-D463BC2F76A5",
    philosopher: {
      id: "A0060293-AADA-4C38-A85B-7080664BB0DC",
    },
    quote:
      "Thought excludes the heart that moves it. That which makes thought live is spoiled, set outside of it. But it does not know this.",
  },
  {
    work: "Discourses on Livy",
    year: "1517 AD",
    internalID: "54",
    id: "1B826732-D78D-4743-892B-7A7FC8AC391E",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "It is truly a marvelous thing to consider to what greatness Athens arrived in the space of one hundred years after she freed herself from the tyranny of Pisistratus; but, above all, it is even more marvelous to consider the greatness Rome reached when she freed herself from her kings. The reason is easy to understand, for it is the common good and not private gain that makes cities great.",
  },
  {
    work: "This Sex Which is Not One",
    year: "1977 AD",
    internalID: "540",
    id: "381C89EA-1D3D-417F-BEEB-B78463B953B2",
    philosopher: {
      id: "A0060293-AADA-4C38-A85B-7080664BB0DC",
    },
    quote:
      "As commodities, women are thus two things at once: utilitarian objects and bearers of value.",
  },
  {
    work: "Philosophy as a Revolutionary Weapon",
    year: "1968 AD",
    internalID: "541",
    id: "EE8939C6-1409-4395-864D-F76B711B7BE2",
    philosopher: {
      id: "CB9D4E17-71FE-46FD-B08C-C090398FDA95",
    },
    quote:
      "The sciences we are familiar with have been installed in a number of great 'continents'. Before Marx, two such continents had been opened up to scientific knowledge: the continent of Mathematics and the continent of Physics. The first by the Greeks (Thales), the second by Galileo. Marx opened up a third continent to scientific knowledge: the continent of History.",
  },
  {
    work: "Philosophy as a Revolutionary Weapon",
    year: "1968 AD",
    internalID: "542",
    id: "E942FDA8-932D-4FB7-AD9B-2AABAD1BCDE1",
    philosopher: {
      id: "CB9D4E17-71FE-46FD-B08C-C090398FDA95",
    },
    quote:
      "The number-one philosophical battle therefore takes place on the frontier between the scientific and the ideological. There the idealist philosophies which exploit the sciences struggle against the materialist philosophies which serve the sciences.",
  },
  {
    work: "Ideology and Ideological State Apparatuses",
    year: "1968 AD",
    internalID: "543",
    id: "55A7FE3A-E66C-45FF-ABFA-CDC9B2734A77",
    philosopher: {
      id: "CB9D4E17-71FE-46FD-B08C-C090398FDA95",
    },
    quote:
      "While speaking in ideology, and from within ideology we have to outline a discourse which tries to break with ideology, in order to dare to be the beginning of a scientific (i.e. subject-less) discourse on ideology.",
  },
  {
    work: "Ideology and Ideological State Apparatuses",
    year: "1968 AD",
    internalID: "544",
    id: "72D031E7-52E3-4DE2-8116-4271F68C6508",
    philosopher: {
      id: "CB9D4E17-71FE-46FD-B08C-C090398FDA95",
    },
    quote:
      "The reproduction of labour power thus reveals as its sine qua non not only the reproduction of its ‘skills’ but also the reproduction of its subjection to the ruling ideology. ... It is in the forms and under the forms of ideological subjection that provision is made for the reproduction of the skills of labour power.",
  },
  {
    work: "Quoted by Aristotle in Metaphysics",
    year: "",
    internalID: "545",
    id: "001C962A-5126-4B8E-8A5F-FEA976501C08",
    philosopher: {
      id: "5B8D36E5-56E2-47E4-9C4C-34A0F107D9B1",
    },
    quote: "Water is the first principle of everything.",
  },
  {
    work: "Quoted by Diogenes Laërtius in The Lives and Opinions of Eminent Philosophers",
    year: "",
    internalID: "546",
    id: "BD676BC6-ACC5-47E1-8FCF-D60311AED512",
    philosopher: {
      id: "5B8D36E5-56E2-47E4-9C4C-34A0F107D9B1",
    },
    quote: "A multitude of words is no proof of a prudent mind.",
  },
  {
    work: "Quoted by Diogenes Laërtius in The Lives and Opinions of Eminent Philosophers",
    year: "",
    internalID: "547",
    id: "818713D7-07DB-467C-9208-39ED5AF0D785",
    philosopher: {
      id: "5B8D36E5-56E2-47E4-9C4C-34A0F107D9B1",
    },
    quote: "Know thyself.",
  },
  {
    work: "Quoted by Diogenes Laërtius in The Lives and Opinions of Eminent Philosophers",
    year: "",
    internalID: "548",
    id: "578E6827-6508-4353-97C6-4B072E638E74",
    philosopher: {
      id: "5B8D36E5-56E2-47E4-9C4C-34A0F107D9B1",
    },
    quote: "Avoid doing what you would blame others for doing.",
  },
  {
    work: "Persian Letters",
    year: "1721 AD",
    internalID: "549",
    id: "09A9AE80-F2DF-4E29-BACD-0B6BF051DFFF",
    philosopher: {
      id: "A9272AC1-8524-4429-A7C1-2EECBDBB4920",
    },
    quote: "A man should be mourned at his birth, not at his death.",
  },
  {
    work: "The Art of War",
    year: "1520 AD",
    internalID: "55",
    id: "A7AD1E65-F4CB-4A31-A8D1-8FDBF12A42E2",
    philosopher: {
      id: "4ECF88A5-4159-410A-97CA-ED1984280CF6",
    },
    quote:
      "No proceeding is better than that which you have concealed from the enemy until the time you have executed it. To know how to recognize an opportunity in war, and take it, benefits you more than anything else.",
  },
  {
    work: "The Spirit of the Laws",
    year: "1748 AD",
    internalID: "550",
    id: "81A060D5-DAB9-4711-B942-B215A954E4CF",
    philosopher: {
      id: "A9272AC1-8524-4429-A7C1-2EECBDBB4920",
    },
    quote:
      "To prevent this abuse, it is necessary that, by the arrangement of things, power shall stop power. A government may be so constituted, as no man shall be compelled to do things to which the law does not oblige him, nor forced to abstain from things which the law permits.",
  },
  {
    work: "Persian Letters",
    year: "1721 AD",
    internalID: "551",
    id: "95D06D42-9615-46AA-95D6-9554CE376D9A",
    philosopher: {
      id: "A9272AC1-8524-4429-A7C1-2EECBDBB4920",
    },
    quote:
      "Life was given to me as a favor, so I may abandon it when it is one no longer.",
  },
  {
    work: "Persian Letters",
    year: "1721 AD",
    internalID: "552",
    id: "BE1E23D3-43ED-4657-9F91-6C4963191769",
    philosopher: {
      id: "A9272AC1-8524-4429-A7C1-2EECBDBB4920",
    },
    quote:
      "There are only two cases in which war is just: first, in order to resist the aggression of an enemy, and second, in order to help an ally who has been attacked.",
  },
  {
    work: "Pensées et Fragments Inédits de Montesquieu",
    year: "",
    internalID: "553",
    id: "CF213208-AEF5-44DE-823A-DF9570C69177",
    philosopher: {
      id: "A9272AC1-8524-4429-A7C1-2EECBDBB4920",
    },
    quote:
      "If I knew of something that could serve my nation but would ruin another, I would not propose it to my prince, for I am first a man and only then a Frenchman, because I am necessarily a man, and only accidentally am I French.",
  },
  {
    work: "Anti-Oedipus Capitalism and Schizophrenia",
    year: "1977 AD",
    internalID: "554",
    id: "D7052E93-2EE1-43D5-A538-47E8BD62F703",
    philosopher: {
      id: "645F4A3B-9F64-47D4-B757-A7B4FDE705D1",
    },
    quote:
      "What a mistake to have ever said the id. Everywhere it is machines- real ones, not figurative ones: machines driving other machines, machines being driven by other machines, with all the necessary couplings and connections. An organ-machine is plugged into an energy-source-machine: the one produces a flow that the other interrupts The breast is a machine that produces miilk, and the mouth a machine coupled to it.",
  },
  {
    work: "Anti-Oedipus Capitalism and Schizophrenia",
    year: "1977 AD",
    internalID: "555",
    id: "2BAC7493-CBCD-4837-A452-8AAF778D3087",
    philosopher: {
      id: "645F4A3B-9F64-47D4-B757-A7B4FDE705D1",
    },
    quote:
      "Second, we make no distinction between man and nature: the human essence of nature and the natural essence of man become one within nature in the form of production or industry, just as they do within the life of man as a species. Industry is then no longer considered from the extrinsic point of view of utility, but rather from the point of view of its fundamental identity with nature as production of man and by man.",
  },
  {
    work: "I have Nothing to Admit",
    year: "1977 AD",
    internalID: "556",
    id: "37402A3E-4D5F-4425-A6F5-0DF8777FB736",
    philosopher: {
      id: "645F4A3B-9F64-47D4-B757-A7B4FDE705D1",
    },
    quote:
      "A book is a small cog in a much more complex, external machinery. Writing is a flow among others; it enjoys no special privilege and enters into relationships of current and counter-current, of back-wash with other flows — the flows of shit, sperm, speech, action, eroticism, money, politics, etc. Like Bloom, writing on the sand with one hand and masturbating with the other — two flows in what relationship?",
  },
  {
    work: "Nietzsche and Philosophy",
    year: "1962 AD",
    internalID: "557",
    id: "4A62301F-341E-4EB3-BD2E-1C33615DBF86",
    philosopher: {
      id: "645F4A3B-9F64-47D4-B757-A7B4FDE705D1",
    },
    quote:
      "When Nietzsche praises egoism it is always in an aggressive or polemical way, against the virtues, against the virtue of disinterestedness. But in fact egoism is a bad interpretation of the will, just as atomism is a bad interpretation of force. In order for there to be egoism it is necessary for there to be an ego.",
  },
  {
    work: "Desert Islands",
    year: "1953 AD",
    internalID: "558",
    id: "ECBFF207-87BB-4B1D-A097-52F31D52B2A6",
    philosopher: {
      id: "645F4A3B-9F64-47D4-B757-A7B4FDE705D1",
    },
    quote:
      "If philosophy has a positive and direct relation to things, it is only insofar as philosophy claims to grasp the thing itself, according to what it is, in its difference from everything it is not, in other words, in its internal difference.",
  },
  {
    work: "The Vocation of Man",
    year: "1800 AD",
    internalID: "559",
    id: "88858985-5608-429C-9B1B-FC8AE2BDBA4A",
    philosopher: {
      id: "2EE09BAD-1395-4394-8F6F-EB591069AE66",
    },
    quote:
      "It is so by nature that the plant will develop with regularity, that the animal will move purposefully, and that human beings will think. Why should I take exception to recognizing also the last as the expression of an original force of nature, as I do the first and the second?",
  },
  {
    work: "Leviathan",
    year: "1651 AD",
    internalID: "56",
    id: "1B9CDA90-F332-4E99-8389-1E1BF954C963",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote:
      "The condition of man…is a condition of war of everyone against everyone.",
  },
  {
    work: "The Vocation of Man",
    year: "1800 AD",
    internalID: "560",
    id: "C1827C6C-FE7D-47DB-8A14-B92112F39107",
    philosopher: {
      id: "2EE09BAD-1395-4394-8F6F-EB591069AE66",
    },
    quote: "The law of the transcendental world must...be a Will.",
  },
  {
    work: "The Vocation of Man",
    year: "1800 AD",
    internalID: "561",
    id: "9CCC8A60-1B99-4182-A7FF-B5E5B2105522",
    philosopher: {
      id: "2EE09BAD-1395-4394-8F6F-EB591069AE66",
    },
    quote:
      "Each individual imagines that he can exist, live, think, and act for himself, and believes that he himself is the thinking principle of his thoughts; whereas in truth he is but a single ray of the ONE universal and necessary Thought.",
  },
  {
    work: "Outline of the Doctrine of Knowledge",
    year: "1810 AD",
    internalID: "562",
    id: "FB52408B-9B5D-45DC-83CA-3DAA8ABEF2A0",
    philosopher: {
      id: "2EE09BAD-1395-4394-8F6F-EB591069AE66",
    },
    quote:
      "This Being out of God cannot, by any means, be a limited, completed, and inert Being, since God himself is not such a dead Being, but, on the contrary, is Life; — but it can only be a Power, since only a Power is the true formal picture or Schema of Life. And indeed it can only be the Power of realising that which is contained in itself — a Schema.",
  },
  {
    work: "The Sublime Object of Ideology",
    year: "1989 AD",
    internalID: "563",
    id: "8927BBBD-BE39-4814-BED0-CB12D7BED05E",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      "Lacan's definition of human deception: We deceive the Other by means of the truth itself; in a universe in which all are looking for the true face beneath the mask, the best way to lead them astray is to wear the mask of truth itself.",
  },
  {
    work: "The Sublime Object of Ideology",
    year: "1989 AD",
    internalID: "564",
    id: "99678D99-F830-438F-818E-B5DD6B864916",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      "The general reference of the philosophical discussion is usually the triangle world: world-language-subject, the relation of the subject to the world of objects, mediated through language.",
  },
  {
    work: "The Sublime Object of Ideology",
    year: "1989 AD",
    internalID: "565",
    id: "1FF832C4-5A92-432F-8E9B-94F9D53EBA1C",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      "Actual history occurs, so the speak, on credit; only subsequent development will decide retroactively if the current revolutionary violence will be forgiven, legitimated, or if it will continue to exert a pressure on the shoulders of the present generation as its guilt, as its unsettled debt.",
  },
  {
    work: "First as Tragedy, Then as Farce",
    year: "2009 AD",
    internalID: "566",
    id: "5E7ADB0F-1220-4E6B-A714-D42EA8EDA803",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      "The contemporary era constantly proclaims itself as post-ideological, but this denial of ideology only provides the ultimate proof that we are more than ever embedded in ideology. Ideology is always a field of struggle - among other things, the struggle for appropriating past traditions.",
  },
  {
    work: "Less Than Nothing",
    year: "2012 AD",
    internalID: "568",
    id: "74AF2F47-6CEC-4C33-94E2-9DE8EB4DDE64",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      "What cannot be described should be inscribed into the artistic form as its uncanny distortion.",
  },
  {
    work: "The Plague of Fantasies",
    year: "1997 AD",
    internalID: "569",
    id: "B8B6BB43-4816-468D-A056-6F5CF281167A",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      "The original question of desire is not directly 'What do I want?', but 'What do others want from me? What do they see in me? What am I to others?'",
  },
  {
    work: "Leviathan",
    year: "1651 AD",
    internalID: "57",
    id: "773D30D2-2237-48B3-AAF5-B51C900DF68B",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote:
      "It is not easy to fall into any absurdity, unless it be by the length of an account; wherein he may perhaps forget what went before. For all men by nature reason alike, and well, when they have good principles.",
  },
  {
    work: "Less Than Nothing",
    year: "2012 AD",
    internalID: "570",
    id: "3EB2A4B0-5409-40D7-A75D-C170946F2A8D",
    philosopher: {
      id: "8D8B3352-8007-4BDD-BCCE-0D281E1FB1AF",
    },
    quote:
      'It becomes superfluous when people no longer need the external force of the tyrant to make them renounce their particular interests, but when they become "universal citizens" by directly identifying the core of their being with this universality - in short, people no longer need the external master when they are educated into doing the job of discipline and subordination themselves.',
  },
  {
    work: "Erotism: Death and Sensuality",
    year: "1962 AD",
    internalID: "571",
    id: "ECA0B11D-9A3E-4B92-90F5-EFF23D4BF610",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote: "All eroticism has a sacramental character.",
  },
  {
    work: "On Nietzsche",
    year: "1945 AD",
    internalID: "572",
    id: "F6E78CBE-9C88-4DB7-9AE0-8170578C64CE",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote:
      "To choose evil is to choose freedom—“freedom, emancipation from all restraint.”",
  },
  {
    work: "On Nietzsche",
    year: "1945 AD",
    internalID: "573",
    id: "EFE44289-B410-4AE6-8BB6-3339989E2836",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote:
      "An intention that rejects what has no meaning in fact is a rejection of the entirety of being.",
  },
  {
    work: "L’Expérience Intérieure",
    year: "1943 AD",
    internalID: "574",
    id: "C2EAD789-EB19-420A-98D9-81BEBBBA9573",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote:
      "Philosophy … finds itself to be no longer anything but the heir to a fabulous mystical theology, but missing a God and wiping the slate clean.",
  },
  {
    work: "L’Expérience Intérieure",
    year: "1943 AD",
    internalID: "575",
    id: "5E8EFEC7-2FFE-446A-AC72-48946CDAD660",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote:
      "We have in fact only two certainties in this world—that we are not everything and that we will die. To be conscious of not being everything, as one is of being mortal, is nothing. But if we are without a narcotic, an unbreathable void reveals itself. I wanted to be everything, so that falling into this void, I might summon my courage and say to myself: “I am ashamed of having wanted to be everything, for I see now that it was to sleep.”",
  },
  {
    work: "On Nietzsche",
    year: "1945 AD",
    internalID: "576",
    id: "B5BA5CB1-9D78-494B-8916-65567AE3F547",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote:
      "The total person is first disclosed … in areas of life that are lived frivolously.",
  },
  {
    work: "On Nietzsche",
    year: "1945 AD",
    internalID: "577",
    id: "2848DFEA-8912-4044-87E1-9DEAE1DFFDA1",
    philosopher: {
      id: "55ADA2C7-9126-4A97-BA26-E7D7CBF08D73",
    },
    quote:
      "In previous conditions, extreme states came under the jurisdiction of the arts... People substituted writing (fiction) for what was once spiritual life, poetry (chaotic words) for actual ecstasies. Art constitutes a minor free zone outside action, paying for its freedom by giving up the real world. A heavy price!",
  },
  {
    work: "The Postmodern Condition: A Report on Knowledge",
    year: "1977 AD",
    internalID: "578",
    id: "2FADF16A-221D-4ADE-ADEB-AAF06899E1EF",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote: "I define postmodern as incredulity towards metanarratives.",
  },
  {
    work: "The Postmodern Condition: A Report on Knowledge",
    year: "1977 AD",
    internalID: "579",
    id: "BFBFE2A2-9E65-40B2-B7C6-23F845CD017B",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote:
      "…Scientific knowledge does not represent the totality of knowledge; it has always existed in addition to, and in competition and conflict with, another kind of knowledge, which I will call narratives in the interest of simplicity.",
  },
  {
    work: "Leviathan",
    year: "1651 AD",
    internalID: "58",
    id: "EE1ADB17-403B-441D-B6A2-7ED60F9CB648",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote: "The Register of Knowledge of Fact is called History.",
  },
  {
    work: "The Postmodern Condition: A Report on Knowledge",
    year: "1977 AD",
    internalID: "580",
    id: "ABE3D3CA-070E-498D-8ECB-6E5495337C09",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote:
      "Our working hypothesis is that the status of knowledge is altered as societies enter what is known as the postindustrial age and cultures enter the postmodern age.",
  },
  {
    work: "The Postmodern Condition: A Report on Knowledge",
    year: "1977 AD",
    internalID: "581",
    id: "1E8A75C3-F879-459E-A94B-7166CDF43CAF",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote:
      "For the mercantilization of knowledge is bound to affect the privilege the nation-states have enjoyed, and still enjoy, with respect to the production and distribution of learning. The notion that learning falls within the purview of the State, as the brain or mind of society, will become more and more outdated with increasing strength of the opposing principle.",
  },
  {
    work: "The Postmodern Condition: A Report on Knowledge",
    year: "1977 AD",
    internalID: "582",
    id: "AE8D5704-833A-4045-9E67-907B74086CC2",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote:
      "What is new in all this is that the old polies of attraction represented by nation-states, parties, professions, institutions, and historical traditions are losing their attraction. And it does not look as though they will be replaced, at least not on their former scale.",
  },
  {
    work: "Thought Without a Body?",
    year: "1994 AD",
    internalID: "583",
    id: "4EC9C37B-2475-4C63-AF4D-641376FD92F1",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote:
      "The body might be considered the hardware of the complex technical device that is human thought.",
  },
  {
    work: "Thought Without a Body?",
    year: "1994 AD",
    internalID: "584",
    id: "F9670C63-5AD9-47AF-A9D6-F45DA42110ED",
    philosopher: {
      id: "805013E1-53ED-414C-9E43-6D776354B8C2",
    },
    quote:
      "There’s a necessity for physical experience and a recourse to exemplary cases of bodily ascesis to understand and make understood a type of emptying of the mind, an emptying that is required if the mind is to think. This obviously has nothing to do with tabula rasa, with what Descartes (vainly) wanted to be a starting from scratch on the part of knowing thought.",
  },
  {
    work: "Contraception and Chastity",
    year: "1975 AD",
    internalID: "585",
    id: "73A7ED2A-86A9-4784-B792-C63B98F0096D",
    philosopher: {
      id: "215CFEFE-7D4B-400D-A14B-CD4BE9E0AA30",
    },
    quote:
      "Those who try to make room for sex as mere casual enjoyment pay the penalty: they become shallow. At any rate the talk that reflects and commends this attitude is always shallow. They dishonour their own bodies; holding cheap what is naturally connected with the origination of human life.",
  },
  {
    work: "Contraception and Chastity",
    year: "1975 AD",
    internalID: "586",
    id: "05B49E2A-232C-413F-88E8-460A16A5B8D3",
    philosopher: {
      id: "215CFEFE-7D4B-400D-A14B-CD4BE9E0AA30",
    },
    quote:
      "You can argue truly enough, for example, that general respect for the prohibition on murder makes life more commodious. If people really respect the prohibition against murder life is pleasanter for all of us - but this argument is exceedingly comic. Because utility presupposes the life of those who are to be convenienced, and everybody perceives quite clearly that the wrong done in murder is done first and foremost to the victim, whose life is not inconvenienced, it just isn't there any more.",
  },
  {
    work: "Contraception and Chastity",
    year: "1975 AD",
    internalID: "587",
    id: "9F5482DC-2738-40C8-869E-E2555F7117E2",
    philosopher: {
      id: "215CFEFE-7D4B-400D-A14B-CD4BE9E0AA30",
    },
    quote:
      "God gave us our physical appetite, and its arousal without our calculation is part of the working of our sort of life. Given moderation and right circumstances, acts prompted by inclination can be taken in a general way to accomplish what makes them good in kind and there's no need for them to be individually necessary or useful for the end that makes them good kinds of action.",
  },
  {
    work: "Pensées Philosophiques",
    year: "1746 AD",
    internalID: "588",
    id: "748CB5E5-D6F3-4C7F-88CF-25C93C9F0C7B",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote:
      "To attempt the destruction of our passions is the height of folly. What a noble aim is that of the zealot who tortures himself like a madman in order to desire nothing, love nothing, feel nothing, and who, if he succeeded, would end up a complete monster!",
  },
  {
    work: "Pensées Philosophiques",
    year: "1746 AD",
    internalID: "589",
    id: "C38F8D2C-4917-40E7-9B16-B07B4907FFA1",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote: "Scepticism is the first step towards truth.",
  },
  {
    work: "Leviathan",
    year: "1651 AD",
    internalID: "59",
    id: "001836F5-3D9A-4042-BD26-068EE57D1ACE",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote:
      "A Covenant not to defend my selfe from force, by force, is always voyd.",
  },
  {
    work: "Pensées Philosophiques",
    year: "1746 AD",
    internalID: "590",
    id: "A42DBC11-923F-4108-B596-51E7BBA479B9",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote:
      "To say that man is a compound of strength and weakness, light and darkness, smallness and greatness, is not to indict him, it is to define him.",
  },
  {
    work: "L'Encyclopédie",
    year: "1766 AD",
    internalID: "591",
    id: "5578DEFF-EB07-409F-99E4-C4414CC651DB",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote:
      "No man has received from nature the right to give orders to others. Freedom is a gift from heaven, and every individual of the same species has the right to enjoy it as soon as he is in enjoyment of his reason.",
  },
  {
    work: "L'Encyclopédie",
    year: "1766 AD",
    internalID: "592",
    id: "A951FA39-9DE6-4C0E-81C7-29CED35ABB57",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote: "Reason is to the philosopher what grace is to the Christian.",
  },
  {
    work: "On the Interpretation of Nature",
    year: "1753 AD",
    internalID: "593",
    id: "04E2CE80-33E1-4BF6-8681-AE7A4A1B08F9",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote:
      "There are three principal means of acquiring knowledge available to us: observation of nature, reflection, and experimentation.",
  },
  {
    work: "On Dramatic Poetry",
    year: "1758 AD",
    internalID: "594",
    id: "2EDF36A3-04B8-43D6-A7B7-77925B797F8B",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote:
      "It is not human nature we should accuse but the despicable conventions that pervert it.",
  },
  {
    work: "Observations on the Drawing Up of Laws",
    year: "1774 AD",
    internalID: "595",
    id: "2B4FCF51-C506-4555-A9E3-B26763FA9594",
    philosopher: {
      id: "75D800D1-AB13-4192-931A-5866DAF44773",
    },
    quote:
      "Disturbances in society are never more fearful than when those who are stirring up the trouble can use the pretext of religion to mask their true designs.",
  },
  {
    work: "Fragment 14",
    year: "",
    internalID: "596",
    id: "7BDEF076-14B6-4863-8C61-6224538E7CB1",
    philosopher: {
      id: "1A1D6463-9FD7-4683-B2C3-103656395889",
    },
    quote:
      "Mortals deem that the gods are begotten as they are,\nand have clothes like theirs, and voice and form.",
  },
  {
    work: "Fragment 16",
    year: "",
    internalID: "597",
    id: "F99F5773-FE8B-40CA-B0C1-2161B3CD935F",
    philosopher: {
      id: "1A1D6463-9FD7-4683-B2C3-103656395889",
    },
    quote:
      "Ethiopians say that their gods are snubnosed and black\nThracians that they are pale and red-haired.",
  },
  {
    work: "Fragment 23",
    year: "",
    internalID: "598",
    id: "A3FE0D8F-AC2C-49A3-954E-090EA25D62D4",
    philosopher: {
      id: "1A1D6463-9FD7-4683-B2C3-103656395889",
    },
    quote:
      "There is one god, greatest among gods and men, similar to mortals neither in shape nor in thought.",
  },
  {
    work: "Fragment 27",
    year: "",
    internalID: "599",
    id: "A7A48405-2828-4756-A629-D4AAE264F5BC",
    philosopher: {
      id: "1A1D6463-9FD7-4683-B2C3-103656395889",
    },
    quote:
      "For all things are from the earth and to the earth all things come in the end.",
  },
  {
    work: "Quoted by Plato in Cratylus",
    year: "",
    internalID: "6",
    id: "FB99BC25-3B67-4BB5-BB27-E0CBB1641BCA",
    philosopher: {
      id: "410D7B25-4F70-4346-A01A-CA556498FFFE",
    },
    quote: "No man ever steps in the same river twice.",
  },
  {
    work: "Leviathan",
    year: "1651 AD",
    internalID: "60",
    id: "D5DE6DBD-AB62-4150-B7B5-5DF484B4AFBA",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote:
      "The first cause of Absurd conclusions I ascribe to the want of Method",
  },
  {
    work: "How we think",
    year: "1910 AD",
    internalID: "600",
    id: "F0D7FF55-55B9-4ACB-91D3-FA3FC9E5179A",
    philosopher: {
      id: "35859990-0911-447A-8254-CDFE783671BF",
    },
    quote:
      "As we shall see later, the most important factor in the training of good mental habits consists in acquiring the attitude of suspended conclusion, and in mastering the various methods of searching for new materials to corroborate or to refute the first suggestions that occur. To maintain the state of doubt and to carry on systematic and protracted inquiry ― these are the essentials of thinking.",
  },
  {
    work: "Logic: Theory of Inquiry",
    year: "1938 AD",
    internalID: "601",
    id: "7F9E9747-C5C1-4AC3-9F29-A1109A37932F",
    philosopher: {
      id: "35859990-0911-447A-8254-CDFE783671BF",
    },
    quote:
      "It is a familiar and significant saying that a problem well put is half-solved.",
  },
  {
    work: "Democracy and Education",
    year: "1916 AD",
    internalID: "602",
    id: "7CD70FB6-2A77-4B7C-9D7F-93B5C95C5811",
    philosopher: {
      id: "35859990-0911-447A-8254-CDFE783671BF",
    },
    quote:
      "Any education given by a group tends to socialize its members, but the quality and value of the socialization depends on the habits and aims of the group.",
  },
  {
    work: "Democracy and Education",
    year: "1916 AD",
    internalID: "603",
    id: "7E6281F2-EB24-4E01-A69A-E261E88359CC",
    philosopher: {
      id: "35859990-0911-447A-8254-CDFE783671BF",
    },
    quote:
      'Open-mindedness is not the same as empty-mindedness. To hang out a sign saying "Come right in; there is no one at home" is not the equivalent of hospitality. But there is a kind of passivity, willingness to let experiences accumulate and sink in and ripen, which is an essential of development.',
  },
  {
    work: "Democracy and Education",
    year: "1916 AD",
    internalID: "604",
    id: "45714D35-8282-4830-8699-69E421EF1D23",
    philosopher: {
      id: "35859990-0911-447A-8254-CDFE783671BF",
    },
    quote:
      "Nature offers simply the germs which education is to develop and perfect.",
  },
  {
    work: "Democracy and Education",
    year: "1916 AD",
    internalID: "605",
    id: "ADDCCA47-1573-4391-A4CF-E9DCA0C91656",
    philosopher: {
      id: "35859990-0911-447A-8254-CDFE783671BF",
    },
    quote:
      "To find out what one is fitted to do, and to secure an opportunity to do it, is the key to happiness.",
  },
  {
    work: "How we think",
    year: "",
    internalID: "606",
    id: "8C14170E-1F0E-49A4-ABD5-8A3ABA0C3259",
    philosopher: {
      id: "F6B6F3C0-C082-471A-945A-5AC37C8968D4",
    },
    quote:
      "The truth is, that these writings of mine were meant to protect the arguments of Parmenides against those who make fun of him and seek to show the many ridiculous and contradictory results which they suppose to follow from the affirmation of the one. My answer is addressed to the partisans of the many, whose attack I return with interest by retorting upon them that their hypothesis of the being of many, if carried out, appears to be still more ridiculous than the hypothesis of the being of one.",
  },
  {
    work: "The View From Nowhere",
    year: "1986 AD",
    internalID: "607",
    id: "AEB461CC-0E6E-4FB5-96A7-77B897232F48",
    philosopher: {
      id: "87CC8B86-67A2-4481-B7C6-F4E8CE10DEA0",
    },
    quote:
      "Eventually, I believe, current attempts to understand the mind by analogy with man-made computers that can perform superbly some of the same external tasks as conscious beings will be recognized as a gigantic waste of time.",
  },
  {
    work: "The View From Nowhere",
    year: "1986 AD",
    internalID: "608",
    id: "6A81BF0B-1EB2-4A8F-B915-64E4F1E43FFA",
    philosopher: {
      id: "87CC8B86-67A2-4481-B7C6-F4E8CE10DEA0",
    },
    quote:
      "We assume that our own advances in objectivity are steps along a path that extends beyond them and beyond all our capacities. But even allowing unlimited time, or an unlimited number of generations, to take as many successive steps as we like, the process can never be completed. ... What is wanted is some way of making the most objective standpoint the basis of action.",
  },
  {
    work: "The View From Nowhere",
    year: "1986 AD",
    internalID: "609",
    id: "5CFDA61D-C64D-4323-9789-C880D68ED8CD",
    philosopher: {
      id: "87CC8B86-67A2-4481-B7C6-F4E8CE10DEA0",
    },
    quote:
      "Ethics increases the range of what it is about ourselves that we can will—extending it from our actions to the motives and character traits and dispositions from which they arise. We want to be able to will the sources of our actions down to the very bottom.",
  },
  {
    work: "Leviathan",
    year: "1651 AD",
    internalID: "61",
    id: "3A79F7A4-CCBA-4440-9BD1-2B0144AE68FB",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote:
      "In such condition there is no place for industry…no knowledge of the face of the earth; no account of time; no arts; no letters; no society; and which is worst of all, continual fear, and danger of violent death; and the life of man, solitary, poor, nasty, brutish, and short.",
  },
  {
    work: "What Does It All Mean?",
    year: "1987 AD",
    internalID: "610",
    id: "3545EFA0-A047-4330-8F94-3C51D7D75A7C",
    philosopher: {
      id: "87CC8B86-67A2-4481-B7C6-F4E8CE10DEA0",
    },
    quote:
      "Philosophy is different from science and from mathematics. Unlike science it doesn't rely on experiments or observation, but only on thought. And unlike mathematics it has no formal methods of proof. It is done just by asking questions, arguing, trying out ideas and thinking of possible arguments against them, and wondering how our concepts really work.",
  },
  {
    work: "What Does It All Mean?",
    year: "1987 AD",
    internalID: "611",
    id: "EA426136-17E4-4114-BA74-CEA260B75E61",
    philosopher: {
      id: "87CC8B86-67A2-4481-B7C6-F4E8CE10DEA0",
    },
    quote:
      "Definitions can't be the basis of meaning for all words, or we'd go forever in a circle. Eventually we must get to some words which have meaning directly.",
  },
  {
    work: "Society of the Spectacle",
    year: "1967 AD",
    internalID: "612",
    id: "D2604E26-8E9B-468C-B04B-4DCC75EE4747",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "In societies where modern conditions of production prevail, all of life presents itself as an immense accumulation of spectacles. Everything that was directly lived has moved away into a representation.",
  },
  {
    work: "Society of the Spectacle",
    year: "1967 AD",
    internalID: "613",
    id: "B8D1C1FB-77CE-4199-9F2E-8DC02250DFE4",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "The spectacle is not a collection of images; rather, it is a social relationship between people that is mediated by images.",
  },
  {
    work: "Society of the Spectacle",
    year: "1967 AD",
    internalID: "614",
    id: "A1D6555D-C102-4E61-A6C9-3D6576B55DAF",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "Philosophy is at once the power of alienated thought and the thought of alienated power, and as such it has never been able to emancipate itself from theology.",
  },
  {
    work: "Society of the Spectacle",
    year: "1967 AD",
    internalID: "615",
    id: "47820827-6D16-46CC-99EE-0372137F8B63",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "Tourism, human circulation considered as consumption ... is fundamentally nothing more than the leisure of going to see what has become banal.",
  },
  {
    work: "Society of the Spectacle",
    year: "1967 AD",
    internalID: "616",
    id: "701AF869-30A6-4255-8CEE-D91B90FE851F",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "Ideas improve. The meaning of words participates in the improvement. Plagiarism is necessary. Progress implies it. It embraces an author’s phrase, makes use of his expressions, erases a false idea, and replaces it with the right idea.",
  },
  {
    work: "Panegyric",
    year: "1989 AD",
    internalID: "617",
    id: "AFCB3D86-54F6-4D90-82D0-1B28AA6B49AE",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "There is nothing more natural than to consider everything as starting from oneself, chosen as the center of the world; one finds oneself thus capable of condemning the world without even wanting to hear its deceitful chatter.",
  },
  {
    work: "Comments on the Society of the Spectacle",
    year: "1989 AD",
    internalID: "618",
    id: "F7117D1A-9288-4489-88BA-AA2F0E73E51D",
    philosopher: {
      id: "67D1A0D2-6C50-4D1A-B733-AC2D21662EE8",
    },
    quote:
      "The Sage of Toronto ... spent several decades marveling at the numerous freedoms created by a “global village” instantly and effortlessly accessible to all. Villages, unlike towns, have always been ruled by conformism, isolation, petty surveillance, boredom and repetitive malicious gossip about the same families. Which is a precise enough description of the global spectacle’s present vulgarity.",
  },
  {
    work: "Psychological Types, or, The Psychology of Individuation",
    year: "1921 AD",
    internalID: "619",
    id: "4C4FBBBD-99F7-4BB0-B972-B5E14BA43CC2",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "The great problems of life — sexuality, of course, among others — are always related to the primordial images of the collective unconscious. These images are really balancing or compensating factors which correspond with the problems life presents in actuality. This is not to be marvelled at, since these images are deposits representing the accumulated experience of thousands of years of struggle for adaptation and existence.",
  },
  {
    work: "",
    year: "1679 AD",
    internalID: "62",
    id: "BC25EEA9-77FB-4EDD-AC63-1BBE96BEBD01",
    philosopher: {
      id: "EADA6FFC-5014-484E-988E-6A06F5AD949A",
    },
    quote: "Now I am about to take my last voyage, a great leap in the dark.",
  },
  {
    work: "Modern Man in Search of a Soul",
    year: "1933 AD",
    internalID: "620",
    id: "A34AD27E-92FF-4270-84CE-669DDEB11023",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "The great decisions of human life have as a rule far more to do with the instincts and other mysterious unconscious factors than with conscious will and well-meaning reasonableness.",
  },
  {
    work: "Modern Man in Search of a Soul",
    year: "1933 AD",
    internalID: "621",
    id: "DB8E5915-7A55-480E-A34A-FC8C58063275",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "Every civilized human being, whatever his conscious development, is still an archaic man at the deeper levels of his psyche. Just as the human body connects us with the mammals and displays numerous relics of earlier evolutionary stages going back to even the reptilian age, so the human psyche is likewise a product of evolution which, when followed up to its origins, show countless archaic traits.",
  },
  {
    work: "Modern Man in Search of a Soul",
    year: "1933 AD",
    internalID: "622",
    id: "BEDE3219-33D6-44DB-A86B-82A535D764C6",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "No psychic value can disappear without being replaced by another of equivalent intensity.",
  },
  {
    work: "The Archetypes and the Collective Unconscious",
    year: "1934 AD",
    internalID: "623",
    id: "40C698F6-530B-4781-97E0-21208A54B041",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      'Whereas the personal unconscious consists for the most part of "complexes", the content of the collective unconscious is made up essentially of "archetypes". The concept of the archetype, which is an indispensable correlate of the idea of the collective unconscious, indicates the existence of definite forms in the psyche which seem to be present always and everywhere.',
  },
  {
    work: "The Integration of the Personality",
    year: "1939 AD",
    internalID: "624",
    id: "1EFE64D4-2FAE-4C71-8A40-981EC21DB3CC",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "If there is anything that we wish to change in the child, we should first examine it and see whether it is not something that could better be changed in ourselves.",
  },
  {
    work: "The Undiscovered Self",
    year: "1958 AD",
    internalID: "625",
    id: "97E5B7DD-ECEE-440B-AE33-75838BF4435C",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "Any theory based on experience is necessarily statistical; that is to say, it formulates an ideal average which abolishes all exceptions at either end of the scale and replaces them by an abstract mean.",
  },
  {
    work: "Synchronicity: An Acausal Connecting Principle",
    year: "1960 AD",
    internalID: "626",
    id: "8CC2D915-1213-4295-8379-769F5662DEAD",
    philosopher: {
      id: "FF162966-A088-498E-B984-0735E96858F3",
    },
    quote:
      "Primitive superstition lies just below the surface of even the most tough-minded individuals, and it is precisely those who most fight against it who are the first to succumb to its suggestive effects.",
  },
  {
    work: "Epistulae Morales ad Lucilium",
    year: "0065 AD",
    internalID: "627",
    id: "CB947B77-F421-4E4A-8386-6427BCC2FB95",
    philosopher: {
      id: "8CDFDB0C-F4F4-40F9-B00D-0C7EB20E9D1F",
    },
    quote:
      "It is not the man who has too little, but the man who craves more, that is poor.",
  },
  {
    work: "Epistulae Morales ad Lucilium",
    year: "0065 AD",
    internalID: "628",
    id: "3C2C90ED-90C0-4B25-8890-CBACF070C0B9",
    philosopher: {
      id: "8CDFDB0C-F4F4-40F9-B00D-0C7EB20E9D1F",
    },
    quote:
      "No man can have a peaceful life who thinks too much about lengthening it.",
  },
  {
    work: "Epistulae Morales ad Lucilium",
    year: "0065 AD",
    internalID: "629",
    id: "4343A370-1935-4566-AC54-3A18BE9B4D50",
    philosopher: {
      id: "8CDFDB0C-F4F4-40F9-B00D-0C7EB20E9D1F",
    },
    quote:
      "Withdraw into yourself, as far as you can. Associate with those who will make a better man of you. Welcome those whom you yourself can improve. The process is mutual; for men learn while they teach.",
  },
  {
    work: "Discourse on the Method",
    year: "1637 AD",
    internalID: "63",
    id: "05550BE5-AA8F-4CFA-8E22-B4D78064F9B2",
    philosopher: {
      id: "3C6BCB23-5C68-4F54-B680-BFF333FB6683",
    },
    quote: "I think, therefore I am.",
  },
  {
    work: "Epistulae Morales ad Lucilium",
    year: "0065 AD",
    internalID: "630",
    id: "C36ADE41-C8E3-44C4-A47D-2AF00B308F38",
    philosopher: {
      id: "8CDFDB0C-F4F4-40F9-B00D-0C7EB20E9D1F",
    },
    quote:
      "You do not know where death awaits you; so be ready for it everywhere.",
  },
  {
    work: "Epistulae Morales ad Lucilium",
    year: "0065 AD",
    internalID: "631",
    id: "9A70F713-5227-4768-8536-611EE80BF7A3",
    philosopher: {
      id: "8CDFDB0C-F4F4-40F9-B00D-0C7EB20E9D1F",
    },
    quote: "Man is a reasoning animal.",
  },
  {
    work: "Epistulae Morales ad Lucilium",
    year: "0065 AD",
    internalID: "632",
    id: "33EBA551-9ED3-4B88-88D3-D22C48F7DF91",
    philosopher: {
      id: "8CDFDB0C-F4F4-40F9-B00D-0C7EB20E9D1F",
    },
    quote: "All art is but imitation of nature.",
  },
  {
    work: "Mythologies",
    year: "1957 AD",
    internalID: "633",
    id: "6CEE9F49-C9A4-48DE-9B41-D74E893E07C7",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote:
      "The bourgeoisie is defined as the social class which does not want to be named.",
  },
  {
    work: "Mythologies",
    year: "1957 AD",
    internalID: "634",
    id: "30F0DFCA-5A77-443B-B88F-221D8D0B692D",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote: "Myth is depoliticized speech.",
  },
  {
    work: "Mythologies",
    year: "1957 AD",
    internalID: "635",
    id: "F2FDD11F-91F9-4CED-BBD0-E951C94630D2",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote:
      "By reducing any quality to quantity, myth economizes intelligence: it understands reality more cheaply.",
  },
  {
    work: "From Work to Text",
    year: "1971 AD",
    internalID: "636",
    id: "0BDF8A88-43DA-455E-90EC-014DD797ED92",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote: "The Text is not a definitive object.",
  },
  {
    work: "From Work to Text",
    year: "1971 AD",
    internalID: "637",
    id: "3E7D7DF6-5A68-4ADE-ADC5-A553060E4B70",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote: "A work has two levels of meaning: literal and concealed. ",
  },
  {
    work: "From Work to Text",
    year: "1971 AD",
    internalID: "637",
    id: "DE546EE2-3A5C-4B0F-9FEB-E77BFBB19022",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote:
      'Whereas the work is understood to be traceable to a source (through a process of derivation or "filiation"), the Text is without a source — the "author" a mere "guest" at the reading of the Text.',
  },
  {
    work: "From Work to Text",
    year: "1971 AD",
    internalID: "638",
    id: "7786248B-18AF-49B5-B81A-9D8DD6E61BD5",
    philosopher: {
      id: "2D20127D-37CB-4D70-B0D0-DC30C6F9A2C3",
    },
    quote:
      "The discourse on the Text should itself be nothing other than text, research, textual activity, since the Text is that social space which leaves no language safe, outside, nor any subject of the enunciation in position as judge, master, analyst, confessor, decoder. The theory of the Text can coincide only with a practice of writing.",
  },
  {
    work: "Twenty Years at Hull-House",
    year: "1910 AD",
    internalID: "639",
    id: "110763C8-8762-493A-B942-F2303C76D8FB",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      "We all bear traces of the starvation struggle which for so long made up the life of the race. Our very organism holds memories and glimpses of that long life of our ancestors which still goes on among so many of our contemporaries.",
  },
  {
    work: "Discourse on the Method",
    year: "1637 AD",
    internalID: "64",
    id: "31EECCF6-70A5-416D-BD0C-7A5CD53FAB00",
    philosopher: {
      id: "3C6BCB23-5C68-4F54-B680-BFF333FB6683",
    },
    quote:
      "Of philosophy I will say nothing, except that when I saw that it had been cultivated for so many ages by the most distinguished men; and that yet there is not a single matter within its sphere which is still not in dispute and nothing, therefore, which is above doubt, I did not presume to anticipate that my success would be greater in it than that of others.",
  },
  {
    work: "Twenty Years at Hull-House",
    year: "1910 AD",
    internalID: "640",
    id: "17CCEF05-302D-490F-876B-8AEE5E3D6E95",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      "Life cannot be administered by definite rules and regulations; that wisdom to deal with a man’s difficulties comes only through some knowledge of his life and habits as a whole ...",
  },
  {
    work: "Twenty Years at Hull-House",
    year: "1910 AD",
    internalID: "641",
    id: "5F15FBAB-A691-41B1-B067-182E8B0393F0",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      "… this dream that men shall cease to waste strength in competition and shall come to pool their powers of production is coming to pass all over the earth.",
  },
  {
    work: "Twenty Years at Hull-House",
    year: "1910 AD",
    internalID: "642",
    id: "D7FB0228-27D2-49C2-A53B-E064132BB4AB",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      "Private beneficence is totally inadequate to deal with the vast numbers of the city's disinherited.",
  },
  {
    work: "Twenty Years at Hull-House",
    year: "1910 AD",
    internalID: "643",
    id: "09FEB92F-3D48-4FBD-BF7F-EB35A36B3EFF",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      "Social advance depends quite as much upon an increase in moral sensibility as it does upon a sense of duty ...",
  },
  {
    work: "Twenty Years at Hull-House",
    year: "1910 AD",
    internalID: "644",
    id: "15A34899-500A-42B7-8318-A373F7644EBE",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      "The common stock of intellectual enjoyment should not be difficult of access because of the economic position of him who would approach it.",
  },
  {
    work: "Peace and Bread in Time of War",
    year: "1922 AD",
    internalID: "645",
    id: "C5986707-5277-4DBE-A871-808FB33AB20E",
    philosopher: {
      id: "590670FA-ADBE-4D76-8791-02A88B5E4CC0",
    },
    quote:
      'My temperament and habit had always kept me rather in the middle of the road; in politics as well as in social reform I had been for "the best possible." But now I was pushed far toward the left on the subject of the war and I became gradually convinced that in order to make the position of the pacifist clear it was perhaps necessary that at least a small number of us should be forced into an unequivocal position.',
  },
  {
    work: "Nature",
    year: "1836 AD",
    internalID: "646",
    id: "F95B0B08-943A-4B6A-95A0-39528C6C92AE",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "The stars awaken a certain reverence, because though always present, they are inaccessible; but all natural objects make a kindred impression, when the mind is open to their influence. Nature never wears a mean appearance.",
  },
  {
    work: "Nature",
    year: "1836 AD",
    internalID: "647",
    id: "F541A942-C1FF-41E0-B83A-EDF66E369E50",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote: "Every natural fact is a symbol of some spiritual fact.",
  },
  {
    work: "Nature",
    year: "1836 AD",
    internalID: "648",
    id: "C0F679FF-C658-4BAD-8B88-85B6F051A7FB",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote: "Beauty is the mark God sets upon virtue.",
  },
  {
    work: "Nature",
    year: "1836 AD",
    internalID: "649",
    id: "91CF3561-714C-43BC-AA23-9D8A0B4D5A18",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "The lover of nature is he whose inward and outward senses are still truly adjusted to each other; who has retained the spirit of infancy even into the era of manhood. His intercourse with heaven and earth, becomes part of his daily food.",
  },
  {
    work: "Discourse on the Method",
    year: "1637 AD",
    internalID: "65",
    id: "119A4254-C613-44C1-9CFE-DC000327B34D",
    philosopher: {
      id: "3C6BCB23-5C68-4F54-B680-BFF333FB6683",
    },
    quote:
      "The first was to include nothing in my judgments than what presented itself to my mind so clearly and distinctly that I had no occasion to doubt it.",
  },
  {
    work: "Literary Ethics",
    year: "1838 AD",
    internalID: "650",
    id: "31959312-C3E0-4992-9B68-B6A40BDB726C",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "Explore, and explore, and explore. Be neither chided nor flattered out of your position of perpetual inquiry. Neither dogmatise yourself, nor accept another's dogmatism.",
  },
  {
    work: "Self-Reliance",
    year: "1841 AD",
    internalID: "651",
    id: "8CAEB6FF-E880-459B-9095-4B1CBD1D542D",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote: "God will not have his work made manifest by cowards",
  },
  {
    work: "Self-Reliance",
    year: "1841 AD",
    internalID: "652",
    id: "4FEE56B0-6C6C-40B5-BAEB-782807B81143",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "Society everywhere is in conspiracy against the manhood of every one of its members. Society is a joint-stock company, in which the members agree, for the better securing of his bread to each shareholder, to surrender the liberty and culture of the eater. The virtue in most request is conformity. Self-reliance is its aversion. It loves not realities and creators, but names and customs.",
  },
  {
    work: "Self-Reliance",
    year: "1841 AD",
    internalID: "653",
    id: "C659DC7C-8FC4-4C53-81C8-DE718CD8187B",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "Truth is handsomer than the affectation of love. Your goodness must have some edge to it, — else it is none. The doctrine of hatred must be preached as the counteraction of the doctrine of love when that pules and whines. I shun father and mother and wife and brother, when my genius calls me.",
  },
  {
    work: "Self-Reliance",
    year: "1841 AD",
    internalID: "654",
    id: "18F4870C-B37A-4C1A-99E8-F068E45C2AB3",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "A foolish consistency is the hobgoblin of little minds, adored by little statesmen and philosophers and divines.",
  },
  {
    work: "Self-Reliance",
    year: "1841 AD",
    internalID: "655",
    id: "3F25A3CC-BE90-475E-94D7-61AFBC38B4A2",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote: "Discontent is the want of self-reliance: it is infirmity of will.",
  },
  {
    work: "Politics",
    year: "1844 AD",
    internalID: "656",
    id: "A2F8F0DF-8026-4A65-A958-41DA27BFFEBA",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote:
      "The less government we have, the better, — the fewer laws, and the less confided power. The antidote to this abuse of formal Government, is, the influence of private character, the growth of the Individual.",
  },
  {
    work: "The Conduct of Life",
    year: "1860 AD",
    internalID: "657",
    id: "D0E1491D-B600-447E-8F9E-776C18823B9D",
    philosopher: {
      id: "3E3804E0-17AB-4AB9-B647-D4CA2E9C23D5",
    },
    quote: "The real and lasting victories are those of peace, and not of war.",
  },
  {
    work: "Opus Majus",
    year: "1267 AD",
    internalID: "658",
    id: "C5FE6084-5BE7-46FD-B5BA-BD18E887771C",
    philosopher: {
      id: "B312F276-6D2F-4A0F-BE45-C4F561FD6358",
    },
    quote:
      "Reasoning draws a conclusion and makes us grant the conclusion, but does not make the conclusion certain, nor does it remove doubt so that the mind may rest on the intuition of truth, unless the mind discovers it by the path of experience.",
  },
  {
    work: "Opus Majus",
    year: "1267 AD",
    internalID: "659",
    id: "F9559405-7F11-46CB-BFB3-824B3FECBBF2",
    philosopher: {
      id: "B312F276-6D2F-4A0F-BE45-C4F561FD6358",
    },
    quote:
      "If in other sciences we should arrive at certainty without doubt and truth without error, it behooves us to place the foundations of knowledge in mathematics...",
  },
  {
    work: "Principles of Philosophy",
    year: "1644 AD",
    internalID: "66",
    id: "23A4B565-EB09-489E-8C14-8BF8B77FAA2C",
    philosopher: {
      id: "3C6BCB23-5C68-4F54-B680-BFF333FB6683",
    },
    quote:
      "In order to seek truth, it is necessary once in the course of our life, to doubt, as far as possible, of all things.",
  },
  {
    work: "Opus Majus",
    year: "1267 AD",
    internalID: "660",
    id: "A000DA29-FE0B-48EB-92D2-34DECBE958BD",
    philosopher: {
      id: "B312F276-6D2F-4A0F-BE45-C4F561FD6358",
    },
    quote:
      "Neglect of mathematics works injury to all knowledge, since he who is ignorant of it cannot know the other sciences or the things of this world. And what is worse, men who are thus Ignorant are unable to perceive their own ignorance and so do not seek a remedy.",
  },
  {
    work: "Opus Tertium",
    year: "1267 AD",
    internalID: "661",
    id: "F1E3AAF6-95E5-4B0A-87B4-AD71A47C059E",
    philosopher: {
      id: "B312F276-6D2F-4A0F-BE45-C4F561FD6358",
    },
    quote:
      "The strongest argument proves nothing so long as the conclusions are not verified by experience. Experimental science is the queen of sciences, and the goal of all speculation.",
  },
  {
    work: "Opus Tertium",
    year: "1267 AD",
    internalID: "662",
    id: "A791EC6F-67D9-4F09-A5E8-3B90B20E8334",
    philosopher: {
      id: "B312F276-6D2F-4A0F-BE45-C4F561FD6358",
    },
    quote:
      "And this science verifies all natural and man-made things in particular, and in their appropriate discipline, by the experimental perfection, not by arguments of the still purely speculative sciences, nor through the weak, and imperfect experiences of practical knowledge. And therefore, this is the matron of all preceding sciences, and the final end of all speculation.",
  },
  {
    work: "Opus Tertium",
    year: "1267 AD",
    internalID: "663",
    id: "037E2627-F607-4140-864D-84A0094C7F87",
    philosopher: {
      id: "B312F276-6D2F-4A0F-BE45-C4F561FD6358",
    },
    quote:
      "Nevertheless, of Moral Philosophy alone can it be said that it is in the special and autonomatic sense practical, dealing as it does with human conduct with reference to virtue and vice, beatitude and misery. All other sciences are called speculative: they are not concerned with the deeds of the present or future life affecting man's salvation or damnation.",
  },
  {
    work: "Occasional Thoughts in reference to a Vertuous or Christian Life",
    year: "1705 AD",
    internalID: "664",
    id: "10FE8172-7386-47C2-B85E-51B1B5711A07",
    philosopher: {
      id: "8D733901-82BE-416A-A9B6-ECCFBA9B196D",
    },
    quote:
      "The improvements of Reason, however requisite to Ladies for their Accomplishment, as rational Creatures; and however needful to them for the well Educating of their Children, and to their being useful in their Families, yet are rarely any recommendation of them to Men; who foolishly thinking, that Money will answer to all things, do, for the most part, regard nothing else in the Woman they would Marry … Girls, betwixt silly Fathers and ignorant Mothers, are generally so brought up, that traditionary Opinions are to them, all their lives long, instead of Reason.",
  },
  {
    work: "Occasional Thoughts in reference to a Vertuous or Christian Life",
    year: "1705 AD",
    internalID: "665",
    id: "6DAE46C7-9549-479F-8652-6A84DCE47357",
    philosopher: {
      id: "8D733901-82BE-416A-A9B6-ECCFBA9B196D",
    },
    quote:
      "Without a capacity in the Creature to act contrary to the Will of the Creator there could be no desert, or self-excellency in any Created Being; contrariety to the Will of God is therefore permitted in the Universe as a necessary result of Creaturely imperfection, under the greatest endowment that a Created Being is capable of having, viz. That of Freedom or Liberty of Action.",
  },
  {
    work: "Occasional Thoughts in reference to a Vertuous or Christian Life",
    year: "1705 AD",
    internalID: "666",
    id: "D50B53E4-5D73-42E2-934A-0982656A75E6",
    philosopher: {
      id: "8D733901-82BE-416A-A9B6-ECCFBA9B196D",
    },
    quote:
      "They [women] are, perhaps sometimes told in regard of what Religion exacts, They must Believe and Do such and such things, because the Word of God requires it; but they are not put upon searching the Scriptures themselves, to see whether, or no, these things are so.",
  },
  {
    work: "Reason and Revolution, Hegel and the Rise of Social Theory",
    year: "1941 AD",
    internalID: "667",
    id: "7F573DAC-1508-45DE-9DD8-3B3C1BBC8632",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      "Man alone has the power of self-realization, the power to be a self-determining subject in all processes of becoming, for he alone has an understanding of potentialities and a knowledge of ‘notions.’ His very existence is the process of actualizing his potentialities, of molding his life according to the notions of reason.",
  },
  {
    work: "One-Dimensional Man",
    year: "1964 AD",
    internalID: "668",
    id: "68963A4A-06E7-4EDF-A0D0-8112ED685CE1",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      "Our mass media have little difficulty in selling particular interests as those of all sensible men. The political needs of society become individual needs and aspirations, their satisfaction promotes business and the commonweal, and the whole appeals to be the very embodiment of Reason.",
  },
  {
    work: "One-Dimensional Man",
    year: "1964 AD",
    internalID: "669",
    id: "9F57A484-A7A1-479E-82CB-B1BF9A327DE1",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      "The spontaneous reproduction of superimposed needs by the individual does not establish autonomy; it only testifies to the efficacy of the control.",
  },
  {
    work: "Two Treatises of Government",
    year: "1689 AD",
    internalID: "67",
    id: "9E62EA78-B041-4FA9-B84A-E9F8B07F9975",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "The end of law is not to abolish or restrain, but to preserve and enlarge freedom.",
  },
  {
    work: "One-Dimensional Man",
    year: "1964 AD",
    internalID: "670",
    id: "B4AAED0F-B695-4726-9240-162C335B1469",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      "The tangible source of exploitation disappears behind the façade of objective rationality.",
  },
  {
    work: "One-Dimensional Man",
    year: "1964 AD",
    internalID: "671",
    id: "1D24236F-FD21-47BE-A310-5A47C4A8D55D",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      "In its relation to the reality of daily life, the high culture of the past was many things—opposition and adornment, outcry and resignation. But it was also the appearance of the realm of freedom: the refusal to behave.",
  },
  {
    work: "Negations: Essays in Critical Theory",
    year: "1968 AD",
    internalID: "672",
    id: "8AAC7583-FEB7-4574-826E-48F7B798A2D2",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      "No, you cannot expect people to understand the higher reaches of philosophy. Culture should be taken out of the hands of the dollar chasers. We need a national subsidy for literature. It is disgraceful that artists are treated like peddlers and that art works have to be sold like soap.",
  },
  {
    work: "Counterrevolution and Revolt",
    year: "1972 AD",
    internalID: "673",
    id: "34786404-D39D-4DDD-AD67-216209D1F9D4",
    philosopher: {
      id: "1B5A089D-F27A-4D71-BE93-959B0FCD7600",
    },
    quote:
      'Can the human appropriation of nature ever achieve the elimination of violence, cruelty, and brutality in the daily sacrifice of animal life for the physical reproduction of the human race? To treat nature "for its own sake" sounds good, but it is certainly not for the sake of the animal to be eaten, nor probably for the sake of the plant. The end of this war, the perfect peace in the animal world — this idea belongs to the Orphic myth, not to any conceivable historical reality. In the face of the suffering inflicted by man on man, it seems terribly "premature" to campaign for universal vegetarianism or synthetic foodstuffs; as the world is, priority must be on human solidarity among human beings. And yet, no free society is imaginable which does not, under its "regulative idea of reason," make the concerted effort to reduce consistently the suffering which man imposes on the animal world.',
  },
  {
    work: "The Road to Serfdom",
    year: "1944 AD",
    internalID: "674",
    id: "D1C856AB-46EA-4112-B857-2439BFE768BB",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      'The more the state "plans" the more difficult planning becomes for the individual.',
  },
  {
    work: "The Road to Serfdom",
    year: "1944 AD",
    internalID: "675",
    id: "7BF34CC7-793A-4AF1-8D24-1BE67E7B3176",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "Conservatism, though a necessary element in any stable society, is not a social program; in its paternalistic, nationalistic and power adoring tendencies it is often closer to socialism than true liberalism; and with its traditionalistic, anti-intellectual, and often mystical propensities it will never, except in short periods of disillusionment, appeal to the young and all those others who believe that some changes are desirable if this world is to become a better place.",
  },
  {
    work: "The Road to Serfdom",
    year: "1944 AD",
    internalID: "676",
    id: "046F210A-865D-4CE0-9E04-089F3202A2F0",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "From the saintly and single-minded idealist to the fanatic is often but a step.",
  },
  {
    work: "The Road to Serfdom",
    year: "1944 AD",
    internalID: "677",
    id: "15C892DF-7243-4799-B897-5732957FF9CD",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "The effect of the people's agreeing that there must be central planning, without agreeing on the ends, will be rather as if a group of people were to commit themselves to take a journey together without agreeing where they want to go; with the result that they may all have to make a journey which most of them do not want at all.",
  },
  {
    work: "The Political Ideal of the Rule of Law",
    year: "1955 AD",
    internalID: "678",
    id: "704C4F32-775A-444A-B7DD-CA0E8D1F0108",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "Yet, though the French Revolution was so largely inspired by the ideal of the Rule of Law, it is questionable whether it really helped the advance towards that ideal. In its course too many different aspirations gained influence which it was difficult to reconcile with that ideal.",
  },
  {
    work: 'Interview, "Meet the Press"',
    year: "1975 AD",
    internalID: "679",
    id: "AFF06417-309E-455B-9D35-B3BDC48F9784",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "The sentence, 'stopping the printing presses,' is a figurative expression, because it is being done now by creating credit by the Federal Reserve System. But this is government action — all inflation is ultimately the result of activities which government determines and can control.",
  },
  {
    work: "An Essay Concerning Human Understanding",
    year: "1689 AD",
    internalID: "68",
    id: "E46EACDC-D957-43EB-A920-578D2A5F1134",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote: "No man's knowledge here can go beyond his experience.",
  },
  {
    work: "The Counter-Revolution of Science",
    year: "1952 AD",
    internalID: "680",
    id: "90D48760-5CA4-48EB-A092-BE76F836B120",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "While the method of the natural sciences is…analytic, the method of the social sciences is better described as compositive or synthetic.",
  },
  {
    work: "The Counter-Revolution of Science",
    year: "1952 AD",
    internalID: "681",
    id: "18ADAE8C-1763-4A8A-9A1D-830B6B689D00",
    philosopher: {
      id: "D719C6D9-93D0-49F0-9EC9-3E2351553B10",
    },
    quote:
      "It thus comes about that in practice it is regularly the theoretical collectivist who extols individual reason and demands that all forces of society be made subject to the direction of a single mastermind, while it is the individualist who recognizes the limitations of the powers of individual reason and consequently advocates freedom as a means for the fullest development of the powers of the inter-individual process.",
  },
  {
    work: "An Essay on the Beautiful",
    year: null,
    internalID: "682",
    id: "98265AAF-671D-46DC-86FF-D066198FAF02",
    philosopher: {
      id: "33931CEB-8DE0-4239-9FA9-0EB300056C97",
    },
    quote:
      "Perhaps, the good and the beautiful are the same, and must be investigated by one and the same process; and in like manner the base and the evil.",
  },
  {
    work: "An Essay on the Beautiful",
    year: null,
    internalID: "683",
    id: "7D76C7C5-A4B7-4872-8626-6BAC56787163",
    philosopher: {
      id: "33931CEB-8DE0-4239-9FA9-0EB300056C97",
    },
    quote:
      "It is now time, leaving every object of sense far behind, to contemplate, by a certain ascent, a beauty of a much higher order; a beauty not visible to the corporeal eye, but alone manifest to the brighter eye of the soul, independent of all corporeal aid.",
  },
  {
    work: "An Essay on the Beautiful",
    year: null,
    internalID: "684",
    id: "E4566D1F-3E54-4802-84D4-55D4FF3B58BB",
    philosopher: {
      id: "33931CEB-8DE0-4239-9FA9-0EB300056C97",
    },
    quote:
      "Hence beauty is established in multitude when the many is reduced into one, and in this case it communicates itself both to the parts and to the whole. But when a particular one, composed from similar parts, is received it gives itself to the whole, without departing from the sameness and integrity of its nature.",
  },
  {
    work: "The First Ennead",
    year: "0250 AD",
    internalID: "685",
    id: "24ED4A2D-F563-4500-817E-56B1CF3E444F",
    philosopher: {
      id: "33931CEB-8DE0-4239-9FA9-0EB300056C97",
    },
    quote:
      "Pleasure and distress, fear and courage, desire and aversion, where have these affections and experiences their seat? Clearly, either in the Soul alone, or in the Soul as employing the body, or in some third entity deriving from both.",
  },
  {
    work: "The First Ennead",
    year: "0250 AD",
    internalID: "686",
    id: "A2EE7B7E-5C53-42E3-A016-3CAA19B5C23D",
    philosopher: {
      id: "33931CEB-8DE0-4239-9FA9-0EB300056C97",
    },
    quote:
      "All teems with symbol; the wise man is the man who in any one thing can read another.",
  },
  {
    work: "The First Ennead",
    year: "0250 AD",
    internalID: "687",
    id: "07E161AC-0EB1-46EB-8F25-37530E823E7E",
    philosopher: {
      id: "33931CEB-8DE0-4239-9FA9-0EB300056C97",
    },
    quote:
      "We may treat of the Soul as in the body — whether it be set above it or actually within it — since the association of the two constitutes the one thing called the living organism, the Animate.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "688",
    id: "870C7B27-22F0-44C8-9E4E-6B8AAA515B2D",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote:
      "The inquiry into the proper aims and limits of State agency must be of the highest importance—nay, that it is perhaps more vitally momentous than any other political question.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "689",
    id: "4D24ABED-FD22-48C0-8C08-8C5731962F97",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote:
      "The true end of Man, or that which is prescribed by the eternal and immutable dictates of reason, and not suggested by vague and transient desires, is the highest and most harmonious development of his powers to a complete and consistent whole.",
  },
  {
    work: "An Essay Concerning Human Understanding",
    year: "1689 AD",
    internalID: "69",
    id: "1DF0A17F-4A2C-411D-80EC-287C0EA351FD",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "I have always thought the actions of men the best interpreters of their thoughts.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "690",
    id: "05A7328C-07EF-44E0-AE41-B33BE5C7689D",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote:
      "The grand, leading principle, towards which every argument hitherto unfolded in these pages directly converges, is the absolute and essential importance of human development in its richest diversity.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "691",
    id: "5157698E-FDD4-45BF-8EB1-3F2A37078AEC",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote:
      "To inquire and to create;—these are the grand centres around which all human pursuits revolve, or at least to these objects do they all more or less directly refer.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "692",
    id: "7BABC9AC-7DD2-41D2-B4C8-142DF33A5307",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote: "Man is naturally more disposed to beneficent than selfish actions.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "693",
    id: "F119576B-0E3B-4296-BAE5-5629EBCDCA0C",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote:
      "If we glance at the most important revolutions in history, we are at no loss to perceive that the greatest number of these originated in the periodical revolutions of the human mind.",
  },
  {
    work: "The Limits of State Action",
    year: "1792 AD",
    internalID: "694",
    id: "53DF6F57-5433-406D-9A10-6125DAF4B5BE",
    philosopher: {
      id: "00F678EA-6C9A-4D0F-90D1-D3CA9ADE11CB",
    },
    quote:
      "The incapacity for freedom can only arise from a want of moral and intellectual power; to elevate this power is the only way to counteract this want; but to do this presupposes the exercise of that power, and this exercise presupposes the freedom which awakens spontaneous activity.",
  },
  {
    work: "Quoted by Plato in Cratylus",
    year: "",
    internalID: "7",
    id: "5157408A-D47E-425B-A2EB-3A42173A2653",
    philosopher: {
      id: "410D7B25-4F70-4346-A01A-CA556498FFFE",
    },
    quote: "Everything changes and nothing stands still.",
  },
  {
    work: "An Essay Concerning Human Understanding",
    year: "1689 AD",
    internalID: "70",
    id: "38675EC5-C286-44F8-8C5A-B115B616CC58",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "Religion, which should most distinguish us from the beasts, and ought most particularly elevate us, as rational creatures, above brutes, is that wherein men often appear most irrational, and more senseless than beasts.",
  },
  {
    work: "Two Treatises of Government",
    year: "1689 AD",
    internalID: "71",
    id: "59D0DED6-C5F0-45B9-95EC-33025BEC43E3",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "Being all equal and independent, no one ought to harm another in his life, health, liberty, or possessions.",
  },
  {
    work: "Two Treatises of Government",
    year: "1689 AD",
    internalID: "73",
    id: "4673219C-21B6-4448-A7A5-266604F5613A",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "Though the Earth, and all inferior Creatures be common to all Men, yet every Man has a Property in his own Person. Thus no Body has any Right to but himself.",
  },
  {
    work: "A Letter Concerning Toleration",
    year: "1689 AD",
    internalID: "74",
    id: "FDB22470-62E2-4576-9676-723D61DF261B",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "But there is only one thing which gathers people into seditious commotion, and that is oppression.",
  },
  {
    work: "An Essay Concerning Human Understanding",
    year: "1689 AD",
    internalID: "75",
    id: "A42053ED-C362-4C71-9325-634CA98C0C09",
    philosopher: {
      id: "FBB201D1-729F-47E6-9B9F-537091E3F9F3",
    },
    quote:
      "There cannot any one moral Rule be propos'd, whereof a Man may not justly demand a Reason.",
  },
  {
    work: "New Science",
    year: "1725 AD",
    internalID: "76",
    id: "5B150E38-3201-4F70-AD77-03486EE9EA38",
    philosopher: {
      id: "C3CC174E-1109-4E7A-B5BF-239C3612CA3B",
    },
    quote:
      "…in accordance with the eternal law of Providence, the natural law of the heroic gentes, in which there is no equality of justice between the weak and the strong, recurs.",
  },
  {
    work: "Siris",
    year: "1744 AD",
    internalID: "77",
    id: "A7CAAB5F-69FE-4E2D-843F-E0E627B0E5CA",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote: "Truth is the cry of all, but the game of the few.",
  },
  {
    work: "De Motu",
    year: "1721 AD",
    internalID: "78",
    id: "B5447E46-44EF-4585-A978-090E3C73D77D",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote:
      "For no one's authority ought to rank so high as to set a value on his words and terms even though nothing clear and determinate lies behind them.",
  },
  {
    work: "De Motu",
    year: "1721 AD",
    internalID: "79",
    id: "0099C51C-24E5-4D67-92EF-F062ACA874AA",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote:
      "In the pursuit of truth we must beware of being misled by terms which we do not rightly understand. That is the chief point. Almost all philosophers utter the caution; few observe it.",
  },
  {
    work: "On Nature",
    year: "",
    internalID: "8",
    id: "E57DDED7-DF9B-424B-BAEA-65D42DB85ECE",
    philosopher: {
      id: "73E6F183-7335-458F-883E-83A9A8F9E562",
    },
    quote:
      "Thinking and the thought that it is are the same; for you will not find thinking apart from what is, in relation to which it is uttered. ",
  },
  {
    work: "A Treatise Concerning the Principles of Human Knowledge",
    year: "1710 AD",
    internalID: "80",
    id: "0F0EB9DE-0309-444B-95CB-B971535D3D19",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote:
      "That we have first rais'd a Dust, and then complain, we cannot see.",
  },
  {
    work: "Three Dialogues between Hylas and Philonous",
    year: "1713 AD",
    internalID: "81",
    id: "DDC9A58C-332D-4FCA-850F-E87B12F7037A",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote: "Few men think; yet all have opinions.",
  },
  {
    work: "Three Dialogues between Hylas and Philonous",
    year: "1713 AD",
    internalID: "82",
    id: "DD31FF83-3E11-4E57-AE15-7C342913EF6A",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote:
      "Doth the reality of sensible things consist in being perceived? or, is it something distinct from their being perceived, and that bears no relation to the mind?",
  },
  {
    work: "A Treatise Concerning the Principles of Human Knowledge",
    year: "1710 AD",
    internalID: "83",
    id: "EF8FA1CF-400A-4F73-9AA2-B1EE1C849DF3",
    philosopher: {
      id: "47279BDA-DC4B-4B98-83E6-7DE1D7B5C4AD",
    },
    quote:
      "But, say you, surely there is nothing easier than for me to imagine trees, for instance, in a park...and nobody by to perceive them...The objects of sense exist only when they are perceived; the trees therefore are in the garden...no longer than while there is somebody by to perceive them.",
  },
  {
    work: "The Social Contract",
    year: "1762 AD",
    internalID: "84",
    id: "82AB9651-9792-448F-BD6D-AE9952D0CE29",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote: "Man is born free, and everywhere he is in chains.",
  },
  {
    work: "The Social Contract",
    year: "1762 AD",
    internalID: "85",
    id: "F033A89A-0383-442B-9299-B594BCD8D3EE",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "From whatever aspect we regard the question, the right of slavery is null and void, not only as being illegitimate, but also because it is absurd and meaningless. The words slave and right contradict each other, and are mutually exclusive.",
  },
  {
    work: "The Social Contract",
    year: "1762 AD",
    internalID: "86",
    id: "0D49A425-CC83-4A02-9B9F-44826F51B25F",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "the Sovereign, being formed wholly of the individuals who compose it, neither has nor can have any interest contrary to theirs; and consequently the sovereign power need give no guarantee to its subjects, because it is impossible for the body to wish to hurt all its members.",
  },
  {
    work: "Emile, or On Education",
    year: "1762 AD",
    internalID: "87",
    id: "9B023289-85F6-41F0-B247-D9A3D8E9C980",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "Everything is good as it leaves the hands of the author of things, everything degenerates in the hands of man.",
  },
  {
    work: "Emile, or On Education",
    year: "1762 AD",
    internalID: "88",
    id: "661CAFFE-4885-4668-B52E-31F19F6AF75D",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "When man is content to be himself he is strong indeed; when he strives to be more than man he is weak indeed.",
  },
  {
    work: "The Social Contract",
    year: "1762 AD",
    internalID: "89",
    id: "C9B29B24-9B67-4E2E-B810-823456B21CED",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "What man loses by the social contract is his natural liberty and an unlimited right to everything he tries to get and succeeds in getting; what he gains is civil liberty and the proprietorship of all he possesses.",
  },
  {
    work: "On Nature",
    year: "",
    internalID: "9",
    id: "5EFB3827-9E64-428C-8ECF-A0F06228665E",
    philosopher: {
      id: "73E6F183-7335-458F-883E-83A9A8F9E562",
    },
    quote:
      "And it is all one to me / Where I am to begin; for I shall return there again.",
  },
  {
    work: "The Social Contract",
    year: "1762 AD",
    internalID: "90",
    id: "FE04A740-DF63-4A2B-BEDF-2F6F21A15AA2",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "It is solely on the basis of this common interest that every society should be governed.",
  },
  {
    work: "The Social Contract",
    year: "1762 AD",
    internalID: "91",
    id: "A3A07DC0-EA32-42BD-B0A7-7C87147A52D0",
    philosopher: {
      id: "BB4F146D-92C5-4E69-B6B4-F1F946C84377",
    },
    quote:
      "Under bad governments, this equality is only apparent and illusory: it serves only to-keep the pauper in his poverty and the rich man in the position he has usurped. In fact, laws are always of use to those who possess and harmful to those who have nothing: from which it follows that the social state is advantageous to men only when all have something and none too much.",
  },
  {
    work: "An Enquiry Concerning Human Understanding",
    year: "1748 AD",
    internalID: "92",
    id: "D4773D1C-3036-4D90-A88B-73EA14CCC24E",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote:
      "In our reasonings concerning matter of fact, there are all imaginable degrees of assurance, from the highest certainty to the lowest species of moral evidence. A wise man, therefore, proportions his belief to the evidence.",
  },
  {
    work: "On Suicide",
    year: "",
    internalID: "93",
    id: "502C2B74-835E-4120-A999-B293EDF6C76A",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote:
      "The life of man is of no greater importance to the universe than that of an oyster.",
  },
  {
    work: "A Treatise of Human Nature",
    year: "1740 AD",
    internalID: "94",
    id: "CA7CC8DA-F7B3-41B6-83A3-11BCDAED7C08",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote:
      "Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.",
  },
  {
    work: "A Treatise of Human Nature",
    year: "1740 AD",
    internalID: "95",
    id: "7FFEFA87-2706-4AC7-9BE3-18E49C72D6FD",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote:
      "Morals excite passions, and produce or prevent actions. Reason of itself is utterly impotent in this particular. The rules of morality, therefore, are not conclusions of our reason.",
  },
  {
    work: "A Treatise of Human Nature",
    year: "1740 AD",
    internalID: "96",
    id: "EA547D1A-C750-4997-B2BF-07FBE16F1517",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote:
      "Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.",
  },
  {
    work: "A Treatise of Human Nature",
    year: "1740 AD",
    internalID: "97",
    id: "0B3D36E9-6425-4DF4-9344-6B328B9A0571",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote: "Be a philosopher; but, amidst all your philosophy, be still a man.",
  },
  {
    work: "An Enquiry Concerning Human Understanding",
    year: "1748 AD",
    internalID: "99",
    id: "CE82521F-7701-4FAD-9226-62930517A832",
    philosopher: {
      id: "0506F72D-FCD9-4F55-BD23-38953ADD2F88",
    },
    quote:
      "Though experience be our only guide in reasoning concerning matters of fact; it must be acknowledged, that this guide is not altogether infallible, but in some cases is apt to lead us into errors.",
  },
];
