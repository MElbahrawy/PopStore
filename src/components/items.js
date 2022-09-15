import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap";
import axios from 'axios'
import './items.css'

export default function Items() {

    let dataFromCartContext = useContext(CartContext)
    let { id } = useParams()

    useEffect(() => {
        getItem();
    }, [])

    let getItem = async () => {
        let itemResponse = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
        console.log(itemResponse);
        setItem(itemResponse.data)
    };
    let [Item, setItem] = useState([])

    return (
        <>
            <div className='item'>
                <img
                    id='itemimg'
                    src={Item.images ? `https://picsum.photos/640/480?random=${id}` : "https://via.placeholder.com/500/ddd/000?text=No Preview"}
                    alt='notfound'
                />
                <div id='itemdet'>
                    <p id='itemid'>ID #{id}</p>
                    <h2 id='itemtitle'>{Item.title ? Item.title : "Title"}</h2>
                    <hr />
                    <h3 id='itemdesc'><span>Description:-</span> <br /> {Item.description ? Item.description : "No Description Available"}</h3>
                    <hr />
                    <p id='itemprice'>Price ${Item.price ? Item.price : "00"} <span className='oldprice'>${Item.price ? Item.price * 2 : "00"}</span> </p>
                    <Button id='itembtn' variant={id ? "" : "disabled"} onClick={dataFromCartContext.increasecart}>
                        {id ? "Add to Cart" : "Out of Stock"}
                    </Button>
                </div>
            </div>
        </>
    )
}
