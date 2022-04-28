// react
import React from 'react';
import swal from'sweetalert2';
// sass
import './ItemOrder.scss'
// iconos 
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const ItemOrder = ({stock, OnAdd, cantidad}) => {
    
    const AddToCart = () => {
        if (stock === 0) {
            OnAdd(cantidad);
        }
    }
    const botonEncargarProductoConfig = {
        className: `botonEncargarCarrito ${stock === 0 ? 'botonEncargarCarritoColor' : 'botonEncargarCarritoColorBlock'}`,
        disabled: stock > 0

    }
    // encargo
    const ConfigSwal = {
        background: '#07080D',
        backdrop: '#5297f285',
        allowOutsideClick: false
    }
    const SwalEncargoProducto = () => {
        swal.fire({
            customClass : {
                title: 'swal2-title'
              },
            title: 'Casi es tuyo!!',
            color: 'orange',
            text: 'Este producto solo esta disponible para encargo, puede demorar mas tiempo del esperado',
            icon: 'warning',
            confirmButtonColor: 'orange',
            confirmButtonText: 'Agregar al carrito',
            showCancelButton: true,
            cancelButtonColor: 'red',
            cancelButtonText: 'Cancelar',
            ...ConfigSwal
          }).then((result) => {
            if (result.isConfirmed) {

                swal.fire({                
                    title: 'Agregado al carrito',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                    color: '#5298F2',
                    ...ConfigSwal
                });
            }
          })
    }


    return (
        <button {...botonEncargarProductoConfig} onClick={() => AddToCart()} >
            <AddShoppingCartIcon className='iconoAddCart'/>
            Encargar Producto
        </button>
    )
}

export default ItemOrder;