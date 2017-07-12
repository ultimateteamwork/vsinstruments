import { VsinstrumentsPage } from './app.po';

describe('vsinstruments App', function() {
  let page: VsinstrumentsPage;

  beforeEach(() => {
    page = new VsinstrumentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
