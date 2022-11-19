document.querySelector("#submitButton").addEventListener("click", e => {
    e.preventDefault();
    // var username1 = document.getElementById("loginUser").value;
    // var password1 = document.getElementById("loginPassword").value;
    // if(username1=="admin" && password1=="user"){
    //     alert("login success");
    //     return false;
    // }
    // else{
    //     alert("login fail");
    // }
    window.location.href = "carrier.html";
});

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

