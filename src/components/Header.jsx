import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light container">
                <a className="navbar-brand" href="#"><h3>Toltekatl</h3></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseElem" aria-controls="navbarCollapseElem" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapseElem">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/products">Productos</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/account">Cuenta</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">Carrito</Link></li>
                </ul>
                </div>
            </nav>
        )
    }
}