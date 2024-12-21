import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className='container' style={{ height: '74px'}}>
            {props.Alert && <div className={`alert alert-${props.Alert.typ} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.Alert.typ)}!!&nbsp;</strong>{props.Alert.msg}
            </div>}
        </div>
    )
}
