import { useState } from 'react';
import './CampoBusca.css';
import CardEndereco from '../CardEndereco';

const CampoBusca = (props) => {

    const [valor, setValor] = useState('');
    const [end, setEnd] = useState([]);
    const Busca = (evento) => {
        evento.preventDefault();
        fetch('https://localhost:7185/CEP?valor=' + valor)
            .then(response => response.json())
            .then(json => {
                setEnd(json);
            })
            .catch(erro => {
                console.log(erro);
            }
            )
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
                {end.status == 200? 
                <CardEndereco endereco = {end}/> : <h1 className='naoencontrado'>{end.mensagem}</h1>
                }
                
            </form>
        </div>

    )
}


export default CampoBusca 