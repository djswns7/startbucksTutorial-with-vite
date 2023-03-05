import { useState } from 'react'
import { EarningStars } from './components/EarningStars/EarningStars'
import ThreeContentSection, { BenfitCards, GettingStartCards } from './components/ThreeContntSection/ThressContentSection'
import { UseStar } from './components/UseStar/UseStar'
// import './App.css'

const gettingStartContents = [
  {
    num: 1,
    title: "Create an account",
    detail: `To get started, <a href="#">join now.</a> You can also <a href="#">join in the app</a> to get access to the full range of Starbucks Rewards benefits.`,
  },
  {
    num: 2,
    title: "Order and pay how you’d like",
    detail: `Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.
    <a href="#">Learn how</a>`,
  },
  {
    num: 3,
    title: "Earn Stars, get Rewards",
    detail: `As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!`,
  },
]

const benfitContents = [
  {
    imgName: "benefit-fun.jpg",
    title: "Fun freebies",
    detail: `Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.`,
  },
  {
    imgName: "benefit-ahead.jpg",
    title: "Order & pay ahead",
    detail: `Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.`,
  },
  {
    imgName: "benefit-faster.jpg",
    title: "Get to free faster",
    detail: `Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.`,
  },
]

const gettingStartLists = [
  <GettingStartCards contents={gettingStartContents[0]} />,
  <GettingStartCards contents={gettingStartContents[1]} />,
  <GettingStartCards contents={gettingStartContents[2]} />,
]

const benfitLists = [
  <BenfitCards contents={benfitContents[0]} />,
  <BenfitCards contents={benfitContents[1]} />,
  <BenfitCards contents={benfitContents[2]} />,
]

const EarningStarsListContentsArr = [
  {
    titleDollars: 1,
    subTitle: "Pay as you go",
    articleContentsArr: [
      {
        title: "Scan and pay separately",
        brief: "Use cash or credit/debit card at the register.",
        imgFileName: "1A.png",
        imgAlt: "Scan and pay separately image",
      },
      {
        title: "Save payment in the app",
        brief:
          "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.",
        imgFileName: "1B.png",
        imgAlt: "Save payment in the app image",
      },
    ],
  },
  {
    titleDollars: 2,
    subTitle: "Add funds in the app",
    articleContentsArr: [
      {
        title: "Preload",
        brief:
          "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
        imgFileName: "2A.png",
        imgAlt: "Preload image",
      },
      {
        title: "Register your gift card",
        brief: "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.",
        imgFileName: "2B.png",
        imgAlt: "Register your gift card image",
      },
    ],
  },
]


function App() {

  return (
    <div className="App">
      <ThreeContentSection
        mainSub={{
          main: "Getting started is easy",
          sub: "Earn Stars and get rewarded in a few easy steps.",
        }}
        sectionName="start"
        lists={gettingStartLists}
      />
  
      <UseStar></UseStar>
  
      <ThreeContentSection
        mainSub={{
          main: "Endless Extras",
          sub: "Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.",
        }}
        sectionName="benefit"
        lists={benfitLists}
      />
  
      <EarningStars
        title="Cash or card, you earn Stars"
        subTitle="No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards."
        listsContents={EarningStarsListContentsArr}
      ></EarningStars>
    </div>
  )
}

export default App
