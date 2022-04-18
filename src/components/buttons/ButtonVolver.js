import React from 'react';
import { useNavigate } from 'react-router-dom';
// icono volver
import CloseIcon from '@material-ui/icons/Close';

// scss
import '../../scss/buttons/ButtonVolver.scss'

function ButtonVolver() {
    const Navigate = useNavigate();

    const handleNavigate = () => {
        Navigate('/')
    }

    return (
        <button className="buttonVolver" onClick={handleNavigate}>
            <CloseIcon
                className="iconoVolver"
            />
        </button>
    )

}

export default ButtonVolver;