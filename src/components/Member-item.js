import React from 'react'
import '../styles/infor.css'
export default function MemberItem( {cs,chucvu,image, name, quoet}) {
  return (
    <div className='memberItem'>
        <div className='avatar' id={cs=='0' ? "open" : "close"}>
            <img src={image} alt="" className='img1'/>
        </div>
        <div className='info'>
            <h1>
                <strong>{chucvu}</strong>
            </h1>
            <h2>- {name} -</h2>
            <p><i>" {quoet} "</i></p>
        </div>
        <div className='avatar' id={cs=='1' ? "open" : "close"}>
            <img src={image} alt="" className='img1'/>
        </div>
    </div>
  )
}
