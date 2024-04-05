# Automation-a2odev
# Requirements

Node >= 17.9.0

# Steps to install

1. Install dependencies

```shell
npm install

```

2. Copy .env.example file

```shell
cp .env.example .env

```

3. Set up environment variables in .env file

```sh
A2O_DEV_URL=put the url

```

4. Execute the test of a specific file

```shell
npx wdio run ./wdio.conf.ts --spec ./tests/fileLocation.spec.ts

```
