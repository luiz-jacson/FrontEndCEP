import './CampoBusca.css';

const CampoBusca = (props) => {
    const Busca = (evento) =>{
        console.log('submetido');
        evento.preventDefault();
    }


    return (
        <div className='CampoBusca'>
            <form onSubmit={Busca}>
                <h1>Buscar Endereço</h1>
                <input placeholder={props.placeholder}></input>
                <button>Buscar</button>
            </form>
        </div>

    )
}


export default CampoBusca 