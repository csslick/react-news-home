
export default function New(props) {
  console.log(props);

  return (
    <aside className='new'>
      <h1>New</h1>
      <ul>
        <li>
          <h4>{props.news[0].title}</h4>
          <p>{props.news[0].text}</p>
        </li>
        <li>
          <h4>{props.news[1].title}</h4>
          <p>{props.news[1].text}</p>
        </li>
        <li>
          <h4>{props.news[2].title}</h4>
          <p>{props.news[2].text}</p>
        </li>
      </ul>
    </aside>
  )
}
