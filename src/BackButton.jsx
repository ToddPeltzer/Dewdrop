import React from 'react';
import { useHistory } from 'react-router-dom'

function BackButton(props) {

    let history = useHistory()
    
    return (
        <div>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    );
}

export default BackButton;