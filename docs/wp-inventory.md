# Calvary Houston WordPress Inventory

**Source:** `calvaryhouston@calvaryhouston.ssh.wpengine.net` via WP-CLI
**Pulled:** 2026-04-27
**WP version:** WP 6.x (PHP 7.4.33, MySQL 8.0)

## Pages (60+ published)

### Top-level routes confirmed in WordPress

| WP ID | Slug / Title                                              | State         |
| ----- | --------------------------------------------------------- | ------------- |
| 3575  | Home                                                      | publish       |
| 7228  | About                                                     | publish       |
| 7436  | Staff (parent: 0)                                         | publish       |
| 619   | Sermons                                                   | publish       |
| 7799  | Sermon Notes                                              | publish       |
| 659   | Give                                                      | publish       |
| 661   | Calvary Blog                                              | publish       |
| 664   | Contact                                                   | publish       |
| 4513  | Announcements                                             | publish       |
| 642   | Children                                                  | publish       |
| 645   | Students                                                  | publish       |
| 629   | Adult Classes                                             | publish       |
| 626   | Journey Groups                                            | publish       |
| 654   | Missions                                                  | publish       |
| 7486  | Local Missions                                            | publish       |
| 657   | Prayer Room                                               | publish       |
| 7815  | Prayer Request                                            | publish       |
| 652   | Ladies                                                    | publish       |
| 1004  | Ministry Team Training                                    | publish       |
| 623   | Become a Member                                           | publish       |
| 621   | Get Involved (parent of Calendar, Adult Classes, JG, BaM) | publish       |
| 638   | Ministries                                                | publish       |
| 636   | Calendar (parent: 621)                                    | publish       |
| 7168  | Join Us Sunday                                            | publish       |
| 6254  | Online Calendar                                           | publish       |
| 4521  | Join Us Online!                                           | publish       |
| 4562  | Connect                                                   | publish       |
| 3469  | Resources                                                 | publish       |
| 3583  | Cart                                                      | publish (Woo) |
| 6941  | Shop                                                      | publish (Woo) |
| 6942  | Checkout                                                  | publish (Woo) |
| 6943  | My account                                                | publish (Woo) |
| 11017 | Memorial Services                                         | publish       |
| 11463 | MPN                                                       | publish       |

### Drafts / unpublished (intent signals)

| WP ID | Title            |
| ----- | ---------------- |
| 2925  | What We Believe  |
| 2859  | Testimonies      |
| 650   | Men              |
| 4384  | Alpha            |
| 817   | Staff Members    |
| 7702  | Feeds            |
| 7921  | (untitled draft) |
| 8298  | Styles           |

### Per-staff pages (children of Staff page 7436)

- 7434 Steve Meeks
- 7432 Jeff McGee
- (likely more — only sampled)

### Per-missionary pages (children of Missions page 654)

- 1018 Gene and René Haub
- 1017 Eric & Wendy: Beyond
- 1016 David Carter
- 1014 Daniel DeJesus
- 1012 Angela Petry
- 1010 Ana: Ministering Cross Culturally in Europe
- 3708 Michael Newman

### Per-ministry-partner pages (children of Local Missions 7486)

- 1005 Hairgrove Partnership
- (likely more — only sampled)

### Special event landing pages (top-level)

- 12226 First Love Fast 2025
- 11245 Isaiah 62 Fast
- 7466 Celebrate 40
- 5288 Prophetic Life Workshop
- 4857 Propel Conference
- 9421 Grand Opening '87
- 9419 Grand Opening 1983
- 1146 Sharing Our Lives, Sharing the Journey, The Calvary Quest
- 2832 Engaging in Spiritual Warfare and Exercising Spiritual Authority

## Blog posts: 235 published

Far more active than Tim suggested ("they don't use it a lot"). Recent posts include:

- 2026-01-18: 2026 First-Love Fast Devotional – Week 3
- 2026-01-13: 2026 First-Love Fast Devotional - Week 2
- 2026-01-05: 2026 First-Love Fast Devotional
- 2025-11-30: Scripture Reading Plan for Christmas 2025
- 2025-01: First Love Fast 2025 (Weeks 1-3)
- 2024-11: Facing Challenges and Confirm the Work 2024
- 2024-08: A Million Women: An Esther Call on the Mall
- 2024-04: An Invitation to Bless What God is Doing Through Summer Missions
- 2023-01: First-love Fast 2023 (Weeks 1-2)

**Pattern observation:** annual recurring devotional series (First Love Fast) is a major content type — multi-week posts published on a schedule. This implies blog is foundational, not optional.

## Custom Post Types (active)

| CPT                                                                  | Source plugin  | Public | Notes                                |
| -------------------------------------------------------------------- | -------------- | ------ | ------------------------------------ |
| `product`                                                            | WooCommerce    | yes    | Merch via Printful (print-on-demand) |
| `product_variation`                                                  | WooCommerce    | no     |                                      |
| `shop_order`, `shop_order_refund`, `shop_coupon`                     | WooCommerce    | no     |                                      |
| `sp_accordion_faqs`                                                  | Easy Accordion | yes    | FAQ post type                        |
| `sp_easy_accordion`                                                  | Easy Accordion | no     | FAQ groupings                        |
| `nf_sub`                                                             | Ninja Forms    | no     | form submissions                     |
| ACF: `acf-post-type`, `acf-taxonomy`, `acf-field-group`, `acf-field` | ACF Pro        | no     | structure-defining                   |
| `gp_elements`, `gblocks_templates`, `gblocks_styles`                 | GenerateBlocks | no     | template/styling                     |
| `wp_show_posts`                                                      | WP Show Posts  | no     | dynamic post lists                   |

**No custom CPTs registered for sermons, missionaries, staff, partners, events.** All of those are stored as standard WP `page` with parent-child relationships and ACF custom fields (likely). This means:

- ACF Pro field groups will tell us what extra fields each "post type pretending to be a page" has
- Migration needs to scrape ACF fields per-page-template, not per-CPT

## Active Plugins (notable)

| Plugin                                                  | Role                                      | Migration impact                                                                         |
| ------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| **advanced-custom-fields-pro**                          | Custom fields infrastructure              | Critical — all extra content fields live here. Need to dump field groups                 |
| **anchor-episodes-index**                               | Anchor.fm podcast integration on /sermons | Existing sermon-audio pattern. Inspect output to inform our native player                |
| **gravityforms**                                        | Forms (active)                            | Tim said "Shelby" but Gravity is active too — audit which forms use what                 |
| **ninja-forms**                                         | Forms (active)                            | Second form plugin running concurrently with Gravity                                     |
| **woocommerce** + **printful-shipping-for-woocommerce** | Print-on-demand merch                     | /shop decision: replicate, link to Printful direct, or kill                              |
| **woocommerce-paypal-payments**, **woocommerce-square** | Payment processors                        | Two payment paths active                                                                 |
| **redirection**                                         | URL redirect map                          | Export this — primary input to launch redirect plan                                      |
| **wordpress-seo** (Yoast)                               | SEO meta                                  | Per-page meta + sitemap to migrate                                                       |
| **easy-accordion-free**                                 | FAQ as CPT                                | If churches use this for FAQs, may want to migrate as content                            |
| **generateblocks-pro** + **gp-premium**                 | Page builder + theme                      | Page content is in Gutenberg blocks via GenerateBlocks — markup will need careful unwrap |
| **vimeo**                                               | Vimeo embeds                              | Some video may not be on YouTube as Tim said — verify                                    |
| **disable-comments**                                    | Comments off                              | Confirmed: no comments to migrate                                                        |
| **wp-show-posts**                                       | Dynamic post lists                        | Used for blog/announcement listings — find usage                                         |

## Things This Changes in Our Spec

1. **Blog is active and central** — 235 posts, recent recurring devotional series. Our spec should treat blog as P0 and design the editor flow seriously.
2. **Anchor.fm is currently used for sermon audio** — there's already a plugin handling this. Review what it produces before designing our native player.
3. **Vimeo is in active plugins** — some video may be on Vimeo, not just YouTube as Tim mentioned. Need to confirm.
4. **Two form plugins active** (Gravity + Ninja) plus Shelby form embeds. Forms migration is messier than "just Shelby".
5. **Printful WooCommerce store** is real and active — merch decision can't be "kill it" without checking how often staff sells.
6. **Memorial Services page** exists — we didn't plan for this. Probably low-traffic but real content.
7. **MPN page** exists (Ministers Prayer Network) — not in our spec.
8. **What We Believe is a draft** — they've started but not published a Statement of Faith. Worth completing.
9. **Per-missionary and per-staff pages exist as WordPress page hierarchies** — our data model treats these as content types, but the WP source has them as flat pages with ACF fields. Need to extract per-template.
10. **Special event pages are top-level pages, not in a CPT** — we modeled them as `SpecialEvent`. WP migration will require detecting "this page is an event" via ACF or template.

## Recommended Next Steps for Migration

1. Dump ACF field groups: `wp acf export` — gives us the actual field schema per template
2. Export the Redirection plugin's redirect map
3. Get Yoast SEO meta per page
4. Pull each per-staff and per-missionary page with ACF fields to confirm content shape
5. Inspect Anchor Episodes Index plugin output (what it renders on /sermons)
6. Audit Gravity vs Ninja vs Shelby forms — which is actually used where
7. Check Printful product list and recent order volume to inform /shop decision
