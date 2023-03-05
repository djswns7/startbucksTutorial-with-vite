
interface UseStarProps {
  UseStarTabPannelContentsList:{ title: string, breif: string, imgName: string, imgAlt: string }
}

export function UseStar() {
  return (
    <section className="useStar">
      <h3 className="useStarTitle">Get your favorites for free</h3>
      <div className="useStarHow">
        <div className="tabList">
          <button className="tab">25</button>
          <button className="tab">50</button>
          <button className="tab">150</button>
          <button className="tab">200</button>
          <button className="tab">400</button>
        </div>
        <UseStarTabPannel contentsList={UseStarTabPannelContentsList[0]} isVisible={true} />
        <UseStarTabPannel contentsList={UseStarTabPannelContentsList[1]} isVisible={false} />
        <UseStarTabPannel contentsList={UseStarTabPannelContentsList[2]} isVisible={false} />
        <UseStarTabPannel contentsList={UseStarTabPannelContentsList[3]} isVisible={false} />
        <UseStarTabPannel contentsList={UseStarTabPannelContentsList[4]} isVisible={false} />
      </div>
    </section>
  )
}

const UseStarTabPannelContentsList = [
  { title: "Customize your drink", breif: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.", imgName: "tab-025.png", imgAlt: "25 star image" },
  { title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more", breif: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more.", imgName: "tab-025.png", imgAlt: "25 star image" },
  {
    title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
    breif: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.",
    imgName: "tab-025.png",
    imgAlt: "25 star image",
  },
  { title: "Sandwich, protein box or at-home coffee", breif: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.", imgName: "tab-025.png", imgAlt: "25 star image" },
  { title: "Select Starbucks® merchandise", breif: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.", imgName: "tab-025.png", imgAlt: "25 star image" },
]

interface UseStarTabPannelProps {
  contentsList :{
    title:string 
    breif:string 
    imgName:string 
    imgAlt:string
  }
  isVisible:Boolean
}

function UseStarTabPannel(props:UseStarTabPannelProps) {
  const { title, breif, imgName, imgAlt } = props.contentsList
  const isVisible = props.isVisible
  return (
    <div className={`tabPannel ${isVisible ? `` : `a11y-hidden`}`}>
      <h4 className="tabPannelTitle">{title}</h4>
      <p className="tabPannelBreif">{breif}</p>
      <img src={`../../img/${imgName}`} alt={imgAlt} />
    </div>
  )
}
