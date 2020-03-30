const assert = require('assert')

describe('Testing Facebook searching people', () => {
    it('I open Facebook autorization form', () => {
        browser.url('/')
        const title = browser.getTitle()
        console.log(title)
        assert.strictEqual(title, 'Facebook - Log In or Sign Up')
    })
    it('I write login and password in the form', () => {
        const login = $('#email');
        login.setValue('pavel_chorniy@i.ua');
        const password = $('#pass');
        password.setValue('TORNADO_123');
    })
    it('I press "Login" button', () => {
        const myButton = $('input[type="submit"]');
        myButton.click();
        browser.pause(1000)
    })
    it('I wait for visible modal window', () => {
        const elem = $('div[class="__xn"]')
        elem.waitForDisplayed({ timeout: 2000 });
    })
    it('I close modal window', () => {
        const myButton = $('button[class="layer_close_elem _36gl _50zy _50-0 _50z_ _5upp _42ft"]');
        myButton.click();
    })
    it('I press "Find friends" button', () => {
        const searchFriendsButton = $('#findFriendsNav');
        searchFriendsButton.click();
    })
    it('I write the name of friend', () => {
        const login = $('div > ._1frb');
        login.setValue('Олег Воробьев');
    })
    it('I press "Find" button', () => {
        const searchFriendsButton = $('form > ._42ft._4jy0._4w98');
        searchFriendsButton.click();
        browser.pause(3000);
    })
    it('I press the name of friend that i need', async () => {
        const icon = await $$('._4ik5 > a');
        icon[1].click();
        browser.pause(2000);
    })
    it('Scroll to photo that i need', async () => {
        const photo = await $('._2pid._2pin._52jv');
        await photo.scrollIntoView();
    })
    it('Scroll to photo that i need', () => {
        browser.saveScreenshot('/home/pasha/Desktop/facebook.png');
    })

})
