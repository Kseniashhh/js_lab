// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
	['home','510-867-5309'],
	['mobile', '415-555-1212'],
	['business', '415-123-4567']
	]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function displayAccountInfo(name, number, bizName){
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number: ${number}`);
	console.log(`Business Name: ${bizName}`);
}

// Add function to print all addresses, including a header

function showAddresses(addresses){
	console.log(`Addresses:`);
	for (let address of addresses){
		console.log(address);
	}
}


// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers){
	console.log(`Phone Numbers:`);
	for (let keyValue of phoneNumbers){
		console.log(`${keyValue[0]}: ${keyValue[1]}`);
	}
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const transactions = new Map();


// Add function to add transactions
function addTransaction(date,amount){
	transactions.set(date,amount);
}


// Use the function to add transactions

addTransaction('May-2',-500);
addTransaction('May-13',1200);
addTransaction('May-15',-100);
addTransaction('May-21',-359);
addTransaction('May-29',2200);

// Add function to show balance status

function showBalanceStatus(balance){
	if (balance < 0){
		console.log(`YOU ARE OVERDRAWN`);
	} else if (balance < 20){
		console.log(`Warning: You are close to zero balance`);
	} else{
		console.log(`Thank you for your business`);
	}

}

// Add function to show transactions

function showTransactions(transactions,balance){
	console.log(`Starting balance is ${balance}`);
	let type;
	for (let [date,amount] of transactions){
		if (amount < 0){
			type = 'withdrawal';
		} else {
			type = 'deposit';
		}

		balance += amount;

		if (balance < 0){
			balance -= 25;
			console.log(`A $25 fee has been charged as your balance is below 0.`)
		}

		console.log(`${date}, ${type}, ${amount}, ${balance}`);

	}

	console.log(`Your current balance is ${balance}`)
	showBalanceStatus(balance)

}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customerInfo = {
	accountHolder: accountHolder,
	accountNumber: accountNumber,
	businessName: businessName,
	address: addresses,
	phoneNumbers: phoneNumbers,
	transactions: transactions,
	startingBalance: 26000
};


// Function to add customer attributes

function addAttributes(melon='Cantaloupe', numPets=0){
	customerInfo.favMelon = melon;
	customerInfo.numPets = numPets;
}



// Add attributes for this user
addAttributes('Casaba',2);


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate

function BusinessLoan(annualIncome, customerInfo){
	let preferred;
	if (customerInfo.favMelon === 'Casaba' || customerInfo.numPets > 5 ){
		customerInfo.preferred = true;
	} else {
		customerInfo.preferred = false;
	}

	let rate;
	if (annualIncome < 100000 && preferred === true){
		rate = 0.05;
	} else if (annualIncome < 100000 && preferred === false){
		rate = 0.08; 
	} else if (annualIncome >= 100000 && annualIncome <= 200000 && preferred === true){
		rate = 0.04;
	} else if (annualIncome >= 100000 && annualIncome <= 200000 && preferred === false){
		rate = 0.07;
	} else {
		rate = 0.04;
	}

	console.log(rate);
	
}


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report

function AccountReport(customerInfo){
	for (let k in customerInfo){
		console.log(`${k} is ${customerInfo[k]}`);
	}

	if (customerInfo.preferred === true){
		console.log(`Congratulations on being a premiere customer!`);
	}
}



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
customerAddresses = new Map([
	['Mel Melitipolski', '707 Birch Street'],
	['Barbara Brown', '8997 Jones Street']
	]);

// Write a function to return the address of a given person

function getAddress(name){
	console.log(customerAddresses.get(name));
}

// Add a function to create an employee schedule for the week 

const empList = ['a', 'b', 'c', 'd', 'd']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function employeeSchedule(){
	let newlist = empList.slice();

	for (let i=0, i)



}

// Add a function for weekly hours




