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

