import React from 'react';
import './picture.css';

const Picture = (props) => {
  return (
    <div className='gallery-wrapper'>
      <div className='gallery-container'>
        <img src={props.url}/>
      </div>
      {props.title ? <div className='gallery-detail'>
        <span className='title'>{props.title}</span>
        用户：{props.user}
      </div> : <div className='gallery-user'>
        用户：{props.user}
      </div>}
    </div>
  )
}

export default Picture;