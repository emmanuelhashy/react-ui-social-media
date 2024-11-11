import React from "react"
function Card() {
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
                        <p>5244</p>
                        <p>2150</p>
                        <p>8252</p>
                        <p>6420</p>
                    </div>
                    <div class="row card-holder">
                        <p>CARD HPLDER</p>
                        <p>VALID TILL</p>
                    </div>
                    <div class="row name">
                        <p>JOE ALISON</p>
                        <p>10 / 25</p>
                    </div>
                </div>
                <div class="back">
                    <img src="https://i.ibb.co/PYss3yv/map.png" class="map-img"/>
                    <div class="bar"></div>
                    <div class="row card-cvv">
                        <div>
                            <img src="https://i.ibb.co/S6JG8px/pattern.png"/>
                        </div>
                        <p>824</p>
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
