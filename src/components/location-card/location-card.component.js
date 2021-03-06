import React from 'react';
import './location-card.styles.scss';

const LocationCard = ({ id, name, price, type, address, mapLink, linkUrl }) =>  (
    <div className='location-card' key={id}>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='type'>{type}</span>
      <a className='address' href={mapLink} aria-label='address'>{address}</a>
      <a className='linkUrl' href={linkUrl} aria-label='company-page'>
      Click to learn more!</a>
    </div>
  );
export default LocationCard;