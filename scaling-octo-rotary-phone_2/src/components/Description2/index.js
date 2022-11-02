import React from 'react';
import './description.css';

const Description2 = () => {
  return (
    <div className='desc-container'>
        <img className='linebreak' src={require('../../assets/linebreak.png')} />

        <p className='desc-text'><span className='white-text'>人类个体深度成长的力量，
        <br/>能与生成式AI的广度结合，
        <br/>互为补充，而非水火不容。</span></p>

        <img className='linebreak' src={require('../../assets/linebreak.png')} />
    </div>
  )
}

export default Description2