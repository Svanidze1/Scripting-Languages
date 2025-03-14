const Data = [
    {
      id: 1,
      imgSrc: "https://i.imgur.com/vEdD3XV.jpeg",
      leaveHour: 13,
      leaveMinute: 30,
      destTitle: 'Telavi',
      location: 'City',
      fees: 200,
      description: "The first archaeological findings from Telavi date back to the Bronze Age. One of the earliest surviving accounts of Telavi is from the 2nd century AD, by Greek geographer Claudius Ptolemaeus, who mentions the name Teleda (a reference to Telavi). Telavi began to transform into a fairly important and large political and administrative center in the 8th century. Interesting information on Telavi is provided in the records by an Arab geographer, Al-Muqaddasi of the 10th century, who mentions Telavi along with such important cities of that time's Caucasus as Tbilisi, Shamkhor, Ganja, Shemakha and Shirvan. Speaking about the population of Telavi, Al-Muqaddasi points out that for the most part it consisted of Christians."
    },
    {
      id: 2,
      imgSrc: "https://i.imgur.com/XrSEL13.jpeg",
      leaveHour: 22,
      leaveMinute: 0,
      destTitle: 'Batumi',
      location: 'City',
      fees: 600,
      description: "Batum or Batoum, is the second-largest city of Georgia and the capital of the Autonomous Republic of Adjara, located on the coast of the Black Sea in Georgia's southwest, 20 kilometers north of the border with Turkey. It is situated in a subtropical zone at the foot of the Caucasus. Much of Batumi's economy revolves around tourism and gambling (it is nicknamed , but the city is also an important seaport and includes industries like shipbuilding, food processing and light manufacturing."
    },
    {
      id: 3,
      imgSrc: "https://i.imgur.com/4oFJgWe.jpeg",
      leaveHour: 23,
      leaveMinute: 0,
      destTitle: 'Borjomi',
      location: 'City',
      fees: 400,
      description: "Borjomi (Georgian: ბორჯომი) is a resort town in south-central Georgia, 165 km from Tbilisi, with a population of 11,173 (as of 2024). It is one of the municipalities of the Samtskhe Javakheti region and is situated in the northwestern part of the region in the picturesque Borjomi Gorge on the eastern edge of the Borjomi-Kharagauli National Park. The town is noted for its mineral water industry (which is the number one export of Georgia), the Romanov summer palace in Likani, and the World Wide Fund for Nature-site Borjomi-Kharagauli National Park."
    },
    {
      id: 4,
      imgSrc: "https://i.imgur.com/Ktp9zZX.jpeg",
      leaveHour: 17,
      leaveMinute: 30,
      destTitle: 'Mestia',
      location: 'City',
      fees: 350,
      description: "Mestia is located in the Svaneti region of Samegrelo-Zemo Svaneti province (mkhare), some 128 kilometres (80 miles) northeast of the regional capital of Zugdidi. Mestia and the adjoining 132 villages form Mestia District (raioni). Its area is 3,044 square kilometres (1,175 sq mi); and its population is 9,316 (1,973 in the town itself), according to the 2014 Georgia census. It was granted the status of a townlet (Georgian: daba) in 1968."
    },
    {
      id: 5,
      imgSrc: "https://i.imgur.com/OTBTxIb.jpeg",
      leaveHour: 15,
      leaveMinute: 45,
      destTitle: 'Tbilisi',
      location: 'City',
      fees: 500,
      description: "Tbilisi  Georgian: თბილისი, pronounced , in some languages still known by its pre-1936 name Tiflis , (Georgian: ტფილისი, romanized: t'pilisi) is the capital and largest city of Georgia, lying on the banks of the Kura River with a population of around 1.2 million people. Tbilisi was founded in the fifth century AD by Vakhtang I of Iberia, and since then has served as the capital of various Georgian kingdoms and republics. Between 1801 and 1917, then part of the Russian Empire, Tiflis was the seat of the Caucasus Viceroyalty, governing both the northern and the southern parts of the Caucasus."
    },
    {
        id: 6,
        imgSrc: "https://www.georgianholidays.com/storage/XiRfSae6cEm5dA9JWJhGoQXgwaYF0k87QwdmgDmY.jpeg",
        leaveHour: 13,
        leaveMinute: 30,
        destTitle: 'Poti',
        location: 'City',
        fees: 650,
        description: "Poti  is a port city in Georgia, located on the eastern Black Sea coast in the region of Samegrelo-Zemo Svaneti in the west of the country. Built near the site of the ancient Greek colony of Phasis and deriving its name from the same, the city has become a major port city and industrial center since the early 20th century. It is also home to a main naval base and the headquarters of the Georgian Navy."
      },
      {
        id: 7,
        imgSrc: "https://www.tripsavvy.com/thmb/q83iq9YC7lmaGvflAhTHuR8ejIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beautiful-aerial-view-of-bagrati-cathedral-in-kutaisi-city-in-georgia--1188643337-8638e92398e84326a385d921d66f984d.jpg",
        leaveHour: 22,
        leaveMinute: 0,
        destTitle: 'Kutaisi',
        location: 'City',
        fees: 1200,
        description: "Kutaisi is one of the oldest continuously inhabited cities in the world and the third-most populous city in Georgia after Tbilisi and Batumi. Situated 221 kilometres (137 miles) west of Tbilisi, on the Rioni River, it is the capital of the western region of Imereti."
      },
      {
        id: 8,
        imgSrc: "https://cdn.georgiantravelguide.com/storage/files/tsqaltubo-tskaltubo.jpg",
        leaveHour: 23,
        leaveMinute: 0,
        destTitle: 'Tskaltubo',
        location: 'City',
        fees: 750,
        description: "Tskaltubo  is a spa resort in west-central Georgia.[2] It is the main town of the Tsqaltubo Municipality of the Imereti province. It is known for its radon-carbonate mineral springs, whose natural temperature of 33 35 °C  enables the water to be used without preliminary heating."
      },
      {
        id: 9,
        imgSrc: "https://cdn.georgiantravelguide.com/storage/files/zugdidi-samegrelo-zugdidi-samegrelo.jpg",
        leaveHour: 17,
        leaveMinute: 30,
        destTitle: 'Zugdidi',
        location: 'City',
        fees: 550,
        description: "Zugdidi  is a city in the western Georgian historical province of Samegrelo (Mingrelia). It is situated in the north-west of that province. The city is located 318 kilometres west of Tbilisi, 30 km from the Black Sea coast and 30 km from the Egrisi Range, at an elevation of 100–110 metres above sea level. Zugdidi is the capital of the Samegrelo-Zemo Svaneti region, which combines Samegrelo (Mingrelia) and upper part of Svaneti, and the centre of the Zugdidi Municipality within. Zugdidi is the sixth most populous city in Georgia."
      },
      {
        id: 10,
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRNXw3d_6mqpfxIES6NpO0pymHkArGj6oFKg&s",
        leaveHour: 15,
        leaveMinute: 45,
        destTitle: 'Mtskheta',
        location: 'City',
        fees: 450,
        description: "Mtskheta  is a city in the region of Mtskheta-Mtianeti, Georgia. It is one of the oldest cities in Georgia as well as one of the oldest continuously inhabited cities in the world. It is located approximately 20 km (12 mi) north of Tbilisi, at the confluence of the Mtkvari and Aragvi rivers. Currently a small provincial capital, for nearly a millennium until the 5th century AD, Mtskheta was a large fortified city, a significant economical and political centre of the Kingdom of Iberia."
      }
  ];

  export default Data;