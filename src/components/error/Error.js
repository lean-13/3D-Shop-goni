// react
import React from "react";
import swal from 'sweetalert';
// scss
import './Error.scss';

const Error = () => {
    swal({
        title: "Hubo un problema inesperado",
        text: "por favor revise los datos de compra",
        icon: "error",
      });  
}

export default Error;