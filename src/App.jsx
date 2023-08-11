import './css/App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import New from './components/New';
import Main from './components/Main';
function App() {

  // new 글목록 데이터 - New 컴포넌트에 전달할 데이터
  const news = [
    { 
      title: 'Hydrogen VS Electric Cars',
      text: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    { 
      title: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    { 
      title: 'Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ]

  return (
    <>
      <Header/>
      <div className='container intro-box'>
        <Intro/>
        <New news={news} />
      </div>
      <Main/>
    </>
  )
}

export default App
