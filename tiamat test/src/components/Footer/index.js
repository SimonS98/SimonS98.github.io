import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer-over-container'>

          <div className='footer-border-container'>
              <div className='end-point'></div>
              <div className='header-line'></div>
              <div className='end-point'></div>
          </div>

          <div className='footer-container'>
            <div className='footer-wrapper'>
              <div className='product-container'>
                <div className='product-title'>产品</div>
                <div className='product-detail'>社区创作</div>
                <div className='product-detail'>小程序</div>
                <div className='product-detail'>网页</div>
              </div>
          
              <div className='info-container'>
                <div className='product-title'>信息</div>
                <div className='product-detail'>关于我们</div>
                <div className='product-detail'>联系我们</div>
                <div className='product-detail'>加入我们</div>
              </div>

              <div className='terms-container'> 
                <div className='terms-title'>用户使用协议</div>
                <div className='terms-details'>
                    © 2022 Tiamat.World
                    <br/>沪ICP备2021035530号-2</div>
              </div>
            </div>
            <div className='qrcode-over-container'>
              <div className='qrcode-container'>
                <div className='qr-title'>微信公众号</div>
                <img src={require('../../assets/qrcode.png')} className='qr-code' />
              </div>

              <div className='qrcode-container'>
                <div className='qr-title'>小红书</div>
                <img src={require('../../assets/qrcode.png')} className='qr-code' />
              </div>

              <div className='qrcode-container'>
                <div className='qr-title'>微博</div>
                <img src={require('../../assets/qrcode.png')} className='qr-code' />
              </div>
            </div>

          </div>
    </div>
  )
}

export default Footer