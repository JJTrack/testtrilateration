const node1 = {
    x: 1,
    y: 1
}

const node2 = {
    x: 15,
    y: 10
}

const node3 = {
    x: 1,
    y: 19
}

const beacon = {
    x: 6,
    y: 10
}

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

// Draw nodes
ctx.fillStyle = "#FF0000";
ctx.fillRect(node1.x * 20, node1.y * 20, 20, 20);
ctx.fillRect(node2.x * 20, node2.y * 20, 20, 20);
ctx.fillRect(node3.x * 20, node3.y * 20, 20, 20);

// Draw beacon
ctx.fillStyle = "#000000";
ctx.fillRect(beacon.x * 20, beacon.y * 20, 20, 20);


// Just using Two Cartesian dimensions, two measured slant ranges (Trilateration)

// r1 and r2 represent the distance from each node to the beacon after it has been converted from the RSSI value
let r1 = Math.sqrt(Math.pow(beacon.x - node1.x, 2) + Math.pow(beacon.y - node1.y, 2));
let r2 = Math.sqrt(Math.pow(node2.x - beacon.x, 2) + Math.pow(node2.y - beacon.y, 2));

// U is the distance between the nodes
let U = Math.sqrt(Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2));

let calculatedX = (Math.abs(Math.pow(r1, 2) - Math.pow(r2, 2)) + Math.pow(U, 2)) / (2 * U)



console.log(r1);
console.log(r2);
console.log(U);
console.log(beacon.x, calculatedX);



