const { browser } = require('@wdio/globals');

class BasePage {
  /**
   * Open a specific path
   * @param {string} path - relative URL path (e.g., "/login")
   */
  async open(path) {
    await browser.url(path);
  }

  /**
   * Waits for element to be visible and returns its text
   * @param {WebdriverIO.Element} element
   * @param {number} timeout
   * @returns {Promise<string>}
   */
  async getTextFromElement(element, timeout = 5000) {
    await element.waitForDisplayed({ timeout });
    return await element.getText();
  }

  /**
   * Checks whether an element is displayed within the timeout
   * @param {WebdriverIO.Element} element
   * @param {number} timeout
   * @returns {Promise<boolean>}
   */
  async isElementDisplayed(element, timeout = 5000) {
    try {
      await element.waitForDisplayed({ timeout });
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Clears input field
   * @param {WebdriverIO.Element} element
   * @returns {Promise<void>}
   */
  async clearField(element) {
    await element.waitForDisplayed();
    await element.click();
    await browser.keys(['Control', 'a']);
    await browser.keys('Delete');
  }
}

module.exports = BasePage;
