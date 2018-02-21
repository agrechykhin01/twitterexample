const {fillTextField, clickElement} = require('../../helpers/common.helpers');
//const ProfilePersonalInfoPage = require('../ap/ProfilePersonalInfoPage');

class TwitterPage {
  constructor() {
    this._pageName = 'Twitter / Autorize an application';
    this._emailField = 'Email Field';
    this._passwordField = 'Password Field';    
    this._autorizeAppButton = 'Autorize Application Button';
    this._pageIsDisplayed();
  }

  _pageIsDisplayed() {
    console.log(`${this._pageName} page is displayed`);
  }

  autorizeSDK(email, password, validUser) {    
    fillTextField(email, this._emailField);
    fillTextField(password, this._passwordField);
    clickElement(this._autorizeAppButton);  
    
    const ProfilePersonalInfoPage = require('../ap/ProfilePersonalInfoPage');
    const profilePersonalInfoPage = new ProfilePersonalInfoPage();
    profilePersonalInfoPage.changePageDataToTwitterAdded(validUser);    
    return profilePersonalInfoPage;
  }

}

module.exports = TwitterPage;