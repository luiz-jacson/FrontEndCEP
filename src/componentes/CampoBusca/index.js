import { useState } from 'react';
import './CampoBusca.css';
import CardEndereco from '../CardEndereco';
import { MagnifyingGlass } from 'react-loader-spinner';


const CampoBusca = (props) => {

    const [valor, setValor] = useState('');
    const [end, setEnd] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const Busca = (evento) => {
        setCarregando(true);
        evento.preventDefault();
        fetch('http://localhost:3001/?valor=' + valor)
            .then(response => response.json())
            .then(json => {
                setEnd(json);
                setCarregando(false)
            })
            .catch(erro => {
                console.log(erro);
                setCarregando(false)
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
                {carregando === true?<MagnifyingGlass
                                    wrapperClassName = "lupa"
                                    visible={true}
                                    ariaLabel="MagnifyingGlass-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="MagnifyingGlass-wrapper"
                                    glassColor = '#c0efff'
                                    color = '#e15b64'
                />:end.status === 200? 
                <CardEndereco endereco = {end}/> : <h1 className='naoencontrado'>{end.mensagem}</h1>}
                
                
                
                
            </form>
        </div>

    )
}


export default CampoBusca 