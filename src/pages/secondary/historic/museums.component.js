import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import MUSEUMS_DATA from "../../../components/directory/data/museums.data";

import './h.styles.scss';

class Museums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: MUSEUMS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/64QKJBg/museum.jpg")`}}>
      <h1 className='pagename'> MUSEUMS </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      MUSEUMS is great for walking the boardwalk, lounging on the beach,
      bike rentals, surf lessons 
      and amazing food. Extra text to fill up space.
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


export default Museums;