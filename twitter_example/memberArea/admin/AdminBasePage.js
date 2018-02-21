class AdminBasePage {
    constructor() {
      this._pageName = '';      
    }
  
    _pageIsDisplayed() {
      console.log(`${this._pageName} page is displayed`);
    }
  }
  
  module.exports = AdminBasePage;