const {fillTextField, clickElement} = require('../../helpers/common.helpers');

class AdminHeader {
  constructor() {
    this._logoffLink = 'Logoff Link';    
  }  

  signOut() {
    console.log(`Hover over ${this._logoffLink}`);    
    clickElement(this._logoffLink);

    return this;
  }
}

module.exports = AdminHeader;