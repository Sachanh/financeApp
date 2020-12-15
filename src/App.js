import React from "react";
import "./styles.css";
import { useState } from "react";

var financeSuggest = {
  MutualFunds: [
    {
      name: "Axis Bank Bluechip Fund - Direct Growth",
      price: "40.14",
      
    },
    {
      name: "Mirae Asset Large Cap Fund- Direct Growth",
      price: "50",
      
    }
  ],

  Insurances: [
    {
      name: "LIfe Insurance",
      price: "563/per month premium",
    },
    {
      name: "Health Insurance",
      price: "5000 annual"
    }
  ],
  Stocks: [
    {
      name: "Reliance",
      price: "1973.60/share"
    },
    {
      name: "HDFC",
      price: "2350.35/share"
    }
  ],
  ETFs: [
    {
      name: "Niftbees",
      price: "144.73/share"
    },
    {
      name: "Goldbees",
      price: "42.85/shares"
    }
  ],
  others: [
    {
      name: "Debt Bonds",
      price: "Minimum 10000/per bond"
    },
    {
      name: "SGB",
      price: "Minimum 15000/per bond"
    }
  ]
};

export default function App() {
  var [selectedFinance, finances] = useState("MutualFunds");
  function finClickHandler(fin1) {
    finances(fin1);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        💰 Learn to manage your <em>finance</em> 🤑{" "}
      </h1>
      <p>
        {" "}
        Are you confused while managing your Investments. Check below to get an
        idea.{" "}
      </p>

      <div>
        {Object.keys(financeSuggest).map((finances) => (
          <button
            onClick={() => finClickHandler(finances)}
            
          >
            {finances}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {financeSuggest[selectedFinance].map((finance) => (
            <li key={finance.name}>
              {" "}
              <div>
                {" "}
                <b>Mutual Fund Name:</b>. {finance.name}{" "}
              </div>
              <div>
                {" "}
                <b>Pricing: </b> {finance.price}{" "}
              </div>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}
