# ShackDesk.com — Self-Hosted Fonts

## Why self-hosted?

ShackDesk.com loads fonts from this folder rather than Google Fonts CDN for
three reasons:

1. **Privacy** — Google Fonts (loaded remotely) transmits each visitor's IP
   address to Google's servers. ShackDesk's privacy policy states we do not
   collect IP addresses. Self-hosting eliminates this contradiction entirely.
   German courts have ruled remote Google Fonts loading violates GDPR for
   exactly this reason.

2. **Performance** — Fonts served from this folder load from the same
   Cloudflare edge node as the rest of the site. No extra DNS lookup, no
   external connection latency, no render-blocking cross-origin request.

3. **Offline resilience** — Consistent with ShackDesk's offline-first
   philosophy. The site renders correctly on captive portals, restricted
   networks, and air-gapped environments.

## Fonts used

| Font              | Weights          | Purpose                        |
|-------------------|------------------|--------------------------------|
| Roboto Condensed  | 400, 700         | Headings, nav, labels, buttons |
| Source Serif 4    | 300, 400, 400i, 600 | Body text                   |
| JetBrains Mono    | 400, 600         | Callsigns, version numbers, code |

All fonts are licensed under the SIL Open Font License (OFL), which permits
free use including web embedding. License files are included in this folder.

Original source: Google Fonts (https://fonts.google.com)

## How to download or refresh these files

Use Fontsource — download zips directly from each font's page:

  https://fontsource.org/fonts/roboto-condensed
  https://fontsource.org/fonts/source-serif-4
  https://fontsource.org/fonts/jetbrains-mono

On each page click Download (top right). Extract the zip and copy only
the latin-{weight}-normal.woff2 files (and latin-400-italic.woff2 for
Source Serif 4) into this folder. See "Expected files" section above for
the exact filenames. All filenames match the @font-face src paths in
/style.css exactly — do not rename the files.

## Expected files in this folder

From the JetBrains Mono zip:
  jetbrains-mono-latin-400-normal.woff2
  jetbrains-mono-latin-600-normal.woff2

From the Roboto Condensed zip:
  roboto-condensed-latin-400-normal.woff2
  roboto-condensed-latin-700-normal.woff2

From the Source Serif 4 zip:
  source-serif-4-latin-300-normal.woff2
  source-serif-4-latin-400-normal.woff2
  source-serif-4-latin-400-italic.woff2
  source-serif-4-latin-600-normal.woff2

All other files in the Fontsource zips (cyrillic, greek, vietnamese,
latin-ext, woff non-2, unused weights) should be discarded — only the
latin subset woff2 files listed above are needed.

## Do these files need updating?

Rarely, and never urgently. woff2 files are static — they do not auto-update
and have no security implications. You would only refresh them if:

  - A font receives a significant revision fixing a rendering bug you notice
  - You change the font choices entirely
  - A specific character or glyph is missing that a newer version adds

For practical purposes: download once, commit, and revisit only if you have
a specific reason to.

## License files

OFL license files for each font family are included in the Fontsource zips.
Commit them alongside the woff2 files.
