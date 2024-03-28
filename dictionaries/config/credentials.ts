import * as dotenv from 'dotenv'

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}
const env = process.env

export const credentials = {
   google: {
    email: env.EMAIL_GOOGLE ?? 'addmail_test@gmail.com',
    password: env.PASS_GOOGLE ?? 'addPass_123',
    
  }
}
