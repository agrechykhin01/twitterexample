const ApBasePage = require('./ApBasePage');
const testData = require('../../test.data');
const TwitterPage = require('../thirdparty/TwitterPage');
const {fillTextField, clickElement} = require('../../helpers/common.helpers');

class ProfilePersonalInfoPage extends ApBasePage {
  constructor() {
    super();
    this._pageName = 'Personal Info - My Account Panel - Namecheap.com';
    this._handle = 'No handle';
    this._handleLabel = '[Empty]';
    this._handleButton = 'Add handle';
    this._siteMessageTwitterAdded = '[Empty]';
    this._pageIsDisplayed();
  }

  static visit() {
    console.log(`Navigating to the 'https://namecheap.net/settings/personal-info' URL directly.`);

    return new ProfilePersonalInfoPage();
  }

  changePageDataToTwitterAdded(){
    this._handle = testData.twitterHandle;
    this._handleLabel = 'Twitter account linked to Namecheap account.';
    this._handleButton = 'Refresh';
    this._siteMessageTwitterAdded = 'Success! Your Twitter and Namecheap accounts are now linked.';
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

  addHandle() {
    clickElement(this._handleButton);
    return new TwitterPage();
  }

  getHandle() {
    console.log(`Twitter handle is: ${this._handle}`);
    return this._handle;
  }

  getHandleLabel() {
    console.log(`Handle label is: ${this._handleLabel}`);
    return this._handleLabel;
  }

  getSiteMessageTwitterAdded() {
    console.log(`Site message is: ${this._siteMessageTwitterAdded}`);
    return this._siteMessageTwitterAdded;
  }

  getHandleButton() {
    console.log(`Handle Button is: ${this._siteMessageTwitterAdded}`);
    return this._handleButton;
  }
}

module.exports = ProfilePersonalInfoPage;