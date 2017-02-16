import { Imwng2Page } from './app.po';

describe('imwng2 App', function() {
  let page: Imwng2Page;

  beforeEach(() => {
    page = new Imwng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
