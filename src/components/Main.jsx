import img1 from '../assets/images/image-retro-pcs.jpg'
import img2 from '../assets/images/image-top-laptops.jpg'
import img3 from '../assets/images/image-gaming-growth.jpg'

const data = [
  { 
    id: 1,
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?',
    img: img1,
  },
  { 
    id: 2,
    title: 'Top 10 Laptops of 2022',
    text: 'Our best picks for various needs and budgets.',
    img: img2,
  },
  { 
    id: 3,
    title: 'The Growth of Gaming',
    text: 'How the pandemic has sparked fresh opportunities.',
    img: img3,
  },
]

export default function Main() {
  return (
    <main className='container'>
      <div className="col">
        <img src={data[0].img} alt={data[0].title} />
        <div className="text">
          <h2><span>01</span><br/>{data[0].title}</h2>
          <p>{data[0].text}</p>
        </div>
      </div>
      {/* 숙제: col을 자식 컴퍼넌트로 만들어 보세요 -> props로 data 전달 */}
    </main>
  )
}
