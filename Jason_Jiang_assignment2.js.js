const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
];

function Q1(itemsObject) {
    const objs = JSON.parse(JSON.stringify(itemsObject));
    for (const obj of objs) {
        obj["quantity"] = obj["quantity"] * 2;
        obj["price"] = obj["price"] * 2;
    }
    console.log(objs)
}
Q1(itemsObject)

function Q2(itemsObject) {
    const objs = JSON.parse(JSON.stringify(itemsObject));
    let clone = [];
    for (const obj of objs) {
        if (obj["quantity"] > 2 && obj["price"] > 300) {
            clone.push(obj);
        }
    }
    console.log(clone)
}
Q2(itemsObject)

const Q3 = (itemsObject) => {
    const objs = JSON.parse(JSON.stringify(itemsObject));
    let sum = 0;
    for (const obj of objs) {
        sum += obj["quantity"] * obj["price"]
    }
    console.log(sum)
}

Q3(itemsObject)

function Q4(str) {
    return str.replace(/[^a-zA-Z]/g,"").toLowerCase();
}
const string =
    'Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ';
console.log(Q4(string));
