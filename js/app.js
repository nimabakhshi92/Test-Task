const f = function () {
  let docWidth = document.body.getBoundingClientRect().width;
  if (docWidth > 480 && docWidth < 1025) {
    let f3 = document.getElementById("col3");
    let f4 = document.getElementById("col4");
    let f5 = document.getElementById("col5");

    let c3 = document.getElementById("co5-col-3");
    let c4 = document.getElementById("co5-col-4");
    let c5 = document.getElementById("co5-col-5");

    c3.style.left = `${f3.getBoundingClientRect().left}px`;
    c4.style.left = `${f4.getBoundingClientRect().left}px`;
    c5.style.left = `${f5.getBoundingClientRect().left}px`;
  }
  let l0 = document.getElementById("banner-img");
  let l = document.getElementById("line-under-img");
  let p =
    l0.getBoundingClientRect().bottom -
    document.getElementById("body").getBoundingClientRect().top;
  // l.style.display = "block";
  if (docWidth < 481) {
    l.style.top = `${p - 5}px`;
  } else if (docWidth < 769) {
    l.style.top = `${p - 7}px`;
  } else if (docWidth < 900) {
    l.style.top = `${p - 6}px`;
  } else if (docWidth < 1025) {
    l.style.top = `${p - 7}px`;
  } else if (docWidth < 1200) {
    l.style.top = `${p - 6}px`;
  } else if (docWidth < 2401) {
    l.style.top = `${p - 8}px`;
  }
  // console.log(l.style.top);
};
setInterval(() => {
  f();
}, 1);
