import './App.css'
import CardNews from './components/CardNews'

function Header(){
  return(
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul className="list">
          <li><a href="#">Política</a></li>
          <li><a href="#">Economia</a></li>
          <li><a href="#">Esportes</a></li>
          <li><a href="#">Entretenimento</a></li>
        </ul>
      </div>
    </nav>
  )
}
function Footer(){
  return(
    <footer className='footer'>
      <p>Todos os Direitos Reservado</p>
    </footer>
  )
}

function App() {
  
  return (
    <>
      <Header/>
      <div className='listCard'>
        <CardNews linkDaImagem={'https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} tituloDaNoticia={'2323232'} descricaoDaNoticia={'233233232'}/>
        <CardNews linkDaImagem={'https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} tituloDaNoticia={'2323232'} descricaoDaNoticia={'233233232'}/>
        <CardNews linkDaImagem={'https://images.pexels.com/photos/942872/pexels-photo-942872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} tituloDaNoticia={'2323232'} descricaoDaNoticia={'233233232'}/>
        
      </div>
      
      
      <Footer/>
    </>
  )
}


export default App
