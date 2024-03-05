function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    //crete two span
    var parent = document.createElement("span");
    var child = document.createElement("span");
    //parent and child both sets their respective class
    parent.classList.add("parent");
    child.classList.add("child");
    //span parent gets child and child get elem details
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    //elem replace its value with parent span
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}
function loaderAnimation() {
  var t1 = gsap.timeline();
  t1.from(".fs .child span", {
    x: 100,
    stagger: 0.2,
    duration: 1.4,
    ease: Power3.easeInOut,
  })
    .to(".fs .parent .child", {
      y: "-100%",
      duration: 1,

      ease: Circ.easeInOut,
    })
    .to(".fs", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut,
    })
    .to(".elem", {
      height: "100%",
      top: 0,
      duration: 1,
      delay: -0.8,
      ease: Circ.easeInOut,
    })
    .to(".elem", {
      height: 0,

      duration: 1,
      delay: -0.5,
      ease: Circ.easeInOut,
    });
}
// function animateSvg() {
//   document.querySelectorAll("#Visual>g").forEach(function (e) {
//     var character = e.childNodes[1].childNodes[1];
//     character.style.storkeDasharray = character.getTotalLength() + "px";
//     character.style.storkeDashoffset = character.getTotalLength() + "px";
//   });
//   gsap.to("#Visual>g>g>path", {
//     strokeDashoffset: 0,
//     duration: 2,
//     ease: Expo.easeInOut,
//     delay: 2,
//   });
// }
function locoInitialize() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
}
// function CardShow() {
//   document.querySelectorAll(".cnt").forEach(function (cnt) {
//     cnt.addEventListener("mousemove", function (dets) {
//       document.querySelector("#cursor").children[
//         dets.target.dataset.index
//       ].style.opacity = 1;
//       document.querySelector("#cursor").children[
//         dets.target.dataset.index
//       ].style.opacity =
//         transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
//     });
//   });
// }

revealToSpan();
loaderAnimation();
locoInitialize();
// CardShow();
// animateSvg();
