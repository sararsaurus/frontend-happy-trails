# README

# SomeTrails (frontend)

Welcome to the frontend for SomeTrails!

SomeTrails is a one-stop prep shop for wilderness patrol volunteers. It automatically generates a printable page for your scheduled patrol that includes:

- :sunny: important daylight information
- :cloud_with_lightning_and_rain: today's and tonight's forecast
- :mountain: trail conditions
- :notebook: general facts about your selected area

It also allows users to sign up, log in, schedule and amend or delete patrols, view (only) their own scheduled patrols, view an interactive terrain map of the James Peak and Indian Peaks Wilderness areas, and check out a resource page with relevant embedded twitter feeds and a complete weekly forecast. Admins can further manipulate the available data.

This project is locally hosted, and the frontend pairs with [this backend](https://github.com/sararsaurus/backend-happy-trails-api).

Click [here](https://youtu.be/5GF2niIeHfY) for a quick demo!

## Libraries, APIs & code editor

- Built using [Visual Studio Code](https://code.visualstudio.com/)
- React 18.2.0
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/guides/) \*\* Please note that you will need a token

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

You'll need to have your own Mapbox token and [the backend code](https://github.com/sararsaurus/backend-happy-trails-api) running on http://localhost:3000.
You can view the app on http://localhost:5173.

## Roadmap

- Build out the admin-only section (e.g., add a calendar that displays all scheduled hikes)
- Improve the UX with some simple frontend validations for signing up and logging in
- Build interactivity between the Mapbox GL JS component and the rest of my app (e.g., allow a user to scroll over a trail and correspondingly zoom onto those coordinates)
