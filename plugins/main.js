/* Menu Active / Current page*/
export default ({ app }, inject) => {
    inject(
      'currentMenu', (string) => document.querySelector('nav a[href^="/' + location.pathname.split("/")[1] + '"]')
      .parentElement.classList.add(string)
      );
  };