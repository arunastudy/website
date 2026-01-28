import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFood } from '../redux/seafood/seafoodSlice'
import { useParams } from 'react-router-dom'

function Seafood() {
  const dispatch = useDispatch()
  const {title} = useParams()
    const {food, loading, error} = useSelector((state) => state.food)

    useEffect(()=> {
        dispatch(getFood(title))
    }, [dispatch])

    console.log(food)

  return (
    <div> 
    </div>
  )
}

export default Seafood