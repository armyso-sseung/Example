import Image from "next/image";


const index = () => {
    const product = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <>
            <h4 className={"title"}>상품목록</h4>
            {product.map((item, idx) => (
                <div key={idx} className="food">
                    <img src={`/images/food${idx}.png`} alt={item} className={"food-img"} />
                    <h4>{item} $40</h4>
                </div>
            ))}
        </>
    )
}


export default index;