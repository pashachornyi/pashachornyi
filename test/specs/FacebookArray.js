const assert = require('assert')

describe('Testing registration form', () => {
    it('I open Facebook autorization form', () => {
        browser.url('/')
        const title = browser.getTitle()
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
    it('I press "My groups"', () => {
        const myButton = $('#navItem_1434659290104689 > a > div');
        myButton.click();
        browser.pause(2000);
    })
    it('Demonstrate friends groups name', () => {
        const document = $$('.mfclru0v._4ik4._4ik5 > span');
        console.log(document)
        // let list = await document.querySelectorAll('.mfclru0v._4ik4._4ik5 > span')
        // console.log (list)
        // const element = document.querySelectorAll('.mfclru0v._4ik4._4ik5 > span')
        // list.forEach(span=>console.log(span.innerText))
    })

})