import * as dotenv from 'dotenv'

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("Couldn't find .env file")
}
const env = process.env

const host = env.A2O_DEV_URL ?? 'https://staging.a2odev.com'

export const urls = {
  host,
  notFound:          `${host}/404Page/`,
  jobsDevopsEngineer:`${host}/dev-ops-engineer/`,
  jobsItTechnician:  `${host}/jobs/it-technician/`,
  otherSolutions:    `${host}/other-solutions/`,
  jobs:              `${host}/jobs`,
  jobsWebAppDev:     `${host}/web-and-mobile-app-development/web-app-developer`,
  webAppDevelopment: `${host}/web-app-development/`,
  mobileDevelopment: `${host}/mobile-development/`,
  webSiteDevelopment:`${host}/website-development/`,
}
