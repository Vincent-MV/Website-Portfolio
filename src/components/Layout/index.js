import Sidebar from '../Sidebar'; 
import { Outlet } from 'react-router-dom';
import './index.scss' 

const Layout = () => {
    return (
    <div className="App">
        <Sidebar />
        <div className='page'>
            
        </div>

        <Outlet />

        <span className='tags bottom-tags'>
 
        <br />

        <span className='bottom-tag-html'></span>
        </span>
    </div>
   );
};

export default Layout;