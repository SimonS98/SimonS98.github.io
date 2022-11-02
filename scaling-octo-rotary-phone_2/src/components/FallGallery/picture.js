import React from 'react';
import './picture.css';

const Picture = (props) => {
  return (
    <div className='picture-wrapper'>
      <div className='picture-container'>
        {/* <div className='picture-border picture-border-left' />
        <div className='picture-border picture-border-right' />
        <div className='picture-border picture-border-top' />
        <div className='picture-border picture-border-bottom' /> */}
        <img src={props.url}/>
      </div>
      {props.title ? <div className='picture-detail'>
        <span className='title'>{props.title}</span>
        用户：{props.user}
      </div> : <div className='picture-user'>
        用户：{props.user}
      </div>}
    </div>
  )
}

export default Picture;