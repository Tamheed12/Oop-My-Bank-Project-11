import inquirer from "inquirer";
class Bankaccount {
    accountNumber;
    Balance;
    constructor(accountnumber, balance) {
        this.accountNumber = accountnumber;
        this.Balance = balance;
    }
    //debit money
    withdraw(amoount) {
        if (this.Balance >= amoount) {
            const remain = this.Balance -= amoount;
            console.log(`You Withdraw $${amoount}
Now your corrent Balance $${remain}`);
        }
        else {
            console.log(`Your amount is greater then Your balance`);
        }
    }
    //credit money
    deposit(amount) {
        if (amount > 200) {
            amount -= 1;
            console.log(`Your amount is greater then $200 .
wee get 1% over $100 now your deposit amount is $${amount}`);
        }
        this.Balance += amount;
        console.log(`deposit succefully
Now your balance $${this.Balance}`);
    }
    checkBalance() {
        console.log(`Your current balance $${this.Balance}`);
    }
}
class customer {
    Name;
    lastName;
    account;
    constructor(firstName, Last, account) {
        this.Name = firstName;
        this.lastName = Last;
        this.account = account;
    }
}
const account = [
    new Bankaccount(2, 733),
    new Bankaccount(3, 73003),
    new Bankaccount(4, 693),
    new Bankaccount(5, 341)
];
const customers = [
    new customer('Ali', 'Asfand', account[0]),
    new customer('Atif', 'Asif', account[1]),
    new customer('Arsalan', 'Faraz', account[2]),
    new customer('Irfan', 'Hamza', account[3])
];
async function service() {
    do {
        let accountNumber = await inquirer.prompt({
            name: 'acconum',
            type: "input",
            message: 'Enter your account number :    '
        });
        let customer = customers.find(cus => cus.account.accountNumber == accountNumber.acconum);
        if (customer) {
            console.log(`Welcome ${customer.Name} ${customer.lastName}
                    `);
            let ans = await inquirer.prompt({
                name: 'select',
                type: 'list',
                message: 'Select anyone ',
                choices: ['Deposit', 'Withdraw', 'Check Blance', 'Exit']
            });
            switch (ans.select) {
                case 'Deposit':
                    let deposit = await inquirer.prompt({
                        name: 'amount',
                        type: 'number',
                        message: 'Enter your Deposit amount :    '
                    });
                    customer.account.deposit(deposit.amount);
                    break;
                case 'Withdraw':
                    let Withdraw = await inquirer.prompt({
                        name: 'amount',
                        type: 'number',
                        message: 'Enter your Withdraw amount :    '
                    });
                    customer.account.withdraw(Withdraw.amount);
                    break;
                case 'Check Blance':
                    customer.account.checkBalance();
                    break;
                case 'Exit':
                    console.log(`Exiting from Bank.......
Thank You ! 
This Program is create by\n\t Tamheed Tariq`);
                    return;
            }
        }
        else {
            console.log(`Please enter correct account number`);
        }
    } while (true);
}
service();
