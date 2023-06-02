import './styles.css';
import { Header } from './common/components';
import { ErrorCodes, Routes } from './common/core';
import { Pages } from './common/pages';

class App {
  /** Хэдер */
  header;
  /** контентная часть */
  static container;

  static currentPage = Routes.MainPage;

  static renderPage(toPage) {
    const currentPageHTML = document.querySelector(`#${App.currentPage}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page = null;

    switch (toPage) {
      case Routes.MainPage: 
        page = new Pages.Main(toPage); 
        break;
      case Routes.CartPage: 
        page = new Pages.Cart(toPage); 
        break;
      case Routes.ProfilePage: 
        page = new Pages.Profile(toPage); 
        break;
      default:
        page = new Pages.Error(toPage, ErrorCodes.NOT_FOUND);
        break;
    }

    App.currentPage = toPage; // todo this

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.currentPage;
      App.container.append(pageHTML);
    }
  }

  listenBrowserUrl() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderPage(hash);
    });
  }

  constructor() {
    App.container = document.body;
    this.header = new Header('header', 'header-container');
  }

  run() {
    App.container.append(this.header.render());
    App.renderPage(Routes.MainPage);
    this.listenBrowserUrl();
  }
}

const app = new App();
app.run();