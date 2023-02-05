import React from 'react'
import '../styles/categories.css'

export default function Categories(props) {
    const CategoriesJSON = require('../scripts/CategoriesCountries.json')
    return(
        <div className='Categories'>
            {
            CategoriesJSON.SearchCategories.map((item, index) =>[
                <div    className='Category' 
                        key={index} 
                        style={{
                            backgroundColor:props.categoryValue === item ? '#2C4770' : null
                        }}
                        onClick={()=>props.setCategoryValue(item)}>
                    <p  className='subTitleCategory'
                        style={{
                            color:props.categoryValue === item ? '#fac300' : '#fff'
                        }} >
                        {item}
                    </p>
                </div>
                ]) 
            }
        </div>
    )
}
