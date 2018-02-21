const {fillTextField, clickElement} = require('../../helpers/common.helpers');
const AdminBasePage = require('./AdminBasePage');
const AdminLeftMenu = require('../partials/AdminLeftMenu');

class AdminMainPage extends AdminBasePage{
    constructor() {
        super();
        this._pageName = 'Namecheap Administration - Banking';  
        this._leftMenu = new AdminLeftMenu();        
        this._pageIsDisplayed();   
    } 
    
    selectLeftMenu(){
        return this._leftMenu;
    }
  }
  
  module.exports = AdminMainPage;