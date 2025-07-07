const { $ } = require('@wdio/globals');

const SELECTORS = {
  root: 'header',
  logo: '.app_logo',
};

class HeaderComponent {
  get rootElement() {
    return $(SELECTORS.root);
  }

  get logoElement() {
    return this.rootElement.$(SELECTORS.logo);
  }

  async getLogoText() {
    await this.logoElement.waitForDisplayed();
    return await this.logoElement.getText();
  }

  async isLogoDisplayed() {
    return await this.logoElement.isDisplayed();
  }
}

module.exports = new HeaderComponent();
