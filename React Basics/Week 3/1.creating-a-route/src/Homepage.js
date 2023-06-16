import {Link, Route, Routes} from 'react-router-dom'
import Contact from './Contact'
export default function Homepage(props){
    return (
        <div>
            <h1>Homepage</h1>
            <Link to="/contact" className='nav-item'>Contact</Link>
        </div>
    )
}