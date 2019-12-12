export const scrollNavigation = () => {
  let doc = document.documentElement;
  let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  if (top > 80) {
    document.querySelector('topnav').classList.add('nav-sticky');
  } else {
    document.querySelector('topnav').classList.remove('nav-sticky');
  }
};