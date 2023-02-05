import React, {useState} from 'react'
import  '../styles/zaater.css'
import Products from '../components/Products'
import Categories from '../components/Categories'
import ZaaterProjectCarousel from '../components/ZaaterProjectCarousel'
import { MenuButtonWideFill} from 'react-bootstrap-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import ProductDisplay from '../components/ProductDisplay'

export default function Zaater() {
    //initialoze category here and pass it to categories to set it's value and pass the value to products
    const [category, setCategory] = useState('الكل')
    //initiate productInfo state, set it from zaater and pass it to zaater left post
    const [productInfo, setProductInfo] = useState(null)
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

    const HeaderMenu = () => {
        return(
            <div style={{
                width:'90%',
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <a className='headerItem' href="https://play.google.com/store/apps/details?id=com.junglesoft.zaater" target="_blank"> تحميل لأجهزة الاندرويد </a>
                <a className='headerItem' href="https://apps.apple.com/il/app/zaater/id1661901014" target="_blank"> تحميل من متجر آبل </a>
            </div>
        )
    }

    const [leftPostScreenName, setLeftPostScreenName] = useState('zaater')
    const renderLeftPostComponent = () => {
        // return(
            switch(leftPostScreenName){
                case 'zaater':
                    return <ZaaterProjectCarousel />
                case 'productCard':
                    return <ProductDisplay productInfo={productInfo}/>
                case 'devOp':
                    return <ZaaterProjectCarousel />
                default:
                    return <ZaaterProjectCarousel />

            }
            // !productInfo ? <ZaaterProjectCarousel /> : <ProductDisplay productInfo={productInfo}/>
        // )
    }

    return (
        <div className="Zaater">
            <div className='Header'>
                <HeaderMenu />
                <div style={{paddingRight:10}}>
                    <img 
                        src={require('../assets/Zaatar-2.png')} 
                        style={{height:90, width:90, cursor:'pointer'}} 
                        onClick={()=> setLeftPostScreenName('zaater')}
                        />
                </div> 
            </div>
           
            <div className='Body'>
               <div className='Left'>
                   {renderLeftPostComponent()}
               </div>
               <div className='Right'>
                    <Categories categoryValue={category} setCategoryValue={setCategory}/>
                    <Products categoryValue={category} setProductInfo={setProductInfo} setLeftPostScreenName={setLeftPostScreenName}/>
               </div>
            </div>
        </div>
    )
}
