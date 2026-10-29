# Components

Read this before building anything. Reuse or extend what is listed here; never create a page-specific Button, Card, Modal or loader.

## ui/

| Component    | Purpose                                                              | Props                                                                             |
| ------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `Button`     | The only button. Has a loading state that shows the shared `Loader`. | `variant?: "primary" \| "ghost"`, `isLoading?`, plus every native `<button>` prop |
| `ButtonLink` | A `next/link` styled exactly like `Button`, for internal routes.     | `href: Route`, `variant?`, `className?`, `children`                               |
| `Container`  | Page-width wrapper with the side gutter.                             | `children`, `className?`                                                          |
| `Eyebrow`    | Mono label with an index and a hairline, above every heading.        | `index?`, `children`, `className?`                                                |

## shared/

| Component       | Purpose                                                                                           | Props                                                       |
| --------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `Loader`        | The single loader: an ember dot orbiting a teal ring. Pure CSS, works on server and client.       | `variant?: "fullscreen" \| "section" \| "inline"`, `label?` |
| `ErrorState`    | Full-screen message used by `error.tsx`, `global-error.tsx` and `not-found.tsx`.                  | `eyebrow`, `title`, `message`, `action?: ReactNode`         |
| `SectionHeader` | Server: eyebrow, h2 and lede for a section, read from `mocks/sections.ts`.                        | `section`, `titleId`, `className?`                          |
| `RevealText`    | Client leaf: reveals each child line by line on scroll (GSAP SplitText). Off with reduced motion. | `children`, `className?`                                    |
| `Parallax`      | Client leaf: drifts its children while the parent crosses the viewport.                           | `children`, `className?`, `amount?`                         |
| `SocialRow`     | Server: one channel as a large row with icon, name, handle and arrow. Reused by Connect.          | `link: SocialLink`                                          |
| `VentureLink`   | Server: external link to a venture website, underlined in its accent. Used by Group and Connect.  | `url`, `name`                                               |

## layout/

| Component      | Purpose                                                                     |
| -------------- | --------------------------------------------------------------------------- |
| `SkipLink`     | Keyboard "Skip to content" link targeting `#main-content`.                  |
| `GrainOverlay` | Fixed film-grain texture over the whole page (CSS only).                    |
| `SmoothScroll` | Client leaf: Lenis smooth scroll on GSAP's ticker. Off with reduced motion. |
| `SiteFooter`   | Server: copyright, role and a back-to-top link, on every page.              |

## pages/home/

| Component                              | Purpose                                                                                                                                                                      |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sections/Hero/HeroSection`            | Hero shell: backdrop, stage and copy.                                                                                                                                        |
| `sections/Hero/HeroCopy`               | Server-rendered name, role, disciplines and tagline (the LCP element).                                                                                                       |
| `sections/Hero/HeroStage`              | Client leaf: detects the device tier, then shows the canvas or the `fallback`.                                                                                               |
| `sections/Hero/HeroCanvas`             | Client leaf, loaded with `next/dynamic`: R3F canvas, `ParticleField`, bloom on high tier. The last stage is sampled from the CEO photo (`scripts/prepare-ceo-portrait.mjs`). |
| `sections/Hero/HeroStageLabel`         | Client leaf: names the venture the particles currently form.                                                                                                                 |
| `sections/Hero/HeroSignature`          | Server, CSS-only: the surname drawing itself, for low-power and reduced-motion devices.                                                                                      |
| `sections/Chairman/ChairmanSection`    | The Man: parallax portrait, story, tenets and the pull-quote.                                                                                                                |
| `sections/Chairman/ChairmanPortrait`   | Server: framed `next/image` portrait inside `Parallax`.                                                                                                                      |
| `sections/Chairman/ChairmanPhilosophy` | Server: numbered tenets.                                                                                                                                                     |
| `sections/Chairman/ChairmanQuote`      | Server: oversized pull-quote inside `RevealText`.                                                                                                                            |
| `sections/Group/GroupSection`          | The Group: intro panel plus one chapter per venture.                                                                                                                         |
| `sections/Group/EmpireTrack`           | Client leaf: pins and scrolls chapters sideways on wide screens; stacks elsewhere.                                                                                           |
| `sections/Group/VentureChapter`        | Server: one venture, tinted by its accent class.                                                                                                                             |
| `sections/Group/VentureEmblem`         | Client leaf: the venture's hero shape re-assembling from dots on a 2D canvas.                                                                                                |
| `sections/Group/VentureStats`          | Server: stat row in the venture accent.                                                                                                                                      |
| `sections/Journey/JourneySection`      | The Journey: sticky header beside the milestone list.                                                                                                                        |
| `sections/Journey/JourneySpine`        | Client leaf: hairline spine that fills on scroll and lights each milestone it reaches.                                                                                       |
| `sections/Journey/MilestoneItem`       | Server: one milestone with its phase number and node.                                                                                                                        |
| `sections/Numbers/NumbersSection`      | By the Numbers: four large figures on a teal band.                                                                                                                           |
| `sections/Numbers/NumberFigure`        | Server: figure and label, with the final value for screen readers.                                                                                                           |
| `sections/Numbers/Counter`             | Client leaf: counts up once on scroll. Server HTML holds the final value.                                                                                                    |
| `sections/Trust/TrustSection`          | Trust: certification plaques and the partner marquee.                                                                                                                        |
| `sections/Trust/CertificationPlaque`   | Server: monochrome plaque that warms to ember on hover.                                                                                                                      |
| `sections/Trust/PartnerMarquee`        | Server, CSS-only marquee. Static wrapping list with reduced motion.                                                                                                          |
| `sections/Presence/PresenceSection`    | Presence: intro, highlights and the channel list.                                                                                                                            |
| `sections/Presence/PresenceHighlights` | Server: numbered highlights.                                                                                                                                                 |
| `sections/Letter/LetterSection`        | A Letter: the Chairman's note on a stationery panel.                                                                                                                         |
| `sections/Letter/SignatureDraw`        | Client leaf: signs the letter in ember once it scrolls into view.                                                                                                            |
| `sections/Connect/ConnectSection`      | Connect: direct contact rows and the group's websites.                                                                                                                       |
