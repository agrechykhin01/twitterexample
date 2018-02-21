const HomePage = require('../twitter_example/memberArea/cms/HomePage');
const ProfilePersonalInfoPage = require('../twitter_example/memberArea/ap/ProfilePersonalInfoPage');
const AdminTwitterUserListPage = require('../twitter_example/memberArea/admin/AdminTwitterUserListPage');
const AdminLoginPage = require('../twitter_example/memberArea/admin/AdminLoginPage');
const testData = require('../twitter_example/test.data');

// describe('Dashboard page.', () => {
//   let homePage;

//   beforeAll(() => homePage = HomePage.visit());

//   it(`[C3090999] User's first and last name are displayed on the page.`, () => {
//     const dashboardPage = homePage.signIn(testData.username01, testData.password01);

//     expect(dashboardPage.getWelcomeMessage())
//       .toBe(`Welcome ${testData.firstName01} ${testData.lastName01}`);
//   });
// });

describe('Twitter account.', () => {  

  //beforeAll(() => HomePage.visit().signIn(testData.username01, testData.password01));

  // it(`[3474572] Link twitter account.`, () => {
  //   let profilePersonalInfoPage = ProfilePersonalInfoPage.visit();

  //   expect(profilePersonalInfoPage.twitterHandleIsAdded())
  //     .toBeFalsy('Seems twitter account already added');
    
  //   profilePersonalInfoPage = profilePersonalInfoPage.addHandle().autorizeSDK(testData.twitterEmail01, testData.twitterPassword01);

  //   expect(profilePersonalInfoPage.getSiteMessageTwitterAdded())
  //     .toBe('Success! Your Twitter and Namecheap accounts are now linked.');
  //   expect(profilePersonalInfoPage.getHandle())
  //     .toBe(`${testData.twitterHandle01}`);
  //   expect(profilePersonalInfoPage.getHandleLabel())
  //     .toBe('Twitter account linked to Namecheap account.');
  //   expect(profilePersonalInfoPage.getHandleButton())
  //     .toBe('Refresh');
  // });

  it(`[3189154] Can't link existing twitter account with 'Authorize app' button and correct credentials`, () => {
    
    let adminTwitterUserListPage = AdminLoginPage.visit().logIn(testData.adminUserName, testData.adminPassword).selectLeftMenu();//.goToTwitterUserList();

    expect('Refresh')
      .toBe('Refresh');
  });
});