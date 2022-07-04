import React, { FC, useEffect, useRef, useState } from 'react'
import "./index.scss"

const ModalItem:FC<any> = ({children,...props}) => {
    const {isOpen, close} = props
    const contentRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!isOpen) return;
    
        function listener(evt:any) {
          if (contentRef.current?.contains(evt.target)) return;
          close();
        }
    
        window.addEventListener("click", listener);
    
        return () => {
          window.removeEventListener("click", listener);
        };
      }, [isOpen]);
  return (
    <>
        { isOpen &&
            <div className='modal' ref={contentRef}
                onClick={close}
            >
                <div className="modal-container"
                    onClick={(e)=> {
                        e.stopPropagation()
                    }}
                >
                    <div className="modal-scroll">
                    {children}
                    </div>
                </div>
            </div>      
        }
    </>
  )
}

export default ModalItem