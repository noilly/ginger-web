import { GingerWebPage } from './app.po';

describe('ginger-web App', () => {
  let page: GingerWebPage;

  beforeEach(() => {
    page = new GingerWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
