# 508ARCHIVES

Luxury streetwear e-commerce site — brand system + homepage, built phase by
phase. Combines cues from three references: BOLAPSD (product-page rigor),
LITGANG COLLECTION (drop storytelling pacing), and High Fashion by J.O.L
(category/editorial e-commerce architecture) into an original direction —
"editorial fashion experience + streetwear store + premium e-commerce."

## Run it

```
npm install
npm run dev
```

## Structure

```
src/
  styles/
    tokens.js       — colours, fonts (change once, propagates everywhere)
    fonts.css        — Google Fonts import + base reset
  components/
    Shared.jsx        — Tag (catalog label), Primary/Secondary/Ghost buttons
    Navbar.jsx         — Phase 2: transparent-to-solid on scroll, mobile menu
    Hero.jsx            — Phase 2: full-viewport video hero (falls back to a
                           placeholder pattern until a real video is supplied)
    BrandStatement.jsx   — Phase 3: manifesto / typographic statement
    FeaturedDrop.jsx     — Phase 3: product grid with hover state + quick add
    Collections.jsx       — Phase 4: large-image editorial collection blocks,
                             alternating left/right layout
    ShopByCategory.jsx    — Phase 5: category grid with hover state
    Lookbook.jsx           — Phase 6: horizontal-scroll editorial gallery
                             with a selected-frame detail panel below
  App.jsx              — composes everything built so far, in order
```

## Design tokens (Phase 1)

- Ink Black `#0A0A0A` — background
- Bone `#F2F0EA` — text on dark
- Ash `#8C8C86` — secondary text
- Stamp Red `#B8302E` — accent, reserved for CTAs / tags / active states only
- Line `#2A2A28` — hairline dividers

Fonts: Archivo Black (display), Inter (body), IBM Plex Mono (catalog tags,
metadata — the "N° 001" labels are the site's signature device).

## Swapping in real assets

- **Hero video**: pass `videoSrc` / `posterSrc` props to `<Hero />` in `App.jsx`.
- **Product images**: replace the placeholder `<div>` in `ProductCard`
  (inside `FeaturedDrop.jsx`) with `<img>`, and pass real `products` data
  into `<FeaturedDrop products={...} />`.
- **Collection imagery**: same pattern in `Collections.jsx` — replace the
  placeholder `<div>` in `CollectionBlock` with `<img>`, pass real
  `collections` data into `<Collections collections={...} />`.
- **Category imagery**: same pattern in `ShopByCategory.jsx` — replace the
  placeholder `<div>` in `CategoryTile` with `<img>`, pass real
  `categories` data (whatever 508archives actually sells) into
  `<ShopByCategory categories={...} />`.
- **Lookbook imagery**: same pattern in `Lookbook.jsx` — replace the
  placeholder `<div>` in `Frame` with `<img>`, pass real `frames` data
  into `<Lookbook frames={...} />`.
- **Palette / fonts**: edit `src/styles/tokens.js` once brand assets
  (logo, real colours) come in from the client.

## Build order (matches the phased plan)

1. ✅ Brand + design system
2. ✅ Navbar + hero
3. ✅ Brand statement + featured drop
4. ✅ Collections / editorial
5. ✅ Shop by category
6. ✅ Lookbook
7. Product grid (`/shop`)
8. Product detail page
9. Cart
10. Checkout
11. About / story / contact
12. Mobile polish + animations
13. Final luxury polish
