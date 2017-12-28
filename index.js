//Users Data
const users = require("./users");

//Loans
const loans = require("./loans");

//Assignment 1 - Calculate how much debt does Logan Hudson have?

//Soliution 1

function findUserByFullName(first,last,users){
    const user = users.filter((usr)=>{
        return usr.name.first === first && usr.name.last === last;
    });
    if(user[0]){
        return user[0]
    }else{
        throw new Error("User do no exist")
    }
}

function getUserLoans(id,loans){
    return loans.filter((loan)=>{
        return loan.id === id;
    });
}

function getDebt(id,loans){
    const userLoans = getUserLoans(id,loans);
    return userLoans.reduce((currentSum,loan)=>{
        currentSum += parseFloat(loan.loan);
        return currentSum;
    },0);
}

try{
    const user = findUserByFullName("Logan","Hudson",users);
    const debt = getDebt(user.id,loans);
    console.log(debt);
}catch(e){
    console.log(e.message)
}
