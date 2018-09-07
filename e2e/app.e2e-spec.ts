import { AppPage } from './app.po';
import { by, browser, element, ExpectedConditions, protractor} from 'protractor';
describe('testing-angular-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
  it('Tour of Heroes link should work', () => {
    var tOHLink = element(by.linkText('Tour of Heroes'));
    tOHLink.click().then(ret => {
      browser.getAllWindowHandles().then(handles => {
        let newWindow = handles[1];
        browser.switchTo().window(newWindow).then(() => {
          expect(browser.getCurrentUrl().then()).toBe('https://angular.io/tutorial');
          browser.switchTo().window(handles[0]);
        });

      });
    });
  });
  it('Test button should display Test!', () => {
    page.navigateTo();
    var button = element(by.buttonText('Test Button'));
    button.click().then(ret => {
      var text = element(by.css('app-root h3')).getText();
      expect(text).toEqual('Test value: Test!');

    });
  })
});

