// Start
// 
// INPUT
// input = [
//     [name],
//     [city],
//     [day],
//     [destination]
// ]
// discount = 0.3; // Sabtu & Minggu
// destination = ['Jakarta', 'Bandung', 'Bali'];

// Output Sample
// Thank you ben for using our services,..
// ..your destination is Bali and your price is Rp.1200000

// Price List
function countPrice(dataBooking) {
    let price = 0;
    let priceTable = {
        'Jakarta': {
            'Bali': 1200000,
            'Bandung': 500000,
        },

        'Bandung': {
            'Jakarta': 500000,
            'Bali': 700000,
        },

        'Bali': {
            'Jakarta': 1200000,
            'Bandung': 700000
        }
    }


    ///discount counting
    if (day === 'saturday' || day === 'sunday') {
        if (price > 0) {
            price = price - ((0.3) * price);
        }
    }
    return price;
}


// function submitData(event) {
//     event.preventDefault()
//     let nameValue = document.getElementById("name").value;
//     let destinationValue = document.getElementById("destination").value;
//     console.log(destinationValue)
// }

document.getElementById("input").addEventListener("click", function (event) {
    event.preventDefault()  // Menghindari refresh
    let nameValue = document.getElementById("name").value;
    let originValue = document.getElementById("origin").value;
    let destinationValue = document.getElementById("destination").value;
    let dayValue = document.getElementById("day").value;
    let output = document.getElementById("container-hasil");
    let outputWord = document.getElementById("hasil");
    output.style.visibility = "visible";

    // INPUT
    let input = {
        name: nameValue,
        origin: originValue,
        destination: destinationValue,
        day: dayValue
    }

    // ROW DATA
    let price = 0;
    let result = "";
    let priceTable = {
        'Jakarta': {
            'Bali': 1200000,
            'Bandung': 500000,
        },
        'Bandung': {
            'Jakarta': 500000,
            'Bali': 700000,
        },
        'Bali': {
            'Jakarta': 1200000,
            'Bandung': 700000
        }
    }

    // PROCESS
    for (let key in priceTable) {
        if (key === input.origin) {
            for (let dest in priceTable[key]) {
                if (dest === input.destination) {
                    price = priceTable[key][dest];
                }
            }
        }
    }
    ///Discount
    if (input.day === 'saturday' || input.day === 'sunday') {
        if (price > 0) {
            price = price - ((0.3) * price);
        }
    }
    result = `Thank you ${input.name} for using our services, your destination is ${input.destination} and your price is Rp.${price},-`
    // Same Place
    if (price === 0) {
        result = "You are currently here";
    }
    // Blank Name
    if (input.name.length === 0 || input.name === undefined) {
        result = "You have not write your name yet"
    }
    console.log(result);
    outputWord.innerText = result
    return result
});
