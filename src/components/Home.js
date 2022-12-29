import React from 'react'
import Itemcard from './Itemcard'
import date from './data'

const Home = () => {
    return (
        <>
            <h1>wel come Home</h1>
            {/* <div className="container"> */}
            <section className='container'>
                <div className="row justify-content-center">
                    {date.cardData.map((item, index)=>{
                        return(
                            <Itemcard 
                            img={item.img} 
                            title={item.title} 
                            desc={item.text} 
                            item={item}
                            key={index} />
                        )
                        
                    })}
                    
                </div>
            </section>
            {/* </div> */}

        </>
    )
}

export default Home