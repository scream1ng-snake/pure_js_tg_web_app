export class Component {
  container;

  constructor(tagName, className) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  render() {
    return this.container;
  }
}