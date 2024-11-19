import React from "react"
function Card({cardNumber, cVVNumber, name, expiryDate}) {
    const formattedCardNumber = cardNumber.padEnd(16, "X").match(/.{1,4}/g) || []; // Ensures a 4-group format
  return (
    <div class="">
        <div class="card">
            <div class="card-inner">
                <div class="front">
                    <img src="https://i.ibb.co/PYss3yv/map.png" alt="" class="map-img"/>
                    <div class="row">
                        <img src="https://i.ibb.co/G9pDnYJ/chip.png" alt="" width="60px"/>
                        <img src="https://i.ibb.co/WHZ3nRJ/visa.png" alt="" width="60px"/>
                    </div>
                    <div class="row card-no">
                    {formattedCardNumber.map((group, index) => (
                        <p key={index}>{group}</p>
                      ))}
                    </div>
                    <div class="row card-holder">
                        <p>CARD HOLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div class="row name">
                    <p>{name || "HOLDER'S FULL NAME"}</p>
                    <p>{expiryDate || "MM/YY"}</p>
                    </div>
                </div>
                <div class="back">
                    <img src="https://i.ibb.co/PYss3yv/map.png" class="map-img"/>
                    <div class="bar"></div>
                    <div class="row card-cvv">
                        <div>
                            <img src="https://i.ibb.co/S6JG8px/pattern.png"/>
                        </div>
                        <p>{cVVNumber}</p>
                    </div>
                    <div class="row card-text">
                        <p>this is a virtual card design using HTML and CSS. You can aslo design something like this.</p>
                    </div>
                    <div class="row signature">
                        <p>CUSTOMER SIGNATURE</p>
                        <img src="https://i.ibb.co/WHZ3nRJ/visa.png" alt="" width="80px"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
