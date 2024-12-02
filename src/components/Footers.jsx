import React from 'react'

const Footers = () => {

    const footerLinks = (element) =>{
        const allFooterLinks = document.querySelectorAll(".footerLinks")
        switch (element) {
            case 0:
                allFooterLinks.forEach((item, index) => index===0 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                
                break;
                case 1:
                allFooterLinks.forEach((item, index) => index===1 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                
                break;
                case 2:
                allFooterLinks.forEach((item, index) => index===2? item.style.opacity = 1 : item.style.opacity = 0.2);
                
                break;
                case 3:
                allFooterLinks.forEach((item, index) => index===3 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                
                break;
                case 4:
                allFooterLinks.forEach((item, index) => index===4? item.style.opacity = 1 : item.style.opacity = 0.2);
                
                break;


                case 5:
                allFooterLinks.forEach((item, index) => index===5 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;

        
            default:
                allFooterLinks.forEach((item) =>item.style.opacity = 1 )
                break;
        }

    }


    const linksBackToNormal = () => {
        const allFooterLInks = document.querySelectorAll(".footerLinks");
        allFooterLInks.forEach((item) => item.style.opacity=1)
    }


  return (
<>
<footer>

    <h1>Let's</h1>
    <br />
    <h1>#ConnectOnCutting?</h1>


    <aside onMouseLeave={linksBackToNormal}>
        <a href="/" className="footerLinks" onMouseOver={()=>{
            footerLinks(0)
        }}  data-cursorPointerMini={true}>Home</a>
        <a href="/story" className="footerLinks" onMouseOver={()=>{
            footerLinks(1)
        }} data-cursorPointerMini={true}>Story</a>
        <a href="/media" className="footerLinks" onMouseOver={()=>{
            footerLinks(2)
        }}data-cursorPointerMini={true}>Media</a>
        <a href="/franchise" className="footerLinks" onMouseOver={()=>{
            footerLinks(3)
        }}data-cursorPointer={true}>Franchise</a>
        <a href="/event" className="footerLinks"onMouseOver={()=>{
            footerLinks(4)
        }}data-cursorPointerMini={true}>Event</a>
        <a href="/chaiWalaCares" className="footerLinks" onMouseOver={()=>{
            footerLinks(5)
        }}data-cursorPointerMini={true}>Chai Wala Cares</a>
    </aside>

    <div>
        <h5>Email</h5>
        <a href="mailto : info@mbachaiwala.com">Info@mbaichaiwala.com</a>
        <a href="mailto : franchise@mbachaiwala.com">Franchise@mbaichaiwala.com</a>

    </div>

    <div>
        <h5>Phone</h5>
        <a href="tele : +7733344434">+7733344434</a>
    </div>

    <p>© COPYRIGHT 2024 MBA CHAIWALA. MADE BY</p>

    </footer>

    <div className='footer'></div>
    
    
    </>  )
}

export default Footers