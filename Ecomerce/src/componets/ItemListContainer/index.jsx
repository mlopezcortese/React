import {useState} from 'react'
import "./style.css"


function ItemListContainer ({greetings}) {
    const [saludo,setSaludo] = useState(greetings);

   
    
    function changeGreeting(){
        setSaludo("Hola Loco")
    }

    return (
        <div className="item-list-container">
            <p>{saludo}</p>
            <button onClick={changeGreeting}>boton</button>
        </div>
    );
}

export default ItemListContainer;