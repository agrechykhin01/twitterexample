const {fillTextField, clickElement} = require('../../helpers/common.helpers');
//const AdminTwitterUserListPage = require('../Admin/AdminTwitterUserListPage');

class AdminLeftMenu {
  constructor() {
    this._usernameField = 'Username Field';
    this._passwordField = 'Password Field';
    this._signInLink = 'Sign In Link';
    this._signInButton = 'Sign In Button';
  }

  goToTwitterUserList() {
    const AdminTwitterUserListPage = require('../Admin/AdminTwitterUserListPage');
    return new AdminTwitterUserListPage();
  }

}

module.exports = AdminLeftMenu;