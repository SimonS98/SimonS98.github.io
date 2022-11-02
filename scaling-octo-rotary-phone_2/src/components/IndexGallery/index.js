import React from 'react';
import Picture from './picture';
import './indexGallery.css';
import p6 from '../../assets/fall-gallery/Frame 554.png';
import p7 from '../../assets/fall-gallery/Frame 555.png';
import p8 from '../../assets/fall-gallery/Frame 557.png';
import p1 from '../../assets/fall-gallery/Frame 487.png';

const details = [{
//   user: '123',
//   title: "测试标题",
//   url: p7,
// }, {
  user: '212',
  title: "测试标题",
  url: p1,
}, {
  user: '222',
  title: "测试标题2",
  url: p6,
}, {
  user: '333',
  title: "测试标题3",
  url: p8,
}, {
  user: '212',
  title: "测试标题",
  url: p1,
}, {
  user: '222',
  title: "测试标题2",
  url: p6,
}, ]

const IndexGallery = () => {
  return (
    <div className='index-gallery-wrapper'>
      <div className='index-gallery-container'>
        {details.map(d => <Picture {...{...d}}/>)}
      </div>
      <div className='index-gallery-container'>
        {details.map(d => <Picture {...{...d}}/>)}
      </div>
      <div className='index-gallery-container'>
        {details.map(d => <Picture {...{...d}}/>)}
      </div>
    </div>

  )
}

export default IndexGallery