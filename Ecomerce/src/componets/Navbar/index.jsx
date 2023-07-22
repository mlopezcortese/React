import CartWidget from "./CartWidget";
import "./style.css"

function Navbar() {
    return (
    <nav className="navbar">
        <div>
        <button>Inicio</button>
        <button>Juegos</button>
        <button>Mouse</button>
        <button>Teclado</button>
        <button>Monitores</button>
        </div>

        <CartWidget />  
    </nav>
    )
}

export default Navbar;