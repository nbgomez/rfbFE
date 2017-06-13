import { RfbFEPage } from './app.po';

describe('rfb-fe App', () => {
  let page: RfbFEPage;

  beforeEach(() => {
    page = new RfbFEPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
