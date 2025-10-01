import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../redux/category/categorySlice'
import './Category.css'
import { Link } from 'react-router-dom'

function Category() {
    const dispatch = useDispatch()
    const {category, loading, error} = useSelector((state) => state.category)

    useEffect(()=> {
        dispatch(getCategory())
    }, [dispatch])

    console.log(category)

  return (
    <div className='category-container'>
        {
            category.map((item)=> (
                <Link to={`/seafood/${item.strCategory}`} key={item.idCategory} className='category-list'>
                    <img src={item.strCategoryThumb} alt="" />
                    <h1>{item.strCategory}</h1>
                    <p>{item.strCategoryDescription}</p>
                </Link>
            ))
        }
    </div>
  )
}

export default Category