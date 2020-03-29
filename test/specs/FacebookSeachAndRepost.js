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
    it('I write the name of group', () => {
        const value = $('input[name="q"]');
        value.setValue('автопром');
    })
    it('I press search button', () => {
        const myButton = $('button[aria-label="Поиск"]');
        myButton.click();
        browser.pause(3000);
    })
    it('Open searchs results', () => {
        const myButton = $('a[href="https://www.facebook.com/avto.prom.1"]');
        myButton.click();
        browser.pause(2000);
    })
    it('Find the post for repost and repost it', async () => {
        const shareButton = await $$('._2nj7._18vj');
        await shareButton[1].scrollIntoView();
        await browser.pause(3000);
        shareButton[1].click();
        await browser.pause(3000);
        const shareMyPage = await $('._3gc- > a');
        shareMyPage.click();
        await browser.pause(2000);
        const publicate = await $('._2g61');
        publicate.click();
        await browser.pause(1000);
    })
    it('I wait for acepting publication and check it', () => {
        const textForAccepting = $('._4-i2');
        const popUpWindow = textForAccepting.getText();
        assert.equal(popUpWindow, 'Опубликовано на Странице pasha_chorniy.');
        const linkToPage = $('._4-i2 a');
        linkToPage.click();
    })
})