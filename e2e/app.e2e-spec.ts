import { R2jAdminPage } from './app.po';

describe('r2j-admin App', function() {
  let page: R2jAdminPage;

  beforeEach(() => {
    page = new R2jAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
