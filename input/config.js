const fs = require("fs");
const width = 3000;
const height = 3000;
const dir = __dirname;
const description = "This is an open source NFT generate from the folder structure made by the Octagon NFT Generator.";
const baseImageUri = "https://nft.octagon.mn";
const startEditionFrom = 1;
const endEditionAt = 3300;
const editionSize = 3300;
const raceWeights = [
  {
    value: "buha",
    from: 1,
    to: editionSize,
  },
];

const races = {
  buha: {
    name: "Buha",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 0,
            name: "Blue",
            path: `${dir}/1-background/Blue.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Cyan",
            path: `${dir}/1-background/Cyan.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Orange",
            path: `${dir}/1-background/Orange.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Purple",
            path: `${dir}/1-background/Purple.png`,
            weight: 100,
          },
          {
            id: 4,
            name: "Red",
            path: `${dir}/1-background/Red.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Body",
        elements: [
          {
            id: 0,
            name: "Blue",
            path: `${dir}/2-body/Blue.png`,
            weight: 50,
          },
          {
            id: 1,
            name: "Gray",
            path: `${dir}/2-body/Gray.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Orange",
            path: `${dir}/2-body/Orange.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Red",
            path: `${dir}/2-body/Red.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Shirt",
        elements: [
          {
            id: 0,
            name: "Shirt-1",
            path: `${dir}/3-shirt/Shirt-1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Shirt-2",
            path: `${dir}/3-shirt/Shirt-2.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "Shirt-3",
            path: `${dir}/3-shirt/Shirt-3.png`,
            weight: 50,
          },
          {
            id: 3,
            name: "Shirt-4",
            path: `${dir}/3-shirt/Shirt-4.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Pants",
        elements: [
          {
            id: 0,
            name: "Pants-1",
            path: `${dir}/4-pants/Pants-1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Pants-2",
            path: `${dir}/4-pants/Pants-2.png`,
            weight: 50,
          },
          {
            id: 2,
            name: "Pants-3",
            path: `${dir}/4-pants/Pants-3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Pants-4",
            path: `${dir}/4-pants/Pants-4.png`,
            weight: 100,
          },
          
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Sneaker",
        elements: [
          {
            id: 0,
            name: "Sneaker-1",
            path: `${dir}/5-sneaker/Sneaker-1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Sneaker-2",
            path: `${dir}/5-sneaker/Sneaker-2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Sneaker-3",
            path: `${dir}/5-sneaker/Sneaker-3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Sneaker-4",
            path: `${dir}/5-sneaker/Sneaker-4.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Hat",
        elements: [
          {
            id: 0,
            name: "Hat-1",
            path: `${dir}/6-hat/Hat-1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Hat-2",
            path: `${dir}/6-hat/Hat-2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Hat-3",
            path: `${dir}/6-hat/Hat-3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Hat-4",
            path: `${dir}/6-hat/Hat-4.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Accessories",
        elements: [
          {
            id: 0,
            name: "Accessories-1",
            path: `${dir}/7-accessories/Accessories-1.png`,
            weight: 100,
          },
          {
            id: 1,
            name: "Accessories-2",
            path: `${dir}/7-accessories/Accessories-2.png`,
            weight: 100,
          },
          {
            id: 2,
            name: "Accessories-3",
            path: `${dir}/7-accessories/Accessories-3.png`,
            weight: 100,
          },
          {
            id: 3,
            name: "Accessories-4",
            path: `${dir}/7-accessories/Accessories-4.png`,
            weight: 100,
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
};
