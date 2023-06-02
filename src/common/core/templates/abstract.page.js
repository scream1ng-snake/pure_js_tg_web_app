export class Page {
  container;
  static text = {};

  constructor(id) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  createHeaderTitle(text) {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  render() {
    return this.container;
  }
}