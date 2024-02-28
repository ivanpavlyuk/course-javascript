const pagesMap = {
  login: '.page-login',
  main: '.page-main',
  profile: '.page-profile',
};

export default {
  openPage(name) {
    for (const key in pagesMap) {
      const pageClassList = document.querySelector(pagesMap[key]).classList;
      const isHidden = pageClassList.contains('hidden');

      if (key === name && isHidden) {
        pageClassList.remove('hidden');
      } else if (key !== name && !isHidden) {
        pageClassList.add('hidden');
      }
    }
  },
};
