import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
 
      <div className='header-container'>

        <div className='header-title-container'>
          <Link to='/'>
            <div className='header-title'>
              TIAMAT LOGO
            </div>
          </Link>

          <div className='header-logo-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='logo-middle-circle'></div>
              <div className='end-point'></div>
          </div>

        </div>

        <div className='header-nav-container'>

          <div>
          <Link to='/community'>
            <div className='header-nav-option'>
              社区创作
            </div>
          </Link>
            <div className='header-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='middle-circle'></div>
              <div className='end-point'></div>
            </div> 

          </div>

          <div>
            <div className='header-nav-option'>
              关于我们
            </div>

            <div className='header-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='middle-circle'></div>
              <div className='end-point'></div>
            </div> 
            
          </div>

          <div>
            <div className='header-nav-option'>
              联系我们
            </div>

            <div className='header-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='middle-circle'></div>
              <div className='end-point'></div>
            </div> 
            
          </div>

          <div>
            <div className='header-nav-option'>
              加入我们
            </div>

            <div className='header-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='middle-circle'></div>
              <div className='end-point'></div>
            </div> 
            
          </div>

        </div>

      </div>
  )
}

export default Header