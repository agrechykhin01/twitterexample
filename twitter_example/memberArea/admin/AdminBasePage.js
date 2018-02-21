const AdminLeftMenu = require('../partials/AdminLeftMenu');
const AdminHeader = require('../partials/AdminHeader');

class AdminBasePage {
    constructor() {
      this._pageName = '';  
      this._leftMenu = new AdminLeftMenu();      
      this._header = new AdminHeader();
    }
  
    _pageIsDisplayed() {
      console.log(`${this._pageName} page is displayed`);
    }
  }
  
  module.exports = AdminBasePage;