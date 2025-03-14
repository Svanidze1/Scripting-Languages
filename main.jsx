import React, { useState } from 'react';
import './main.css';
import CountdownTimer from './CountdownTimer';
import Modal from '../Modal/Modal';
import img1 from '../../Assets/img1.jpeg';
import img2 from '../../Assets/img2.jpeg';
import img3 from '../../Assets/img3.jpeg';
import img4 from '../../Assets/img4.jpeg';
import img5 from '../../Assets/img5.jpeg';

const Data = [
  {
    id: 1,
    imgSrc: img1,
    leaveHour: 13,
    leaveMinute: 30,
    destTitle: 'Telavi',
    location: 'City',
    fees: '$200',
    description: "The first archaeological findings from Telavi date back to the Bronze Age. One of the earliest surviving accounts of Telavi is from the 2nd century AD, by Greek geographer Claudius Ptolemaeus, who mentions the name Teleda (a reference to Telavi). Telavi began to transform into a fairly important and large political and administrative center in the 8th century. Interesting information on Telavi is provided in the records by an Arab geographer, Al-Muqaddasi of the 10th century, who mentions Telavi along with such important cities of that time's Caucasus as Tbilisi, Shamkhor, Ganja, Shemakha and Shirvan. Speaking about the population of Telavi, Al-Muqaddasi points out that for the most part it consisted of Christians."
  },
  {
    id: 2,
    imgSrc: img2,
    leaveHour: 22,
    leaveMinute: 0,
    destTitle: 'Batumi',
    location: 'City',
    fees: '$600',
    description: "Batum or Batoum, is the second-largest city of Georgia and the capital of the Autonomous Republic of Adjara, located on the coast of the Black Sea in Georgia's southwest, 20 kilometers north of the border with Turkey. It is situated in a subtropical zone at the foot of the Caucasus. Much of Batumi's economy revolves around tourism and gambling (it is nicknamed , but the city is also an important seaport and includes industries like shipbuilding, food processing and light manufacturing."
  },
  {
    id: 3,
    imgSrc: img3,
    leaveHour: 23,
    leaveMinute: 0,
    destTitle: 'Borjomi',
    location: 'City',
    fees: '$400',
    description: "Borjomi (Georgian: ბორჯომი) is a resort town in south-central Georgia, 165 km from Tbilisi, with a population of 11,173 (as of 2024). It is one of the municipalities of the Samtskhe Javakheti region and is situated in the northwestern part of the region in the picturesque Borjomi Gorge on the eastern edge of the Borjomi-Kharagauli National Park. The town is noted for its mineral water industry (which is the number one export of Georgia), the Romanov summer palace in Likani, and the World Wide Fund for Nature-site Borjomi-Kharagauli National Park."
  },
  {
    id: 4,
    imgSrc: img4,
    leaveHour: 17,
    leaveMinute: 30,
    destTitle: 'Mestia',
    location: 'City',
    fees: '$350',
    description: "Mestia is located in the Svaneti region of Samegrelo-Zemo Svaneti province (mkhare), some 128 kilometres (80 miles) northeast of the regional capital of Zugdidi. Mestia and the adjoining 132 villages form Mestia District (raioni). Its area is 3,044 square kilometres (1,175 sq mi); and its population is 9,316 (1,973 in the town itself), according to the 2014 Georgia census. It was granted the status of a townlet (Georgian: daba) in 1968."
  },
  {
    id: 5,
    imgSrc: img5,
    leaveHour: 15,
    leaveMinute: 45,
    destTitle: 'Tbilisi',
    location: 'City',
    fees: '$500',
    description: "Tbilisi  Georgian: თბილისი, pronounced , in some languages still known by its pre-1936 name Tiflis , (Georgian: ტფილისი, romanized: t'pilisi) is the capital and largest city of Georgia, lying on the banks of the Kura River with a population of around 1.2 million people. Tbilisi was founded in the fifth century AD by Vakhtang I of Iberia, and since then has served as the capital of various Georgian kingdoms and republics. Between 1801 and 1917, then part of the Russian Empire, Tiflis was the seat of the Caucasus Viceroyalty, governing both the northern and the southern parts of the Caucasus."
  }
];

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDetailsClick = (destination) => {
    setSelectedDestination(destination);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDestination(null);
  };

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">
          Our current destinations
        </h3>
      </div>

      <div className="seeContent grid">
        {
          Data.map((destination) => {
            const { id, imgSrc, leaveHour, leaveMinute, destTitle, location, fees, description } = destination;
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <CountdownTimer hour={leaveHour} minute={leaveMinute} />
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex" onClick={() => handleDetailsClick(destination)}>DETAILS</button>
                </div>
              </div>
            );
          })
        }
      </div>

      <Modal show={showModal} onClose={handleCloseModal} destination={selectedDestination} />
    </section>
  );
};

export default Main;
