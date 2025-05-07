import React from 'react';
import { Link } from 'react-router-dom';
import './Members.css';

import LisakhanyaImg from './images/Lisakhanya Nunu.jpeg';
import MdodaImg from './images/Lisakhanya Mdoda.jpeg';
import EndinakoImg from './images/Endinako Mngwabane.jpeg';
import OyamaImg from './images/Oyama Ngeju.jpeg';
import KaraboImg from './images/Karabo Mbenja.jpeg';
import AthandweImg from './images/Athandwe Mngcongco.jpeg';
import ZukhanyeImg from './images/Zukhanye.jpeg';
import AluthaImg from './images/Alutha Tyalane.jpeg';
import VuyokaziImg from './images/Vuyokazi Gxowa.jpeg';
import ThulaniImg from './images/Thulani Mtshwelo.jpeg';
import ChulumancoImg from './images/Chulumanco Donkile.jpeg';
import ZiziphoImg from './images/Zizipho Ntuli.jpeg';
import MpumeleloImg from './images/Zulu Mpumelelo.jpeg';
import UvuyoImg from './images/Uvuyo Teba.jpeg';
import ZethuImg from './images/zethu Tolbani.jpeg';
import QhamileImg from './images/Qhamile Mgogodlana.jpeg';
import EmihleImg from './images/Emihle.jpeg';
import RayImg from './images/Ray Blaaw.jpeg';
import AkhoImg from './images/Akho Doyi.jpeg';
import NabaImg from './images/Naba Wande Coko.jpeg';
import AthimnaImg from './images/Athimna Donkile.jpeg';
import EsonaImg from './images/Esona Ngwevela.jpeg';
import IvakeleImg from './images/Ivakele Shenxane.jpeg';
import LwaziImg from './images/Lwazi Solani.jpeg';
import JuniorImg from './images/Junior Fana.jpeg';
import YolethaImg from './images/Yoletha Jack.jpeg';
import NandiImg from './images/Nandi Vokwana.jpeg';
import AviweImg from './images/Aviwe Mdleleni.jpeg';
import MbaliImg from './images/Mbali.jpeg';
import BelindaImg from './images/Belinda Bobby.jpeg';
import LiyemaImg from './images/Liyema Nunu.jpeg';
import KeoratileImg from './images/Keoratile.jpeg';
import SibuleleImg from './images/Sibulele Rwadi.jpeg';
import AnoxoloImg from './images/Anoxolo Roy.jpeg';
import SamkeloImg from './images/Samkelo Silwangangubo.jpeg';

const members = [
  { id: 1, name: 'Sibulele Rwadi', voicePart: 'Tenor', image: SibuleleImg },
  { id: 2, name: 'Mbali', voicePart: 'Alto', image: MbaliImg },
  { id: 3, name: 'Liyema Nunu', voicePart: 'Alto & Soprano', image: LiyemaImg },
  { id: 4, name: 'Keoratile', voicePart: 'Alto', image: KeoratileImg },
  { id: 5, name: 'Belinda Bobby', voicePart: 'Soprano', image: BelindaImg },
  { id: 6, name: 'Aviwe Mdleleni', voicePart: 'Bass', image: AviweImg },
  { id: 7, name: 'Yoletha Jack', voicePart: 'Soprano', image: YolethaImg },
  { id: 8, name: 'Nandi Vokwana', voicePart: 'Soprano', image: NandiImg },
  { id: 9, name: 'Lwazi Solani', voicePart: 'Tenor', image: LwaziImg },
  { id: 10, name: 'Junior Fana', voicePart: 'Tenor', image: JuniorImg },
  { id: 11, name: 'Zulu Mpumelelo', voicePart: 'Tenor', image: MpumeleloImg },
  { id: 12, name: 'Zukhanye', voicePart: 'Tenor', image: ZukhanyeImg },
  { id: 13, name: 'Zizipho Ntuli', voicePart: 'Soprano', image: ZiziphoImg },
  { id: 14, name: 'Zethu Tolbani', voicePart: 'Soprano', image: ZethuImg },
  { id: 15, name: 'Vuyokazi Gxowa', voicePart: 'Alto', image: VuyokaziImg },
  { id: 16, name: 'Uvuyo Teba', voicePart: 'Tenor', image: UvuyoImg },
  { id: 17, name: 'Thulani Mtshwelo', voicePart: 'Tenor', image: ThulaniImg },
  { id: 18, name: 'Ray Blaaw', voicePart: 'Soprano', image: RayImg },
  { id: 19, name: 'Qhamile Mgogodlana', voicePart: 'Djembe Master', image: QhamileImg },
  { id: 20, name: 'Oyama Ngeju', voicePart: 'Tenor', image: OyamaImg },
  { id: 21, name: 'Naba Wande Coko', voicePart: 'Tenor', image: NabaImg },
  { id: 22, name: 'Lisakhanya Nunu', voicePart: 'Leader, Conductor & Bass', image: LisakhanyaImg },
  { id: 23, name: 'Lisakhanya Mdoda', voicePart: 'Alto & Conductor', image: MdodaImg },
  { id: 24, name: 'Karabo Mbenja', voicePart: 'Alto', image: KaraboImg },
  { id: 25, name: 'Ivakele Shenxane', voicePart: 'Alto', image: IvakeleImg },
  { id: 26, name: 'Inga', voicePart: 'Alto' },
  { id: 27, name: 'Esona Ngwevela', voicePart: 'Soprano', image: EsonaImg },
  { id: 28, name: 'Endinako Mngwabane', voicePart: 'Bass', image: EndinakoImg },
  { id: 29, name: 'Emihle', voicePart: 'Soprano', image: EmihleImg },
  { id: 30, name: 'Chulumanco Donkile', voicePart: 'Bass', image: ChulumancoImg },
  { id: 31, name: 'Athimna Donkile', voicePart: 'Tenor', image: AthimnaImg },
  { id: 32, name: 'Athamndwe Mngcongco', voicePart: 'Alto', image: AthandweImg },
  { id: 33, name: 'Alutha Tyalane', voicePart: 'Alto', image: AluthaImg },
  { id: 34, name: 'Akho Doyi', voicePart: 'Soprano', image: AkhoImg },
  { id: 35, name: 'Anoxolo', voicePart: 'Bass', image: AnoxoloImg },
  { id: 36, name: 'Samkelo Silwangangubo', voicePart: 'Bass', image: SamkeloImg },
];

const groupByVoicePart = (members) => {
  const groups = {
    Alto: [],
    Bass: [],
    Tenor: [],
    Soprano: [],
    Other: []
  };
  members.forEach(member => {
    if (member.voicePart) {
      const voice = member.voicePart.toLowerCase();
      if (voice.includes('alto')) groups.Alto.push(member);
      else if (voice.includes('bass')) groups.Bass.push(member);
      else if (voice.includes('tenor')) groups.Tenor.push(member);
      else if (voice.includes('soprano')) groups.Soprano.push(member);
      else groups.Other.push(member);
    } else {
      groups.Other.push(member);
    }
  });
  return groups;
};

const Members = () => {
  const groupedMembers = groupByVoicePart(members);

  const renderGroup = (title, group) => (
    <div className="member-group" key={title}>
      <h3>{title}</h3>
      <ul className="member-list">
        {group.map(member => (
          <li key={member.id} className="member-item">
            {member.image ? (
              <Link to="/gallery">
                <img src={member.image} alt={member.name} className="member-image" />
              </Link>
            ) : null}
            <div className="member-name">{member.name}</div>
            <div className="member-voice">{member.voicePart}</div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="members">
      <h2>Choir Members</h2>
      <p>Meet the talented voices of the Khayelitsha Youth Choir.</p>
      {Object.entries(groupedMembers).map(([title, group]) => renderGroup(title, group))}
    </section>
  );
};

export default Members;
