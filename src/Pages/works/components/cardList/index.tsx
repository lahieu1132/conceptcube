import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../hooks';
import { getDataAsync } from '../../../../redux/worksSlice';
import CardItem from '../cardItem';
import { useSearchParams  } from 'react-router-dom'

import "./index.scss"

interface DataItem {
  id: number,
  img: string,
  desc: string,
  partners: string,
  video: string
}

function CardList() {

  const dispatch = useDispatch<any>();
  const bookList : any = useAppSelector((state) => state.datas).datas
  let [searchParams] = useSearchParams();


  useEffect(() => {
		dispatch(getDataAsync());
	}, [dispatch]);

  const itemsSplit =searchParams.get("tab")  == null ? bookList : bookList?.filter((item:any)=>item.desc.includes(searchParams.get("tab")))

  return (
    <div className="scroll">
      <div className='works-list'>  
        {
          itemsSplit?.map((item:DataItem, index:number): any => (
            <CardItem item={item} key={index} index={index} />
          ))
        }
      </div>
    </div>
  )
}

export default CardList