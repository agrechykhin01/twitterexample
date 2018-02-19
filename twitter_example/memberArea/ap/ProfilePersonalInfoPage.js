const ApBasePage = require('./ApBasePage');
const testData = require('../../test.data');

class ProfilePersonalInfoPage extends ApBasePage {
  constructor() {
    super();
    this._pageName = 'Personal Info - My Account Panel - Namecheap.com';
    this._handleLabel = 'No handle';
    this._handleButton = 'Add handle';
  }

  static visit() {
    console.log(`Navigating to the 'https://namecheap.net/settings/personal-info' URL directly.`);

    return new ProfilePersonalInfoPage();
  }

  getHandleLabel() {
      return this._handleLabel;
  }

  getHandleButtonStatus() {
      this._handleButton;
  }
}

module.exports = ProfilePersonalInfoPage;