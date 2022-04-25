// react
import React from "react";
import swal from 'sweetalert';
// scss
import './Error.scss';

const Error = () => {
    swal("Hubo un problema inesperado", "warning");
}

export default Error;