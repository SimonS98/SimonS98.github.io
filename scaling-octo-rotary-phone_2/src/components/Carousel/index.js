import React from 'react';
import cx from 'classnames';
import './carousel.css';
import img1 from '../../assets/carousel/Frame 479.png';
import img2 from '../../assets/carousel/Frame 482.png';
import img3 from '../../assets/carousel/Frame 483.png';
import img4 from '../../assets/carousel/Frame 488.png';
import img5 from '../../assets/carousel/Frame 489.png';
import img6 from '../../assets/carousel/Frame 490.png';
import img7 from '../../assets/carousel/Frame 491.png';
import img8 from '../../assets/carousel/Frame 493.png';
import img9 from '../../assets/carousel/Frame 494.png';

const template = [[
  {url: img2},
  {text: '漫漫长夜的魔法城堡', span: 24},
  {text: '赛博庞克', span: 12},
  {text: '魔法城堡', span: 12},
], [
  {text: '室内繁复的室内装修设计', span: 24},
  {text: '秋风扫落叶', span: 24},
  {url: img1},
], [
  {url: img3},
], [
  {text: '飞翔于城市空中的金鱼', span: 24},
  {url: img4},
  {text: '金光璀璨', span: 12},
  {text: '空中楼阁', span: 12},
], [
  {url: img5},
  {url: img6},
], [
  {text: '玫瑰与废墟', span: 24},
  {url: img8},
  {text: '泼墨女性人像', span: 24},
], [
  {url: img7},
], [
  {text: '玫瑰与废墟', span: 24},
  {url: img9},
]]

const Carousel = () => {
  return (
    <div className='carousel-container'>
      <img className='carousel-circle' src={require('../../assets/backCircle.png')} />
      <div className='slider'>
        <div className='slide-track'>
          {template.map((t, i) => {
            let extra = '';
            if ([0, 3].includes(i)) {
              extra = 'l';
            } else if ([2, 6].includes(i)) {
              extra = 's';
            } else {
              extra = 'm';
            }
            return <div className={cx('slide-column', extra)}>
              {t.map(item => {
                return (
                  <React.Fragment>
                    {item.url && <img src={item.url}/>}
                    {item.text && (item.span === 24 ? <div className="line-text">{item.text}</div> : <span className='half-line-text'>{item.text}</span>)}
                  </React.Fragment>
                )
              })}
            </div>
          })}
        </div>
        <div className='slide-track'>
          {template.map((t, i) => {
            let extra = '';
            if ([0, 3].includes(i)) {
              extra = 'l';
            } else if ([2, 6].includes(i)) {
              extra = 's';
            } else {
              extra = 'm';
            }
            return <div className={cx('slide-column', extra)}>
              {t.map(item => {
                return (
                  <React.Fragment>
                    {item.url && <img src={item.url}/>}
                    {item.text && (item.span === 24 ? <div className="line-text">{item.text}</div> : <span className='half-line-text'>{item.text}</span>)}
                  </React.Fragment>
                )
              })}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Carousel