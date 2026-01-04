# Product Requirements Document (PRD)
## IMPACH Academy Sales Page - Promosi 2026

---

## 1. Project Overview

### 1.1 Product Name
IMPACH Academy Sales Page - Promosi 2026

### 1.2 Purpose
Create a high-converting sales page in Malay language to promote IMPACH Academy's tuition program with emphasis on the 2026 promotion (25% discount on registration fee + free assessments & enrichment programs).

### 1.3 Target Audience
- Parents of students from Darjah 4 to Tingkatan 5
- Located in Bangi, Kajang, and Semenyih areas
- Seeking quality tuition with proven results
- Looking for comprehensive educational support including enrichment programs

### 1.4 Business Goals
- Increase 2026 enrollments
- Highlight promotional offers (ends 31 January 2026)
- Drive WhatsApp inquiries to 3 branches
- Position IMPACH as a premium, comprehensive tuition center

---

## 2. Technical Specifications

### 2.1 Technology Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI
- **Deployment:** Vercel

### 2.2 Brand Identity
- **Primary Color:** #073050 (Dark Blue)
- **Secondary Color:** #e5a944 (Gold/Yellow)
- **Logo:** IMPACH Academy with tagline "Nurture Competent Learners"
- **Tone:** Professional, trustworthy, parent-focused

---

## 3. User Flow

### 3.1 Primary User Journey
```
Landing on Page
    ↓
See Hero Section (Headline + Promotion Alert)
    ↓
Understand Problem (Pain Points)
    ↓
Learn About IMPACH (USPs & Benefits)
    ↓
Select Child's Year Level (Dropdown/Interactive)
    ↓
View Timetable for Selected Year
    ↓
See Pricing Breakdown with Savings Calculation
    ↓
Review Social Proof (Testimonials)
    ↓
Check FAQ
    ↓
Click WhatsApp CTA → Choose Branch → Contact
```

### 3.2 Year Level Selection Options
- Darjah 4
- Darjah 5
- Darjah 6
- Tingkatan 1 (Form 1)
- Tingkatan 2 (Form 2)
- Tingkatan 3 (Form 3)
- Tingkatan 4 - Core Stream
- Tingkatan 4 - Science Stream
- Tingkatan 4 - Account Stream
- Tingkatan 5 - Core Stream
- Tingkatan 5 - Science Stream
- Tingkatan 5 - Account Stream

---

## 4. Page Sections & Content Structure

### 4.1 Hero Section
**Elements:**
- IMPACH logo at top
- **Alert banner** (red/gold background):
  - "⏳ PROMOSI 2026 BERAKHIR DALAM..."
  - Small countdown timer inline
  - Flash animation on text
- **Main headline** (Large, bold):
  - "🎓 Promosi 2026: Diskaun 25% + Program PERCUMA Bernilai RM2,421!"
  - Use emojis
  - Gold color on "PERCUMA"
- **Subheadline** (medium size):
  - "Daftar Sebelum 31 Januari 2026 & Dapatkan Penjimatan Luar Biasa!"
- **Value boxes** (3 columns on desktop, stack on mobile):
  - "💰 JIMAT RM2,421" - Gold box
  - "🎁 2 Program PERCUMA" - Blue box
  - "⏰ Terhad Masa" - Red box with flash animation
- **Large countdown timer** to 31/01/2026
  - Format: XX Hari | XX Jam | XX Minit | XX Saat
  - Each unit in separate box
  - Number flip animation
- **Primary CTA button** (pulsing):
  - "💬 WhatsApp Sekarang - Dapatkan Promosi!"
  - WhatsApp green (#25D366)
  - Large, prominent, pulsing animation
- Hero image/illustration (placeholder)
  - Students studying, happy parents, or IMPACH classroom

**Design:**
- Clean white background
- Gold accents on key numbers
- Diagonal wave divider at bottom (blue)

**Key Messages:**
- 25% discount on registration fee (RM400 → RM299)
- Free IMPACH Assessment (worth RM160/year)
- Free Lounge Enrichment Programs (worth RM180/month = RM2,160/year)
- Total first-year savings: RM2,421
- 10+ years of tuition experience
- Limited time offer (ends 31/01/2026)

---

### 4.2 Problem Identification Section
**Headline:** "Adakah Anda Menghadapi Masalah Ini?"

**Pain Points (with icons/emojis):**
- ❌ Anak sukar fokus dalam kelas besar
- ❌ Keputusan peperiksaan tidak konsisten
- ❌ Tiada bimbingan tambahan untuk subjek mencabar
- ❌ Kekurangan motivasi untuk belajar
- ❌ Risau tentang persediaan ujian akhir tahun dan SPM

---

### 4.3 Solution/USP Section
**Headline:** "IMPACH Academy - Penyelesaian Lengkap untuk Kejayaan Akademik Anak Anda"

**Unique Selling Points:**
1. **10+ Tahun Pengalaman Tuisyen**
   - Icon/Badge
   - Short description

2. **Program Pengayaan PERCUMA**
   - Kelas Mengaji
   - Kelas Mandarin
   - Value highlight

3. **Penilaian Diagnostik Suku Tahunan**
   - Track progress systematically
   - Individualized Measurement of Progress (IMP)
   - Academic Competency in Higher Learning Assessment (ACH)

4. **Kurikulum Komprehensif**
   - Mindbook (Modul)
   - Drillbook (Workbook)
   - Study Materials
   - Learning Online Library

5. **Promosi 2026 Eksklusif**
   - Limited time offer
   - Massive savings

---

### 4.4 Interactive Year Selection Section
**Headline:** "🎯 Pilih Tahun Pengajian Anak Anda"

**UI Component:** Interactive card-based selection (confirmed by client)

**Design:**
- Grid layout: 4 columns on desktop, 2 on tablet, 1 on mobile
- Each card:
  - Icon/emoji representing the level (📚, 📖, 🎓)
  - Year level name (e.g., "Darjah 4", "Form 1", etc.)
  - Hover effect: scale up, shadow increase
  - Selected state: Gold border, gold background tint
  - Click animation: pulse effect
- Cards should be visually distinct and easy to tap on mobile (min 80px height)

**Year Level Cards (12 total):**
1. 📚 Darjah 4
2. 📚 Darjah 5
3. 📚 Darjah 6
4. 📖 Tingkatan 1
5. 📖 Tingkatan 2
6. 📖 Tingkatan 3
7. 🎓 Tingkatan 4 - Core
8. 🎓 Tingkatan 4 - Sains
9. 🎓 Tingkatan 4 - Akaun
10. 🎓 Tingkatan 5 - Core
11. 🎓 Tingkatan 5 - Sains
12. 🎓 Tingkatan 5 - Akaun

**Behavior:**
- User clicks/taps a card
- Card animates (selected state)
- Smooth scroll down to timetable display
- Timetable fades in with corresponding image
- Pricing section updates if needed (Form 4/5 show different pricing)

**Timetable Display:**
- Show image from `/Timetable/` folder based on selection
- Image should be responsive and zoomable (click to enlarge)
- Caption: "📅 Jadual Waktu [Year Level]"
- Clean white background card with shadow
- Diagonal wave divider at bottom

---

### 4.5 Pricing Section
**Headline:** "💰 Pelaburan untuk Masa Depan Anak Anda"

**Design:** Value stacking with dramatic price comparison

**Layout:**
1. **Value Stack Box** (top of section):
   - Large gold-bordered box
   - "NILAI SEBENAR KESELURUHAN:"
   - List all items with strikethrough prices
   - Running total: "~~RM4,621~~ SETAHUN"
   - Below: "ANDA HANYA BAYAR: RM299 (Pendaftaran) + RM349/bulan"
   - Massive savings highlight: "🎉 ANDA JIMAT RM2,421 TAHUN PERTAMA!"

2. **Comparison table** showing regular price vs. promotional price

#### For Darjah 4 - Tingkatan 3:

| Item | Regular Price | Promosi 2026 | Penjimatan |
|------|---------------|--------------|------------|
| **A. Yuran Pendaftaran** (Setahun sekali) | RM400/tahun | **RM299/tahun** | RM101 |
| Termasuk: Pendaftaran, Bag IMPACH, Buku Nota, Webinar, PCP | | | |
| **B. Yuran Subjek** (4 Subjek) | RM349/bulan | **RM349/bulan** | - |
| BM, English, Mathematics, Sciences | | | |
| **C. Ujian IMPACH** | ~~RM160/tahun~~ | **PERCUMA** | RM160 |
| IMP, Quiz, ACH, Mid-Year & Final Exam | | | |
| **D. Lounge Enrichment Programs (LEP)** | ~~RM180/bulan~~ | **PERCUMA** | RM180/bulan |
| Kelas Mengaji + Kelas Mandarin | | | |
| **F. Modul** | RM150/tahun | **RM150/tahun** | - |
| Mindbook + Drillbook + Study Materials | | | |

**Total Savings Highlight Box:**
- First Year Savings: RM101 (registration) + RM160 (assessment) + RM2,160 (LEP x 12 months) = **RM2,421**
- Bold, prominent display with gold background

#### For Tingkatan 4 & Tingkatan 5:

| Item | Regular Price | Promosi 2026 | Penjimatan |
|------|---------------|--------------|------------|
| **A. Yuran Pendaftaran** | RM400/tahun | **RM299/tahun** | RM101 |
| **B. Yuran Subjek** (4 Subjek) | RM349/bulan | **RM349/bulan** | - |
| Add-on: RM60/subjek/bulan | | | |
| **C. Ujian IMPACH** | ~~RM160/tahun~~ | **PERCUMA** | RM160 |
| **D. LEP** | ~~RM180/bulan~~ | **PERCUMA** | RM180/bulan |
| **F. Modul** | RM45/subjek/tahun | **RM45/subjek/tahun** | - |
| **Learning Online Library (LOL)** | RM30/bulan | **RM30/bulan** | - |

**Subject Streams Display:**
- **Core Stream:** Bahasa Melayu, English, Mathematics, Sejarah
- **Science Stream:** Biology, Chemistry, Physics, Additional Mathematics
- **Account Stream:** Account, Economic, Perniagaan, Sciences

---

### 4.6 What's Included Section
**Headline:** "🎁 Apa Yang Anda Dapat Dengan Promosi 2026?"

**Design:** Bonus stacking cards with value emphasis

**Layout:** Cards/boxes stacked vertically with running value total

**1. Yuran Pendaftaran (RM299 - JIMAT RM101!)**
**Gold-bordered card with "EKSKLUSIF" badge:**
- ✅ Pendaftaran
- ✅ Bag IMPACH (eksklusif)
- ✅ Buku Nota
- ✅ Webinar
- ✅ Private Consultation Performance (PCP)
- **Original:** ~~RM400~~ → **Promosi:** RM299
- **Penjimatan: RM101**

---

**2. BONUS #1: Ujian IMPACH - PERCUMA!**
**Card with "PERCUMA" ribbon in gold:**
- 🎁 Individualized Measurement of Progress (IMP)
- 🎁 Quiz Setiap Topik
- 🎁 Academic Competency in Higher Learning Assessment (ACH)
- 🎁 Mid-Year Exam & Final Exam
- **Nilai:** ~~RM160/tahun~~ → **PERCUMA!**
- Large "PERCUMA" badge in gold

---

**3. BONUS #2: Lounge Enrichment Programs - PERCUMA!**
**Card with "PERCUMA" ribbon in gold:**
- 🎁 Kelas Mengaji (Nilai RM90/bulan)
- 🎁 Kelas Mandarin (Nilai RM90/bulan)
- **Nilai:** ~~RM180/bulan~~ → **PERCUMA!**
- **Penjimatan setahun: RM2,160**
- Large "PERCUMA" badge in gold

---

**4. Modul Pembelajaran Lengkap**
**Blue-bordered card:**
- 📚 Mindbook (Modul)
- 📝 Drillbook (Workbook)
- 📖 Study Materials
- 💻 Learning Online Library (LOL) - Form 4 & 5 only
- **Darjah 4-Form 3:** RM150/tahun
- **Form 4-5:** RM45/subjek/tahun

---

**TOTAL VALUE DISPLAY** (large box at bottom):
- "JUMLAH NILAI KESELURUHAN: ~~RM4,621~~"
- "ANDA JIMAT: RM2,421 TAHUN PERTAMA!"
- Animated counter or highlight effect
- Gold background, large text

---

### 4.7 Social Proof Section
**Headline:** "Apa Kata Ibu Bapa & Pelajar IMPACH?"

**Testimonial Cards (Placeholder):**
- 6-8 testimonial cards
- Each card includes:
  - Profile photo (placeholder)
  - Student/parent name
  - Year level
  - Quote/feedback
  - Star rating (optional)

**Suggested placeholder structure:**
```
[Photo]
"[Testimonial text placeholder - keputusan anak saya meningkat dengan ketara sejak join IMPACH]"
- Puan [Name], Ibu bapa pelajar Tingkatan 4
```

---

### 4.8 Countdown Timer Section
**Headline:** "Tawaran Terhad Masa!"

**Elements:**
- Large countdown timer to 31 January 2026, 23:59:59
- Format: XX Hari : XX Jam : XX Minit : XX Saat
- Urgent messaging: "Promosi 2026 tamat dalam..."
- Secondary CTA below timer

---

### 4.9 Branch Selection CTA Section
**Headline:** "📍 Pilih Cawangan & Hubungi Kami Sekarang!"

**Subheadline:** "Tempat terhad! Daftar sebelum 31 Januari 2026"

**Design:** Large, prominent cards with pulsing WhatsApp buttons

**Layout:** 3 cards in row (desktop), stacked (mobile)

**Branch Cards:**

Each card has:
- Branch icon/building illustration (placeholder)
- Branch name in large bold text
- Location details (placeholder - e.g., "Bandar Baru Bangi")
- Contact info (placeholder)
- **Large pulsing WhatsApp button**
  - WhatsApp green (#25D366)
  - Icon + text: "💬 WhatsApp [Branch Name]"
  - Minimum 56px height
  - Continuous pulse animation

**1. IMPACH Bangi**
   - Icon/illustration
   - Location: [Placeholder - full address]
   - WhatsApp button: https://wa.link/olf8wz
   - Button text: "💬 WhatsApp Bangi"

**2. IMPACH Kajang**
   - Icon/illustration
   - Location: [Placeholder - full address]
   - WhatsApp button: https://wa.link/jvl67i
   - Button text: "💬 WhatsApp Kajang"

**3. IMPACH Semenyih**
   - Icon/illustration
   - Location: [Placeholder - full address]
   - WhatsApp button: https://wa.link/8vegsp
   - Button text: "💬 WhatsApp Semenyih"

**Note:** No pre-filled WhatsApp message needed (per client request)

---

### 4.10 FAQ Section
**Headline:** "Soalan Lazim (FAQ)"

**Questions (expandable accordions):**

1. **Bilakah tarikh akhir untuk Promosi 2026?**
   - Promosi ini sah sehingga 31 Januari 2026 sahaja.

2. **Apakah subjek yang ditawarkan?**
   - [List subjects by level]

3. **Berapa saiz kelas?**
   - [Placeholder - to be filled]

4. **Adakah ada trial class?**
   - [Placeholder - to be filled]

5. **Bagaimana sistem pembayaran?**
   - [Placeholder - to be filled]

6. **Apakah kelebihan Kelas Mengaji dan Mandarin?**
   - [Placeholder - to be filled]

7. **Bolehkah tambah subjek selepas mendaftar?**
   - Ya, boleh! Tambahan RM60/subjek/bulan untuk Form 4 & 5.

8. **Adakah modul disediakan untuk semua subjek?**
   - Ya, setiap pelajar akan menerima Mindbook, Drillbook dan Study Materials.

---

### 4.11 Footer
**Elements:**
- IMPACH logo
- Contact information (placeholder)
- Social media links (placeholder)
- Copyright notice
- Links: Privacy Policy, Terms & Conditions (placeholder pages)

---

## 5. Design Requirements

### 5.1 Visual Style
- **Layout:** Single-page, long-form sales page
- **Background:** Light/white background (NOT dark mode)
- **Responsive:** Mobile-first design
- **Color Psychology:**
  - Primary (#073050): Trust, professionalism, education
  - Secondary (#e5a944): Premium, value, success
  - White/Light Gray: Clean, professional background
  - Red accents: Urgency elements (strikethrough prices, deadlines)
- **Typography:**
  - Headings: Bold, large, attention-grabbing
  - Body: Easy to scan, generous line height
  - Font sizes: Mobile-friendly (minimum 16px for body)
  - Fonts: TBD (suggest Inter or Poppins for headings, Open Sans for body)

### 5.2 Design Patterns from Reference Websites

**IMPORTANT:** Follow these proven high-converting design patterns:

#### 5.2.1 Section Dividers
- **Diagonal wave dividers** between sections
- Use SVG or CSS clip-path
- Alternating wave directions (top-to-bottom, bottom-to-top)
- Colors: Primary blue (#073050) and light backgrounds
- Creates visual rhythm and separates content clearly

#### 5.2.2 Emoji & Icon Usage
- **Heavy use of emojis** throughout the page
- Use emojis in headlines: "⏳ Tawaran Terhad Masa!"
- Use emojis in bullet points: "✅", "❌", "🎁", "📚", "💰"
- Icon examples:
  - ❌ for pain points
  - ✅ for inclusions/benefits
  - 🎁 for bonuses/free items
  - ⏰ for countdown/deadline
  - 💡 for tips/highlights
  - 📚 for educational materials
  - 💰 for savings/money
  - 🎯 for goals/targets
  - ⚡ for fast/urgent actions

#### 5.2.3 CTA Button Design
- **Pulsing animation** on all primary CTA buttons
- Large, prominent buttons (minimum 48px height)
- WhatsApp green color for WhatsApp CTAs (#25D366)
- Gold (#e5a944) for secondary CTAs
- Button text in BOLD CAPS or Mixed Case with emojis
- Examples:
  - "💬 WhatsApp Sekarang"
  - "🎁 Dapatkan Promosi 2026"
  - "✅ Daftar Sekarang"
- Shadow/elevation effects for depth
- Hover state: slight scale up (transform: scale(1.05))

#### 5.2.4 Urgency & Scarcity Elements
- **Multiple urgency triggers** throughout the page:
  - Countdown timer (large, prominent)
  - "TERHAD MASA" badges
  - "Tempat Terhad" messaging
  - Red flash/blink on deadline text
  - "Hanya X hari lagi!" alerts

- **Notification banner** (optional):
  - "🔥 Ahmad dari Bangi baru sahaja mendaftar!"
  - Auto-scrolling recent registrations
  - Creates FOMO (Fear of Missing Out)

#### 5.2.5 Value Stacking Display
- **Large value comparison boxes:**
  - Show "NILAI SEBENAR: ~~RM4,621~~" with strikethrough
  - Show "ANDA BAYAR: RM299" in large gold text
  - Show "ANDA JIMAT: RM2,421!" in green/gold box
- **Progressive disclosure** of bonuses
- Each bonus item with:
  - Emoji/icon
  - Item name
  - Original value (strikethrough)
  - "PERCUMA" badge in gold
- **Total value accumulator** at bottom

#### 5.2.6 Testimonial Layout
- **Centered card layout**
- Each testimonial card:
  - Circular profile photo (placeholder)
  - Quote in large text
  - Name and role below
  - Star rating (5 stars in gold)
  - Background: white card with shadow
  - Border: subtle gold accent (optional)
- Grid layout: 2 columns on desktop, 1 on mobile
- Quotes should be 2-3 sentences max

#### 5.2.7 Animated Elements
**Required animations:**
- ✅ **Pulse animation** on CTA buttons (continuous subtle pulse)
- ✅ **Countdown timer** with number flip/update animation
- ✅ **Bounce animation** on arrows pointing to CTAs
- ✅ **Flash/blink** on urgent text (subtle, not annoying)
- ✅ **Fade-in on scroll** for sections
- ✅ **Scale hover** on cards and buttons
- ✅ **Gradient shine** effect on gold text/buttons (optional)

**Animation specs:**
```css
/* Pulse button */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Flash text */
@keyframes flash {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0.7; }
}

/* Bounce arrow */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

#### 5.2.8 Highlight Boxes
- **Alert/Info boxes** with borders and background colors:
  - Urgency box: Red/orange border, light red background
  - Benefit box: Gold border, light yellow background
  - Info box: Blue border, light blue background
- **Badge/Stamp graphics:**
  - "EKSKLUSIF" badge
  - "TERHAD" stamp
  - "PERCUMA" ribbon
  - Rotated slightly for attention

#### 5.2.9 Pricing Display
- **Large, bold pricing:**
  - Original price: Small, strikethrough, gray
  - Promo price: 3x larger, bold, gold color
  - Savings: Green background box, white text
- **Comparison table:**
  - Before/After columns
  - Highlight "Penjimatan" column
  - Use emojis in headers
- **Calculator-style breakdown:**
  - Show line-by-line value addition
  - Running total at bottom

#### 5.2.10 FAQ Accordion
- **Expandable accordions** (Shadcn Accordion component)
- Each question:
  - Icon: "+" when closed, "-" when open
  - Bold question text
  - Answer with proper spacing
  - Light background when expanded
- **Important FAQs** with emoji highlights

### 5.3 UI/UX Principles
- **Hierarchy:** Clear visual flow from top to bottom
- **Scarcity:** Multiple countdown timers, limited-time messaging, urgency badges
- **Social Proof:** Testimonials, success stories, notification banners
- **Value Emphasis:** Massive savings highlighted, value stacking, free items emphasized
- **Friction Reduction:** Interactive card-based year selection, prominent CTAs every 2-3 sections
- **Mobile Optimization:** Touch-friendly buttons (min 48px), readable text, simplified layout
- **F-Pattern Reading:** Important info on left, CTAs on strategic positions
- **White Space:** Generous padding between sections for clarity

### 5.4 Interactive Elements
- ✅ Smooth scroll between sections
- ✅ Animated countdown timer with number flip
- ✅ Pulse animation on CTA buttons (continuous)
- ✅ Hover effects on buttons (scale, shadow)
- ✅ Expandable FAQ accordions
- ✅ Interactive card-based year selection
- ✅ Smooth transitions on year selection
- ✅ Fade-in animations on scroll
- ✅ Bouncing arrows pointing to CTAs
- ✅ Flash animation on urgent text

### 5.5 CTA Placement Strategy
Place WhatsApp CTA buttons at:
1. Hero section (above fold)
2. After USP section
3. After pricing section
4. After testimonials
5. Branch selection section (final CTA)
6. Mobile: Consider scroll-activated CTA after 50% scroll

### 5.6 Color Usage Guidelines

**Primary Color (#073050 - Dark Blue):**
- Headlines
- Section backgrounds (with wave dividers)
- Footer background
- Primary text

**Secondary Color (#e5a944 - Gold):**
- CTA buttons
- "PERCUMA" badges
- Savings highlights
- Accent borders
- Value numbers
- Success/benefit highlights

**Supporting Colors:**
- Red (#DC2626): Urgency, strikethrough prices, deadlines
- Green (#16A34A): Savings, benefits, checkmarks
- White (#FFFFFF): Background, card backgrounds
- Light Gray (#F3F4F6): Alternate section backgrounds
- WhatsApp Green (#25D366): WhatsApp CTA buttons

**Text Colors:**
- Primary text: #1F2937 (dark gray, not pure black)
- Secondary text: #6B7280 (medium gray)
- Light text on dark backgrounds: #FFFFFF

---

## 6. Content Requirements

### 6.1 Language
- **Primary:** Bahasa Melayu (Malay)
- **Tone:** Professional, persuasive, parent-friendly
- **Style:** Clear, benefit-focused, action-oriented

### 6.2 Copywriting Principles
- Lead with benefits, not features
- Use emotional triggers (child's success, parental pride)
- Address pain points directly
- Create urgency with deadline
- Use power words (PERCUMA, EKSKLUSIF, TERHAD)
- Include social proof

### 6.3 Placeholder Content
- Images: Use placeholder images/illustrations
- Testimonials: Placeholder cards with generic structure
- Location details: Generic placeholder text
- FAQ answers: Some with placeholders for client to fill

---

## 7. Technical Features

### 7.1 Core Functionality
- Dynamic year selection with state management
- Countdown timer with real-time updates
- Responsive image display for timetables
- WhatsApp deep linking with pre-filled messages
- Smooth scrolling navigation
- FAQ accordion component

### 7.2 Performance
- Optimized images (Next.js Image component)
- Lazy loading for below-fold content
- Fast page load (<3 seconds)
- Minimal JavaScript bundle

### 7.3 SEO & Meta
- Meta title: "IMPACH Academy - Promosi 2026 | Diskaun 25% + Program PERCUMA"
- Meta description: Optimized for local search
- Open Graph tags for social sharing
- Structured data (LocalBusiness schema)

### 7.4 Analytics (Optional)
- Track WhatsApp button clicks by branch
- Year selection analytics
- Scroll depth tracking
- Conversion funnel

---

## 8. File Structure

```
/impach-sales-page
├── /app
│   ├── page.tsx                 # Main sales page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── /components
│   ├── Hero.tsx
│   ├── ProblemSection.tsx
│   ├── USPSection.tsx
│   ├── YearSelector.tsx
│   ├── TimetableDisplay.tsx
│   ├── PricingSection.tsx
│   ├── WhatsIncluded.tsx
│   ├── Testimonials.tsx
│   ├── CountdownTimer.tsx
│   ├── BranchCTA.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── /lib
│   ├── utils.ts
│   └── constants.ts
├── /public
│   └── /timetable              # Timetable images
│       ├── darjah-4.jpeg
│       ├── darjah-5.jpeg
│       ├── darjah-6.jpeg
│       ├── form-1.jpeg
│       ├── form-2.jpeg
│       ├── form-3.jpeg
│       ├── form-4-core.jpeg
│       ├── form-4-science.jpeg
│       ├── form-4-acc.jpeg
│       ├── form-5-core.jpeg
│       ├── form-5-science.jpeg
│       └── form-5-acc.jpeg
├── /types
│   └── index.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 9. Acceptance Criteria

### 9.1 Functional Requirements
- ✅ User can select any year level and see corresponding timetable
- ✅ Countdown timer displays accurate time remaining until 31/01/2026
- ✅ All WhatsApp buttons open correct links with pre-filled messages
- ✅ Pricing section clearly shows savings calculation
- ✅ FAQ accordions expand/collapse smoothly
- ✅ Page is fully responsive on mobile, tablet, desktop
- ✅ All images load optimally without layout shift

### 9.2 Design Requirements
- ✅ Matches brand colors (#073050, #e5a944)
- ✅ Clean, professional, trustworthy aesthetic
- ✅ Clear visual hierarchy
- ✅ Readable typography
- ✅ Consistent spacing and alignment

### 9.3 Content Requirements
- ✅ All content in Bahasa Melayu
- ✅ Accurate pricing information
- ✅ Clear value proposition
- ✅ Persuasive copywriting

### 9.4 Performance Requirements
- ✅ Page loads in under 3 seconds
- ✅ Lighthouse score >90
- ✅ No console errors
- ✅ Works on all modern browsers

---

## 10. Out of Scope (v1)

- User authentication/login
- Online payment integration
- Backend CMS for content management
- Multi-language support
- Blog/articles section
- Student portal
- Email marketing integration
- A/B testing framework

---

## 11. Future Enhancements (v2+)

- Online registration form with database
- Payment gateway integration
- Student dashboard
- Parent portal
- Email automation
- CRM integration
- Live chat support
- Video testimonials
- Virtual tour
- Performance analytics dashboard

---

## 12. Success Metrics

- Increase in WhatsApp inquiries
- Higher conversion rate from page visit to inquiry
- Reduced bounce rate
- Increased time on page
- More registrations compared to previous promotions

---

## 13. Timeline & Deliverables

**Phase 1: Setup & Foundation**
- Project initialization
- Install dependencies
- Setup folder structure
- Configure Tailwind & Shadcn UI

**Phase 2: Component Development**
- Build all components
- Integrate timetable images
- Implement year selection logic
- Create countdown timer

**Phase 3: Content Integration**
- Add all copy (Malay)
- Insert pricing tables
- Setup WhatsApp links
- Add placeholder testimonials

**Phase 4: Styling & Polish**
- Apply brand colors
- Responsive design
- Animations
- Final UX refinements

**Phase 5: Testing & Deployment**
- Cross-browser testing
- Mobile testing
- Performance optimization
- Deployment

---

## 14. Dependencies

- Timetable images (available in `/Timetable/` folder)
- Final testimonials and photos (to be added later)
- FAQ answers for some questions (to be added later)
- Branch location details (to be added later)
- Any additional branding assets

---

## 15. Contact & Approval

**Client:** [Your Name]
**Developer:** Claude Code
**PRD Version:** 2.0
**Date:** 4 January 2026
**Status:** Pending Approval

**Version History:**
- v1.0 (4 Jan 2026): Initial draft
- v2.0 (4 Jan 2026): Updated with design patterns from reference websites
  - Added diagonal wave dividers
  - Heavy emoji usage throughout
  - Pulsing CTA buttons
  - Value stacking displays
  - Animated elements (bounce, flash, pulse)
  - Alert/urgency boxes
  - Bonus stacking cards
  - Interactive card-based year selector
  - Multiple CTA placements
  - Light background (not dark mode) with brand colors

---

## Appendix A: Year Level Mapping

| Display Name | Timetable Image File |
|--------------|---------------------|
| Darjah 4 | `Darjah 4.jpeg` |
| Darjah 5 | `Darjah 5.jpeg` |
| Darjah 6 | `Darjah 6.jpeg` |
| Tingkatan 1 | `Form 1.jpeg` |
| Tingkatan 2 | `Form 2.jpeg` |
| Tingkatan 3 | `Form 3.jpeg` |
| Tingkatan 4 - Core Stream | `Form 4 (Core).jpeg` |
| Tingkatan 4 - Science Stream | `Form 4 (Science).jpeg` |
| Tingkatan 4 - Account Stream | `Form 4 (Acc).jpeg` |
| Tingkatan 5 - Core Stream | `Form 5 (Core).jpeg` |
| Tingkatan 5 - Science Stream | `Form 5 (Science).jpeg` |
| Tingkatan 5 - Account Stream | `Form 5 (Acc).jpeg` |

---

## Appendix B: WhatsApp Links

| Branch | WhatsApp Link |
|--------|---------------|
| Bangi | https://wa.link/olf8wz |
| Kajang | https://wa.link/jvl67i |
| Semenyih | https://wa.link/8vegsp |

---

**End of PRD**
