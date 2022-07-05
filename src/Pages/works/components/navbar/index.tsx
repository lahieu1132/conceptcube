import React, {useEffect, useRef, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import useWindowSize from '../../../../hooks/useWindowSize'

import "./index.scss"

interface navbarItems {
  path?: string,
  className?: string,
  classNameActive?: string
}



const Navbar:React.FC<any> = ({navbar}) => {
  const [selecteditem, setSelectedItem] = useState<string>("ALL")
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false)
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("tab");
  let navigate = useNavigate();
  const windowSize = useWindowSize()
  
  const contentRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!isOpenSelect) return;
    
        function listener(evt:any) {
          if (contentRef.current?.contains(evt.target)) return;
          setIsOpenSelect(false);
        }
    
        window.addEventListener("click", listener);
    
        return () => {
          window.removeEventListener("click", listener);
        };
      }, [isOpenSelect]);

  const onClickSelect = (item:string) => {
    setSelectedItem(item)
    setIsOpenSelect(false)
    if(item == "ALL") {
      navigate(`/works`)
    } 
    else navigate(`/works?tab=${item}`)
  }

  return (
    <>
      {
        windowSize.width > 1024 ? 
        <div className='works-navbar'>
        <Link to={`/works`}
        className="works-navbar-item"
                style={{
                  color: isActive === "ALL" || isActive == null  ? "black" : "#b4b4b4",
                }}
              >
                All
        </Link>
        {
          navbar.map((item:any,index:number)=> {
            return (

              <Link to={`/works?tab=${item.path}`} key={index} 
                className={item.className}
                style={{
                  color: isActive === item.path  ? "black" : "#b4b4b4",
                }}
              >
                {item.path}
              </Link>
            )
          })
        }
      </div>
      :
        <div className="works-navbar-mobile" ref={contentRef}>
          <div className="navbar-selected"
            onClick={() => setIsOpenSelect(!isOpenSelect)}
          >
            <p>{selecteditem}</p>
            {isOpenSelect ? <div className="arrow-up"></div> :
            <div className="arrow-down"></div>}
          </div>
          {isOpenSelect &&
            <div className="navbar-select-list "
              onClick={(e)=> e.stopPropagation()}
            >
            <div className={`navbar-select-item ${selecteditem === "ALL" && "active"}`}
                  onClick={()=>onClickSelect("ALL")}
            >
                ALL
            </div>
            {
              navbar.map((item:any, index:number)=> (
                <div className={`navbar-select-item ${selecteditem === item.path && "active"}`}
                  onClick={()=>onClickSelect(item.path)}
                >
                  {
                    item.path
                  }
                </div>
              ))
            }
          </div>}
        </div>
      }
      
    </>
  )
}

export default Navbar