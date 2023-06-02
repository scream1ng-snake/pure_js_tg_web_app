import { Page } from "../../core";

export class ProfilePage extends Page {
  static text = {
    MainTitle: 'Profile Page',
  };

  constructor(id) { super(id) }

  render() {
    const title = this.createHeaderTitle(ProfilePage.text.MainTitle);
    this.container.append(title);
    return this.container;
  }
}