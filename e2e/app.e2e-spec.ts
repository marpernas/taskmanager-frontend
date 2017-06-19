import { TaskmanagerFrontendPage } from './app.po';

describe('taskmanager-frontend App', () => {
  let page: TaskmanagerFrontendPage;

  beforeEach(() => {
    page = new TaskmanagerFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
