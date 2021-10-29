import { PHISHING_IMAGES, LEGITIMATE_IMAGES } from "./img";
import { IMAGE_COUNTS, IMAGE_PICK_LIMITS } from "../constants";

const getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// Durstenfeld shuffle.
// https://stackoverflow.com/a/12646864
const shuffle = (arr) => {
    const newArr = [...arr];

    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }

    return newArr;
};

export const getImages = () => {
    const { PHISH_IMAGE_COUNT, LEGIT_IMAGE_COUNT } = IMAGE_COUNTS;
    const { PHISH_PICK_LIMIT, LEGIT_PICK_LIMIT } = IMAGE_PICK_LIMITS;

    let temp = [...PHISHING_IMAGES];
    const images = [];

    // Pick PHISH_PICK_LIMIT number of phishing images and add them to the images array.
    for (let i = 0; i < PHISH_PICK_LIMIT; i++) {
        const randIndex = getRandomIndex(0, PHISH_IMAGE_COUNT - i);

        images.push(temp[randIndex]);
        temp.splice(randIndex, 1);
    }

    temp = [...LEGITIMATE_IMAGES];

    // Pick LEGIT_PICK_LIMIT number of legitimate images and add them to the images array.
    for (let i = 0; i < LEGIT_PICK_LIMIT; i++) {
        const randIndex = getRandomIndex(0, LEGIT_IMAGE_COUNT - i);
        
        images.push(temp[randIndex]);
        temp.splice(randIndex, 1);
    }

    return shuffle(images);
}
