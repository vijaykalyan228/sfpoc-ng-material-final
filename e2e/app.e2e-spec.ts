import { SfpocNgMaterialPage } from './app.po';

describe('sfpoc-ng-material App', () => {
  let page: SfpocNgMaterialPage;

  beforeEach(() => {
    page = new SfpocNgMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
