export function EarningStars(props) {
  const { title, subTitle, listsContents } = props

  console.log(props)
  return (
    <section className="earnStars">
      <h3 className="earnStartsTitle">{title}</h3>
      <p className="earnStarsSub">{subTitle}</p>
      <EarningStarsList listContents={listsContents[0]}></EarningStarsList>
      <EarningStarsList listContents={listsContents[1]}></EarningStarsList>
      <ul className="earnStarsList"></ul>
    </section>
  )
}

function EarningStarsList(props) {
  const { titleDollars, subTitle, articleContentsArr } = props.listContents

  return (
    <li>
      <section className="earnStarsItem">
        <h4 className="earnStarsItemTitle">
          {titleDollars}
          <span>⭐</span> per dollars
        </h4>
        <p className="earnStarsItemSub">{subTitle}</p>
        <article className="earnStarsWay">
          <h5 className="earnStarsWayTitle">{articleContentsArr[0].title}</h5>
          <p className="earnStarsWayBrief">{articleContentsArr[0].brief}</p>
          <img src={`../../img/${articleContentsArr[0].imgFileName}`} alt={articleContentsArr[0].imgAlt} className="earnStarsWay" />
        </article>
        <article className="earnStarsWay">
          <h5 className="earnStarsWayTitle">{articleContentsArr[1].title}</h5>
          <p className="earnStarsWayBrief">{articleContentsArr[1].brief}</p>
          <img src={`./img/${articleContentsArr[1].imgFileName}`} alt={articleContentsArr[1].imgAlt} className="earnStarsWay" />
        </article>
      </section>
    </li>
  )
}
{
  /* 
<li>
<section class="earnStarsItem">
  <h4 class="earnStarsItemTitle">2<span>⭐</span> per dollars</h4>
  <p class="earnStarsItemSub">Add funds in the app</p>
  <article class="earnStarsWay">
    <h5 class="earnStarsWayTitle">Preload</h5>
    <p class="earnStarsWayBrief">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
    <img src="./img/2A.png" alt="Preload image" class="earnStarsWay" />
  </article>
  <article class="earnStarsWay">
    <h5 class="earnStarsWayTitle">Register your gift card</h5>
    <p class="earnStarsWayBrief">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
    <img src="./img/2B.png" alt="Register your gift card image" class="earnStarsWay" />
  </article>
</section>
</li>
<li>
<section class="earnStarsItem">
  <h4 class="earnStarsItemTitle">Up to 3<span>⭐</span> per dollars</h4>
  <p class="earnStarsItemSub">With Starbucks Rewards Visual Card</p>
  <article class="earnStarsWay">
    <h5 class="earnStarsWayTitle">Earn Stars even faster</h5>
    <p class="earnStarsWayBrief">
      Earn Stars on all purchases you make with our
      <a href="#">credit card</a> in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks Rewards Visa Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks
      Card
    </p>
    <img src="./img/2B.png" alt="Earn Stars even faster" class="earnStarsWay" />
  </article>
</section>
</li> */
}
