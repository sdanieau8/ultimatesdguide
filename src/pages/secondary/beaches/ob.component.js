import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import OCEANBEACH_DATA from "../../../components/directory/data/oceanbeach.data";

import './pb.styles.scss';

class OceanBeach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: OCEANBEACH_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/jhd3wgt/ob.jpg")`}}>
      <h1 className='pagename'> OCEAN BEACH</h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Ocean Beach offers an old school beach vibe with eclectic boutiques all around.
      There are sandy beaches as well as small cliff areas for picnics.
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


export default OceanBeach;