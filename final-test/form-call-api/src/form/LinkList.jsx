import React from 'react'
import LinkIteam from './LinkIteam';

const LinkList = (props) => {
    const {data}=props;
  return (
    <div className="">
        {data.map((item,index)=>{
            return <LinkIteam links={item} key={index}/>
        })}
    </div>
  )
}

export default LinkList