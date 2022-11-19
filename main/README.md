# CodeJam12 Team Penguins

## Sketch
- Premium : Users willing to share location (truckers) & rate (brokers)

- Non-Premium : Basic 

- Extra ideas : money from brokers to medium -> check trucker location -> if location arrived 
			-> pay from medium directly -> otherwise give back to brokers



## FRONT-END
- Signup/Login 
- Broker or Trucker depending on login info

BROKER
- Buttons : Upload job, Remove job, Edit job, View jobs
- Jobs (Job ID, Broker ID, Trucker ID, Posted Date, Expected Date, Start Location, End Location, Rates, Cargo)

TRUCKER
- Buttons : View jobs, Taken jobs, Edit taken jobs
- Jobs (Job ID, Broker ID, Trucker ID, Posted Date, Expected Date, Start Location, End Location, Rates, Cargo)

- Location -> Google maps live location -> update each time


## BACK-END
- TABLES 	- USERS 	(name, email, passward, type (bool))
		- TRUCKERS	(cargo max weight)
		- BROKERS	()
		- JOBS	(JOBS ID, Truckers ID, Brokers ID, Posted Date, Expected Date, Start Location, End Location, Rates, Cargo)

## npm Installs
- moment
- express
- uuid
- express-handlebars
- path
- nodemon (-D)
- mongoDB
- morgan

## Notes
Jobs is incomplete, make sure paths are correct, postman requests must be valid and correct

No actual DBMS implementation, using arrays (meaning restarting code => reset - data lost)

Tables are incomplete, simple implementation to test program for now, add missing details
