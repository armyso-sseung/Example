import {age} from './data'


const CartItem = () => {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1 EA</p>
        </div>
    )
}

const index = () => {
    return (
        <>
            <h4 className="title">Cart</h4>
            <CartItem />
        </>
    )
}

export default index;