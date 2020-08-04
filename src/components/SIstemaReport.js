

import React, { useState, useEffect } from 'react'

import { Button, Card, CardContent } from '@material-ui/core';
import './style.css'

import Sistema from './Medidores.png'
import Proceso from './Proceso.png'
export default function () {

    const [temperatura, setTemperatura] = useState(100)
    const [nivelDeAgua, setNivelDeAgua] = useState(2000)

    function aumentarTemperatura(accion) {
        if (accion === "aumentar") {
            setTemperatura(temperatura + 5)
            setNivelDeAgua(nivelDeAgua - 10)
        }
        else if (accion == "disminuir") {
            setTemperatura(temperatura - 5)
        }

    }

    function aumentarAgua() {
        setNivelDeAgua(nivelDeAgua + 100)
    }

    useEffect(() => {
        if (nivelDeAgua < 1800) {
            alert("nivel de agua muy bajo, se llenara el tanque automaticamente ")
            setNivelDeAgua(2000)
        }

    }, [nivelDeAgua])

    useEffect(()=>{
        if(temperatura>=250){
            alert("Temperatura muy alta. La temperatura volvera al valor inicial")
            setTemperatura(100)
            
        }
    },[temperatura])

    return (
        <div>
            <div className="container">
                <Card className="imagen">
                    <h3 style={{    fontSize: "30px"}}>sistema scada</h3>
                    <CardContent>
                        <img src ={Proceso} style={{width:"500px"}}/>
                    </CardContent>
                </Card>
            </div>
            <div className="container">

                <br></br><br></br>
                <div className="estado-sistema text-center">

                    <Card className="controles">
                        <div className="text-center"> <h3>Estado sistema</h3></div>

                        <CardContent>
                            <div style={{ display: "inline-block", marginRight: "5px" }}>Temperatura: {temperatura}º</div>
                            <Button style={{ display: "inline-block", marginRight: "5px" }} size="small" variant="contained" color="primary" onClick={() => aumentarTemperatura("aumentar")}>+</Button>{' '}
                            <Button style={{ display: "inline-block", marginRight: "5px" }} size="small" variant="contained" color="primary" onClick={() => aumentarTemperatura("disminuir")}>-</Button>{' '}
                            <br></br>
                            <div style={{ display: "inline-block", marginRight: "5px" }}> Nivel del tanque de agua: {nivelDeAgua} lts</div>
                            <Button style={{ display: "inline-block", marginRight: "5px" }} size="small" variant="contained" color="primary" onClick={() => aumentarAgua()}>+</Button>{' '}
                            <br></br>
                            <div style={{ marginRight: "5px" }}> Presión de vapor: {Math.round(0.01 * temperatura*1000)/1000} bar</div>
                            <br></br>
                            <div style={{ marginRight: "5px" }}>Generacion energia: {0.15 * temperatura} Kv</div>
                            <br></br>
                            <div className="text-center">
                                <img src={Sistema} style={{ width: "250px",marginLeft:"150px" }} />
                            </div>

                        </CardContent>

                    </Card>
                </div>
            </div>  


        </div>)
}