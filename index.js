const node1 = {
    x: 0,
    y: 0,
    z: 0
}

const node2 = {
    x: 0,
    y: 19,
    z: 0
}

const node3 = {
    x: 19,
    y: 0,
    z: 0
}

const beacon = {
    x: 6,
    y: 10,
    z: 0
}

let c1 = document.getElementById("myCanvasOne");
let ctx = c1.getContext("2d");

let c2 = document.getElementById("myCanvasTwo");
let ctx2 = c2.getContext("2d");

// Draw nodes
ctx.fillStyle = "#FF0000";
ctx.fillRect(node1.x * 20, node1.y * 20, 20, 20);
ctx.fillRect(node2.x * 20, node2.y * 20, 20, 20);
ctx.fillRect(node3.x * 20, node3.y * 20, 20, 20);

// Draw beacon
ctx.fillStyle = "#000000";
ctx.fillRect(beacon.x * 20, beacon.y * 20, 20, 20);


// Just using Three Cartesian dimensions, three measured slant ranges

// r1 and r2 represent the distance from each node to the beacon after it has been converted from the RSSI value
let r1 = Math.sqrt(Math.pow(beacon.x - node1.x, 2) + Math.pow(beacon.y - node1.y, 2) + Math.pow(beacon.z - node1.z, 2));

// U is the distance between the node1 and node2 x
let U = Math.sqrt(Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2));
let r2 = Math.sqrt(Math.pow(node2.x - beacon.x, 2) + Math.pow(node2.y - beacon.y, 2) +  Math.pow(node2.z - beacon.z, 2));
let r3 = Math.sqrt(Math.pow(node3.x - beacon.x, 2) + Math.pow(node3.y - beacon.y, 2) +  Math.pow(node3.z - beacon.z, 2));
let rx = 19;
let ry = node2.y - node1.y;

let calculatedX = ((Math.pow(r1, 2) - Math.pow(r3, 2)) + Math.pow(rx, 2)) / (rx*2);
let calculatedY = ((Math.pow(r1, 2) - Math.pow(r2, 2)) + Math.pow(ry, 2)) / (ry*2);



console.log(r1);
console.log(r2);
console.log(r3);
console.log(U);
console.log(calculatedX, calculatedY);


// Draw beacon
ctx2.fillStyle = "#00FF00";
ctx2.fillRect(calculatedX * 20, calculatedY * 20, 20, 20);

