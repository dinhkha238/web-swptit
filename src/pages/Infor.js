import React from 'react'
import tnmd from '../asset/tnmd.jpg'
import '../styles/infor.css'
import { MemberList } from '../helper/memberlist'
import MemberItem from '../components/Member-item'
export default function Infor() {
  return (
    <div>
    <div className="name">
        <h1 className="welcome">Welcome to Street Workout PTIT</h1>
        <h4 className='title'>
        Câu lạc bộ thể thao ngoài trời 
        </h4>
        <div className="more btn btn-info">SEE MORE</div>
    </div>
    {/* <div className="noibat">
        Nổi bật
    </div>
    <video src={video} width="100%" height="500" controls>
     </video> */}
    <div className="tochuc noibat">
        Cơ cấu tổ chức
    </div>
    <div className="list-member">
        
        <div className="render-member">
            {MemberList.map((member,key) => {
                return (
                <MemberItem key={key} cs={member.cs} chucvu={member.chucvu} image={member.img} name={member.name} quoet={member.quoet}
                />
                );
            })}         
        </div>
    </div>
    


    </div>
  )
}
