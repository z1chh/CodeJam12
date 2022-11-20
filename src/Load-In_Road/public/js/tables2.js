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



const getUser = (email) =>
{
    if (userExists(email))
    {
        let user = USERS[0];
        USERS.forEach((cur) =>
        {
            if (cur.email === email)
            {
                user = cur;
            }
        })
        return user;
    }
    return null;
}

const createUser = (username, email, password, is_shipper) =>
{
    if (userExists(email))
    {
        return false;
    }
    const newUser =
    {
        username: username,
        email: email,
        password: password,
        is_shipper: is_shipper === "B"? true: false
    };

    USERS.push(newUser);
    return true;
}

const getJobs = (email) =>
{
    let user = getUser(email);
    if (user !== null)
    {
        let jobs = [];
        if (user.is_shipper)
        {
            JOBS.forEach((job) =>
            {
                if (job.shipper === user.username)
                {
                    jobs.push(job);
                }
            });
        }
        else
        {
            JOBS.forEach((job) =>
            {
                if (job.carrier === user.username)
                {
                    jobs.push(job);
                }
            });
        }
        return jobs;
    }
    return null;
}

// USERS
let USERS = [
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
        username: 'LKC',
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
    },
    {
        id: 7,
        username: 'Kadriel',
        email: 'sepenguin@gmail.com',
        is_shipper: true
    }
];

let JOBS = [
    {
        id: 1,
        shipper: 'LKC',
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
        shipper: 'LKC',
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
    },
    {
        id: 6,
        shipper: 'Kadriel',
        carrier: 'Charlton_Howard',
        posted_day: '2022-11-19',
        expected_delivery_day: '2022-11-19',
        start_location: '5882, 2e Avenue, Montreal',
        end_location: '5873, 4e Avenue, Montreal',
        rate: '100',
        cargo: '75'
    },
    {
        id: 7,
        shipper: 'Kadriel',
        carrier: 'Charlton_Howard',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-20',
        start_location: '5882, 2e Avenue, Montreal',
        end_location: '5873, 4e Avenue, Montreal',
        rate: '100',
        cargo: '100'
    },
    {
        id: 8,
        shipper: 'Kadriel',
        carrier: '',
        posted_day: '2022-11-20',
        expected_delivery_day: '2022-11-20',
        start_location: '5882, 2e Avenue, Montreal',
        end_location: '5873, 4e Avenue, Montreal',
        rate: '100',
        cargo: '200'
    },
    {
        id: 9,
        shipper: 'LKC',
        carrier: 'Jarad_Higgins',
        posted_day: '2022-10-15',
        expected_delivery_day: '2022-11-21',
        start_location: '3200, Chemin de la Cote-Sainte-Catherine, Montreal',
        end_location: '2685, King O Avenue, Sherbrooke',
        rate: '8000',
        cargo: '15000'
    }
];



let list_sh = document.getElementById("shipper_jobs");
console.log("0");
JOBS.forEach((item)=>{
    if (item.shipper == 'LKC'){
        let a = document.createElement("a");
        a.href="../assets/geo/geo.html";
        a.target="_blank";
        let li = document.createElement("li");
        li.innerText =  `JobID: ${item.id}, Shipper: ${item.shipper}, Carrier: None\n` +
                        `Posted Date: ${item.posted_day}, Expected Delivery Date: ${item.expected_delivery_day}\n` +
                        `Start Location: ${item.start_location}, End Location: ${item.end_location}\n` +
                        `Rate: ${item.rate}$, Cargo: ${item.cargo}lbs`;
        list_sh.appendChild(li); 
        list_sh.appendChild(a);
    }
})
//put var up there to see
console.log("1");
var input_user = document.getElementById("signupUser").value;
var input_email = document.getElementById("signupEmail").value;
var input_pass = document.getElementById("signupPass").value;
var type; 
if (document.getElementById('rdbRole1').checked){type = "C"}
else{type = "B"}
var input_userL = document.getElementById("loginUser").value;
var input_passL = document.getElementById("loginPass").value;
console.log("2");

// let list_tk = document.getElementById("taken_jobs");
// console.log("3");
// let user = getUser(input_userL);
// console.log("4");
// JOBS.forEach((item)=>{
//     if (item.carrier == user.name){
//         let li = document.createElement("li");
//         li.innerText =  "JobID:" + item.id + " , " + "Shipper:" + item.shipper + " , " + "Carrier:" + "None" + "\n" +
//                         "Posted Date:" + item.posted_day + " , " + "Expected Delivery Date:" + item.expected_delivery_day + "\n" + "Start Location:" + item.start_location + " , " +
//                         "End Location:" + item.end_location + "\n" + "Rate:" + item.rate + " , " + "Cargo:" + item.cargo;
//         list_tk.appendChild(li); 
//     }
// })