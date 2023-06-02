import { Component, Routes } from '../core';

const Buttons = [
  {
    id: Routes.MainPage,
    text: 'Main Page',
  },
  {
    id: Routes.CartPage,
    text: 'Cart Page',
  },
  {
    id: Routes.ProfilePage,
    text: 'Profile Page',
  },
];

export class Header extends Component {
  constructor(tagName, className) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}
