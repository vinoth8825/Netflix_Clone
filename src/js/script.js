let accordians = document.querySelectorAll(".accordian");

accordians.forEach((accordian, index) => {
  accordian.addEventListener("click", () => {
    let plus = accordian.querySelector(".plus");
    let close = accordian.querySelector(".close");

    let answer = accordian.querySelector(".answer");

    if (index == 0) {
    } else {
      //accordians[index];
      let currentAccordian = accordians[index - 1];

      let plusElem = currentAccordian.querySelector(".plus");
      let ansElem = currentAccordian.querySelector(".answer");
      //console.log(plusElem);

      if (plusElem && plusElem.classList.contains("active")) {
        plusElem.classList.remove("active");
        ansElem.style.maxHeight = "0px";
      }
    }

    if (plus.classList.contains("active")) {
      plus.classList.remove("active");
      //answer.classList.remove("active");
      answer.style.maxHeight = "0px";
    } else {
      plus.classList.add("active");

      answer.style.maxHeight = answer.scrollHeight + "px";
      //answer.classList.add("active");
    }
  });
});

let language_select = document.querySelector("#language-select");

function unselect() {
  if (window.innerWidth < 1024) {
    console.log("hii");
    language_select.selectedIndex = -1;
  } else {
    language_select.selectedIndex = 1;
  }
}

window.addEventListener("resize", unselect);

unselect();

let input_last = document.querySelector(".input_last");
let label_last = document.querySelector(".label_last");

input_last.addEventListener("focus", () => {
  label_last.classList.add("up");
});

input_last.addEventListener("blur", () => {
  if (input_last.value == "") {
    label_last.classList.remove("up");
  }
});
