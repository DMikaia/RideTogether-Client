# Ride Together

![preview](public/logo.png)

This is the client part of my team's school project called **Ride Together** (carpooling web application). The purpose of this application is to help people find carpooling offer easily.

## Content

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environments](#environments)
- [Running the app](#running-the-app)

## Features

Here are the current features right now:

- Basic authentication with Firebase & PostgreSQL
- User (get, update)
- Offer (creation, get, update)
- Room (get)
- Review (crud)
- Live chat using websocket

## Prerequisites

To be able to run the app you'll need to install:

- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [firebase project](https://firebase.google.com)

## Installation

```bash
# command
$ npm install
```

## Environments

```bash
# Server url
NEXT_PUBLIC_SERVER_URL=

# Firebase
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
```

## Running the app

> [!IMPORTANT]
> You'll also need to configure the firebase project and add authentication (email and password) and storage, otherwise authentication and image storage won't work properly on either the server or client side. If you are not yet familiar with firebase, you may wish to consult the [documentation](https://firebase.google.com/docs)

```bash
# dev
$ npm run dev

# prod
$ npm run start

# build
$ npm run build
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
