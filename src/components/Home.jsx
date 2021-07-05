import { Component } from 'react';
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Home extends Component {
    compraAsistidaHabilidada() {
        alert("Compra asistida habilitada")
    }

    noCompraAsistida() {
        alert("Sin compra asistida")
    }

    render() {
        return (
            <div id="quiz">
                <h3>¿Deseas habilitar la compra asistida?</h3>
                <span onClick={this.compraAsistidaHabilidada} className="icon text-primary"><FontAwesomeIcon icon={faCheck}/></span>
                <span onClick={this.noCompraAsistida} className="icon text-secondary"><FontAwesomeIcon icon={faTimes}/></span>
            </div>
        )
    }
}