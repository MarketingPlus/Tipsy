import React from 'react';

function ItemOption(props) {
    return (
            <option id={props.id}>{props.name}</option>
    )
}

export default ItemOption;