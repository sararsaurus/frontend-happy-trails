# SomeTrails

Welcome to the frontend for SomeTrails!

SomeTrails is a one-stop prep shop for wilderness patrol volunteers. It automatically generates a printable page for your scheduled patrol that includes:

- :sunny: important daylight information
- :cloud_with_lightning_and_rain: today's and tonight's forecast
- :mountain: trail conditions
- :notebook: general facts about your selected area

## Libraries

React (frontend),
Rails (backend),
Mapbox GL JS

## Installation & usage

This project is locally hosted, and the frontend pairs with [this backend](https://github.com/sararsaurus/backend-happy-trails-api), which you will need to get things working.

Once you've followed the backend instructions, clone this repo and run:

```bash
npm install
npm run dev
```

Don't forget to get that backend code running on http://localhost:3000.
Then you can view the app on http://localhost:5173.

## Roadmap

- Build out the admin-only section
- Improve the UX with some simple frontend validations for signing up and logging in
- Build interactivity between the Mapbox GL JS component and the rest of my app (e.x., allow a user to scroll over a trail and correspondingly zoom onto those coordinates)
