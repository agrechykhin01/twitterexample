const HomePage = require('../twitter_example/memberArea/cms/HomePage');
const ProfilePersonalInfoPage = require('../twitter_example/memberArea/ap/ProfilePersonalInfoPage');
const AdminTwitterUserListPage = require('../twitter_example/memberArea/admin/AdminTwitterUserListPage');
const AdminLoginPage = require('../twitter_example/memberArea/admin/AdminLoginPage');
const testData = require('../twitter_example/test.data');

describe('Twitter account.', () => {  

  it(`[3474572] Link twitter account.`, () => {
    
    //Unlink twitter account for User01
    AdminLoginPage.visit().logIn(testData.adminUserName, testData.adminPassword).selectLeftMenu().goToTwitterUserList()
      .unlinkAccount(testData.username01, testData.twitterHandle01).signOut();
    
    //Sign in to Namecheap as User01
    HomePage.visit().signIn(testData.username01, testData.password01);

    //Add twitter account for User01
    let profilePersonalInfoPage = ProfilePersonalInfoPage.visit();    
    profilePersonalInfoPage = profilePersonalInfoPage.addHandle().autorizeSDK(testData.twitterEmail01, testData.twitterPassword01, true);

    expect(profilePersonalInfoPage.getSiteMessageTwitterAdded())
      .toBe('Success! Your Twitter and Namecheap accounts are now linked.');
    expect(profilePersonalInfoPage.getHandle())
      .toBe(`${testData.twitterHandle01}`);
    expect(profilePersonalInfoPage.getHandleLabel())
      .toBe('Twitter account linked to Namecheap account.');
    expect(profilePersonalInfoPage.getHandleButton())
      .toBe('Refresh');

    //Sign out from Namecheap as User01
    HomePage.visit().signOut();
  });

  it(`[3189154] Can't link existing twitter account with 'Authorize app' button and correct credentials`, () => {
    
    //Unlink twitter accounts for User01 and User02
    AdminLoginPage.visit().logIn(testData.adminUserName, testData.adminPassword).selectLeftMenu().goToTwitterUserList()
     .unlinkAccount(testData.username01, testData.twitterHandle01).unlinkAccount(testData.username02, testData.twitterHandle02).signOut();

    //Sign in to Namecheap as User01
    HomePage.visit().signIn(testData.username01, testData.password01);

    //Add User01 twitter account for User01    
    ProfilePersonalInfoPage.visit().addHandle().autorizeSDK(testData.twitterEmail01, testData.twitterPassword01, true);

    //Sign out from Namecheap as User01
    HomePage.visit().signOut();

    //Sign in to Namecheap as User02
    HomePage.visit().signIn(testData.username02, testData.password02);

    //Add User01 twitter account for User02
    let profilePersonalInfoPage = ProfilePersonalInfoPage.visit();    
    profilePersonalInfoPage = profilePersonalInfoPage.addHandle().autorizeSDK(testData.twitterEmail01, testData.twitterPassword01, false);

    expect(profilePersonalInfoPage.getSiteMessageTwitterAdded())
      .toBe('This twitter account is already used for another namecheap user.');
    expect(profilePersonalInfoPage.getHandle())
      .toBe('No handle');  
      
    //Sign out from Namecheap as User02
    HomePage.visit().signOut();
  });
});