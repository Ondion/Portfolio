import React from 'react'
import address from'../images/address.png';
import briefcase from'../images/briefcase.png';
import envelope from'../images/envelope.png';
import flag from'../images/flag.png';
import house from'../images/house.png';

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
          src={ house }
          alt=""
        />
      </div>
      <div className="control control-2"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="about"
      >
        <img
          src={ address }
          alt=""
        />
      </div>
      <div className="control control-3"
        	onClick={ (event) => changeClassActiveBtn(event) }
          data-id="portfolio"
      >
        <img
          src={ briefcase }
          alt=""
        />
      </div>
      <div className="control control-4"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="mission"
      >
        <img
          src={ flag }
          alt=""
        />
      </div>
      <div className="control control-5"
        onClick={ (event) => changeClassActiveBtn(event) }
        data-id="contact"
      >
        <img
          src={ envelope }
          alt=""
        />
      </div>
    </div>
  )
}

export default Icones
console.clear();