import './css/App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import New from './components/New';
import Main from './components/Main';
function App() {

  return (
    <>
      <Header/>
      <div className='container intro-box'>
        <Intro/>
        <New/>
      </div>
      <Main/>
    </>
  )
}

export default App
