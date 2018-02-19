const ApBasePage = require('./ApBasePage');
const testData = require('../../test.data');

class ProfilePersonalInfoPage extends ApBasePage {
  constructor() {
    super();
    this._pageName = 'Personal Info - My Account Panel - Namecheap.com';
    this._handleLabel = 'No handle';
    this._handleButton = 'Add handle';
    this._pageIsDisplayed();
  }

  static visit() {
    console.log(`Navigating to the 'https://namecheap.net/settings/personal-info' URL directly.`);

    return new ProfilePersonalInfoPage();
  }

  twitterHandleIsAdded(){
      if(this._handleButton == 'Add handle')
      {
          console.log(`Twitter account isn't added to profile`);
          return false;      
      }
      console.log('Twitter account added to profile');
      return true;  
  }
}

module.exports = ProfilePersonalInfoPage;