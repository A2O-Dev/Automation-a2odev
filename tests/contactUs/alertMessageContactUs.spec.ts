import { expect } from '@wdio/globals'
import { contactUs } from '../../dictionaries/selectors/index.ts'
import { data, urls } from '../../dictionaries/config/index.ts'

describe('Alert message when submitting with empty required fields', () =>{
    it('Alert Message with the Name empty ', async () => {
        await browser.url(urls.host)
        await browser.maximizeWindow()

        const alertMessage = await $(contactUs.alertMessage)

        await $(contactUs.name).setValue(data.info.yourname)
        await $(contactUs.email).setValue(data.info.emailadd)
        await $(contactUs.website).setValue(data.info.website)
        await $(contactUs.message).setValue(data.info.message)
        await $(contactUs.btnSubmit).click()

       await expect($(alertMessage)).toBeExisting()
       await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })

   it('Alert Message with the Email empty ', async () => {
        await browser.url(urls.host)
        await browser.maximizeWindow()

        const alertMessage = await $(contactUs.alertMessage)

        await $(contactUs.name).setValue(data.info.yourname)
        await $(contactUs.email).setValue(data.info.emptyemail)
        await $(contactUs.website).setValue(data.info.website)
        await $(contactUs.message).setValue(data.info.message)
        await $(contactUs.btnSubmit).click()

        await expect($(alertMessage)).toBeExisting()
        await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })
   
     it.only('Alert Message with the Message empty ', async () => {
        await browser.url(urls.host)
        await browser.maximizeWindow()

        const alertMessage = await $(contactUs.alertMessage)

        await $(contactUs.name).setValue(data.info.yourname)
        await $(contactUs.email).setValue(data.info.emailadd)
        await $(contactUs.website).setValue(data.info.website)
        await $(contactUs.message).setValue(data.info.emptymessage)
        await $(contactUs.btnSubmit).click()

        await expect($(alertMessage)).toBeExisting()
        await expect($(alertMessage)).toHaveTextContaining('One or more fields have an error. Please check and try again.')
    })

})
