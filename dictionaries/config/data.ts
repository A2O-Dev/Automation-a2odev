import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env

export const data = {
   info: {
    
    yourname: env.YOUR_NAME ?? 'TestQA',
    emailadd: env.EMAIL_ADDRESS ?? 'test@gmail.com',
    website: env.WEBSITE ?? 'https://www.texasmotorspeedway.com/',
    message: env.WRITE_MESSAGE ?? 'Company service',
    
    emptyname: env.EMPTY_NAME ?? '',
    emptyemail: env.EMPTY_EMAIL ??'',
    emptymessage: env.EMPTY_MESSAGE ??'',

    email_1: env.EMAIL_TEST1 ?? 'test.com@gmail',
    email_2: env.EMAIL_TEST2 ?? 'test.gmail@com',
    email_3: env.EMAIL_TEST3 ?? 'gmail.com@test'
  

  }
}