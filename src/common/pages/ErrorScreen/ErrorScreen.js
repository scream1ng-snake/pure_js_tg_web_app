import { Page } from "../../core";

export class ErrorPage extends Page {
  errorType;

  static text = {
    '404': 'Ошибка! Такой страницы не существует((('
  };

  constructor(id, errorType) {
    super(id);
    this.errorType = errorType;
  }

  render() {
    const title = this.createHeaderTitle(ErrorPage.text[this.errorType]);
    this.container.append(title);
    return this.container;
  }
}