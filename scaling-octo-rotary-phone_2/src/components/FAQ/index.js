import {useState} from 'react';
import Accordion from './Accordion';
import './faq.css';
import '../Description/description.css';

const Faq = () => {

  const [open, setOpen] = useState(null)

  const handleOpen = (x) => {
    if (x == open){
      setOpen(null)
    }
    else {
      setOpen(x)
    }
  }

  return (
    <div className='faq-container'>
      
      <img className='linebreak' src={require('../../assets/linebreak.png')} />

      <p className='desc-text'><span className='white-text'>加入我们，一同探索想象力的边界</span></p>

      <img className='linebreak' src={require('../../assets/linebreak.png')} />

      <div className='accordion'>

      {/* <div className='accordion-top-border'></div> */}

      <Accordion id={1} open={open} handleOpen={handleOpen} title='Tiamat的产品都有什么呀?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
      
      <Accordion id={2} open={open} handleOpen={handleOpen} title='Tiamat的品牌理念是什么呀?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
      
      <Accordion id={3} open={open} handleOpen={handleOpen} title='能多讲讲些Tiamat的自研算法吗?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
        
      <Accordion id={4} open={open} handleOpen={handleOpen} title='如何看待创作者与AI的关系呢?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
        
      <Accordion id={5} open={open} handleOpen={handleOpen} title='如何联系商业合作呢?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
        
      <Accordion id={6} open={open} handleOpen={handleOpen} title='如何加入团队呢?' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
        
      </div>
    </div>
  )
}

export default Faq