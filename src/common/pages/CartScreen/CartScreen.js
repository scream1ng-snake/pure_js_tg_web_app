import { Page } from "../../core";

export class CartPage extends Page {
  static text = {
    MainTitle: 'Cart Page',
  };

  constructor(id) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(CartPage.text.MainTitle);
    this.container.append(title);
    return this.container;
  }
};