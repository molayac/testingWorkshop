import { reporter } from './helpers/reporter';
import { Config, browser } from 'protractor';

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/*.spec.js' ],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  }
};
