import './CardEndereco.css'


const CardEndereco = (endereco) => {
    console.log(endereco.endereco)
    if (endereco.endereco === 'erro' || endereco.endereco.length === 0) return null
    return (
        <section className='CardEndereco'>
            <h3>CEP: {endereco.endereco.cep}</h3>
            <h3>UF: {endereco.endereco.uf}</h3>
            <h3>Cidade: {endereco.endereco.localidade}</h3>
            <h3>Bairro: {endereco.endereco.bairro} </h3>
            <h3>Logradouro: {endereco.endereco.logradouro}</h3>
        </section>

    )


}

export default CardEndereco