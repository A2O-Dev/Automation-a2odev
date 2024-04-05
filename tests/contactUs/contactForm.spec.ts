import { expect } from '@wdio/globals'
import { contactUs } from '../../dictionaries/selectors/index.ts'
import { credentials, data, urls } from '../../dictionaries/config/index.ts'

const env = process.env
describe('Contact Form', () => {
  it('should send a success message', async () => {
    await browser.url(urls.host)
    await browser.maximizeWindow()

    await $(contactUs.name).setValue(data.info.yourname)
    await $(contactUs.email).setValue(data.info.emailadd)
    await $(contactUs.website).setValue(data.info.website)
    await $(contactUs.message).setValue(data.info.message)
    await $(contactUs.btnSubmit).click()

    await expect($(contactUs.name)).toBeExisting()
    await expect($(contactUs.email)).toBeExisting()
 

  })
})
