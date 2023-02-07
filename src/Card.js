import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    const [isIce, setIsIce] = useState(false)

    function flipIce () {
        setIsIce(!isIce)
    }

    useEffect(() => {
        console.log("Is ICE changed")  
    }, [isIce])

    return (
        <>
            <div className="contact">
                <div className="ice" onClick={flipIce}>{ isIce ? <img src='https://cdn-icons-png.flaticon.com/512/3393/3393714.png' alt='ice' className='ice-phone'/> : '' }</div>

                { isIce ? <button className='ice-button' onClick={flipIce}><p>remove I.C.E</p></button> : <button className='ice-button' onClick={flipIce}><p>make I.C.E</p></button>}

                <h2>{props.firstName} {props.lastName}</h2>
                <Link to={`/person/${props.firstName}`} className='link'>
                    <img src={props.src} alt="contact" />
                </Link>
                <p>{props.age}</p>
                <h4>{props.phone}</h4>
                { props.isFavourite ? <img src='http://simpleicon.com/wp-content/uploads/star.png' className='star-img' alt='star'/> : <img src='https://cdn-icons-png.flaticon.com/512/2099/2099045.png' className='star-img' alt='star' />}
            </div>
        </>
    )
}