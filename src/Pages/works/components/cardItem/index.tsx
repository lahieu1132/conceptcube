import React, { FC, useState } from 'react'
import ModalItem from '../modalItem' 
import "./index.scss"


interface DataItem {
    id: number,
    img: string,
    desc: string,
    partners: string,
    video: string
}

const  CardItem:FC<any> = ({item, index}) => {
    // console.log(item)
    const [isOpen, setOpen] = useState(false);
  return (
    <>
        <div className='works-item'
            onClick={(e)=>{
                e.stopPropagation()
                setOpen(true)
            }}
            

        >
            <div className='works-item-bg'></div>
            <div className='works-item-img'
                style={{
                    opacity:1,
                    transform: 'scale(1, 1) translateZ(0px)',
                    transitionDelay: "1s",
                    transition: `opacity ${index*200}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform ${index*133}ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
                }}
            >
                <img src={item.img} alt="" />
            </div>
            <div className='works-item-desc'>
                <p>
                    {item.desc}
                </p>
                <h3>
                    {
                    item.partners
                    }
                </h3>
            </div>
        </div>  
        <ModalItem isOpen={isOpen} close={()=>setOpen(false)}>
            <div className='modal-item-video'>
                <iframe src={item.video} frameBorder={0}></iframe>
            </div>
            <div className='works-item-desc'>
                <p>
                    {item.desc}
                </p>
                <h3>
                    {
                    item.partners
                    }
                </h3>
            </div>
            <div className='modal-item-btn'>
                <a href="/" >
                    Contact us
                </a>
            </div>
        </ModalItem>
    </>
  )
}

export default CardItem