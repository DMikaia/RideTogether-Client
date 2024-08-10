<p align="left">
  <img src="public/logo.png" height="128" width="128" alt="Ride Together Logo" />
</p>

## Description

This is the client part of my team's school project called "ride together" (carpooling web application). The purpose of this application is to help people find carpooling offers easily.

## Installation

```bash
# command
$ npm install
```

## Features

Here are the current features right now:

- Basic authentication with Firebase & PostgreSQL
- User (find, update)
- Offer (creation, find, update)
- Room (find)
- Review (crud)
- Live chat using websocket

## Running the application

First, run the development server:

```bash
# command
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environments

```bash
# Server url
NEXT_SERVER_URL=

# Firebase
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_AUTH_DOMAIN=
NEXT_PUBLIC_PROJECT_ID=
NEXT_PUBLIC_STORAGE_BUCKET=
NEXT_PUBLIC_MESSAGING_SENDER_ID=
NEXT_PUBLIC_APP_ID=
NEXT_PUBLIC_MEASUREMENT_ID=
```
