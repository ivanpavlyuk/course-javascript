// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

// Для тестов
// const photosDB = require('./photos.json');
// const friendsDB = require('./friends.json');

export default {
  getRandomElement(array) {
    const index = parseInt(Math.random() * array.length);
    return array[index];
  },
  getNextPhoto() {
    const index = parseInt(Math.random() * friendsDB.length);
    const friend = friendsDB[index];

    const photoIndex = parseInt(Math.random() * photosDB[index].length);
    const photo = photosDB[index][photoIndex];

    return {
      friend,
      url: photo.url,
    };
  },
};
