const computeCoins = (coins, length, ammount, max) => {
    if (!ammount) {
        return {
            coins,
            nr: 0
        };
    }
    let rest = {
        coins,
        nr: max
    };
    for (let i=0; i<length; i++) {
        if (coins[i].value <= ammount && coins[i].quantity > 0) {
            
            const newCoins = coins.map(coin => ({
                ...coin,
                quantity: coin.id === coins[i].id ? coin.quantity - 1 : coin.quantity
            }));

            let subRest = minCoins(newCoins, length, ammount - coins[i].value, max);

            if (subRest.nr !== max && subRest.nr + 1 < rest.nr) {
                rest = {
                    ...subRest,
                    nr: subRest.nr + 1
                };
                break;
            }
        }
    }
    return rest;
};

const maximumChange = (coins, ammount) => {
    let max = 0;
    coins.map(coin => max += coin.quantity);
    return computeCoins(coins, coins.length, ammount, max);
};

console.log(maximumChange([
    { id: "0", quantity: 3, value: 5, label: "5 lei" },
    { id: "1", quantity: 4, value: 2, label: "2 lei" },
], 11));

console.log(maximumChange([
    { id: "0", quantity: 6, value: 0.5, label: "50 bani" },
    { id: "1", quantity: 4, value: 1, label: "1 leu" },
    { id: "2", quantity: 3, value: 5, label: "5 lei" },
    { id: "3", quantity: 2, value: 10, label: "10 lei" }
], 40));

// console.log(maximumChange([
//     { id: "0", quantity: 6, value: 0.5, label: "50 bani" },
//     { id: "1", quantity: 4, value: 1, label: "1 leu" },
//     { id: "2", quantity: 3, value: 5, label: "5 lei" },
//     { id: "3", quantity: 2, value: 10, label: "10 lei" }
// ], 40));

// console.log(maximumChange([
//     { id: "0", quantity: 6, value: 0.5, label: "50 bani" },
//     { id: "1", quantity: 4, value: 1, label: "1 leu" },
//     { id: "2", quantity: 3, value: 5, label: "5 lei" },
//     { id: "3", quantity: 2, value: 10, label: "10 lei" }
// ], 8));

// console.log(maximumChange([
//     { id: "0", quantity: 6, value: 0.5, label: "50 bani" },
//     { id: "1", quantity: 4, value: 1, label: "1 leu" },
//     { id: "2", quantity: 3, value: 5, label: "5 lei" },
//     { id: "3", quantity: 2, value: 10, label: "10 lei" }
// ], 4));

// console.log(maximumChange([
//     { id: "0", quantity: 2, value: 0.5, label: "50 bani" },
//     { id: "1", quantity: 4, value: 1, label: "1 leu" },
//     { id: "2", quantity: 3, value: 5, label: "5 lei" },
//     { id: "3", quantity: 2, value: 10, label: "10 lei" }
// ], 1.7));