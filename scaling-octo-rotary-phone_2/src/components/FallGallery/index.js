import React, { useRef, useEffect, useState } from 'react';
import Waterfall from "waterfalljs-layout/react";
import './fallGallery.css';
import Picture from './picture';
import { useSize } from 'ahooks';
import p1 from '../../assets/fall-gallery/Frame 487.png';
import p2 from '../../assets/fall-gallery/Frame 491.png';
import p3 from '../../assets/fall-gallery/Frame 494.png';
import p4 from '../../assets/fall-gallery/Frame 548.png';
import p5 from '../../assets/fall-gallery/Frame 551.png';
import p6 from '../../assets/fall-gallery/Frame 554.png';
import p7 from '../../assets/fall-gallery/Frame 555.png';
import p8 from '../../assets/fall-gallery/Frame 557.png';
import p9 from '../../assets/fall-gallery/Frame 558.png';
import p10 from '../../assets/fall-gallery/Frame 560.png';

const sources = [{
  user: 'abc',
  url: p1
},{
  user: '222',
  url: p2
},{
  user: '222',
  url: p3
},{
  user: '222',
  url: p4
},{
  user: '222',
  url: p5
},{
  user: '222',
  url: p6
},{
  user: '222',
  url: p7
},{
  user: '222',
  url: p8
},{
  user: '222',
  url: p9
},{
  user: '222',
  url: p10
},{
  user: '222',
  url: p2
},{
  user: '222',
  url: p3
},{
  user: '222',
  url: p4
},{
  user: '222',
  url: p5
},{
  user: '222',
  url: p6
},{
  user: '222',
  url: p7
},{
  user: '222',
  url: p8
},{
  user: '222',
  url: p9
},{
  user: '222',
  url: p10
}, ]

const FallGallery = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  const [columnCount, setColumnCount] = useState();

  useEffect(() => {
    if (size) {
      if (size.width > 1200) {
        setColumnCount(5);
      } else if (size.width > 750) {
        setColumnCount(3);
      } else {
        setColumnCount(2);
      }
    }
  }, [size]);

  return (
    <div className='fallGallery-container' ref={ref}>
      {columnCount && <Waterfall
        mode='grid'
        el="#react-waterfall-grid-comps"
        columnCount={columnCount}
        columnGap={24}
        rowGap={24}
        customStyle={`#react-waterfall-grid-comps li>div {
          border-radius: 8px;
          font-size: 20px;
          overflow: hidden;
          color: rgba(0, 0, 0, 0.6);
          padding: 12px;
          transition: all 0.5s;
        }
        #react-waterfall-grid-comps li {
          list-style: none;
        }
        #react-waterfall-grid-comps li>div:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
          transition: all 0.3s
        }
        #react-waterfall-grid-comps li>div>img {
          width: 100%
        }`}
        // onChangeUlMaxH={h => (ulMaxHRef.current = h)}
      >
        {sources.map((item, index) => {
          return (
            <li key={index}>
              <Picture {...{...item}}/>
            </li>
          )
        })}
      </Waterfall>}
    </div>
  )
}

export default FallGallery;