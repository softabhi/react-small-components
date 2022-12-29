import React from 'react'
import { useCart } from 'react-use-cart'
const CartList = () => {
    const {
        items,
        isEmpty,
        updateItemQuantity,
        totalUniqueItems,
        totalItems,
        cartTotal,
        removeItem,
        emptyCart

    } = useCart();

    if (isEmpty) return <h2 className='text-center mt-5 h-5'>Your cart is empty</h2>
    return (
        <>
            <section className='py-4 container'>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h5>Cart ({totalUniqueItems}) Total-item:({totalItems})</h5>
                        <table className='table table-light table-hover m-0'>
                            <tbody>
                                {items.map((items, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><img src={items.img} style={{ height: "6rem" }} alt="" /></td>
                                            <td>{items.title}</td>
                                            <td>{items.text}</td>
                                            <td>Quitity: ({items.quantity})</td>
                                            <td>
                                                <button className='btn btn-info ms-2'
                                                    onClick={() => updateItemQuantity(items.id, items.quantity - 1)}
                                                >-</button>
                                                <button className='btn btn-info ms-2'
                                                    onClick={() => updateItemQuantity(items.id, items.quantity + 1)}
                                                >+</button>
                                                <button className='btn btn-danger ms-2'
                                                    onClick={() => removeItem(items.id)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>

                    <div className="col-auto ms-auto">
                        <h5>Total Amount: {cartTotal}</h5>
                    </div>
                    <div className="col-auto">

                        <button className='btn btn-success' onClick={() => emptyCart()}>Clear Cart</button>
                        <button className='btn btn-success'>Buy Now</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CartList