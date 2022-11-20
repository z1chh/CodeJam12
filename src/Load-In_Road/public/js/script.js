document.querySelector("#submitButton").addEventListener("click", e => {
    e.preventDefault();
    var type = document.getElementById("rdbRole");
    if (type=="C"){
        window.location.href = "carrier.html";
    }
     else if (type=="B"){
         window.location.href = "shipper.html";
     }
 );



document.addEventListener("DOMContentLoaded", () => {
    const loginPage = document.querySelector("#login");
    const createPage = document.querySelector("#create");

    document.querySelector("#createAcct").addEventListener("click", e => {
        e.preventDefault();
        loginPage.classList.add("login_hidden");
        createPage.classList.remove("login_hidden");
    });

    document.querySelector("#loginAcct").addEventListener("click", e => {
        e.preventDefault();
        loginPage.classList.remove("login_hidden");
        createPage.classList.add("login_hidden");
    });

});



