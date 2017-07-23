import { MyToDoPage } from './app.po';

describe('my-to-do App', () => {
  let page: MyToDoPage;

  beforeEach(() => {
    page = new MyToDoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
