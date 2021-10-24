import React from "react";

const ItemsList = ({items}) => {
    return (
        <div>
            <center><h1>Items List</h1></center>
            {items.map((item) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{item.count}</h6>
                        <p class="card-text">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};
export default ItemsList;