import React, { useState } from 'react'
// import { ModalTitle } from 'react-bootstrap'/
import card from './data.jsx'
const Card = () => {
    const [filter,setFilter] = useState('');
     
    const searchText = (event)=>{
        setFilter(event.target.value);
    }

    let dataSearch = card.cardData.filter(item =>{
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            ) 
    })
    // console.log(filter)
    return (
        <>
            <div className="container ty-4">
                <div className="row justify-content-center">

                    <div className="col-12 mb-5">
                        <div className="col-4">
                            <label htmlFor="" className='form-lable h5'>Search</label>
                            {/* <h3>Search</h3> */}
                            <input type="text"
                             className='form-control' 
                             value={filter}
                             onChange={searchText.bind(this)}
                             /> 
                        </div>
                    </div>
                 
                 {dataSearch.map((item, index) =>{
                     return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                        <div className="card overflow-hidden h-100 shodow">
                            <img src={item.img} alt="" className='img-fluid h-50' />
                            <div className="card-body">
                                <h5 className='card-title'>{item.title}</h5>
                                <p className='card-text'>{item.text}</p>
                            </div>
                        </div>
                    </div>
                     )
                 })}
                

                    
                </div>
            </div>
        </>
    )
}

export default Card