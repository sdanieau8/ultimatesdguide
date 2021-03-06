import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import MB_DATA from "../../../components/directory/data/missionbeach.data";

import './pb.styles.scss';

class MissionBeach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: MB_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/JC2tp62/mb.jpg")`}}>
      <h1 className='pagename'> MISSION BEACH</h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Mission Beach is great for walking the boardwalk, lounging on the beach,
      bike rentals, surf lessons 
      and amazing food.
      </h2>
      
      <div className='pb-list'>
        {collections.map(( {id, title, items}) => (
          <InfoCard key={id} title={title} items={items} />
        ))}
      </div>
    </div>
    );
  }
}


export default MissionBeach;