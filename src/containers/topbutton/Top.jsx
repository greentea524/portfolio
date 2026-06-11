import React from "react";
import "./Top.scss";

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topButton").style.visibility = "visible";
  } else {
    document.getElementById("topButton").style.visibility = "hidden";
  }
}

function topEvent() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default function Top() {
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return (
    <button
      type="button"
      onClick={topEvent}
      id="topButton"
      title="Go to top"
      aria-label="Go to top"
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
