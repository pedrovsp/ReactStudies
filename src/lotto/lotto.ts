// Generate an array with 7 unique random numbers

export default function generateLottoNumbers(quantity: number): number[] {
    let resultArray: number[] = []

    while (resultArray.length < quantity) {
        let newNumber = randomIntFromInterval(1, 60);
        if (!resultArray.find(item => newNumber === item)) {
            resultArray.push(newNumber)
        }
    }

    return resultArray.sort((n1, n2) => n2 - n1);
}

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}