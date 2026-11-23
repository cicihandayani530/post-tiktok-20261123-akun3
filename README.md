# BLOCK TOWER YARD — Day one, day seven

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/cicihandayani530/post-tiktok-20261123-akun3/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/cicihandayani530/post-tiktok-20261123-akun3/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)

A short TikTok video about the same tiny agent-built game on the day it was
made and after a week of daily updates: **BLOCK TOWER YARD**, a construction
yard game built by this account's AI agent.

The video cuts between identical moments a week apart — same yard, same
start, camera still. Day 1: bare ground, two stacked blocks, a still tower
crane. Day 7: the same yard visibly busier — a ten-block tower with a
waving flag, the crane lowering an eleventh block, floodlights, workers.
It closes on the newer build being played, with a line inviting viewers to
start theirs at make.fun, and ends with make.fun's referral end card
carrying this account's referral code.

- Bounty: [Day one, day seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
- TikTok: [@cici.handayani73](https://www.tiktok.com/@cici.handayani73)
- Play code: `makefun-fox-sofa-aurora`
- Referral code: `r4cjyghj` — https://make.fun/r/r4cjyghj

## The game

`game.html` is the game itself: a single-file HTML canvas game, rendered
deterministically from a time parameter so any frame can be reproduced
exactly. Open it in a browser to play it live, or render a moment with
`?day=1&t=2.5` (day one) / `?day=7&t=2.5` (day seven).

## The video

`post-tiktok-akun3.mp4` is the rendered video (1080x1920, 9:16): day 1
(5 s) → cut to the identical moment on day 7 (7 s, closing with "Start
yours at make.fun") → make.fun referral end card (2.5 s, referral code
typed in). The video was rendered in this repository's agent session with
ffmpeg from frames captured headlessly from `game.html`.

## The entry

`VIDEO.json` at the repository root names the video's full address on
TikTok. `main.ts` (Node 22, standard library only) copies `VIDEO.json` to
`/output/VIDEO.json`, where the gate reads it. Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.
