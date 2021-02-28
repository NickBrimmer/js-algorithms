function depositProfit(deposit, rate, threshold) {
    const annualInterest = rate / 100;
    let answer = 0;
    let account = deposit;
    
    while(account < threshold){
        answer++
        const interest = account * annualInterest;
        
        account += interest
    }

    return answer;
}

console.log(depositProfit(100, 20, 170));