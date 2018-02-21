const {fillTextField, clickElement} = require('../../helpers/common.helpers');
const AdminBasePage = require('./AdminBasePage');
const AdminLoginPage = require('./AdminLoginPage');

class AdminTwitterUserListPage extends AdminBasePage{
    constructor() {
        super();
        this._pageName = 'Twitter User List';  
        this._byNamecheapUserNameField = 'By Namecheap User Name';
        this._FindTwitterUsersButton = 'Find Twitter Users';  
        this._unlinkLink = 'UnLink';
        this._twitterUserNameInTable = 'MyTwitterHandle01';             
        this._pageIsDisplayed();   
    }
    
    unlinkAccount(namecheapUserName, twitterHandle){        
        fillTextField(namecheapUserName, this._byNamecheapUserNameField);        
        clickElement(this._FindTwitterUsersButton);
        if(this._twitterUserNameInTable === twitterHandle)
            clickElement(this._unlinkLink);
        return this;
    }

    signOut() {
        this._header.signOut();
    
        return new AdminLoginPage();;
      }

  }
  
  module.exports = AdminTwitterUserListPage;