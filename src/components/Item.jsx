import React, { useState } from 'react'

function Item(props) {
    const [isChecked, setCheck] = useState(false)

    function handleOnClick() {
        props.deleteItem(props.item.id)
    }

    return (
        <div className="item-container">
            <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
            <li
                className={`item ${isChecked ? "item-checked" : ""}`}
                key={props.item.id}
            >
                {props.item.text}
            </li>
            <button className="item-cleat-btn" onClick={handleOnClick}>x</button>
        </div>
    )
}


const style = {
    listStyle: 'none'
}

export default Item