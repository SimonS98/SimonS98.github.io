import React from 'react';
import './team.css';
import img1 from '../../assets/team-members/tm1.png';
import img2 from '../../assets/team-members/tm2.png';
import img3 from '../../assets/team-members/tm3.png';
import img4 from '../../assets/team-members/tm4.png';
import img5 from '../../assets/team-members/tm5.png';
import img6 from '../../assets/team-members/tm6.png';
import img7 from '../../assets/team-members/tm7.png';
import img8 from '../../assets/team-members/tm8.png';
import img9 from '../../assets/team-members/tm9.png';
import img10 from '../../assets/team-members/tm10.png';
import img11 from '../../assets/team-members/tm11.png';
import img12 from '../../assets/team-members/tm12.png';
import imgct1 from '../../assets/team-members/ct1.jpg';

const data = [{
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: imgct1
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img2
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img3
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img4
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img5
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img6
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img7
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img8
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img9
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img10
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img11
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img12
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img1
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img2
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img3
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img7
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img8
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img11
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img12
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img10
}, {
  user: 1234,
  age: 28,
  identity: "社区活跃用户",
  active: "小红书",
  img: img1
}, ]

const Team = () => {


  return (
    <div>
      <div className='team-container'>
        {data.map(d => (
          <div className='team-pic-container'>
            <img src={d.img} />
            <div className='team-pic-text-container'>
              <div className='team-pic-text'>
                用户名: {d.user}
                <br/>年龄: {d.age}
                <br/>Tia身份: {d.identity}
                <br/>活跃在：{d.active}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team