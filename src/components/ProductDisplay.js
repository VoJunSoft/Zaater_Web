import React from 'react'
import {handleDate} from '../scripts/Time'
import Carousel from 'react-bootstrap/Carousel'

export default function ProductDisplay({productInfo}) {

    return (
        // <div style={{
        //             width:'87%', 
        //             borderRadius:5, 
        //             overflow:'hidden', 
        //             display:'flex',
        //             flexDirection:'column', 
        //             justifyContent:'space-between',
        //             alignItems:'center',
        //             height:'90%',
        //             padding:10,
        //             backgroundColor:'#2C4770',
        //             overflow:'hidden'
        //         }}>
        //     <img 
        //         src={productInfo.photos[1] ? productInfo.photos[1] : productInfo.photos[0]} 
        //         style={{width:'100%',height:'70%', borderTopLeftRadius: 5, borderTopRightRadius: 5}} 
        //         alt={productInfo.product_name}/>
        //     <p>{handleDate(productInfo.date_listed.seconds)}</p>
        //     <p>{productInfo.product_name}</p>
        //     <p>{productInfo.description}</p>
        //     <p>{productInfo.seller.location.city}</p>
        //     <p>{productInfo.seller.location.currency}{productInfo.price}</p>
        //     <p>{productInfo.seller.phone}</p>
        // </div>
        <Carousel 
            slide={true} 
            style={{
                display:'flex',
                    height:'96%', 
                    width:'90%', 
                    justifyContent:'center', 
                    alignItems:'center'
                    }}>
            {productInfo.photos.map((photo,index)=>[
                <Carousel.Item interval={2000} className='carouselItem' key={index}>
                    <img
                        className="d-block w-100"
                        style={{borderRadius:10, padding: 5}}
                        src={photo}
                        alt={productInfo.product_name}
                    />
                    <Carousel.Caption>
                        <p className='desc' style={{borderRadius:5, opacity:.8, fontSize:18}}> 
                            {handleDate(productInfo.date_listed.seconds)} <br/>
                            {productInfo.product_name} <br/>
                            {productInfo.description} <br/>
                            {productInfo.seller.location.city} <br/>
                            {productInfo.seller.location.currency}{productInfo.price} <br/>
                            {productInfo.seller.phone} 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ])}
        </Carousel>
    )
}
