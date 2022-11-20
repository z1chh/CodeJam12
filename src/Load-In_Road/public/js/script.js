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

const userExists = (email) =>
{
    let exists = "-1";
    USERS.forEach((user) =>
    {
        if (user.email === email)
        {
            exists = email;
        }
    });
    return exists !== "-1";
};

const createUser = (username, email, password, is_shipper) =>
{
    const newUser =
    {
        username: username,
        email: email,
        password: password,
        is_shipper: is_shipper === "B"? true: false
    };

    USERS.push(newUser);
}

// USERS
const USERS = [
    {
        id: 1,
        username: 'Jarad_Higgins',
        email: 'jah@gmail.com',
        is_shipper: false
    },
    {
        id: 2,
        username: 'Charlton_Howard',
        email: 'laroi@gmail.com',
        is_shipper: false
    },
    {
        id: 3,
        username: 'Taurus_Bartlett',
        email: 'polog@example.com',
        is_shipper: true
    },
    {
        id: 4,
        username: 'HandsomeLKC',
        email: 'lk_c@hotmail.ca',
        is_shipper: true
    },
    {
        id: 5,
        username: 'Kalberto',
        email: 'spenguin@gmail.com',
        is_shipper: true
    },
    {
        id: 6,
        username: 'JimmePrice',
        email: 'jimmyp@gmail.com',
        is_shipper: false
    }
];

const JOBS = [
    {
        id: 1,
        shipper: 'HandsomeLKC',
        carrier: 'Jarad_Higgins',
        posted_day: '2022-10-31',
        expected_delivery_day: '2022-11-30',
        start_location: '2100, Maisonneuve O Blvd',
        end_location: '128, Howie-Morenz St, Vaudreuil-Dorion',
        rate: '750',
        cargo: '8000'
    },
    {
        id: 2,
        shipper: 'HandsomeLKC',
        carrier: 'JimmePrice',
        posted_day: '2022-11-19',
        expected_delivery_day: '2022-12-24',
        start_location: '390, Cote-Vertu Blvd, Montreal',
        end_location: '1069, Rte 117, Saint-Adele',
        rate: '1400',
        cargo: '25000'
    },
    {
        id: 3,
        shipper: 'Kalberto',
        carrier: 'JimmePrice',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-24',
        start_location: '1000, De La Gauchetiere St, Montreal',
        end_location: '444, Saint-George St, Mont-Tremblant',
        rate: '3200',
        cargo: '15000'
    },
    {
        id: 4,
        shipper: 'Kalberto',
        carrier: 'Jarad_Higgins',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-30',
        start_location: '237, Yonge St, Toronto',
        end_location: '930, Buchanan St, Montreal',
        rate: '8000',
        cargo: '45000'
    },
    {
        id: 5,
        shipper: 'Kalberto',
        carrier: '',
        posted_day: '2022-11-17',
        expected_delivery_day: '2023-01-21',
        start_location: '157, Dundas St, Toronto',
        end_location: '3121, Hochelaga Blvd, Quebec',
        rate: '8500',
        cargo: '55000'
    }
];