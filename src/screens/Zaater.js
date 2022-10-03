import React, {useState} from 'react'
import  '../styles/zaater.css'
import Products from '../components/Products'
import Categories from '../components/Categories'
import ZaaterProjectCarousel from '../components/ZaaterProjectCarousel'

export default function Zaater() {
    const [category, setCategory] = useState('الكل')

    // const [tab, setTab] = useState('')
    // const _renderLeftSlot = () => {

    // }

    return (
        <div className="Zaater">
            <div className='Header'>
                <div className='logo'>
                    <span className='title'> جاري التحديث </span>
                    <img src={require('../assets/Zaatar-1.png')} style={{height:70, width:70}} />
                </div>
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
