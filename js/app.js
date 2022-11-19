const f = function () {
    let docWidth = document.body.getBoundingClientRect().width;
    if (docWidth > 480 && docWidth < 1024) {
        let f3 = document.getElementById("col3");
        let f4 = document.getElementById("col4");
        let f5 = document.getElementById("col5");

        let c3 = document.getElementById("co5-col-3");
        let c4 = document.getElementById("co5-col-4");
        let c5 = document.getElementById("co5-col-5");

        c3.style.left = `${f3.getBoundingClientRect().left}px`;
        c4.style.left = `${f4.getBoundingClientRect().left}px`;
        c5.style.left = `${f5.getBoundingClientRect().left}px`;
    };
}
setInterval(() => {
  f();
}, 1);
