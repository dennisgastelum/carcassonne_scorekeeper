# Carcassonne Scorekeeper

A scorekeeper for Carcassonne games with any mix of expansions. It runs in the browser, can be installed on a phone or tablet, works offline and exports results to Excel.

## Publish on GitHub Pages

1. Create a new public repository on GitHub.
2. Choose **Add file > Upload files** and upload everything in this folder, so that `index.html` sits at the top level of the repository.
3. Go to **Settings > Pages**. Under **Build and deployment**, set the source to **Deploy from a branch**, then select `main` and `/ (root)` and save.
4. After a minute or two the app is live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Install it

- **iPhone or iPad:** open the link in Safari, tap Share, then **Add to Home Screen**.
- **Android:** open the link in Chrome, open the menu, then tap **Add to Home screen** or **Install app**.
- **Desktop:** use the install icon in the Chrome or Edge address bar.

Open the app once while online. After that it works without a connection.

## Where the data lives

Games are saved in the browser on the device being used. Nothing is sent to a server, and scores do not sync between devices. Clearing browser data deletes the current game, so use **Download spreadsheet** to keep results.

## Rulebooks

The rulebooks are not part of the website. Each tablet keeps its own copies, so they never go on GitHub.

1. On the tablet, open the app, go to **Game** and switch to **Rulebooks**. The list shows the Base Game, every expansion ticked in Setup, Expansion Combination and House Rules.
2. Tap a rulebook marked **Tap to add PDF** and pick its PDF. The file can have any name: it is saved under the rulebook you tapped. Use **Replace** next to a rulebook to swap in a different PDF.
3. To add many at once, tap **Add rulebook PDFs** and select several files. This recognises these file names (capitals, spaces and punctuation do not matter):

   | File | Rulebook |
   |---|---|
   | `01_Base_Game.pdf` | Base Game |
   | `02_River_and_Abbot.pdf` | River and Abbot (one file for both) |
   | `03_1_-_The_Flying_Machines.pdf` | Mini 1, The Flying Machines |
   | `04_2_-_The_Messengers.pdf` | Mini 2, The Messages |
   | `05_3_-_The_Ferries.pdf` | Mini 3, The Ferries |
   | `06_4_-_The_Gold_Mines.pdf` | Mini 4, The Gold Mines |
   | `07_5_-_Magician__Witch.pdf` | Mini 5, Magician & Witch |
   | `08_6_-_The_Robbers.pdf` | Mini 6, The Robbers |
   | `09_7_-_The_Crop_Circles.pdf` | Mini 7, The Crop Circles |
   | `10_1._Inns__Cathedrals.pdf` | Inns & Cathedrals |
   | `11_2._Traders__Builders.pdf` | Traders & Builders |
   | `12_3._Dragon__Fairy.pdf` | Dragon & Fairy |
   | `13_4._Towers__Thieves.pdf` | Towers & Thieves |
   | `14_5._Messengers__Mayors.pdf` | Messengers & Mayors |
   | `15_6._Jousts__Crests.pdf` | Jousts & Crests |
   | `16_7._Siege__Defense.pdf` | Siege & Defense |
   | `17_8._Castles__Bridges.pdf` | Castles & Bridges |
   | `18_9._Sheep__Shepherds.pdf` | Sheep & Shepherds |
   | `19_10._Circus__Artists.pdf` | Circus & Artists |
   | `20._Ghosts.pdf` | Ghosts, Castles and Cemeteries |
   | `21_Hansa.pdf` | Hansa |
   | `22_Spring.pdf` | Spring |
   | `23_Summer.pdf` | Summer |
   | `24_Autumn.pdf` | Autumn |
   | `25_Winter.pdf` | Winter |
   | `26_Bets.pdf` | Bets |
   | `27_German_Cathedrals.pdf` | German Cathedrals |
   | `28_Drawbridges.pdf` | Drawbridges |
   | `29_Festival.pdf` | Festival |
   | `30_Fruit-Bearing_Trees.pdf` | Fruit-Bearing Trees |
   | `31._Markets.pdf` | Markets of Leipzig |
   | `32._Monasteries.pdf` | Monasteries in Germany |
   | `34._Phantom.pdf` | Phantom |
   | `35_Signposts.pdf` | Signposts |
   | `36._Tollkeepers.pdf` | Tollkeepers |
   | `37_Watchtowers.pdf` | Watchtowers |
   | `38_Wonders_of_Humanity.pdf` | Wonders of Humanity |
   | `39_Castles_in_Germany.pdf` | Castles in Germany |
   | `40._Snakes_ladders.pdf` | Snakes and Ladders |
   | `41._Spell_circles.pdf` | Spell Circles |
   | `42_Gifts.pdf` | Gifts |
   | `43_Halflings.pdf` | Halflings |
   | `44_Peasant_Revolts.pdf` | Peasant Revolts |
   | `45._Journey.pdf` | Journey to Carcassonne |
   | `46_Barber-Surgeons.pdf` | Barber-Surgeons |
   | `47._Labyrinth.pdf` | Labyrinth |
   | `49._Promo.pdf` | Spiel 25 and Spiel 26 (one file for both) |

   Any other rulebook is recognised by its own name, for example `circus-artists.pdf` or `10. Circus & Artists.pdf`. The names are in `RULE_FILE_NAMES` in `index.html`. Any file that is not recognised is listed so you can add it one by one.
4. The PDFs are kept on that tablet, so they work offline. Clearing the browser's site data, or removing the app from the home screen, deletes them. Use **Remove all** to free the space.

Rulebooks added on one device are not copied to another, so add them on each tablet.

## Scoring modes

Choose the mode in **Setup** under **Scoring mode**. You can switch at any time; nothing already logged is lost.

- **Simple** keeps score only. There is no tile to choose, and the turn log and spreadsheet leave out turn numbers and tiles. Setup and the score breakdown show only how many tiles the game has in total, not per expansion or how many have been played. **Undo** removes the latest log line, and **+1 tile** and the automatic River start are switched off.
- **Extended** also tracks tiles: where each tile came from, turn numbers and tile counts.

## Clocks

The **Scores** tab has a **Game time** clock at the bottom. It starts with **Start game**, **Pause** stops it (and every other clock) until **Resume**, and **Clear scores** resets it.

In **Extended** mode there is also:

- **This turn**, above Game time, showing how long the current player has been on their turn.
- Each player's total time, beside their score, to the nearest 10 seconds.
- **River**: in a game with the River, the first stretch is timed as the river. It ends when the first **Tile played from** is chosen, and its time stays on show beside This turn.

During final scoring the **Scores** tab gives each player a badge for every category where they scored the most (roads, cities, monasteries, each expansion and fields; ties share it), and a **Share** button copies the results as text, ready to paste into a message.

**Go to final scoring** stops all the clocks; **Back to game** starts them again, leaving out the time spent in final scoring. Final scoring also stops the music at once, plays the final scoring sound and then moves on to the Endgame songs, and no points popups or spoken quotes appear while it is on.

## Music

The app can play your own music during a game, in four stages, each a folder in this repository:

| Stage | Folder | When it plays |
|---|---|---|
| I. Dark | `music/dark` | one random song to open each game |
| II. Feudal | `music/feudal` | until the game has run 30 minutes |
| III. Castle | `music/castle` | from 30 to 60 minutes |
| IV. Imperial | `music/imperial` | after 60 minutes |
| Endgame | `music/endgame` | during final scoring |

Songs within a stage play in random order, each once before any repeats. A song is never cut off when a stage changes: the song playing at that moment finishes, and the next one comes from the new stage. An empty stage is skipped.

### Now Playing banner

Under the clock in Scores, a banner shows the song: **▶ Now Playing: [age icon] Feudal – Song title from [game icon]**.

- Song titles and their game come from the `SONG_NAMES` list in `index.html` (file name → game and title). A file that is not in the list still shows, with a tidied version of its file name.
- Game icons: `icons/games/aoe2.png`, `icons/games/civ6.png` and `icons/games/anno1404.png`. If one is missing, the banner shows AoE II, Civ VI or Anno 1404 in a small circle instead.
- Age icons: the shields in `icons/ages/` (`dark.png`, `feudal.png`, `castle.png`, `imperial.png`). Endgame uses the Imperial shield.
- A song uploaded twice, once with spaces and once with underscores in its name, is played as one song.

1. Upload songs into the folders: on the upload page, drag in a `music` folder that contains `dark`, `feudal`, `castle`, `imperial` and `endgame` with the songs inside.
2. Use MP3 files under 25 MB each. Adding or removing a song is enough; the app finds the files itself.
3. In the app, open **Setup** and tick **Play music during the game**. The **Music** button beside Sound pauses and resumes it during play.

Songs are streamed from the website rather than saved on the tablet, so music needs an internet connection. The stages follow the game clock at the bottom of the **Scores** tab: it starts with **Start game**, can be paused there, and restarts with **Clear scores**. While the clock is paused, the next stage waits.

Anything in this repository can be downloaded by anyone who has the link, so only upload music you have the right to share.

## Updating

Upload the changed files to the repository. The app fetches them in the background, so the new version appears the next time it is opened after that (GitHub can take about ten minutes to serve new files). If you rename, add or remove a file, update the `ASSETS` list in `sw.js` and change the `CACHE` name.

## Credits

Unofficial fan-made tool, not affiliated with or endorsed by the publishers of Carcassonne. Carcassonne is a trademark of its respective owner.

Bundled in `vendor/`, with licences alongside: [SheetJS](https://sheetjs.com) (Apache 2.0), [PDF.js](https://mozilla.github.io/pdf.js/) (Apache 2.0), [Libre Caslon Text](https://github.com/impallari/Libre-Caslon-Text) and [Work Sans](https://github.com/weiweihuanghuang/Work-Sans) (SIL Open Font License).
