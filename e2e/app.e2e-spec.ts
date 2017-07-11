import { Task5Page } from './app.po';

describe('task5 App', function() {
  let page: Task5Page;

  beforeEach(() => {
    page = new Task5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
