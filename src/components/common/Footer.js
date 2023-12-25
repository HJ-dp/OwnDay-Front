import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainter>
            <div className='footer-containter'>
                <div className='footer-links'>
                    <h1>서비스</h1>

                </div>
                <div className='footer-links'>
                    <h1>문의</h1>
                    <span>ownday@ownday.com</span>
                </div>
                <span>Copyright 2023. Own Day. all rights reserved.</span>
            </div>
        </FooterContainter>
    );
}

export default Footer;


const FooterContainter = styled.main`
  width:100%;
  background-color: #536dfe;
  margin: 0 auto;

  .footer-containter{
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:0 auto;
    max-width:1024px;
    color : black;
    
}
@media (max-width:1200px) {
  padding: 0 5vw;
  
}

  `;