import { EventCoordinatorPage } from './app.po';

describe('event-coordinator App', () => {
  let page: EventCoordinatorPage;

  beforeEach(() => {
    page = new EventCoordinatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
