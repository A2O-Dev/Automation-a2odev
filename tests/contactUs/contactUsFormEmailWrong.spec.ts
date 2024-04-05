import { expect } from '@wdio/globals'
import { contactUs } from '../../dictionaries/selectors/index.ts'
import { data, urls } from '../../dictionaries/config/index.ts'

describe('Contact us form email wrong', () => {
  it('check e-mail format n°1', async () => {
    await browser.url(urls.host)
    await browser.maximizeWindow()

    const alertMessage = await $(contactUs.alertMessage)

    await $(contactUs.name).setValue(data.info.yourname)
    await $(contactUs.email).setValue(data.info.email_1)
    await $(contactUs.website).setValue(data.info.website)
    await $(contactUs.message).setValue(data.info.message)
    await $(contactUs.btnSubmit).click()

    await expect($(alertMessage)).toBeExisting()
    await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
  })

  it('check e-mail format n°2', async () => {
    await browser.url(urls.host)
    await browser.maximizeWindow()

    const alertMessage = await $(contactUs.alertMessage)

    await $(contactUs.name).setValue(data.info.yourname)
    await $(contactUs.email).setValue(data.info.email_2)
    await $(contactUs.website).setValue(data.info.website)
    await $(contactUs.message).setValue(data.info.message)
    await $(contactUs.btnSubmit).click()

    await expect($(alertMessage)).toBeExisting()
    await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
  })

  it('check e-mail format n°3', async () => {
    await browser.url(urls.host)
    await browser.maximizeWindow()

    const alertMessage = await $(contactUs.alertMessage)

    await $(contactUs.name).setValue(data.info.yourname)
    await $(contactUs.email).setValue(data.info.email_3)
    await $(contactUs.website).setValue(data.info.website)
    await $(contactUs.message).setValue(data.info.message)
    await $(contactUs.btnSubmit).click()

    await expect($(alertMessage)).toBeExisting()
    await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
  })
})
