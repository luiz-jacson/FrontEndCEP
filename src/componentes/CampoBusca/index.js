import { useState } from 'react';
import './CampoBusca.css';
import CardEndereco from '../CardEndereco';

const CampoBusca = (props) => {

    const [valor, setValor] = useState('');
    const [end, setEnd] = useState([])
    const Busca = (evento) => {
        evento.preventDefault();
        fetch('http://localhost:3001/?valor=' + valor)
            .then(response => response.json())
            .then(json => {
                setEnd(json);
            })
            .catch(erro => console.log(erro))
    }
    const setEvento = (evento) => {
        setValor(evento.target.value);
    }

    return (
        <div className='CampoBusca'>
            <form onSubmit={Busca}>
                <h1>Buscar Endereço</h1>
                <input value={valor} onChange={setEvento} placeholder={props.placeholder}></input>
                <button>Buscar</button>
                <CardEndereco endereco={end}/>
            </form>
        </div>

    )
}


export default CampoBusca 