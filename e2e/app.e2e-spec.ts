import { StudentRegistrationPage } from './app.po';

describe('student-registration App', function() {
  let page: StudentRegistrationPage;

  beforeEach(() => {
    page = new StudentRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
