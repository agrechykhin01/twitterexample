const HomePage = require('../twitter_example/memberArea/cms/HomePage');
const ProfilePersonalInfoPage = require('../twitter_example/memberArea/ap/ProfilePersonalInfoPage');
const testData = require('../twitter_example/test.data');

// describe('Dashboard page.', () => {
//   let homePage;

//   beforeAll(() => homePage = HomePage.visit());

//   it(`[C3090999] User's first and last name are displayed on the page.`, () => {
//     const dashboardPage = homePage.signIn(testData.username, testData.password);

//     expect(dashboardPage.getWelcomeMessage())
//       .toBe(`Welcome ${testData.firstName} ${testData.lastName}`);
//   });
// });

describe('Twitter account.', () => {  

  beforeAll(() => HomePage.visit().signIn(testData.username, testData.password));

  it(`[3474572] Link twitter account.`, () => {
    const profilePersonalInfoPage = ProfilePersonalInfoPage.visit();

    expect(profilePersonalInfoPage.twitterHandleIsAdded())
      .toBeFalsy('Seems twitter account already added');
  });
});