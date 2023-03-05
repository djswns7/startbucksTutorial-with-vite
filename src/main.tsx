import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'

const domContainer = document.getElementById("mainContentsWrapper") as HTMLElement
const root = ReactDOM.createRoot(domContainer)

// root.render(
  // <React.Fragment>
  //   <ThreeContentSection
  //     mainSub={{
  //       main: "Getting started is easy",
  //       sub: "Earn Stars and get rewarded in a few easy steps.",
  //     }}
  //     sectionName="start"
  //     lists={gettingStartLists}
  //   />

  //   <UseStar />

  //   <ThreeContentSection
  //     mainSub={{
  //       main: "Endless Extras",
  //       sub: "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.",
  //     }}
  //     sectionName="benefit"
  //     lists={benfitLists}
  //   />

  //   <EarningStars
  //     title="Cash or card, you earn Stars"
  //     subTitle="No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards."
  //     listsContents={EarningStarsListContentsArr}
  //   ></EarningStars>
  // </React.Fragment>
// )

/* -------------------------------------------------------------------------- */
/*                 잘 적용되었는지 확인 할 수 있는 예제 코드                     */
/* -------------------------------------------------------------------------- */

// const domContainer = document.querySelector("#like_button_container")
// const root = ReactDOM.createRoot(domContainer)
// root.render(e(LikeButton))

// function name(params) {
//   return <button onClick={() => this.setState({ liked: true })}>Like</button>
// }




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
