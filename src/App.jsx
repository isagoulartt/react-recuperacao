import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import Banner from './Componentes/Banner'
import Livros from './Componentes/Livros'
import Galeria from './Componentes/Galeria'
import Rodape from './Componentes/Rodape'



function App() {

  return (
    <>
    <Cabecalho/>
    <Banner/>

      <Livros
      titulo={"Verity"}
      escritor={"Collen Hoover"}
      ano={2018}
      sinopse={"Lowen, uma jovem escritora recebe uma proposta para ser co-autora dos livros de Verity Crawford, uma escritora com uma saga de sucesso. Por motivos de doença Verity não consegue passar o testemunho da sua obra à jovem escritora, pelo que Low terá que ter acesso à caixa de pandora que é o escritório de Verity."}
      />

      <Galeria/>

      <Rodape/>
    </>
  )
}

export default App
