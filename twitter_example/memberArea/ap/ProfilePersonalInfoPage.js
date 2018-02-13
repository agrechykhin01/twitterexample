const ApBasePage = require('./ApBasePage');
const testData = require('../../test.data');

class ProfilePersonalInfoPage extends ApBasePage {
  
  constructor() {
    super();
    this._pageName = 'Personal Info - My Account Panel - Namecheap.com';
    this._handleStateLabel = 'Handle State Label';
    this._addHandleButton = 'Add Handle Button';
    this._pageIsDisplayed();
  }

  getHandleStateLabel() {
    return this._handleStateLabel;
  }

  getAddHandleButtonTitle() {
    return this._addHandleButton.title;
  }
}

module.exports = ProfilePersonalInfoPage;