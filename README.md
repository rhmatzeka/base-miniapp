# Base Mini App

A starter **mini app** for the Base app and Farcaster. A mini app is a small web app that opens right inside a social app, where users can connect their wallet and make on-chain transactions without leaving the feed.

**Live demo:** https://base-miniapp-one.vercel.app

## What it shows

- **Wallet connection** with OnchainKit
- A sample **on-chain transaction**
- **Quick Auth** sign-in through Farcaster (`app/api/auth/route.ts`)
- The **manifest** that registers the mini app (`app/.well-known/farcaster.json`)

It was created with Coinbase's `create-onchain` template and is a good base for building your own mini app.

## Tech stack

Next.js, TypeScript, OnchainKit, Farcaster Mini App SDK, wagmi, viem

## Getting started

You need Node.js 18+ and a free API key from the [Coinbase Developer Platform](https://portal.cdp.coinbase.com/).

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file:

   ```env
   NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

3. Start the app and open http://localhost:3000:

   ```bash
   npm run dev
   ```

## Customize it

- Change the app's name, description, and images in `minikit.config.ts`.
- Edit the main screen in `app/page.tsx`.

## Learn more

- [OnchainKit docs](https://docs.base.org/onchainkit)
- [Base Mini Apps docs](https://docs.base.org/mini-apps)
