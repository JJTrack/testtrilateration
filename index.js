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
    x: 7,
    y: 16,
    z: 0
}

const calc = {
    x: 7,
    y: 16,
    z: 0,
    r1: 0,
    r2: 0,
    r3: 0   
}

let c1 = document.getElementById("myCanvasOne");
let ctx = c1.getContext("2d");

let c2 = document.getElementById("myCanvasTwo");
let ctx2 = c2.getContext("2d");

let nodes = [node1, node2, node3];


let updateCalculation = () => {

    // Just using Three Cartesian dimensions, three measured slant ranges

    // r1 and r2 represent the distance from each node to the beacon after it has been converted from the RSSI value
    calc.r1 = Math.sqrt(Math.pow(beacon.x - node1.x, 2) + Math.pow(beacon.y - node1.y, 2) + Math.pow(beacon.z - node1.z, 2));
    calc.r2 = Math.sqrt(Math.pow(node2.x - beacon.x, 2) + Math.pow(node2.y - beacon.y, 2) +  Math.pow(node2.z - beacon.z, 2));
    calc.r3 = Math.sqrt(Math.pow(node3.x - beacon.x, 2) + Math.pow(node3.y - beacon.y, 2) +  Math.pow(node3.z - beacon.z, 2));

    let rx = node3.x - node1.y;
    let ry = node2.y - node1.y;

    calc.x = ((Math.pow(calc.r1, 2) - Math.pow(calc.r3, 2)) + Math.pow(rx, 2)) / (rx*2);
    calc.y = ((Math.pow(calc.r1, 2) - Math.pow(calc.r2, 2)) + Math.pow(ry, 2)) / (ry*2);

}



let drawNodesAndBeacons = (nodes) => {

    nodes.forEach(node => {
        // Draw nodes
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(node.x * 20, node.y * 20, 20, 20); 
    });

    // Draw beacon
    ctx.fillStyle = "#000000";
    ctx.fillRect(beacon.x * 20, beacon.y * 20, 20, 20);

}

let updateBeaconPosition = () => {
    let xVal = document.getElementById("quantityX").value;
    let yVal = document.getElementById("quantityY").value;
    

    if (xVal.length > 0) beacon.x = xVal;
    if (yVal.length > 0) beacon.y = yVal;
    
    console.log();
    ctx.clearRect(0, 0, c1.width, c1.height);
    ctx2.clearRect(0, 0, c2.width, c2.height);
    
    updateCalculation();
    updateSecondCanvas();
    drawNodesAndBeacons(nodes);
}

let updateSecondCanvas = () => {
    // Second canvas
    // Draw beacon
    ctx2.fillStyle = "#00FF00";
    ctx2.fillRect(calc.x * 20, calc.y * 20, 20, 20);

    // Draw nodes with radiuses
    ctx2.beginPath();
    ctx2.arc(node1.x, node1.y, calc.r1*20, 0, 2 * Math.PI, false);
    ctx2.strokeStyle = '#003300';
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(node2.x * 20, node2.y * 20, calc.r2*20, 0, 2 * Math.PI, false);
    ctx2.strokeStyle = '#00FFFF';
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(node3.x * 20, node3.y * 20, calc.r3*20, 0, 2 * Math.PI, false);
    ctx2.strokeStyle = '#FF0000';
    ctx2.stroke();
}


drawNodesAndBeacons(nodes);
updateCalculation();
updateSecondCanvas();





console.log(calc.r1);
console.log(calc.r2);
console.log(calc.r3);
console.log(beacon.x, beacon.y);
console.log(calc.x, calc.y);




