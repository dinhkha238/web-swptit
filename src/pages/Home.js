import '../styles/home.css'
import {Link} from 'react-router-dom'
import img from '../asset/ava.jpg'
export default function Home() {
  return (
    <div className="Home">
        <div className="image">
          <div  className='img'>
              <h1>Street Workout PTIT</h1>
              <Link to='/member' className="btn btn-success">Đăng Ký Thành Viên</Link>
          </div>
          
        </div>
    </div>
  )
}
