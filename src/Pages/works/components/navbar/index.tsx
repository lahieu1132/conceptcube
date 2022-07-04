import React, {useRef} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import useWindowSize from '../../../../hooks/useWindowSize'

import "./index.scss"

interface navbarItems {
  path?: string,
  className?: string,
  classNameActive?: string
}



const Navbar:React.FC<any> = ({navbar}) => {
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("tab");
  let navigate = useNavigate();
  const windowSize = useWindowSize()
  
  const onChange = (obj:any) => {
    obj.preventDefault();
    console.log(obj.target.value)
    if(obj.target.value == "ALL") {
      navigate(`/works`)
    } 
    else navigate(`/works?tab=${obj.target.value}`)
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
        <select onChange={onChange} className="works-navbar-mobile" >
          <option value="ALL">
            <Link to={`/works`}
              className="works-navbar-item"
              style={{
                color: isActive === "ALL" || isActive == null  ? "black" : "#b4b4b4",
                }}
            >
              All
            </Link>
          </option>
          {
          navbar.map((item:any,index:number)=> {
            return (
              <option value={item.path}>
                <Link to={`/works?tab=${item.path}`} key={index} 
                className={item.className}
                style={{
                  color: isActive === item.path  ? "black" : "#b4b4b4",
                }}
                >
                {item.path}
                </Link>
              </option>
            )
          })
        }
        </select>
      }
      
    </>
  )
}

export default Navbar