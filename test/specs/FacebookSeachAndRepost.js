const assert = require('assert')

describe('Testing Facebook searching people', () => {
    it('I open Facebook autorization form', async () => {
        await browser.url('/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Facebook - Log In or Sign Up')
    })
    it('I write login and password in the form', async () => {
        const login = await $('#email');
        login.setValue('pavel_chorniy@i.ua');
        const password = await $('#pass');
        password.setValue('TORNADO_123');
    })
    it('I press "Login" button', async () => {
        const myButton = await $('input[type="submit"]');
        myButton.click();
    })
    it('I wait for visible modal window', async () => {
        const elem = await $('div[class="__xn"]')
        await elem.waitForDisplayed({ timeout: 2000 });
    })
    it('I close modal window', async () => {
        const myButton = await $('button[class="layer_close_elem _36gl _50zy _50-0 _50z_ _5upp _42ft"]');
        myButton.click();
    })
    it('I write the name of group', async () => {
        const value = await $('input[name="q"]');
        value.setValue('автопром');
    })
    it ('I press search button', async () => {
    const myButton = await $('button[aria-label="Поиск"]');
        myButton.click();
        await browser.pause(3000);
    })
    it('Open searchs results', async () => {
        const myButton = await $('a[href="https://www.facebook.com/avto.prom.1"]');
        myButton.click();
        await browser.pause(2000);
    })
    it('Find the post for repost and repost it', async () => {
        const shareButton = await $$('._2nj7._18vj');
        await shareButton[1].scrollIntoView();
        await browser.pause(3000);
        shareButton[1].click();
        await browser.pause(3000);
        // await shareButtonn.click();
        const shareMyPage = await $('._3gc- > a');
        shareMyPage.click();
        const publicate = await $('._2g61');
        publicate.click();
        await browser.pause(1000);
    })
    it('I wait for acepting publication and check it', async () => {
        const textForAccepting = await $('._4-i2');
        const popUpWindow = await textForAccepting.getText();
        assert.equal(popUpWindow,'Опубликовано на Странице pasha_chorniy.');
        const linkToPage = await $('._4-i2 a');
        linkToPage.click();
        await browser.pause(1000);
s
        // const Chevrolet = await $$('._1x2_.img');
        // await Chevrolet[1].scrollIntoView();

    })



    // it('I demonstrate the name of group', async () => {
    //     const elem = await $('');
    //     const name = await elem.getText();
    //     assert.equal(name,'Факти про Україну та Світ');
    // })

    })

    // ._4-i2._pig._50f4 a
