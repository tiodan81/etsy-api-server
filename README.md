# It's a server for the Etsy API

## Setup

1. Create a `.env` file with values for `PORT` and `ETSY_KEY`

## Usage

Run the server with `npm start` or `node index.js`

existing routes:

- single listing: GET `listings/:id`
- images for single listing: GET `listings/:id/images`
- lists for store: GET `/shops/:id/listings`
