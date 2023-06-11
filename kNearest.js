// Description: Given an array of numbers and a number, return the nearest number in the array.
let index = 0;

function kNearest(number) {
    let nearest = data[0];
    let nearestDistance = Math.abs(nearest - number);
    for (let i = 1; i < data.length; i++) {
        let distance = Math.abs(data[i] - number);
        if (distance < nearestDistance) {
            nearest = data[i];
            index = i;
            nearestDistance = distance;
        }
    }
    return index;
}

let labels = ['Corona', 'Budweiser', 'Leffe Blonde', 'Worthingtons Creamflow','Bud Light', 'Carlsberg Pilsner', 'Carling' , 'Coors', 'Stella Artois', 'San Miguel', 'Guinness' ]
let data = [4.41, 4.07, 4.72, 2.78, 3.00, 3.33, 3.97, 3,97, 4.29, 4.41, 3.75]