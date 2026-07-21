// src/data/locations.js
//
// SEO location data for InstructorSpot's Greater Manchester borough pages.
// One entry per metropolitan borough. Extend later with individual-town
// pages (e.g. Altrincham, Ashton-under-Lyne) once these are indexed and
// ranking — start broad, then go long-tail.
//
// Test centre pass rates are 2024-25 DVSA data (car category B), pulled
// July 2026. Re-check annually when DVSA publishes new figures — stale
// stats hurt credibility more than no stats at all.

const locations = [
  {
    slug: "manchester",
    name: "Manchester",
    metaTitle: "Driving Instructors in Manchester | InstructorSpot",
    metaDescription:
      "Compare verified, DBS-checked driving instructors in Manchester. Manual, automatic and intensive courses. Free matching, no obligation — find your instructor today.",
    heading: "Driving Instructors in Manchester",
    intro:
      "Manchester's mix of tight city-centre streets, busy ring roads and residential suburbs makes it one of the more varied places in the UK to learn to drive. InstructorSpot matches learners across the city with local, DBS-checked instructors who know the routes examiners actually use — from Deansgate traffic to the Princess Parkway roundabouts.",
    areas: [
      "City Centre",
      "Didsbury",
      "Chorlton",
      "Fallowfield",
      "Withington",
      "Cheetham Hill",
      "Longsight",
      "Levenshulme",
      "Moss Side",
      "Ancoats",
    ],
    testCentres: [
      { name: "West Didsbury", passRate: "50.9%" },
      { name: "Cheetham Hill", passRate: "43.7%" },
    ],
    faqs: [
      {
        q: "Which driving test centre will I use in Manchester?",
        a: "Most Manchester learners test at West Didsbury or Cheetham Hill, depending on which is closer to your postcode or has earlier availability. Your instructor can advise which suits your routes better.",
      },
      {
        q: "How much do driving lessons cost in Manchester?",
        a: "Prices vary by instructor, transmission type and lesson block size. InstructorSpot shows you real quotes from local instructors so you can compare before booking.",
      },
    ],
  },
  {
    slug: "salford",
    name: "Salford",
    metaTitle: "Driving Instructors in Salford | InstructorSpot",
    metaDescription:
      "Find trusted driving instructors in Salford, including Eccles, Swinton and Walkden. Compare manual and automatic lessons and book with confidence.",
    heading: "Driving Instructors in Salford",
    intro:
      "From the Quays' dual carriageways to the narrower residential roads around Swinton and Walkden, Salford gives learners a genuine mix of driving conditions. InstructorSpot connects you with instructors based locally who teach on the roads you'll actually be tested and driving on.",
    areas: [
      "Salford City Centre",
      "Eccles",
      "Swinton",
      "Walkden",
      "Irlam",
      "Pendlebury",
      "Worsley",
      "Little Hulton",
    ],
    testCentres: [
      { name: "Cheetham Hill (nearest DVSA centre)", passRate: "43.7%" },
    ],
    faqs: [
      {
        q: "Is there a driving test centre in Salford?",
        a: "Salford doesn't have its own DVSA test centre — most learners book at Cheetham Hill, a short drive away. Your InstructorSpot instructor can build test routes around it.",
      },
      {
        q: "Can I find an automatic driving instructor in Salford?",
        a: "Yes — filter by transmission type when you submit an enquiry and InstructorSpot will only match you with instructors offering automatic lessons in your area.",
      },
    ],
  },
  {
    slug: "stockport",
    name: "Stockport",
    metaTitle: "Driving Instructors in Stockport | InstructorSpot",
    metaDescription:
      "Compare DBS-checked driving instructors in Stockport, covering Cheadle, Hazel Grove, Marple and Bredbury. Manual, automatic and intensive courses available.",
    heading: "Driving Instructors in Stockport",
    intro:
      "Stockport learners get a bit of everything — the M60 and A6 for dual-carriageway confidence, hilly routes around Marple and Romiley, and the busier one-way system in the town centre. InstructorSpot's local instructors teach around all of it.",
    areas: [
      "Stockport Town Centre",
      "Cheadle",
      "Hazel Grove",
      "Bredbury",
      "Marple",
      "Reddish",
      "Heaton Moor",
      "Romiley",
    ],
    testCentres: [{ name: "Bredbury", passRate: "54.2%" }],
    faqs: [
      {
        q: "What's the pass rate at Bredbury test centre?",
        a: "Bredbury recorded a 54.2% car pass rate in the 2024-25 DVSA data, above both the Greater Manchester (48.5%) and UK (48.7%) averages.",
      },
      {
        q: "Do InstructorSpot instructors offer intensive courses in Stockport?",
        a: "Many do. Mention it's for an intensive or semi-intensive course in your enquiry and we'll match you with instructors who run them.",
      },
    ],
  },
  {
    slug: "bolton",
    name: "Bolton",
    metaTitle: "Driving Instructors in Bolton | InstructorSpot",
    metaDescription:
      "Find verified driving instructors in Bolton and surrounding areas including Farnworth, Horwich and Westhoughton. Compare instructors and book free.",
    heading: "Driving Instructors in Bolton",
    intro:
      "Bolton's test centre consistently posts one of the better pass rates in Greater Manchester, and the borough's mix of moorland edges, town-centre traffic and A58/A666 dual carriageways gives learners solid all-round experience. InstructorSpot matches you with instructors who teach across Bolton and its surrounding townships.",
    areas: [
      "Bolton Town Centre",
      "Farnworth",
      "Horwich",
      "Westhoughton",
      "Little Lever",
      "Bromley Cross",
      "Breightmet",
      "Harwood",
    ],
    testCentres: [{ name: "Bolton (Great Lever)", passRate: "56.7%" }],
    faqs: [
      {
        q: "Is Bolton a good place to learn to drive?",
        a: "Bolton's test centre had a 56.7% pass rate in 2024-25 — one of the highest in Greater Manchester, well above the county average of 48.5%.",
      },
      {
        q: "How do I compare instructor prices in Bolton?",
        a: "Submit one enquiry through InstructorSpot and we'll pass it to matching local instructors, who'll come back to you directly with pricing and availability.",
      },
    ],
  },
  {
    slug: "bury",
    name: "Bury",
    metaTitle: "Driving Instructors in Bury | InstructorSpot",
    metaDescription:
      "Compare local driving instructors in Bury, Prestwich, Whitefield and Ramsbottom. Manual and automatic lessons, matched to your budget and schedule.",
    heading: "Driving Instructors in Bury",
    intro:
      "Bury combines town-centre roundabouts with quieter, semi-rural roads towards Ramsbottom and Tottington — useful variety for building confidence before your test. InstructorSpot's instructors know both sides of the borough.",
    areas: [
      "Bury Town Centre",
      "Prestwich",
      "Whitefield",
      "Radcliffe",
      "Ramsbottom",
      "Tottington",
    ],
    testCentres: [
      { name: "Bolton or Rochdale (nearest DVSA centres)", passRate: null },
    ],
    faqs: [
      {
        q: "Where do Bury learners take their driving test?",
        a: "Bury doesn't have its own test centre, so most learners book at Bolton or Rochdale depending on availability. Your instructor can help you pick the better option for your routes.",
      },
      {
        q: "How does InstructorSpot match me with a Bury instructor?",
        a: "Tell us your postcode and preferences in a short enquiry — we'll pass it to instructors covering your part of Bury and they'll contact you directly.",
      },
    ],
  },
  {
    slug: "oldham",
    name: "Oldham",
    metaTitle: "Driving Instructors in Oldham | InstructorSpot",
    metaDescription:
      "Find DBS-checked driving instructors in Oldham, Chadderton, Royton and Shaw. Compare manual, automatic and intensive lesson options.",
    heading: "Driving Instructors in Oldham",
    intro:
      "Oldham's hillier streets and the fast A627(M) link give learners a good mix of low-speed manoeuvring and higher-speed confidence-building. InstructorSpot instructors cover Oldham town centre and the surrounding towns.",
    areas: [
      "Oldham Town Centre",
      "Chadderton",
      "Royton",
      "Shaw",
      "Failsworth",
      "Lees",
      "Saddleworth",
    ],
    testCentres: [{ name: "Chadderton", passRate: "44.9%" }],
    faqs: [
      {
        q: "What's the pass rate at Chadderton test centre?",
        a: "Chadderton posted a 44.9% car pass rate in 2024-25, slightly below the Greater Manchester average of 48.5% — a good reason to train with a local instructor who knows the routes well.",
      },
      {
        q: "Can I get intensive lessons in Oldham?",
        a: "Yes — several InstructorSpot instructors in the Oldham area offer intensive and semi-intensive courses. Mention your timeframe in your enquiry.",
      },
    ],
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    metaTitle: "Driving Instructors in Rochdale | InstructorSpot",
    metaDescription:
      "Compare trusted driving instructors in Rochdale, Middleton, Heywood and Milnrow. Free matching service, no obligation to book.",
    heading: "Driving Instructors in Rochdale",
    intro:
      "Rochdale's test centre has the toughest pass rate in Greater Manchester, which makes choosing the right instructor — one who trains specifically on local test routes — more important here than almost anywhere else in the region.",
    areas: [
      "Rochdale Town Centre",
      "Middleton",
      "Heywood",
      "Milnrow",
      "Littleborough",
    ],
    testCentres: [{ name: "Rochdale", passRate: "41.2%" }],
    faqs: [
      {
        q: "Why is the Rochdale pass rate lower than other Greater Manchester centres?",
        a: "Rochdale's 41.2% pass rate (2024-25) reflects busier, more varied test routes rather than stricter examiners. A instructor who trains regularly on those routes can make a real difference.",
      },
      {
        q: "Do InstructorSpot instructors in Rochdale offer test-focused packages?",
        a: "Many do, including route-familiarisation sessions ahead of your test date. Ask for this specifically in your enquiry.",
      },
    ],
  },
  {
    slug: "tameside",
    name: "Tameside",
    metaTitle: "Driving Instructors in Tameside | InstructorSpot",
    metaDescription:
      "Find local driving instructors across Tameside, including Ashton-under-Lyne, Denton, Hyde and Stalybridge. Compare and book free.",
    heading: "Driving Instructors in Tameside",
    intro:
      "Tameside stretches from the Pennine edges around Stalybridge to the flatter, busier roads of Denton and Droylsden — instructors here typically cover several towns, so you get someone who genuinely knows the borough rather than just one postcode.",
    areas: [
      "Ashton-under-Lyne",
      "Denton",
      "Hyde",
      "Stalybridge",
      "Droylsden",
      "Dukinfield",
      "Mossley",
    ],
    testCentres: [{ name: "Hyde (nearest DVSA centre)", passRate: null }],
    faqs: [
      {
        q: "Where do Tameside learners take their driving test?",
        a: "Most Tameside learners test at Hyde. Your InstructorSpot instructor will typically build lessons around the local test routes as your test date approaches.",
      },
      {
        q: "Are there female driving instructors available in Tameside?",
        a: "Yes — mention your preference in your enquiry and InstructorSpot will only pass it to matching instructors.",
      },
    ],
  },
  {
    slug: "trafford",
    name: "Trafford",
    metaTitle: "Driving Instructors in Trafford | InstructorSpot",
    metaDescription:
      "Compare driving instructors in Trafford, covering Altrincham, Sale, Stretford and Urmston. Manual, automatic and intensive lessons.",
    heading: "Driving Instructors in Trafford",
    intro:
      "Trafford's test centre at Sale posts one of the more balanced pass rates in the region, and the borough's mix of Altrincham's town-centre roundabouts, the M60 and quieter Urmston side streets gives learners solid, varied practice.",
    areas: [
      "Altrincham",
      "Sale",
      "Stretford",
      "Urmston",
      "Timperley",
      "Partington",
      "Old Trafford",
    ],
    testCentres: [{ name: "Sale (Poplar Grove)", passRate: "49.1%" }],
    faqs: [
      {
        q: "What's the pass rate at Sale test centre?",
        a: "Sale recorded a 49.1% car pass rate in 2024-25, just above the Greater Manchester average of 48.5%.",
      },
      {
        q: "Can I find an instructor near Altrincham specifically?",
        a: "Yes — give us your postcode and InstructorSpot will match you with instructors who actively cover the Altrincham area.",
      },
    ],
  },
  {
    slug: "wigan",
    name: "Wigan",
    metaTitle: "Driving Instructors in Wigan | InstructorSpot",
    metaDescription:
      "Find verified driving instructors in Wigan, Leigh, Atherton and Standish. Compare manual, automatic and intensive lesson options.",
    heading: "Driving Instructors in Wigan",
    intro:
      "Wigan borough covers a lot of ground, from the town centre out to Leigh and Standish, with test centres at Atherton and Hindley (Apex) serving different parts of it. InstructorSpot matches you with instructors who cover your specific area rather than the whole borough.",
    areas: [
      "Wigan Town Centre",
      "Leigh",
      "Atherton",
      "Standish",
      "Ashton-in-Makerfield",
      "Hindley",
      "Golborne",
    ],
    testCentres: [
      { name: "Atherton", passRate: "44.4%" },
      { name: "Hindley (Apex)", passRate: "61.5%" },
    ],
    faqs: [
      {
        q: "Which test centre should I use in Wigan — Atherton or Hindley?",
        a: "Hindley (Apex) posted a higher 2024-25 pass rate (61.5%) than Atherton (44.4%), but availability and route familiarity with your instructor often matter more than the headline number.",
      },
      {
        q: "Do InstructorSpot instructors cover Leigh as well as Wigan town centre?",
        a: "Yes — many instructors on InstructorSpot cover the wider borough, including Leigh, Standish and Ashton-in-Makerfield.",
      },
    ],
  },
  {
    slug: "macclesfield",
    name: "Macclesfield",
    metaTitle: "Driving Instructors in Macclesfield | InstructorSpot",
    metaDescription:
      "Find verified driving instructors in Macclesfield and surrounding Cheshire towns. Manual, automatic and intensive courses. Free matching, no obligation.",
    heading: "Driving Instructors in Macclesfield",
    intro:
      "Macclesfield sits just south of the Greater Manchester border, with a mix of steep old-town streets, the A523/A537 for faster confidence-building, and quieter routes out towards Bollington and Prestbury. InstructorSpot instructors covering Macclesfield also typically serve the surrounding Cheshire villages.",
    areas: [
      "Macclesfield Town Centre",
      "Bollington",
      "Prestbury",
      "Poynton",
      "Gawsworth",
      "Sutton",
      "Tytherington",
      "Broken Cross",
    ],
    testCentres: [{ name: "Macclesfield", passRate: "49.9%" }],
    faqs: [
      {
        q: "What's the pass rate at Macclesfield test centre?",
        a: "Macclesfield recorded a 49.9% car pass rate in 2024-25, close to the UK average of 48.7%.",
      },
      {
        q: "Does InstructorSpot cover Macclesfield even though it's outside Greater Manchester?",
        a: "Yes — several instructors on InstructorSpot cover Macclesfield and the surrounding Cheshire towns as part of their regular teaching area.",
      },
    ],
  },
  {
    slug: "wilmslow",
    name: "Wilmslow",
    metaTitle: "Driving Instructors in Wilmslow | InstructorSpot",
    metaDescription:
      "Compare local driving instructors in Wilmslow, Handforth and Styal. Manual and automatic lessons, matched to your budget and schedule.",
    heading: "Driving Instructors in Wilmslow",
    intro:
      "Wilmslow's mix of affluent residential roads, the A34 bypass and proximity to Manchester Airport traffic makes it a popular spot to learn to drive. InstructorSpot instructors covering Wilmslow typically also teach in Handforth, Styal and the wider Cheshire East / Trafford border area.",
    areas: [
      "Wilmslow Town Centre",
      "Handforth",
      "Styal",
      "Dean Row",
      "Morley Green",
    ],
    testCentres: [
      { name: "Macclesfield or Bredbury (Stockport) — nearest DVSA centres", passRate: null },
    ],
    faqs: [
      {
        q: "Where do Wilmslow learners take their driving test?",
        a: "Wilmslow doesn't have its own test centre — most learners book at Macclesfield or Bredbury (Stockport), depending on availability and which routes suit them better.",
      },
      {
        q: "Is Wilmslow in Greater Manchester?",
        a: "No — Wilmslow is in Cheshire East, just south of the Greater Manchester border. InstructorSpot instructors covering Trafford and Stockport commonly extend into Wilmslow too.",
      },
    ],
  },
  {
    slug: "alderley-edge",
    name: "Alderley Edge",
    metaTitle: "Driving Instructors in Alderley Edge | InstructorSpot",
    metaDescription:
      "Find trusted driving instructors in Alderley Edge and nearby Cheshire villages. Compare manual and automatic lessons and book with confidence.",
    heading: "Driving Instructors in Alderley Edge",
    intro:
      "Alderley Edge's village centre, quieter lanes and easy access to the A34 make it a manageable spot to build confidence before tackling busier Manchester or Macclesfield traffic. InstructorSpot instructors here typically also cover Wilmslow and Nether Alderley.",
    areas: [
      "Alderley Edge Village",
      "Nether Alderley",
      "Chelford",
      "Mottram St Andrew",
    ],
    testCentres: [
      { name: "Macclesfield or Bredbury (Stockport) — nearest DVSA centres", passRate: null },
    ],
    faqs: [
      {
        q: "Where do Alderley Edge learners take their driving test?",
        a: "Like Wilmslow, Alderley Edge has no test centre of its own — learners typically book at Macclesfield or Bredbury (Stockport).",
      },
      {
        q: "Can I find an automatic instructor in Alderley Edge?",
        a: "Yes — filter by transmission type in your enquiry and InstructorSpot will only match you with instructors offering automatic lessons in the area.",
      },
    ],
  },
  {
    slug: "warrington",
    name: "Warrington",
    metaTitle: "Driving Instructors in Warrington | InstructorSpot",
    metaDescription:
      "Compare DBS-checked driving instructors in Warrington. Manual, automatic and intensive courses. Free matching service, no obligation to book.",
    heading: "Driving Instructors in Warrington",
    intro:
      "Warrington sits between Manchester and Liverpool, with a road network that mixes motorway junctions (M6, M62, M56), a busy town centre and quieter residential estates — good all-round preparation for the test. InstructorSpot instructors covering Warrington often also teach into Wigan and Leigh.",
    areas: [
      "Warrington Town Centre",
      "Orford",
      "Great Sankey",
      "Penketh",
      "Stockton Heath",
      "Latchford",
      "Padgate",
    ],
    testCentres: [{ name: "Warrington", passRate: "55.3%" }],
    faqs: [
      {
        q: "What's the pass rate at Warrington test centre?",
        a: "Warrington posted a 55.3% car pass rate in 2024-25 — well above the UK average of 48.7%, ranking in the top third of centres nationally.",
      },
      {
        q: "Is Warrington close to InstructorSpot's other covered areas?",
        a: "Yes — Warrington is about 12 miles from Wigan and well connected via the M6/M62, so several instructors cover both areas.",
      },
    ],
  },
];

export default locations;