const {fillTextField, clickElement} = require('../../helpers/common.helpers');
const AdminBasePage = require('./AdminBasePage');
const AdminMainPage = require('./AdminMainPage');

class AdminLoginPage extends AdminBasePage{
    constructor() {
        super();
        this._pageName = 'Admin Login';  
        this._usernameField = 'Username Field';
        this._passwordField = 'Password Field';        
        this._LoginButton = 'Login Button'; 
        this._pageIsDisplayed();   
    } 
    
    static visit() {
        console.log(`Navigating to the 'https://secure.namecheap.com/NCAdmin/login.aspx' URL directly.`);
    
        return new AdminLoginPage();
    }

    logIn(username, password) {
        console.log(`Loggin into admin`);
        fillTextField(username, this._usernameField);
        fillTextField(password, this._passwordField);
        clickElement(this._LoginButton);
    
        return new AdminMainPage();
      }
  }
  
  module.exports = AdminLoginPage;