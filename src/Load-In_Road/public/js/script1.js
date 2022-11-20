const   body = document.querySelector("body"),
        shipperHome = body.querySelector("#bod"),
        header = shipperHome.querySelector("header"),
        sidebar = shipperHome.querySelectorAll("ul"),
        toggle = document.querySelector("#closeButton");


toggle.addEventListener("click" , e => {
    e.preventDefault();
    header.classList.toggle("close");
    sidebar.toggle("close");
})