import React from 'react';

export const Header = (props) => {
    return (
    <div>
        <h3>
            Expense Recorder of {props.name}
        </h3>
    </div>
    )
}