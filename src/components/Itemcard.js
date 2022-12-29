import React from 'react'
import { useCart } from 'react-use-cart'
const Itemcard = (props) => {
    const { addItem } = useCart();
    console.log(addItem);
    return (
        
        <>
        
            <div className="col-11 col-md-6 col-lg-3">
                <div className="card overflow-hidden shadow" style={{ width: "15rem" }}>
                    <img src={props.img} className="card-img-top img-fluid" style={{height:"10rem"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <button  className="btn btn-primary"
                          onClick={()=> addItem(props.item)}
                        >Add cart</button>
                    </div>
                </div>
           
        </div>
           
        </>
    )
}

export default Itemcard