import { MealTrackerPage } from './app.po';

describe('meal-tracker App', () => {
  let page: MealTrackerPage;

  beforeEach(() => {
    page = new MealTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
