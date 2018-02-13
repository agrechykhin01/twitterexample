const BasePage = require('../../BasePage');
const DashboardPage = require('../ap/DashboardPage');
const HomePage = require('../cms/HomePage');
const ProfilePersonalInfoPage = require('../ap/ProfilePersonalInfoPage');

class Header extends BasePage {
  constructor() {
    super();
    this._usernameField = 'Username Field';
    this._passwordField = 'Password Field';
    this._signInLink = 'Sign In Link';
    this._signOutLink = 'Sign Out Link';
    this._signInButton = 'Sign In Button';
    this._profileButton = 'Profile Button';
  }

  signIn(username, password) {
    console.log(`Hover over ${this._signInLink}`);
    this._fillTextField(username, this._usernameField);
    this._fillTextField(password, this._passwordField);
    this._clickElement(this._signInButton);

    return new DashboardPage();
  }

  signOut() {
    console.log(`Hover over ${this._signOutLink}`);
    this._clickElement(this._signOutLink);    
  }

  goToProfile(){
      this._clickElement(this._profileButton);
      return new ProfilePersonalInfoPage();
  }

}

module.exports = Header;