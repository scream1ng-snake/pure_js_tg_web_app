import { Page } from "../../core";

export class MainPage extends Page {
  static TextObject = {
    MainTitle: 'Main Page',
  };

  constructor(id) { super(id) }

  render() {
    const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}