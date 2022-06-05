import React from 'react';
// scss
import './InformacionPago.scss';

const InformacionPago = () => {

    return (
            <div className="modal__compra__seccion__metodo__pago">
                <div className="container">
                    <div className="container-pago">
                        <div className="card-container">
                            <div className="front">
                                <div className="image">
                                    <img src="../img/chip.png" alt=""/>
                                    <img src="../img/logo.png" alt=""/>
                                </div>
                                <div className="card-number-box">################</div>
                                <div className="flexbox">
                                    <div className="box">
                                        <span>titular</span>
                                        <div className="card-holder-name">nombre completo</div>
                                    </div>
                                    <div className="box">
                                        <span>vencimiento</span>
                                        <div className="expiration">
                                            <span className="exp-month">mm</span>
                                            <span className="exp-year">aa</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="stripe"></div>
                                <div className="box">
                                    <span>cod seguridad</span>
                                    <div className="cvv-box"></div>
                                    <img src="../img/chip.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="inputBox">
                            <span>numero de tarjeta</span>
                            <input type="text" maxlength="16" class="card-number-input"/>
                        </div>
                        <div className="inputBox">
                            <span>titular</span>
                            <input type="text" class="card-holder-input"/>
                        </div>
                        <div className="flexbox">
                            <div className="inputBox">
                                <span>mes de vencimiento</span>
                                <select name="" id="" class="month-input">
                                    <option value="month" selected disabled>mes</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <span>año de vencimiento</span>
                                <select name="" id="" className="year-input">
                                    <option value="year" selected disabled>año</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <span>cod seguridad</span>
                                <input type="text" maxlength="3" className="cvv-input"/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default InformacionPago;