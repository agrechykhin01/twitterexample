const HomePage = require('../twitter_example/memberArea/cms/HomePage');
const testData = require('../twitter_example/test.data');

describe('Dashboard page.', () => {
  let homePage;

  beforeAll(() => homePage = HomePage.visit());
  afterAll(() => homePage.header.signOut());

  it(`[C3090999] User's first and last name are displayed on the page.`, () => {
    const dashboardPage = homePage.header.signIn(testData.username, testData.password);

    expect(dashboardPage.getWelcomeMessage())
      .toBe(`Hello ${testData.firstName} ${testData.lastName}`);
  });
});


describe('Profile -> Personal Info page.', () => {
    let homePage;  
    beforeAll(() => homePage = HomePage.visit());    
    beforeEach(() => homePage.header.signIn(testData.username, testData.password));
    afterEach(() => homePage.header.signOut());
  
    it(`[C3090999] User's first and last name are displayed on the page.`, () => {        
        const profilePersonalInfoPage = homePage.header.goToProfile();
  
        expect(profilePersonalInfoPage.getAddHandleButtonTitle())
            .toBe(undefined);
        expect(profilePersonalInfoPage.getAddHandleButtonTitle())
            .toBe(undefined);
    });
  });