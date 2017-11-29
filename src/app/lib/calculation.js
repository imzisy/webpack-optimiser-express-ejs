export function update(rates,amount,islamic,tenure) {
    console.log("I'm getting called from calculation lib");
    let loans = [];    
    for (let i = 0; i<rates.length; i++){
        let loan = rates[i];
        let installment = calculateInstallment(loan.InterestRate,amount,tenure)
        if(filterProduct(loan, islamic)) {
            loans.push({...loan, installment});
        }
    }
    return {
        rates : loans,
        amount : amount,
        islamic : islamic,
        tenure : tenure
    };
}

export function calculateInstallment(InterestRate,amount,tenure) {
    let principalInstallment = amount / (tenure * 12);
    let installment = InterestRate + principalInstallment;
    return installment;
}    

export function filterProduct(loan,islamic) {
   if(islamic == loan.islamic){
        return true;
    }
    else{
        return false
    }
}    