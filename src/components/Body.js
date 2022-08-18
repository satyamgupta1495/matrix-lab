import "./Body.css"
import React from "react"
import bg1 from "../asset/grey-bg.png"
import image1 from "../asset/big-bull.png"
import image2 from "../asset/big-cat.png"
import image3 from "../asset/image 4.png"
import btn from "../asset/btns/Btn.png"
import btn1 from "../asset/btns/Btn (1).png"
import btn2 from "../asset/btns/Btn (2).png"
import treasure from "../asset/treasure.png"

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="text-holder">
          <div className="heading">
            <h1>The Kuppy System</h1>
          </div>
          <div className="heading2">
            <p>
              The Kuppy Clans Ecosystem consists of our two Native Tokens-
              Canine Master and Feline Master.
            </p>
          </div>
        </div>

        <div className="main-container">
          <img src={bg1} alt="" srcset="" />
          <div className="left-container">
            <div className="left-image-holder">
              <img src={image1} alt="" srcset="" />
            </div>

            <div className="btn-holder">
              <img src={btn} alt="" srcset="" />
              <img src={btn1} alt="" srcset="" />
              <img src={btn2} alt="" srcset="" />
            </div>

            <div className="tokenomics">
              <h2>TOKENOMICS</h2>
              <img src={treasure} alt="" srcset="" />
            </div>

            <div className="tax">
              <h3>TAX</h3>
              <div className="buy-sell">
                <div className="buy">
                  <h3>
                    <span className="h3-green">3% Buy Tax</span> <br />
                    2% Reserve <br />
                    1% Burn
                  </h3>
                </div>
                <div className="small-line"></div>
                <div className="sell">
                  <h3>
                    <span className="h3-green">7% Sell Tax </span>
                    <br />
                    6% Marketing <br />
                    1% Burn
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="right-container">
            <div className="image-holder">
              <img src={image2} alt="" srcset="" />
            </div>
            <div className="coming-soon">
              <img src={image3} alt="" srcset="" />
            </div>

            <div className="right-text-holder">
              <p>
                This is a strict Whitelist Presale Allocations for the Kuppy
                Clans Community, to whitelist for this Pre-Sale, we encourage
                you to stake 100,000 Canine Master $CM for 90 days. 10% of
                raised BUSDs would be used to Buy Back $CM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Body
