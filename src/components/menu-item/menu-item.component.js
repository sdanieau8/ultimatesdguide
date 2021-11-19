import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
  <div
    className='menu-item'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  >

    <div className='content'>
      <h1 className='title'>{title}</h1>
    </div>
  </div>
);

export default MenuItem;