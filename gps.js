const S2 = require('s2-geometry').S2;

// Define your latitude and longitude
const combined = [40.654158, -73.968048]

const lat = combined[0];
const lng = combined[1];

const level = 8; // Change to create bigger or smaller components

// find key
var key = S2.latLngToKey(lat, lng, level);

// find neighbors
var neighbors = S2.latLngToNeighborKeys(lat, lng, level);
// [ keyDown, keyRight, keyUp, keyLeft ]

// find top_right, top_left, bottom_right, bottom_left
const keyUp = S2.keyToLatLng(neighbors[2]);
const top_neighbors = S2.latLngToNeighborKeys(keyUp["lat"], keyUp["lng"], level);
top_right = top_neighbors[1]
top_left = top_neighbors[3]

const keyDown = S2.keyToLatLng(neighbors[0]);
const down_neighbors = S2.latLngToNeighborKeys(keyDown["lat"], keyDown["lng"], level);
bottom_right = down_neighbors[1]
bottom_left = down_neighbors[3]



const key1 = top_left
const key2 = neighbors[2]
const key3 = top_right

const key4 = neighbors[3]
const key5 = key
const key6 = neighbors[1]

const key7 = bottom_left
const key8 = neighbors[0]
const key9 = bottom_right

console.log(key1, key2, key3, key4, key5, key6, key7, key8, key9)


//var id = S2.keyToId(key);
//var key = S2.idToKey(id);
// you can save the ids in a database






