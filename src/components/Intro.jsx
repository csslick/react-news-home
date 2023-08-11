import intro from '../assets/images/image-web-3-desktop.jpg';

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-img-box">
        <img src={intro} alt="intro" />
      </div>
      <div className="text-box">
        <h1>The Bright Future of<br/> Web 3.0?</h1>
        <div className="text">
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?
          </p>
          <a href="#" className='btn'>read more</a>
        </div>
      </div>
    </section>
  )
}
