import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/subScreen.css'

export default function ZaaterProjectCarousel() {
    const projectSnaps = [
        {
            img:require("../assets/Z.png"),
            title:"",
            caption:'أنشئ صفحتك الخاصة',
        },
        {
            img:require("../assets/Z2.png"),
            title:"",
            caption:'قم بتحميل ما تريد بيعه',
        },
        {
            img:require("../assets/Z3.png"),
            title:"",
            caption:'وسيتم عرضه على الجميع',
        }
    ]

    return (
        <Carousel slide={true} style={{
            display:'flex',
                height:'96%', 
                width:'90%', 
                justifyContent:'center', 
                alignItems:'center'
                }}>
            {projectSnaps.map((project,index)=>[
                <Carousel.Item interval={2000} className='carouselItem' key={index}>
                    <img
                        className="d-block w-100"
                        style={{borderRadius:10, padding: 5}}
                        src={project.img}
                        alt={project.title}
                    />
                    <Carousel.Caption>
                        <p className='desc'>{project.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ])}
      </Carousel>
    )
}
