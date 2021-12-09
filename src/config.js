const layersOrder = [
    { name: '1-background', number: 5 },
    { name: '2-body', number: 4 },
    { name: '3-shirt', number: 4 },
    { name: '4-pants', number: 4 },
    { name: '5-sneaker', number: 4 },
    { name: '6-hat', number: 4 },
    { name: '7-accessories', number: 4 },
];
  
const format = {
    width: 3000,
    height: 3000
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 3300;

module.exports = { layersOrder, format, rarity, defaultEdition };