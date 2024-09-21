import './App.css'

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
      <Footer/>
    </>
  )
}


export default App
