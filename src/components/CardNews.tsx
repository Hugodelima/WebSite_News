import './CardNews.css'

export default function CardNews({linkDaImagem, tituloDaNoticia, descricaoDaNoticia}){
    return (
        <div className='card'>
            <img src={linkDaImagem}/>
            <h2>{tituloDaNoticia}</h2>
            <p>{descricaoDaNoticia}</p>
            <button type='button'>Ver Mais</button>
        </div>
    )
}