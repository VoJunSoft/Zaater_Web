import React, {useState, useEffect} from 'react'
import  '../styles/products.css'
import db from '../firebase/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import FlatList from 'flatlist-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {handleDate} from '../scripts/Time'

export default function Products(props) {
    //const [userInfo, setInfoUser] = useState(props.route.params)
    // userInfo state: {id, name, picture, email, phone, rule, location:{country,code,flag,currency,city}}
    //products fields: {productId, seller:{userInfo}, product_name, photos:[], description, category, price, date_listed}
    const [isLoading, setIsLoading] = useState(true)
    const [ProductsList, setProductsList] = useState([])

    useEffect(() => {
        //fill up products
        onSnapshot(collection(db, 'products'), (snapShot) => {
            setProductsList([])
            snapShot.docs.map(docs => 
                setProductsList((prestate)=> [{...docs.data(), productId:docs.id}, ...prestate]))
        
            setIsLoading(false)
            })
    },[])

    const popover = (product) => (
        <Popover className='popUp' style={{width:270, backgroundColor:'#2C4770', borderRadius:5, overflow:'hidden'}}>
             <img src={product.photos[1]} style={{width:270,height:270}} alt={product.product_name}/>
            <p className='title'>{product.product_name}</p>
            <p>{handleDate(product.date_listed.seconds)}</p>
            <p>{product.description}</p>
            <p>{product.seller.location.city}</p>
            <p>{product.seller.location.currency}{product.price}</p>
            <p>{product.seller.phone}</p>
        </Popover>
      );

    const ProductCard = ({product}) => {
        return (
            <OverlayTrigger trigger='hover' placement='auto' overlay={popover(product)}>
                <div className='product'>
                    <img src={product.photos[0]} style={{width:200,height:200}} alt={product.product_name}/>
                    <p className='title' style={{textAlign:'center'}}>{product.product_name}</p>
                </div>
            </OverlayTrigger>
        );
      }
      
    return (
        <div>
            <div className='products'>
                {isLoading ?
                    <progress style={{marginLeft:'40%', marginTop: 50}}/>
                    :
                    <FlatList
                        list={ProductsList}
                        renderWhenEmpty={() => <div style={{ color:'#ffffff'}}>
                                                <p className='title'>
                                                    لا توجد منتجات متاحة
                                                </p>
                                                </div>}
                        display={{
                            grid: true,
                            minColumnWidth: "100px",
                            gridGap:'32px',
                          }}
                        sortBy={["date_listed", {key: "date_listed.seconds", descending: true}]}
                        //groupBy={person => person.info.age > 18 ? 'Over 18' : 'Under 18'}
                        paginationLoadingIndicatorPosition="center"
                        renderItem={(product, index) =>[
                            <ProductCard product={product} key={index}/>
                        ]}
                        search={{
                            by:'category',
                            term: props.categoryValue === 'الكل' ? '' : props.categoryValue
                        }}
                        />
                }
            </div>
        </div>
    )
}
