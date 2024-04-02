import { expect } from '@wdio/globals'
import { contactUs, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'
const env = process.env
describe('Check that the map ubication is right', () => {
  it('Check map existence', async () => {
    await browser.url(urls.host)
    await browser.maximizeWindow()

    const elementIframe = await $(contactUs.elementIframe)
    const contactUsLink = await $(navigationMenu.contactUsLink)

    await $(contactUsLink).click()
    await expect($(elementIframe)).toBeExisting()
    await expect($(elementIframe)).toHaveAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.1358151833942!2d-63.201536485340014!3d-17.83226708111117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e99569937a45%3A0xa5edf408ba327226!2sA2O%20Dev!5e0!3m2!1ses!2sbo!4v1671550857839!5m2!1ses!2sbo')
  })
})
