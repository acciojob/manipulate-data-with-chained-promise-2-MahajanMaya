//your JS code here. If required.
function getArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterOddNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = arr.filter(number => number % 2 === 0);
            resolve(evenNumbers);
        }, 1000);
    });
}

function multiplyEvenNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = arr.map(number => number * 2);
            resolve(multipliedNumbers);
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const outputDiv = document.getElementById('output');

    getArray()
        .then((array) => {
            return filterOddNumbers(array);
        })
        .then((filteredArray) => {
            outputDiv.textContent = `Even numbers: ${filteredArray.join(', ')}`;
            return multiplyEvenNumbers(filteredArray);
        })
        .then((multipliedArray) => {
            outputDiv.textContent = `Multiplied numbers: ${multipliedArray.join(', ')}`;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
