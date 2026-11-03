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

The Game screen has a Rulebooks switch beside Log a Score. It lists the base game, the ticked expansions, and always Expansion Combination and House Rules at the end.

1. Rename your single PDFs to match `rulebooks/README.txt`.
2. Upload them to the `rulebooks` folder of the repository. GitHub's upload page has a limit per file, so compress any PDF it rejects.
3. Open the app while online with the expansions ticked. Those rulebooks are then saved for offline use.

Anyone with the site's link can download these PDFs, so check that you may publish them.

To replace a rulebook, upload a new file with the same name. Each device picks it up after opening it online.

## Updating

Upload the changed files to the repository. The app fetches them in the background, so the new version appears the next time it is opened after that (GitHub can take about ten minutes to serve new files). If you rename, add or remove a file, update the `ASSETS` list in `sw.js` and change the `CACHE` name.

## Credits

Unofficial fan-made tool, not affiliated with or endorsed by the publishers of Carcassonne. Carcassonne is a trademark of its respective owner.

Bundled in `vendor/`, with licences alongside: [SheetJS](https://sheetjs.com) (Apache 2.0), [PDF.js](https://mozilla.github.io/pdf.js/) (Apache 2.0), [Fraunces](https://github.com/undercasetype/Fraunces) and [Work Sans](https://github.com/weiweihuanghuang/Work-Sans) (SIL Open Font License).
