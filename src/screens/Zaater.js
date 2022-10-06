import React, {useState} from 'react'
import  '../styles/zaater.css'
import Products from '../components/Products'
import Categories from '../components/Categories'
import ZaaterProjectCarousel from '../components/ZaaterProjectCarousel'
import { MenuButtonWideFill} from 'react-bootstrap-icons'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Zaater() {
    const [category, setCategory] = useState('الكل')
    // const [tab, setTab] = useState('')
    // const _renderLeftSlot = () => {
    // }

    const DropDownMenu = () =>{
        return(
            <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'#363a47fa', borderWidth:0}}  id="dropdown-basic">   
                    <MenuButtonWideFill 
                        color="#fac300" 
                        size={39} 
                        />
                </Dropdown.Toggle>

                <Dropdown.Menu  variant="dark">
                    <Dropdown.Item href="https://play.google.com/store/apps/details?id=com.junglesoft.zaater" target="_blank">Android App</Dropdown.Item>
                    <Dropdown.Item href="#" style={{opacity:.5}}>IOS : قريبا</Dropdown.Item>
                    <Dropdown.Item href="https://www.facebook.com/juso.zaater" target="_blank">Facebook</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    return (
        <div className="Zaater">
            <div className='Header'>
                <DropDownMenu />
                <img src={require('../assets/Zaatar-2.png')} style={{height:70, width:70}} /> 
            </div>
            <div className='Categories'>
                <Categories categoryValue={category} setCategoryValue={setCategory}/>
            </div>
            <div className='Body'>
               <div className='Left'>
                   <ZaaterProjectCarousel />
               </div>
               <div className='Right'>
                   <Products categoryValue={category} />
               </div>
            </div>
        </div>
    )
}
