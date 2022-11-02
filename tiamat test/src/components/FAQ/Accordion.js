import {useState} from 'react';
import './faq.css';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Accordion = (props) => {

    // const [open, setOpen] = useState(false)

    // const openAnimation = useSpring({
    //     from: { opacity: "0", maxHeight: "70px" },
    //     to: { opacity: "1", maxHeight: open ? "200px" : "70px" },
    //     config: { duration: "300" }
    //   });

    const returnFade = () => {
      return 'accordion-item-close'
    }

    const handleChange = () => {
      if (props.open === props.id){
        return 'accordion-item-open' 
      } 
      else {
        setInterval(returnFade, 800)
        return 'accordion-item-close'
      }       
    }

  return (
        <div className='accordion-container'>

          <div className='faq-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='end-point'></div>
          </div>

          <div className={handleChange()}>

            <div className='accordion-header' onClick={()=>{props.handleOpen(props.id)}}>
              
              <h4>{props.title}</h4>
              
              <div className='icon-container'>
                {props.open === props.id ? 
                <AiOutlineMinus size={36} style={{ fill: '#8e9191' }}/>
                :
                <AiOutlinePlus size={36} style={{ fill: '#8e9191' }}/> 
                }
              </div>
            </div>
            
            <p className={props.open === props.id ? 'accordion-content toggleIn' : 'accordion-content toggleOut'}>{props.content}</p>
          
          </div>

          <div className='faq-border-container2'>
                <div className='end-point'></div>
                <div className='header-line'></div>
                <div className='end-point'></div>
          </div>

        </div>
  )
}

export default Accordion