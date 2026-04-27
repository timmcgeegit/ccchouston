# Calvary Community Church Houston — Architecture Spec

**Status:** Draft v1 — synthesized from audit + Tim's answers + WP-CLI inventory, 2026-04-27
**Repo:** `clients/ccchouston/` (SvelteKit + shadcn-svelte + Tailwind)
**Live reference:** calvaryhouston.com (WordPress on WP Engine)
**Migration source inventory:** see `wp-inventory.md` (sibling file in this directory)
**Long-term target:** Lumis CMS on Neon Postgres

---

## 1. Project Goals

Redesign Calvary Community Church Houston's website with a clean, modern, content-first design. The site will eventually migrate to a version of Lumis CMS, so all templates and components should be designed with that migration in mind: data-driven, prop-based, and CMS-friendly.

This is a real client project. Senior pastor is Tim's dad. Goal is to ship as soon as possible without rushing the design.

---

## 2. Technology Stack

| Layer | Choice |
|---|---|
| Framework | SvelteKit |
| Styling | Tailwind CSS + CSS custom properties |
| UI primitives | shadcn-svelte (pruned to what's actually used) |
| Hosting | Vercel |
| Database | Neon Postgres (Lumis CMS pattern) |
| Media / file storage | Cloudflare R2 |
| Auth (target) | Better Auth (Lumis CMS pattern, possibly improved) |
| Forms (v1) | None native — Shelby forms continue until post-launch migration |
| Email | Resend (when forms move off Shelby) |
| Sermons audio | Native HTML5 player serving direct `.mp3` files. Editors upload mp3s manually for v1; investigate whether the Spotify/Anchor API exposes a direct mp3 download path to automate the workflow. **Anchor Episodes Index plugin is explicitly being replaced** — current pattern is a stopgap the church got comfortable with; redesign forces the migration. |
| Sermons video | YouTube (default). Vimeo support deferred — current Vimeo plugin in WP is not a target pattern. |
| Sermon distribution | Apple Podcasts `id1498520795`, Spotify `show/0R5AY6E44E3ffa5YhQ3Uz3` — surface as links from `/sermons` |
| Calendar (current + v1) | Shelby (linked / embedded). Custom UI deferred post-launch |
| Forms backend (v1) | **Default to Shelby for all forms.** The church is currently moving to Shelby, so all forms ship as Shelby embeds/links. After launch we pitch them on Lumis-native forms. Gravity / Ninja in WP are migration noise, not a target pattern. |
| Giving | Shelby Giving (`shelbygiving.com`) — `/give` deep-links here, per-missionary giving links also point here |
| Newsletter (current) | Constant Contact (`visitor.r20.constantcontact.com`). Replace with Resend post-launch |
| Maps | Google Maps embed on `/plan-visit` |
| Shop / merch | **Likely killed.** WooCommerce + Printful is in WP but church may have already moved to Shopify and may not actively use it. Confirm with staff before launch — default plan is no shop, link out to Shopify if they have one. |
| Source CMS | WordPress on WP Engine. SSH access via `~/.ssh/wpengine_ed25519` as `calvaryhouston@calvaryhouston.ssh.wpengine.net`. **Migration is intentionally manual / AI-assisted** — Tim is rewriting copy per page in the redesign, not bulk-importing. WP-CLI is used for inventory, not extraction. ACF field dumps and Gutenberg block unwrap are *not* needed for v1. |
| Domain | calvaryhouston.com (existing — DNS cutover at launch) |
| Analytics | TBD |

---

## 3. Site Map

### Primary nav (desktop, kept simple)

Calvary's current top nav is six items: Join Us Sunday / About / Get Involved / Kids & Youth / Sermons / Give. We're tightening to five with sub-menus for the heavier branches:

1. Join Us Sunday → dropdown: Plan a Visit, Connect Card, Join Online
2. About Us → dropdown: About, Our History, Staff, Become a Member
3. Get Involved → dropdown: Adults, Ladies, Kids, Youth, Journey Groups, Missions, Local Missions, Serve
4. Sermons
5. Give

**Open IA decision:** Calvary currently combines Kids & Youth into a single nav item. Our spec splits them. Worth A/B-testing or asking the staff whether parents/users mentally group these together.

### Secondary nav (topbar)

Service times + 2–4 utility links (Calendar, Blog, Contact, Prayer Request). Topbar can also display dynamic info (service start times, location, etc.).

### Hamburger / mobile nav

All primary + topbar links plus overflow. Needs admin UI for staff to manage menu structure.

### Footer

Social, copyright, legal links (privacy, terms — likely linked but ship as later-phase pages).

### Routes

| Route | v1 priority | Type | Notes |
|---|---|---|---|
| `/` | P0 | Custom | Homepage |
| `/about` | P0 | Custom | About + team + vision |
| `/kids` | P0 | Ministry template | |
| `/youth` | P0 | Ministry template | Currently a copy of /kids — needs real content |
| `/adults` | P0 | Ministry template | Has best content already |
| `/missions` | P0 | Ministry template variant | Most content-rich; no announcement grid currently |
| `/serve` | P0 | Ministry template | Currently a copy of /adults — needs real content |
| `/sermons` | P0 | Custom | New build: native mp3 audio + YouTube video, full-text search across transcripts/notes |
| `/sermons/[slug]` | P0 | Detail | Tabbed: Video / Audio / Notes / Transcript |
| `/give` | P0 | Custom | Clean page that routes people to existing processor |
| `/contact` | P0 | Page | Shelby form embed for v1; replace later |
| `/calendar` | P1 | Link/embed | Links/embeds Shelby calendar for v1. Custom UI deferred |
| `/announcements` | P0 | Index | Filterable list view |
| `/blog` | P0 | Index + post | **More active than initially scoped.** WP source has 235 posts including annual recurring devotional series (First Love Fast). Treat as a real publishing surface, not a backwater. |
| `/blog/[slug]` | P0 | Post | |
| `/plan-visit` | P0 | Custom | |
| `/our-history` | P0 | Page | Standalone, not folded into About |
| `/become-a-member` | P0 | Custom | Discover Calvary class funnel — critical conversion route |
| `/journey-groups` | P0 | Custom | Top-level small groups page (Calvary calls this "the heartbeat") |
| `/ladies` | P0 | Ministry template variant | Women's ministry — retreat, Delight Nights, Bible study |
| `/local-missions` | P0 | Custom | Distinct from `/missions` (Hairgrove Partnership, etc.) |
| `/prayer-room` | P0 | Page | Physical prayer room with weekly schedule grid (≠ /prayer-request) |
| `/staff` | P0 | Index | Standalone team directory, separate from /about |
| `/sermons/series/[slug]` | P1 | Detail | Sermon series landing page |
| `/missions-partners` | P1 | Index | Ministry partner directory grouped by focus |
| `/resources` | P1 | Index | Content library (PDFs, books, fasting materials, recommended reading) |
| `/ministry-team-training` | P1 | Page | Equipping/leadership development |
| `/prayer-request` | P1 | Redirect → Shelby | Real page later |
| `/connect-card` | P1 | Redirect → Shelby | Real page later |
| `/join-online` | P1 | Custom | Online streaming page |
| `/memorial-services` | P1 | Page | Existing WP page (id 11017) — low-traffic but real |
| `/what-we-believe` | P1 | Page | WP draft (id 2925) — finish writing as part of v1 |
| `/shop` | — | Likely killed | WooCommerce + Printful in WP but probably abandoned. Confirm with staff; default = no shop or external link |
| `/privacy-policy` | P2 | Page | |
| `/terms-of-service` | P2 | Page | |

### Routes to kill / clean up

- `/login` — disabled in current build; will return when Better Auth ships
- All `/firm` references in topbar (law-firm template artifact)
- Hardcoded "Sermons" + "Give" → `/about` redirects in header

---

## 4. Page Templates

### Template: Ministry Page

Used by: `/kids`, `/youth`, `/adults`, `/missions`, `/serve`, and any future ministry pages.

Sections (top to bottom):

1. **Hero** — `pageTitle` (h1), subtitle, animated down-arrow anchor
2. **Hero image** — full-width with gradient overlay (each ministry gets a unique image; brand color stays teal)
3. **Intro** — narrative copy about the ministry's vision
4. **Offset-card feature** — a "Special Event" or featured callout with image + title + body + CTA
5. **Programs accordion** — collapsible list of recurring programs / FAQ-style content
6. **Announcements grid** — category-filtered, **hideable when empty** or via toggle

The template should be a real Svelte component (`<MinistryPage>`) that takes its sections as props or named slots, so adding a new ministry page is content-only, not code.

### Template: Standard Content Page

Used by: `/about`, `/plan-visit`, `/give`, `/sermons`, `/contact`, `/blog/[slug]`, future content pages.

Looser template — flexible composition of the design system's section primitives:
- Hero
- Image-with-text section
- Offset-card feature
- Accordion
- Card grid (3-col, 4-col)
- Announcement grid
- Newsletter callout
- Page-end CTA band

### Template: Index Page

Used by: `/announcements`, `/blog`, `/calendar`.

Header + filter bar + grid/list of items + pagination.

### Template: Item Detail

Used by: `/blog/[slug]`, future event detail, future sermon detail.

---

## 5. Content Types (data model targets)

These will live in Neon Postgres once the Lumis CMS integration ships. For now, sample-data.ts mirrors the schema.

### Announcement (P0 — most important)

Central content type. Filters away the noise of "everything in the calendar."

```ts
type Announcement = {
  id: string;                       // uuid
  title: string;
  description: string;
  img_square: string | null;        // editor uploads; alt_text REQUIRED
  img_16x9: string | null;
  alt_text: string;                 // REQUIRED for accessibility
  optional_overlay_title?: string;  // for graphics-with-baked-in-text — see §7 hover behavior
  category: string;                 // vocabulary TBD (open question)
  scope: 'site' | 'ministry';       // site = homepage / global; ministry = audience-segmented
  ministry_keys?: string[];         // when scope=ministry, which pages it shows on
  priority: 'normal' | 'urgent';    // urgent = "super important" filter (cancellations etc.)
  link_type: 'standalone' | 'blog_post' | 'event' | 'external';
  link_target: string;              // url or internal slug
  starts_at: string | null;         // for time-bounded announcements
  ends_at: string | null;
  sort_order: number | null;        // manual sort within scope/category
  featured: boolean;                // homepage featured grid
  created_at: string;
  updated_at: string;
};
```

**Decided:**
- `scope` is a fixed enum (`site` | `ministry`)
- `ministry_keys[]` is a multi-select from a fixed list (kids, youth, adults, missions, serve, women, men, prayer, etc.)
- `tags[]` is free-form for cross-cutting topics (advent, easter, back-to-school)
- **Urgent placement UX: option B (inline alert above the hero) as default, with option C (first-visit modal) as an opt-in toggle per announcement.** Not site-wide banner.
- **Time-bounded:** when `ends_at` passes, announcement auto-hides. Editor can extend manually.
- **Announcement → blog post relationship:** manually linked. `link_target` can be any internal slug or external URL. No auto-creation of blog posts from announcements.

### Sermon

```ts
type Sermon = {
  id: string;
  title: string;
  speaker_id: string;               // FK → Speaker (not just a name string — see Speaker below)
  series_id: string | null;         // FK → SermonSeries (optional — not always used)
  preached_at: string;
  audio_url: string | null;         // direct mp3, served natively (not embedded)
  video_url: string;                // YouTube
  transcript: string | null;        // markdown or HTML
  notes: string | null;             // markdown or HTML
  notes_pdf_url: string | null;     // optional downloadable PDF asset
  scripture_refs: string[];
  tags: string[];
  search_text: string;              // generated: title + speaker + scripture + transcript + notes for full-text search
  created_at: string;
  updated_at: string;
};
```

### Sermon Series

```ts
type SermonSeries = {
  id: string;
  slug: string;
  title: string;
  description: string;
  art_url: string;                  // series artwork
  alt_text: string;
  starts_at: string;
  ends_at: string | null;
  primary_speaker_id: string | null;
  created_at: string;
};
```

### Speaker

```ts
type Speaker = {
  id: string;
  name: string;
  is_staff: boolean;                // staff preachers vs. visiting/missionary speakers
  team_member_id: string | null;    // FK → TeamMember when is_staff
  bio: string | null;               // for non-staff speakers (visiting, missionaries)
  image_url: string | null;
  alt_text: string | null;
};
```

**Listing UX:** latest first, default sort. Filters: series (when set), speaker. **Full-text search across title + speaker + scripture + transcript + notes is required** (not just sort/filter). Series is optional metadata, not a primary navigation axis.

**Audio:** native HTML5 audio player consuming a direct `.mp3` URL. Editors download the mp3 from Anchor/Spotify and upload. Document this workflow for staff. No Spotify/Anchor iframe embeds.

**Detail page layout:** tabbed (Video / Audio / Notes / Transcript). Default tab is Video. Tabs hide when their content is missing. Multiple design options for this page will be reviewed before final implementation.

### Blog Post

```ts
type BlogPost = {
  id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  body: string;                     // markdown
  category: 'ministry' | 'events' | 'testimonials';
  author: string;
  hero_image: string | null;
  alt_text: string;                 // REQUIRED
  published_at: string | null;
  created_at: string;
  updated_at: string;
};
```

### Team Member

```ts
type TeamMember = {
  id: string;
  slug: string;                     // for future detail page
  name: string;
  position: string;
  image: string;
  alt_text: string;                 // REQUIRED
  bio: string | null;               // markdown or sanitized HTML
  phone_extension: string | null;   // e.g., "108" — Calvary uses extensions for direct staff contact
  email: string | null;
  ministry_keys: string[];          // which ministries they're tied to
  sort_order: number;               // drag-and-drop in admin, persists numeric
  active: boolean;
  created_at: string;
};
```

**Display in current design:** flat list. Bio surfaces as a Dialog/modal on click — no separate detail page in v1. A `/staff/[slug]` detail page is on the roadmap (post-launch) and the schema already supports it via `slug`. **Admin UX:** drag-and-drop reorder, persists numeric `sort_order`.

### Calendar Event

**Deferred to post-launch.** Calvary currently uses Shelby calendar; convincing them to migrate will take time. V1 launches with a link/embed pointing at Shelby. Custom calendar UX is a Phase 5+ build.

When built: list view as primary (mobile-friendly default), month view secondary, ministry filter required. Schema TBD; recurrence rules deferred. Native event registration deferred — link to external (Shelby/Tally) only.

### Special Events — no dedicated content type

Events do **not** get their own content type for v1. Pattern instead:
- An "event callout" or "feature section" gets manually added to the relevant ministry page (e.g., the offset-card "Special Event" block already on every ministry template).
- The callout's link points to one of: a blog post (writeup), a Shelby event/registration page, or any other internal/external URL.
- Recurring large events (Summer Blast, First Love Fast, Discover Calvary) get a blog post per occurrence and the ministry page links to the latest.

This keeps the data model lean. If event volume grows enough to need a CPT, we add it later — not preemptively.

### Recurring Schedule Block

For things like Prayer Room hours (Mon 9-7, Tue 11-1, Thu 6-noon).

```ts
type ScheduleBlock = {
  id: string;
  parent_type: 'prayer_room' | 'kids_club' | 'ministry' | 'custom';
  parent_id: string;
  day_of_week: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  starts_at_time: string;           // "09:00"
  ends_at_time: string;             // "19:00"
  label: string | null;             // "Open prayer", "Worship-led prayer"
  active: boolean;
};
```

### Missionary

```ts
type Missionary = {
  id: string;
  slug: string;                     // for future detail page
  name: string;
  region: string;                   // "Kansas City", "Europe", etc.
  sending_org: string | null;       // "Release the Kingdom", "IHOPKC"
  bio: string;
  image_url: string | null;
  alt_text: string;
  giving_url: string;               // Shelby giving link, per-missionary
  active: boolean;
  sort_order: number;
};
```

**Display in current design:** missionaries render in a card grid on `/missions`; bio surfaces as a Dialog/modal on click. Same pattern as TeamMember. A `/missionaries/[slug]` detail page is on the roadmap (post-launch); schema supports it via `slug`.

### Ministry Partner

```ts
type MinistryPartner = {
  id: string;
  name: string;
  category: 'prayer' | 'compassion' | 'disaster_relief' | 'church_planting' | 'evangelism' | 'other';
  region: 'local' | 'national' | 'global';
  description: string;
  external_url: string;
  logo_url: string | null;
  alt_text: string | null;
  sort_order: number;
};
```

### Resource / Document

For the `/resources` content library (PDFs, books, fasting materials, recommended reading).

```ts
type Resource = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'book' | 'pdf' | 'video' | 'external_link' | 'audio';
  asset_url: string;                // R2 URL for PDFs/audio, external for links
  cover_image: string | null;
  alt_text: string | null;
  price: string | null;             // null = free, otherwise display string
  recommended_by: string | null;    // staff member who recommended
  tags: string[];
  active: boolean;
  sort_order: number;
};
```

### Site Settings

All editable from the admin:
- Service times (display string, e.g., "Sundays 9 AM + 10:30 AM")
- Address / city
- Phone number
- Social URLs (twitter, facebook, instagram, youtube, spotify)
- Footer copyright line
- "Watch Live" toggle + URL — when on, replaces topbar utility nav with a live indicator
- Holiday hours / special schedule notice (optional override of service times)
- Topbar utility nav items (default: Calendar, Blog, Contact, Prayer Request)

### Navigation Items

**Data-driven from day one.** Editable nav structure for primary + topbar + mobile menu. Replaces hardcoded nav in `header.svelte`. Single source of truth: a `navigation` table editable from the admin (admin UI lands in Phase 3, but the data model and read path go in immediately so we don't have to refactor later).

```ts
type NavItem = {
  id: string;
  scope: 'primary' | 'topbar' | 'mobile' | 'footer';
  parent_id: string | null;        // for dropdown children
  label: string;
  href: string;
  sort_order: number;
  visible: boolean;
};
```

---

## 6. Design System

### Primary brand color

Teal — `187 30% 42%` (current `--primary`). All UI accents derive from this. No multi-color theming.

### Typography scale (recommendation)

Move from ad-hoc `text-5xl lg:text-8xl` to a formal scale defined in `tailwind.config.js`:

| Token | Mobile | Desktop | Use |
|---|---|---|---|
| `display` | `text-5xl` | `text-7xl lg:text-8xl` | Page heroes (h1) — uppercase, font-black |
| `h1` | `text-4xl` | `text-5xl` | Standard h1 (when hero is a graphic) |
| `h2` | `text-3xl` | `text-4xl lg:text-5xl` | Section titles |
| `h3` | `text-2xl` | `text-3xl` | Subsections |
| `h4` | `text-xl` | `text-2xl` | Card titles, accordion triggers |
| `lead` | `text-lg` | `text-xl` | Hero subtitles, intro paragraphs |
| `body` | `text-base` | `text-lg` | Default paragraph |
| `caption` | `text-sm` | `text-sm` | Meta info, captions |

**SEO/accessibility correction:** the homepage hero text is currently an h1 but reads as a tagline ("A Community Following Jesus Together"). Either:
- (a) Keep it as the h1 but add a hidden semantic h1 for SEO with the actual page title, OR
- (b) Move the tagline to a div styled at display scale and put the real h1 (e.g., "Calvary Community Church Houston") elsewhere on the page

Recommend (b): `display` style is a class, not a tag. The tag is determined by the page's information hierarchy.

### Fonts

Self-host the current fonts (don't reference Google). Identify what the current fonts actually are during the design refinement pass. Keep `font-black` (900) for displays.

### Color tokens (existing, keep)

Defined in `src/app.pcss`. Keep light-mode tokens. **Kill dark mode** — remove `.dark` block and `darkMode: ["class"]` from tailwind config.

### Spacing / layout primitives

- Standardize the offset-card pattern (see §7)
- Standardize hero gradient direction to `to-b` (bottom) — single direction across all heroes
- Container widths: stick with Tailwind defaults + `max-w-4xl` / `max-w-6xl` / `max-w-7xl` for narrow content sections

### Accent details (keep as-is)

- `w-12 h-1 bg-primary mb-4` underline below section titles — this is the single most consistent and successful pattern in the design
- `border-l-4 border-primary` left-border on card titles
- `hover:-translate-y-3 hover:shadow-xl` card lift on hover

---

## 7. Component / Pattern Decisions

### Offset-card pattern → Svelte component

Recommendation: **make it a Svelte component**, not a Tailwind utility.

Rationale:
- It's not just spacing — it's a multi-element pattern (outer primary-bg div, inner offset image div, gradient overlay child). A utility class can't express the structure.
- Components compose better with the future CMS — editors pick a layout block by name, not by remembering a class.
- Tailwind utilities are best for atomic styling decisions. Composite patterns belong in components.

```svelte
<!-- $lib/components/design/OffsetCard.svelte -->
<script>
  export let imageUrl;
  export let altText;
  export let direction = 'br'; // 'tl' | 'tr' | 'bl' | 'br'
  export let aspect = 'lg:aspect-[4/4]'; // override via prop
</script>
```

Use it on home, about, all ministry pages. Eliminates the inconsistency in offset directions.

### Announcement card hover behavior → optional overlay title

Current behavior: title + description appear on hover only.

Updated behavior:
- **Optional** `optional_overlay_title` field on Announcement
- If set: title is rendered visibly over the image (with a readability gradient) before hover. Hover reveals description.
- If not set: existing behavior (title appears on hover)
- `alt_text` becomes a **required** field at the data layer — admin form must enforce.

This handles the church's preference for graphics-with-baked-in-text without sacrificing accessibility for the cases where the graphic doesn't have text.

### Homepage "Get Connected" cards → redesign

Current cards have placeholder legal-services copy and don't fit the church context well. Redesign to mirror the MSPhoto service cards (homepage / service overview). Tim will provide the MSPhoto reference during the design refinement pass.

### Mobile / hamburger nav → full redesign

Current implementation uses `Sheet.Description` for nav content (semantic mismatch) and has dead `#` links. Rebuild as a proper drawer with:
- Full nav structure (primary + topbar combined)
- Smooth open/close animation
- Closes on link click
- Admin-editable structure (uses `navigation` table)

---

## 8. Editorial / Content Strategy

### Voice + tone (TBD — to be built)

Editorial style guide will be co-created. Source material for voice:
- Sermon transcripts
- Senior pastor letters
- Other church communications

### Content adaptation strategy

V1 content: adapt from calvaryhouston.com with strong recommendations for tightening and improved communication. Don't preserve the existing site's verbosity by default. Audit each page's existing copy through the lens of "what does a guest need to know in 30 seconds."

### Editor workflow

- 2–3 staff members + Tim + Claude (Tim's editing workflow includes Claude)
- Style guide enforced through the editor UI (lint hints, voice checker?) — TBD as part of CMS work

---

## 9. Cleanup / Tech Debt to Burn Down

Before design refinement begins, clear out the friction:

1. Delete unused shadcn primitives (~30 components: alert-dialog, calendar, breadcrumb, carousel, command, context-menu, drawer, dropdown-menu, form, label, menubar, pagination, popover, progress, radio-group, range-calendar, resizable, scroll-area, select, skeleton, slider, sonner, switch, table, tabs, textarea, toggle, toggle-group, tooltip, avatar, checkbox)
2. Delete `src/lib/config/site.ts` (placeholder, never imported)
3. Delete `src/lib/config/blog.ts` (will replace with real type/schema)
4. Delete `src/lib/config/announcements.ts` (will replace with real type/schema)
5. Rename `header.svelte` → `Header.svelte` for component case consistency
6. Delete `topbar.svelte`'s `/firm` link (law-firm artifact)
7. Remove all `console.log` debug statements (`/about/+page.svelte`, `OurTeam.svelte`, `stores/user.ts`)
8. Fix typos: "Sunady" → "Sunday", "Wedensdays" → "Wednesdays", "Ministires" → "Ministries"
9. Remove Font Awesome class references from Footer (or actually load Font Awesome — recommend swapping to Lucide which is already in deps)
10. Remove unused `createEventDispatcher` from `TeamMember.svelte`
11. Delete remaining Supabase deps from `package.json` once data layer transition is firm
12. Kill dark mode: remove `.dark` CSS block + `darkMode: ["class"]` config

---

## 10. Phased Roadmap

### Phase 0 — Cleanup (this week)

- Burn down §9 tech debt list
- Establish design system formalization (typography scale, component extraction)
- Pick + self-host fonts

### Phase 1 — Design refinement (1–2 weeks)

- Refactor ministry pages onto `<MinistryPage>` template
- Build `<OffsetCard>`, `<HeroSection>`, `<SectionTitle>`, `<AnnouncementCard>` (with optional overlay title) as proper components
- Redesign mobile nav
- Redesign homepage "Get Connected" cards (MSPhoto-style)
- Standardize hero gradient direction
- Fix homepage h1 semantics
- Ship `/youth` and `/serve` real content (currently copy-paste of /kids and /adults)
- Build editorial style guide v1

### Phase 2 — Missing routes (2–3 weeks)

- `/sermons` index + `/sermons/[slug]` detail (native mp3 player, YouTube embed, tabs, full-text search)
  - Research spike: Spotify/Anchor API for direct mp3 access to streamline editor workflow
- `/give` (clean router page to existing processor)
- `/contact` (Shelby form embed)
- `/calendar` (link/embed to Shelby — custom calendar UI is post-launch)
- `/blog` + `/blog/[slug]` (treat as P0 publishing surface — recurring devotional series will live here)
- `/plan-visit`
- `/announcements` index
- Redirect routes: `/prayer-request`, `/connect-card`, `/join-online`

### Phase 3 — CMS integration (4–6 weeks)

- Wire to Lumis CMS pattern on Neon Postgres
- Better Auth implementation
- Admin UI for: announcements, sermons, blog, team, calendar events, site settings, navigation
- Editor onboarding for staff
- Migrate sample-data.ts content into DB

### Phase 4 — Launch prep

- Final calvaryhouston.com content sweep — pull anything that didn't make the manual rewrite pass
- Decide on WP redirect map (export from Redirection plugin and trim, or skip)
- Confirm `/shop` decision with staff
- Decide on Spotify/Anchor mp3 automation outcome (kept manual or automated)
- SEO pass (meta, sitemap, structured data for sermons)
- Performance pass (Lighthouse target: 95+)
- Accessibility audit
- Privacy policy + terms pages
- Launch

---

## 11. Open Questions Still Outstanding

These can be answered later but are tracked here:

1. **Privacy / Terms** — drafted by Tim, by an attorney, or template-sourced?
2. **Analytics** — Plausible, Vercel Analytics, GA4, or none?
3. **Editorial style guide** — deferred until Tim gathers reference material (sermon transcripts, pastor letters)
4. **Spotify/Anchor mp3 extraction** — investigate whether their API exposes direct mp3 download URLs so editors don't have to manually find/download per episode. Time-box a research spike.
5. **Shop confirmation** — verify with staff whether they want any merch/storefront. Default = none. If yes, link to existing Shopify (if present) or build native in a later phase.
6. **WP redirect map export** — possibly useful for the launch cutover. Decide closer to launch based on whether old URLs are still trafficked. Many redirects in the existing Redirection plugin may be stale.
7. **Calendar UX details** — deferred until post-launch (Shelby links for v1)
8. **Recurrence rule system for events** — deferred with calendar
9. **Native event registration** — deferred
