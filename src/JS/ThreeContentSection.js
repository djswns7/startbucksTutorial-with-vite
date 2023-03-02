export function GettingStartCards(props) {
  const { title, detail, num } = props.contents
  const dangerousHTML = { __html: detail }
  return (
    <li>
      <article className="startWay">
        <div className="starWay-textWrapper">
          <h4 className="startWayTitle">{title}</h4>
          <div className="startWayBrief" dangerouslySetInnerHTML={dangerousHTML}></div>
        </div>
        <img src={`./../img/started${num}.jpg`} alt={num} className="startWayImg" />
      </article>
    </li>
  )
}

export function BenfitCards(props) {
  const { title, detail, imgName } = props.contents
  const dangerousHTML = { __html: detail }
  return (
    <li>
      <article className="benefitItem">
        <h4 className="benefitItemTitle">{title}</h4>
        <p className="benefitItemBrief">{detail}</p>
        <a href="" className="learnMore">
          Learn more
        </a>
        <img src={`../../img/${imgName}`} alt={`${imgName}`} className="benefitImg" />
      </article>
    </li>
  )
}

export function ThreeContentSection(props) {
  const {
    sectionName,
    lists,
    mainSub: { main, sub },
  } = props

  return (
    <section className={sectionName}>
      <h3 className={`${sectionName}__main-title`}>{main}</h3>
      <p className={`${sectionName}__sub`}>{sub}</p>
      <ol className={`${sectionName}__contents-list`}>
        {lists[0]}
        {lists[1]}
        {lists[2]}
      </ol>
    </section>
  )
}

export default ThreeContentSection

//  ['To get started,',
//  <a href="#">join now.</a>,
//  'You can also ',
//  <a href="#">join in the app</a>,
//  'to get access to the full range of Starbucks Rewards benefits.' ]
