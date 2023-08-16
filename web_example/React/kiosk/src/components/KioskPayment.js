const KioskPayment = ({itemList}) => {
    return (
        <div className="KioskPayment">
            {itemList.map(item => (
                <span>{item.title}</span>
            ))}
        </div>
    )
}


export default KioskPayment;