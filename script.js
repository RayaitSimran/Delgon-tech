var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("btn-1");
var span = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
  modal1.style.display = "block";
};
span.onclick = function () {
  modal1.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("btn-2");
var span = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
  modal2.style.display = "block";
};
span.onclick = function () {
  modal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("btn-3");
var span = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
  modal3.style.display = "block";
};
span.onclick = function () {
  modal3.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("btn-4");
var span = document.getElementsByClassName("close4")[0];
btn4.onclick = function () {
  modal4.style.display = "block";
};
span.onclick = function () {
  modal4.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
//counter

const initAnimatedCounts = () => {
  const ease = (n) => {
    // https://github.com/component/ease/blob/master/index.js
    return --n * n * n + 1;
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Once this element is in view and starts animating, remove the observer,
        // because it should only animate once per page load.
        observer.unobserve(entry.target);
        const countToString = entry.target.getAttribute("data-countTo");
        const countTo = parseFloat(countToString);
        const duration = parseFloat(
          entry.target.getAttribute("data-animateDuration")
        );
        const countToParts = countToString.split(".");
        const precision =
          countToParts.length === 2 ? countToParts[1].length : 0;
        const startTime = performance.now();
        const step = (currentTime) => {
          const progress = Math.min(
            ease((currentTime - startTime) / duration),
            1
          );
          entry.target.textContent = (progress * countTo).toFixed(precision);
          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(step);
          } else {
            window.cancelAnimationFrame(animationFrame);
          }
        };
        let animationFrame = window.requestAnimationFrame(step);
      }
    });
  });
  document.querySelectorAll("[data-animateDuration]").forEach((target) => {
    target.setAttribute("data-countTo", target.textContent);
    target.textContent = "0";
    observer.observe(target);
  });
};
initAnimatedCounts();
