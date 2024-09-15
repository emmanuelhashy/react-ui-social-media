import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = ({
  cardType = "Virtual Credit Card",
  description = "Virtual Credit card allows you....",
}) => {
  const cardRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);

  useEffect(() => {
    // Animate the credit card
    gsap.to(cardRef.current, {
      duration: 5,
      rotationY: 360,
      rotationX: 35,
      repeat: -1,
      ease: "power2.inOut",
    });

    // Floating effect for the bubbles
    gsap.to(bubble1Ref.current, {
      duration: 6,
      y: -100,
      x: -50,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(bubble2Ref.current, {
      duration: 8,
      y: 100,
      x: 50,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="bg-black flex w-full justify-center items-center min-h-screen relative">
      {/* Floating bubbles */}
      <div
        ref={bubble1Ref}
        className="bubble absolute bg-white bg-opacity-10 rounded-full"
        style={{ width: "200px", height: "200px", bottom: "0", right: "20%" }}
      ></div>
      <div
        ref={bubble2Ref}
        className="bubble absolute bg-white bg-opacity-10 rounded-full"
        style={{ width: "300px", height: "300px", top: "10%", left: "40%" }}
      ></div>

      {/* Credit Card */}
      <div className="flex w-full items-center justify-around">
        <div className="text-white w-2/5 space-y-2">
          <p className="text-2xl font-medium capitalize">{cardType}</p>
          <p className="text-base">{description}</p>
        </div>
        <div className="credit-card" style={{ perspective: "1000px" }}>
          <div
            ref={cardRef}
            id="card"
            className="card relative w-96 h-64 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="text-xl font-semibold">monobank</div>
            <div className="flex justify-between">
              <div className="card-chip mt-6 w-12 h-8 bg-gray-400 rounded"></div>

              <div className="mt-8">
                <p className="tracking-widest text-lg">**** **** **** 8900</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs text-gray-400">CARD HOLDER</p>
              <p className="text-lg">LILLY BLOOM</p>
            </div>

            <div className="absolute bottom-4 left-4">
              <p className="text-xs text-gray-400">EXPIRES</p>
              <p className="text-lg">12/25</p>
            </div>

            <div className="absolute top-4 right-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                alt="Mastercard"
                className="w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
