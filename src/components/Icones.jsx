import React from 'react'

function Icones() {

  const changeClassActiveBtn = ({ target }) => {
    const prevActiveBtn = document.querySelector(".active-btn");
    prevActiveBtn.className = prevActiveBtn.className.replace("active-btn", " ");
    target.classList.add("active-btn");
  };

  return (
    <div className="controlls">
      <div className="control control-1 active-btn"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="home"
      >
        <img
          src="../images/house.png"
          alt=""
        />
      </div>
      <div className="control control-2"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="about"
      >
        <img
          src="../images/address.png"
          alt=""
        />
      </div>
      <div className="control control-3"
        	onClick={ (event) => changeClassActiveBtn(event) }
          data-id="portfolio"
      >
        <img
          src="../images/briefcase.png"
          alt=""
        />
      </div>
      <div className="control control-4"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="mission"
      >
        <img
          src="../images/flag.png"
          alt=""
        />
      </div>
      <div className="control control-5"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="contact"
      >
        <img
          src="../images/envelope.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default Icones
console.clear();