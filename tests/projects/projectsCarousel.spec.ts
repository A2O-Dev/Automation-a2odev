describe('Home Page/Project - Check the carousel of the images', ()=>{
    it('test image carousel functionality', async ()=>{
        await browser.url('https://staging-new.a2odev.com/')
        await browser.maximizeWindow()
        const projectLink = await $('=Projects')
        const castingAppLink = await $('.premium-modal-trigger-text=Casting App')
        const imagesAppLink = await $('.premium-modal-trigger-text=Images App')
        const realEstateApp = await $('.premium-modal-trigger-text=Real Estate App')
        projectLink.click()

        ///Carouse in Casting App Link

        castingAppLink.click()
        await browser.pause(3000)
        const arrowRightCasting = await $('[id="n2-ss-9-arrow-next"]')
        const arrowLeftCasting = await $('[id="n2-ss-9-arrow-previous"]')
        const closeButtonCasting = await $('//*[@id="premium-modal-07734af"]/div/div[1]/div/button')
  
          for (let index = 1; index <= 6; index++) {
            if (index < 5) {
              expect(await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`)).toBeExisting()
              arrowRightCasting.click()
              await browser.pause(2000)
            } else {
              expect(await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()            
            }
          }
          arrowRightCasting.click()
          await browser.pause(2000)
  
          for (let index = 5; index >= 1; index--) {
            arrowLeftCasting.click()
            await browser.pause(2000)
            expect(await $(`//*[@id="n2-ss-9"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`)).toBeExisting()
          }
  
          closeButtonCasting.click()
  
          ///Carouse in Images App Link
          
          await imagesAppLink.click()
          await browser.pause(3000)
          const arrowRightImages = $('[id="n2-ss-10-arrow-next"]')
          const arrowLeftImages = $('[id="n2-ss-10-arrow-previous"]')
          const closeButtonImages = $('//*[@id="premium-modal-5ae5ff9"]/div/div[1]/div/button')
  
          
          for (let index = 1; index <= 4; index++) {
            if (index < 4) {
              expect(await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`)).toBeExisting()
              arrowRightImages.click()
              await browser.pause(2000)
            } else {
              expect(await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div`)).toBeExisting()
            }          
          }
  
          for (let index = 3; index >= 1; index--) {
            arrowLeftImages.click()
            await browser.pause(2000)
            expect(await $(`//*[@id="n2-ss-10"]/div/div[1]/div/div/div[2]/div[${index}]/div[2]/div`)).toBeExisting()
          }
  
          closeButtonImages.click()
  
          ///Carouse in Real Estate App Link

          realEstateApp.click()
          await browser.pause(3000)
          const arrowRightReal = $('id="n2-ss-11-arrow-next"')
          const arrowLeftReal = $('id="n2-ss-11-arrow-previous"')
          const closeButtonReal = $('//*[@id="premium-modal-3da65c0"]/div/div[1]/div/button')
          const imageRealEstateApp = await $('//*[@id="n2-ss-11"]/div/div[1]/div/div/div[2]/div[1]/div[2]/div')
          
          arrowRightReal.click()
          await browser.pause(2000)
          expect(imageRealEstateApp).toBeExisting()
          arrowLeftReal.click()
          await browser.pause(2000)
          expect(imageRealEstateApp).toBeExisting()
          
          closeButtonReal.click()
      })
  })