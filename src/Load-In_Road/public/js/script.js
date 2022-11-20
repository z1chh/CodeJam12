document.querySelector("#submitButton").addEventListener("click", e => {
    e.preventDefault();
    // var type = document.getElementById("rdbRole");
    // if (type=="C"){
        window.location.href = "carrier.html";
    }
//     else if (type=="B"){
//         window.location.href = "shipper.html";
//     }
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



// Tables cuz no actual DB :D

// USERS
const USERS = [
    {
        id: 1,
        username: 'Jarad Higgins',
        email: 'jah@gmail.com',
        is_shipper: false
    },
    {
        id: 2,
        username: 'Charlton Howard',
        email: 'laroi@gmail.com',
        is_shipper: false
    },
    {
        id: 3,
        username: 'Taurus Bartlett',
        email: 'polog@example.com',
        is_shipper: true
    },
    {
        id: 4,
        username: 'HandsomeLKC',
        email: 'lk_c@hotmail.ca',
        is_shipper: true
    }
];

const JOBS = [
    {
        id: 1,
        username: 'Jarad Higgins',
        email: 'jah@gmail.com',
        is_shipper: false
    },
    {
        id: 2,
        username: 'Charlton Howard',
        email: 'laroi@gmail.com',
        is_shipper: false
    },
    {
        id: 3,
        username: 'Taurus Bartlett',
        email: 'polog@example.com',
        is_shipper: true
    },
    {
        id: 4,
        username: 'HandsomeLKC',
        email: 'lk_c@hotmail.ca',
        is_shipper: true
    }
];