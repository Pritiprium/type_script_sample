import{browser} from 'protractor'
describe('Test Suite Sample',function(){
    it('Test case 1',function(){
        browser.get('http://www.angular.io');
        browser.sleep(3000)
    });
});