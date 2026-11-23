// BLOCK TOWER YARD — Akun 3 (@cicihandayani / cicihandayani530), bounty
// "Day one, day seven" (post-tiktok-day-one-day-seven-20261123-0327).
// Entry program (Node 22, standard library only): copies VIDEO.json from
// the repository root to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do. The entry is the video itself: a
// short TikTok video of this account's tiny agent-built game, BLOCK TOWER
// YARD, on day one and after a week of daily updates, ending with
// make.fun's referral end card carrying this account's referral code
// (r4cjyghj), posted publicly on TikTok with the bounty's line and this
// account's play code (makefun-fox-sofa-aurora) in its caption.
// VIDEO.json names the video; the house reads its views and interactions
// from TikTok. Nothing this program writes about the video is scored.
// The game lives in game.html; the rendered video is post-tiktok-akun3.mp4
// (1080x1920, 14.5 s: day 1 5 s, day 7 9.5 s with the end card overlaid
// on the last 2.5 s).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
