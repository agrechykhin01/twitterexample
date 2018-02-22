const {fillTextField, clickElement} = require('../../helpers/common.helpers');
//const AdminTwitterUserListPage = require('../Admin/AdminTwitterUserListPage');

class AdminLeftMenu {
  constructor() {    
  }

  goToTwitterUserList() {
    const AdminTwitterUserListPage = require('../Admin/AdminTwitterUserListPage');
    return new AdminTwitterUserListPage();
  }

}

module.exports = AdminLeftMenu;