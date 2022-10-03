import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../styles/subScreen.css'

export default function ZaaterProjectCarousel() {
    const [projectSnaps, setProjectsSnaps] = useState([
        {
            img:require("../assets/1.png"),
            title:"",
            caption:'',
        },
        {
            img:require("../assets/2.png"),
            title:"",
            caption:'',
        },
        {
            img:require("../assets/3.png"),
            title:"",
            caption:'',
        },
        {
            img:require("../assets/4.png"),
            title:"",
            caption:'',
        },
        {
            img:require("../assets/5.png"),
            title:"",
            caption:'',
        },
        {
            img:require("../assets/6.png"),
            title:"",
            caption:'',
        },
    ])
    return (
        <Carousel slide={true} className='carousel'>
            {projectSnaps.map((project,index)=>[
                <Carousel.Item interval={2000} className='carouselItem' key={index}>
                    <img
                        className="d-block w-100"
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
