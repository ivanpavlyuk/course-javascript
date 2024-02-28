import pages from './pages';
import('./styles.css');
import getRandomElement from './model';

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
  pages.openPage(getRandomElement(pageNames));
});
