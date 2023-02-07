import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from './data.js'

export default function Person() {
    
    const { firstName } = useParams()
    const product = data.find((product) => product.firstName === firstName)

    return (
        <div className='viewed-contact'>
            <h1>{ firstName } { product.lastName }</h1>
            <img src={ product.img } className='viewed-contact-img' alt="name" />
            <h5>{ product.phone }</h5>
        </div>
    )
}