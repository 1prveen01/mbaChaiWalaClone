import React from 'react'
import { motion} from 'framer-motion';


const Section = ({ h3, text, hasBtn = true, btnText, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }) => {
    

    const headingOptions = {
       
        initial:{
            y : "-100%",
            opacity: 0
        },
        whileInView : {
            y : 0,
            opacity:1
        }
        
    };

    const textOptions = {
        ...headingOptions , 
        transition: {
            delay: 0.3
        }
        
    };

    const buttonOptions  = {
        
        initial:{
            y : "100%",
            opacity: 0
        },
        whileInView : {
            y : 0,
            opacity:1
        },

        transition : {
            delay: 0.3,
            ease: "easeIn",
        }

    }

    const imgOptions = {
        initial: {
            Scale : 0.1,
            opacity: 0
        },
        whileInView :{
            Scale : 1,
            opacity: 1
        },
        
        transition : {
            delay : 0.3,
            ease : "easeIn"
        }
    }
    
    
    
    return (
        <section style={{
            backgroundColor: backgroundColor
        }} className='section'>
            <div>
                <motion.h3 style={{
                    color: headingColor
                    
                }}
                data-cursorPointer = {true}
                {...headingOptions}
                >
                    {h3},
                    
                    </motion.h3>
                <motion.p
                    style={{
                        color: textColor
                    }}
                    {...textOptions}
                >{text}</motion.p>
                {
                    hasBtn && <motion.button  data-cursorPointerMini = {true} {...buttonOptions} style={{
                        color: btnColor,
                        backgroundColor: btnBgColor
                    }}>{btnText} </motion.button>
                }

                <motion.div {...imgOptions}>
                    <img src={imgSrc} alt='imgSrc' style={{
                        width: imgSize
                    }
                    } />
                </motion.div>

            </div>
        </section>
    )
}

export default Section; 