import React from 'react';
import './description.css';
import p4 from '../../assets/fall-gallery/Frame 548.png';
import p3 from '../../assets/fall-gallery/Frame 494.png';
import p5 from '../../assets/fall-gallery/Frame 551.png';
import p6 from '../../assets/fall-gallery/Frame 554.png';
import p7 from '../../assets/fall-gallery/Frame 555.png';
import Picture from '../FallGallery/picture';

const details = [{
  user: '123',
  title: "测试标题",
  url: p5,
}, {
  user: '222',
  title: "测试标题2",
  url: p6,
}, {
  user: '333',
  title: "测试标题3",
  url: p3,
}, ]

const Description = () => {
  return (
    <div className='desc-container'>
        <img className='linebreak' src={require('../../assets/linebreak.png')} />

        <p className='desc-text'>我们始终坚持的理念：
        <br/><span className='white-text'>未来是可以想象的，也是可以被发明的；
        <br/>释放想象力，解放生产力，</span>
        <br/>这才是技术带来的真正变革。</p>

        <img className='linebreak' src={require('../../assets/linebreak.png')} />

        <div className='full-linebreak1'></div>

        <div className='details-container'>
            <p className='desc-details1'>
            Tiamat 人工智能艺术项目专注于强大的多模态技术的落地应用，致力于结合人类灵感创造力与科技的碰撞，
            <br/>拓展算法艺术与人工智能创造力在商业环境中的应用边界，探索前沿 AIGC 领域的可能性。</p>
            <p className='desc-details2'>
            团队由上海科技大学孵化，包括麻省理工、杜克大学、伦敦艺术大学、伦敦中央圣马丁学院等海外知名高校成员组成。
            </p>
            <p className='desc-details3'>
            目前, Tiamat 提供包括自然语言驱动生成艺术工具在内的 AI 创作平台与全国顶尖的 AI 创作者社区，链接全球最新
            <br/>技术社区动态，集结大量先锋潮流艺术创作者，多模态技术开发人员，真正将 AI 赋能当于下时代的无限可能当中。
            </p>
        </div>
        <div className='full-linebreak2'></div>

        <img className='linebreak2' src={require('../../assets/linebreak.png')} />

        <p className='desc-text'><span className='white-text'>我们愿与所有创者们一起，
        <br/>重创意价值，激发创作本能。</span></p>

        <img className='linebreak2' src={require('../../assets/linebreak.png')} />
        <img className='carousel1-img' src={require('../../assets/linshi.png')} />
    </div>
  )
}

export default Description