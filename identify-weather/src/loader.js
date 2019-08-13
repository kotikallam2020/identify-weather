import React from 'react';

const Loader = (props)=> {
    return (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message || 'Loading'}</div>
            </div>
        </div>
    )
}
Loader.defaultProps = {
    messgae: 'Loading...'
}
export default Loader;