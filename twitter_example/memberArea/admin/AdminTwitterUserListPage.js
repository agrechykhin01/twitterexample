const {fillTextField, clickElement} = require('../../helpers/common.helpers');
const AdminMainPage = require('./AdminMainPage');
const AdminLeftMenu = require('../partials/AdminLeftMenu');

class AdminTwitterUserListPage extends AdminMainPage{
    constructor() {
        super();
        this._pageName = 'Twitter User List';                 
        this._pageIsDisplayed();   
    }       
  }
  
  module.exports = AdminTwitterUserListPage;