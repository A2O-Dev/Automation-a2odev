import { expect } from '@wdio/globals'
import { FAQ, navigationMenu } from '../../dictionaries/selectors/index.ts'
import { urls } from '../../dictionaries/config/index.ts'

describe('Check the integrity of the UI/UX of FAQ', () => {
    it('Check the FAQ section', async () => {
        await browser.url(urls.host)
        await browser.maximizeWindow()

        const faqLink = await $(navigationMenu.faqLink)
        await faqLink.click()

        const questionOne = await $(FAQ.questionOne).$(FAQ.questionTitle)
        const questionTwo = await $(FAQ.questionTwo).$(FAQ.questionTitle)
        const questionThree = await $(FAQ.questionThree).$(FAQ.questionTitle)
        const questionFour = await $(FAQ.questionFour).$(FAQ.questionTitle)

        await expect($(questionOne)).toHaveTextContaining('1. Do you have experience with Startups or Projects from scratch?')
        await expect($(FAQ.answerOne)).toHaveAttribute('style', 'display: block;')
        await $(FAQ.questionOne).click()

        await $(FAQ.questionTwo).click()
        await expect($(questionTwo)).toHaveTextContaining('2. How do I make sure my project ideas')
        await expect($(FAQ.answerTwo)).toHaveAttribute('style', 'display: block;')
        await expect($(FAQ.answerOne)).toHaveAttribute('style', 'display: none;')
        await $(FAQ.questionTwo).click()

        await $(FAQ.questionThree).click()
        await expect($(questionThree)).toHaveTextContaining('3. How do I know how')
        await expect($(FAQ.answerThree)).toHaveAttribute('style', 'display: block;')
        await expect($(FAQ.answerTwo)).toHaveAttribute('style', 'display: none;')
        await $(FAQ.questionThree).click()

        await $(FAQ.questionFour).click()
        await expect($(questionFour)).toHaveTextContaining('4. Do you work on Fixed price projects or hourly?')
        await expect($(FAQ.answerFour)).toHaveAttribute('style', 'display: block;')
        await expect($(FAQ.answerThree)).toHaveAttribute('style', 'display: none;')
        await $(FAQ.questionFour).click()
    })
})
