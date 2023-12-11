

import logo from '../Componet/images/logo.svg'
import bell from '../Componet/images/bell.svg'
import bag from '../Componet/images/bag.svg'
import chart from '../Componet/images/chart.svg'
import icon1 from '../Componet/images/icon1.svg'
import logout from '../Componet/images/logout.svg'
import setting from '../Componet/images/setting.svg'
import user from '../Componet/images/userimg.svg'
import { SideBarToggleData } from '../StateManage/GlobleState'
import './sidebarlayout.css'


const SidebarLayout = ({children}) => {

    let SideBarToggle = SideBarToggleData.use()
    const toggleFun =()=>{
        SideBarToggleData.set(o=>!o)
    }
    return (
        <div className={`dashboardbody ${! SideBarToggle && "smallmenu"}`}>
            <div className="sidebar">
                <div className='logo'>
                    <a href='#' onClick={toggleFun}>
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <ul className='menubar'>
                    <li>
                        <a href='#'>
                            <img src={bell} alt='' /> <span> AI Insights</span>
                        </a>
                    </li>
                    <li className='active'>
                        <a href='#'>
                            <img src={icon1} alt='' /> <span> Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={bag} alt='' /> <span> Transactions</span>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={chart} alt='' /> <span> Reconciliation</span>
                        </a>
                    </li>
                </ul>

                <div className='menubottom'>
                    <ul>
                        <li> <a href='#'> <img src={setting} alt='img' /> <span>Settings </span> </a> </li>
                        <li> <a href='#'> <img src={logout} alt='img' /> <span>Logout</span> </a> </li>
                    </ul>
                    <div className='userdetail'>
                        <figure>
                            <img src={user} alt='img' />
                        </figure>
                        <div className='userinfo'>
                            <h2> Samder</h2>
                            <a href='mailto:samdersingh@gmail.com'>samdersingh@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default SidebarLayout
