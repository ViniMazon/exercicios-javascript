let family = {
    incomes: [2500, 3200, 250.43, 360.65],
    expenses: [320.32, 123.43, 167.32, 1450.00]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses;

    const itsOk = total >= 0
    let message = "negativo"

    if(itsOk){
        message = "positivo"
    }

    console.log(`Seu saldo é ${message}: R$ ${total.toFixed(2)}`)
}

calculateBalance();