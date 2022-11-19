# CodeJam12
- Premium : Users willing to share location (truckers) & rate (brokers)

- Non-Premium : Basic 

- Extra ideas : money from brokers to medium -> check trucker location -> if location arrived 
			-> pay from medium directly -> otherwise give back to brokers



FRONT-END
- Signup/Login 
- Broker or Trucker depending on login info

BROKER
- Buttons : Upload job, Remove job, Edit job, View jobs
- Jobs (Job ID, Broker ID, Trucker ID, Posted Date, Expected Date, Start Location, End Location, Rates, Cargo)

TRUCKER
- Buttons : View jobs, Taken jobs, Edit taken jobs
- Jobs (Job ID, Broker ID, Trucker ID, Posted Date, Expected Date, Start Location, End Location, Rates, Cargo)

- Location -> Google maps live location -> update each time


BACK-END
- TABLES 	- USERS 	(name, email, passward, type (bool))
		- TRUCKERS	(cargo max weight)
		- BROKERS	()
		- JOBS	(JOBS ID, Truckers ID, Brokers ID, Posted Date, Expected Date, Start Location, End Location, Rates, Cargo)