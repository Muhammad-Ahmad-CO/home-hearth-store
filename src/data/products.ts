import walnutArmchair1 from "@/assets/products/walnut-armchair-1.jpg";
import walnutArmchair2 from "@/assets/products/walnut-armchair-2.jpg";
import walnutCoffeeTable1 from "@/assets/products/walnut-coffee-table-1.jpg";
import walnutCoffeeTable2 from "@/assets/products/walnut-coffee-table-2.jpg";
import walnutBookshelf from "@/assets/products/walnut-bookshelf-1.jpg";
import walnutSideboard from "@/assets/products/walnut-sideboard.jpg";
import walnutBedFrame from "@/assets/products/walnut-bed-frame.jpg";
import walnutMirror from "@/assets/products/walnut-mirror.jpg";
import juteRug from "@/assets/products/jute-rug-1.jpg";
import ceramicVases from "@/assets/products/ceramic-vases-set.jpg";
import rattanBaskets from "@/assets/products/rattan-baskets.jpg";
import noirFloorLamp1 from "@/assets/products/noir-floor-lamp-1.jpg";
import noirFloorLamp2 from "@/assets/products/noir-floor-lamp-2.jpg";
import petalWallSconce1 from "@/assets/products/petal-wall-sconce-1.jpg";
import petalWallSconce2 from "@/assets/products/petal-wall-sconce-2.jpg";
import branchChandelier1 from "@/assets/products/branch-candle-chandelier-1.jpg";
import branchChandelier2 from "@/assets/products/branch-candle-chandelier-2.jpg";
import grandChandelier1 from "@/assets/products/grand-crystal-chandelier-1.jpg";
import grandChandelier2 from "@/assets/products/grand-crystal-chandelier-2.jpg";
import clusterGlobeLamp1 from "@/assets/products/cluster-globe-lamp-1.jpg";
import clusterGlobeLamp2 from "@/assets/products/cluster-globe-lamp-2.jpg";
import orbitPendant1 from "@/assets/products/orbit-linear-pendant-1.jpg";
import orbitPendant2 from "@/assets/products/orbit-linear-pendant-2.jpg";
import patinaDomeLamp1 from "@/assets/products/patina-dome-table-lamp-1.jpg";
import patinaDomeLamp2 from "@/assets/products/patina-dome-table-lamp-2.jpg";
import duneLamp1 from "@/assets/products/dune-sculptural-lamp-1.jpg";
import duneLamp2 from "@/assets/products/dune-sculptural-lamp-2.jpg";
import totemLamp1 from "@/assets/products/totem-sculpture-lamp-1.jpg";
import totemLamp2 from "@/assets/products/totem-sculpture-lamp-2.jpg";
import verdiColumnLamp1 from "@/assets/products/verdi-column-lamp-1.jpg";
import verdiColumnLamp2 from "@/assets/products/verdi-column-lamp-2.jpg";

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  heroImage?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  collection: string;
  price: number;
  description: string;
  longDescription: string;
  materials: string;
  dimensions?: string;
  images: string[];
  featured?: boolean;
  new?: boolean;
  model3dUrl?: string;
}

export const collections: Collection[] = [
  {
    id: "lighting",
    name: "Lighting",
    slug: "lighting",
    description: "Sculptural forms that cast warmth and shadow",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1920&q=80",
  },
  {
    id: "ceramics",
    name: "Ceramics",
    slug: "ceramics",
    description: "Handcrafted vessels shaped by patient hands",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80",
  },
  {
    id: "furniture",
    name: "Furniture",
    slug: "furniture",
    description: "Timeless pieces built for generations",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
  },
  {
    id: "textiles",
    name: "Textiles",
    slug: "textiles",
    description: "Natural fibers woven with intention",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80",
  },
  {
    id: "objects",
    name: "Objects & Vases",
    slug: "objects",
    description: "Curated details that complete a space",
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=1920&q=80",
  },
  {
    id: "seasonal",
    name: "Seasonal Collection",
    slug: "seasonal",
    description: "Limited pieces inspired by the changing light",
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=1920&q=80",
  },
  {
    id: "new",
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest additions to our collection",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80",
  },
  {
    id: "gifts",
    name: "Curated Gifts",
    slug: "gifts",
    description: "Thoughtfully selected pieces for giving",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1920&q=80",
  },
];

export const products: Product[] = [
  // Lighting
  {
    id: "arc-pendant",
    name: "Arc Pendant Light",
    slug: "arc-pendant-light",
    collection: "lighting",
    price: 485,
    description: "A graceful arc of hand-bent brass and linen",
    longDescription: "The Arc Pendant embodies the quiet elegance of Scandinavian design. Each piece is hand-bent by our workshop artisans, creating subtle variations that make every light unique. The natural linen shade diffuses light softly, casting a warm glow that transforms any space into a sanctuary.",
    materials: "Solid brass, natural Belgian linen",
    dimensions: "45cm diameter × 30cm height",
    images: [
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "orb-table-lamp",
    name: "Orb Table Lamp",
    slug: "orb-table-lamp",
    collection: "lighting",
    price: 295,
    description: "Mouth-blown glass meets sculptural bronze",
    longDescription: "Our Orb Table Lamp pairs the organic beauty of mouth-blown glass with a solid bronze base. The glass sphere captures and refracts light, while the weighted base provides perfect balance. A statement piece that works as beautifully switched off as it does illuminated.",
    materials: "Mouth-blown glass, solid bronze",
    dimensions: "25cm diameter × 40cm height",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    ],
    new: true,
  },
  // Ceramics
  {
    id: "vessel-collection",
    name: "Large Sculptural Vessel",
    slug: "large-sculptural-vessel",
    collection: "ceramics",
    price: 320,
    description: "Hand-thrown stoneware with natural ash glaze",
    longDescription: "Each vessel in this collection is hand-thrown on the wheel and fired in our wood-burning kiln. The natural ash glaze creates unrepeatable patterns—from soft dove grey to deep iron brown. These vessels are meant to be touched, to show the maker's hand in every curve.",
    materials: "High-fire stoneware, natural ash glaze",
    dimensions: "35cm height × 22cm diameter",
    images: [
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "serving-bowl",
    name: "Everyday Serving Bowl",
    slug: "everyday-serving-bowl",
    collection: "ceramics",
    price: 145,
    description: "Simple forms for daily rituals",
    longDescription: "The Everyday Bowl is designed for the rituals that anchor our days—morning fruit, evening salads, gathered bread. Its generous proportions and gentle curve invite gathering around the table. Each bowl is glazed in our signature cream, revealing flecks of iron from the clay body.",
    materials: "Stoneware, food-safe glaze",
    dimensions: "28cm diameter × 10cm height",
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    ],
  },
  // Furniture
  {
    id: "oak-dining-table",
    name: "Harvest Dining Table",
    slug: "harvest-dining-table",
    collection: "furniture",
    price: 2850,
    description: "Solid oak crafted for generations of gathering",
    longDescription: "The Harvest Table is built to become the heart of your home. Crafted from single-slab white oak, its live edges preserve the natural character of the wood. Traditional mortise-and-tenon joinery ensures this table will be passed down through generations. Each table is unique, bearing the grain patterns and subtle color variations that only solid wood can offer.",
    materials: "Solid white oak, natural oil finish",
    dimensions: "220cm length × 95cm width × 76cm height",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    ],
    featured: true,
  },
  {
    id: "woven-lounge-chair",
    name: "Woven Lounge Chair",
    slug: "woven-lounge-chair",
    collection: "furniture",
    price: 1450,
    description: "Danish paper cord meets sculptural walnut",
    longDescription: "Our Lounge Chair reimagines the classic Danish cord technique for contemporary comfort. The seat and back are hand-woven with natural paper cord over a sculptural walnut frame. The result is a chair that's as beautiful from behind as from the front—a piece that commands attention from every angle.",
    materials: "Solid walnut, natural paper cord",
    dimensions: "75cm width × 80cm depth × 85cm height",
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    new: true,
  },
  // Textiles
  {
    id: "linen-throw",
    name: "Heritage Linen Throw",
    slug: "heritage-linen-throw",
    collection: "textiles",
    price: 195,
    description: "Stonewashed Belgian linen in natural tones",
    longDescription: "Woven from Belgian flax and stonewashed for softness, our Heritage Throw brings effortless warmth to any room. The natural fiber breathes with the seasons—cool in summer, warming in winter. With each wash, the linen grows softer, developing a gentle drape that improves with time.",
    materials: "100% Belgian linen",
    dimensions: "180cm × 140cm",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
    ],
  },
  {
    id: "wool-cushion",
    name: "Hand-Felted Wool Cushion",
    slug: "hand-felted-wool-cushion",
    collection: "textiles",
    price: 165,
    description: "Artisan-made using traditional felting techniques",
    longDescription: "Each cushion begins as raw wool, carefully felted by hand using techniques passed down through generations. The resulting textile is dense yet soft, with a depth of texture that cannot be replicated by machine. Available in a palette of natural earth tones.",
    materials: "100% New Zealand wool, linen back",
    dimensions: "50cm × 50cm",
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    ],
  },
  // Objects & Vases
  {
    id: "sculptural-vase",
    name: "Sculptural Bud Vase",
    slug: "sculptural-bud-vase",
    collection: "objects",
    price: 85,
    description: "Minimalist form for a single stem",
    longDescription: "The Bud Vase celebrates restraint—one stem, one bloom, one moment of beauty. Hand-thrown from local clay and finished with our matte white glaze, its gentle curves create elegant shadows that shift with the day's light. Perfect alone or grouped in threes.",
    materials: "Stoneware, matte white glaze",
    dimensions: "15cm height × 6cm diameter",
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
    ],
  },
  {
    id: "brass-candleholder",
    name: "Forge Candleholder Set",
    slug: "forge-candleholder-set",
    collection: "objects",
    price: 245,
    description: "Hand-forged brass in three graduating heights",
    longDescription: "Our Forge Candleholders are shaped by fire, each one hand-forged from solid brass rod. The set of three graduating heights creates a sculptural tableau, their surfaces bearing the subtle marks of the blacksmith's hammer. Over time, the brass develops a rich patina that deepens their beauty.",
    materials: "Solid forged brass",
    dimensions: "15cm, 20cm, 25cm heights",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    ],
    featured: true,
  },
  // Seasonal
  {
    id: "winter-candle",
    name: "Winter Hearth Candle",
    slug: "winter-hearth-candle",
    collection: "seasonal",
    price: 65,
    description: "Notes of cedar, smoke, and dried herbs",
    longDescription: "Our Winter Hearth Candle captures the essence of the coldest months—the quiet of snow-covered mornings and the warmth of a well-tended fire. Hand-poured from natural soy wax and housed in our signature reusable stoneware vessel.",
    materials: "Natural soy wax, cotton wick, stoneware vessel",
    dimensions: "80 hour burn time",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
    ],
  },
  // New Arrivals
  {
    id: "marble-tray",
    name: "Honed Marble Tray",
    slug: "honed-marble-tray",
    collection: "new",
    price: 175,
    description: "Natural stone for everyday beauty",
    longDescription: "Cut from a single block of Carrara marble and honed to a soft matte finish, this tray elevates everyday objects into a curated vignette. Its natural veining ensures each tray is one of a kind. Use it to corral bathroom essentials, display treasured objects, or serve aperitifs.",
    materials: "Carrara marble",
    dimensions: "30cm × 20cm × 2cm",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
    ],
    new: true,
  },
  // Gifts
  {
    id: "gift-box",
    name: "Curated Gift Box",
    slug: "curated-gift-box",
    collection: "gifts",
    price: 225,
    description: "A thoughtful selection of our favorite pieces",
    longDescription: "Our Curated Gift Box brings together a selection of our most-loved small pieces: a bud vase, a hand-poured candle, and a set of linen napkins. Presented in a reusable wooden box lined with tissue paper, it's a gift that speaks of intention and care.",
    materials: "Stoneware, soy candle, linen, wooden box",
    images: [
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
    ],
  },
  // ===== The Walnut Edit =====
  {
    id: "solace-armchair",
    name: "Solace Armchair",
    slug: "solace-armchair",
    collection: "furniture",
    price: 1850,
    description: "Solid walnut frame cradling cream bouclé",
    longDescription: "The Solace Armchair pairs a hand-shaped solid walnut frame with a deep, cream bouclé seat. Every joint is cut and fitted by hand, the arms sanded through eight grits until the grain feels like river stone. Low, wide and quietly generous — a chair built for long evenings and longer conversations.",
    materials: "Solid American walnut, cream bouclé, feather-down cushions",
    dimensions: "78cm width × 82cm depth × 74cm height",
    images: [walnutArmchair1, walnutArmchair2],
    featured: true,
    new: true,
  },
  {
    id: "grove-coffee-table",
    name: "Grove Coffee Table",
    slug: "grove-coffee-table",
    collection: "furniture",
    price: 1290,
    description: "A single walnut slab on tapered legs",
    longDescription: "Cut from a single board of black walnut, the Grove table keeps its live edge and the knots the tree earned. Hand-rubbed with three coats of natural oil, the surface deepens in colour with every year of use. Imperfection is not a flaw here — it is the record.",
    materials: "Solid black walnut, natural hardwax oil",
    dimensions: "120cm length × 65cm width × 40cm height",
    images: [walnutCoffeeTable1, walnutCoffeeTable2],
    featured: true,
  },
  {
    id: "monolith-bookshelf",
    name: "Monolith Bookshelf",
    slug: "monolith-bookshelf",
    collection: "furniture",
    price: 2800,
    description: "Sculptural open shelving in solid walnut",
    longDescription: "Monolith is a study in weight and air. Thick walnut planks are joined with hidden dowels so the shelves appear to float within the frame, holding books, ceramics and shadow in equal measure. It arrives with the maker's stamp burned into the lower rail.",
    materials: "Solid walnut, brass wall anchors",
    dimensions: "180cm height × 90cm width × 35cm depth",
    images: [walnutBookshelf],
    new: true,
  },
  {
    id: "low-profile-sideboard",
    name: "Low Profile Sideboard",
    slug: "low-profile-sideboard",
    collection: "furniture",
    price: 2100,
    description: "Grain-matched doors, hand-cut joinery",
    longDescription: "The doors of this sideboard are cut in sequence from one board so the grain runs unbroken across the whole face — a detail that takes an extra day at the bench and lasts a lifetime. Inside, adjustable shelves in pale ash contrast against the dark walnut shell.",
    materials: "Solid walnut, ash interior, soft-close hardware",
    dimensions: "180cm length × 45cm depth × 65cm height",
    images: [walnutSideboard],
    featured: true,
  },
  {
    id: "nocturne-bed-frame",
    name: "Nocturne Bed Frame",
    slug: "nocturne-bed-frame",
    collection: "furniture",
    price: 3200,
    description: "A low walnut platform with a slatted headboard",
    longDescription: "Nocturne sits low and calm, its slatted headboard casting soft striped shadow across the wall at dusk. Mortise-and-tenon joinery means no hardware creaks, no wobble — just solid wood doing what solid wood has always done.",
    materials: "Solid walnut, slatted wood base",
    dimensions: "Queen — 215cm × 165cm × 95cm headboard height",
    images: [walnutBedFrame],
  },
  {
    id: "round-walnut-mirror",
    name: "Round Walnut Mirror",
    slug: "round-walnut-mirror",
    collection: "objects",
    price: 420,
    description: "Thick steam-bent frame around clear glass",
    longDescription: "A single length of walnut is steam-bent into a perfect circle, its seam joined so cleanly you must search to find it. Lean it against a wall or hang it — either way it gathers light and gives the room a second window.",
    materials: "Steam-bent walnut, low-iron mirror glass",
    dimensions: "80cm diameter × 4cm depth",
    images: [walnutMirror],
    new: true,
  },
  {
    id: "hand-woven-jute-rug",
    name: "Hand-woven Jute Rug",
    slug: "hand-woven-jute-rug",
    collection: "textiles",
    price: 850,
    description: "Natural fibre, woven on a floor loom",
    longDescription: "Woven from undyed jute on a traditional floor loom, this rug carries the small irregularities of handwork in every row. Underfoot it is firm and cool; in the room it grounds furniture with the honest texture of a natural fibre left as it grew.",
    materials: "100% hand-spun jute, cotton warp",
    dimensions: "240cm × 170cm",
    images: [juteRug],
    featured: true,
  },
  {
    id: "terra-vase-set",
    name: "Terra Vase Set",
    slug: "terra-vase-set",
    collection: "ceramics",
    price: 260,
    description: "Three hand-thrown vessels in earth glazes",
    longDescription: "A trio of hand-thrown vases finished in clay, oatmeal and deep walnut glazes. Each is fired twice, and each emerges slightly different from its siblings — the kiln always has an opinion. Group them on a shelf or let one stand alone.",
    materials: "Stoneware, matte earth glazes",
    dimensions: "18cm, 24cm and 30cm heights",
    images: [ceramicVases],
    new: true,
  },
  {
    id: "rattan-storage-baskets",
    name: "Rattan Storage Baskets",
    slug: "rattan-storage-baskets",
    collection: "objects",
    price: 180,
    description: "A nesting pair, woven by hand",
    longDescription: "Woven by hand from natural rattan over a sturdy frame, this nesting pair keeps blankets, firewood or clutter out of sight without hiding its own craft. The weave tightens slightly with age, growing sturdier as it goes.",
    materials: "Natural rattan, hardwood frame",
    dimensions: "45cm and 35cm diameters",
    images: [rattanBaskets],
  },
  // Lighting — Atelier Series
  {
    id: "noir-floor-lamp",
    name: "Noir Arc Floor Lamp",
    slug: "noir-arc-floor-lamp",
    collection: "lighting",
    price: 1240,
    description: "A blackened steel arc with a pleated shade",
    longDescription: "The Noir sweeps out from a weighted marble foot in one long, patient curve of blackened steel. Its pleated shade throws a soft pool of light across a reading chair without spilling glare into the rest of the room. The finish is applied by hand, so no two arcs catch the light quite the same way.",
    materials: "Blackened steel, marble base, pleated linen shade",
    dimensions: "180cm height × 120cm reach",
    images: [noirFloorLamp1, noirFloorLamp2],
    featured: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "petal-wall-sconce",
    name: "Petal Wall Sconce",
    slug: "petal-wall-sconce",
    collection: "lighting",
    price: 420,
    description: "Overlapping brass petals holding a single glow",
    longDescription: "Thin sheets of brass are cut, shaped and layered by hand into a form that opens like a bud. Light escapes between the petals in warm slivers, making the wall itself part of the fixture. Over the years the brass will darken into a deeper honey tone.",
    materials: "Hand-formed brass, frosted glass diffuser",
    dimensions: "24cm width × 32cm height × 12cm depth",
    images: [petalWallSconce1, petalWallSconce2],
    new: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "branch-candle-chandelier",
    name: "Branch Candle Chandelier",
    slug: "branch-candle-chandelier",
    collection: "lighting",
    price: 1680,
    description: "Forged arms reaching out like winter branches",
    longDescription: "Each arm of this chandelier is forged and bent individually, then joined so the whole piece reads like a bare branch caught mid-reach. Candle-style bulbs sit at the tips, casting the flickering, low light of an older kind of evening. Beautiful over a long dining table.",
    materials: "Hand-forged iron, aged bronze finish",
    dimensions: "90cm diameter × 55cm height",
    images: [branchChandelier1, branchChandelier2],
    featured: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "grand-crystal-chandelier",
    name: "Grand Crystal Chandelier",
    slug: "grand-crystal-chandelier",
    collection: "lighting",
    price: 3450,
    description: "Tiered crystal on an antiqued brass frame",
    longDescription: "Hundreds of hand-cut crystals are hung in tiers from an antiqued brass frame, each one strung by hand over several days. Lit, the piece scatters small points of light across ceiling and walls; unlit, it hangs like a piece of quiet jewellery for the room.",
    materials: "Hand-cut crystal, antiqued brass frame",
    dimensions: "80cm diameter × 100cm height",
    images: [grandChandelier1, grandChandelier2],
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "cluster-globe-lamp",
    name: "Cluster Globe Lamp",
    slug: "cluster-globe-lamp",
    collection: "lighting",
    price: 890,
    description: "Mouth-blown globes gathered on slender stems",
    longDescription: "A cluster of mouth-blown glass globes sits at different heights on slender brass stems, like bubbles caught rising. Each globe carries the faint swirl of the glassblower's breath, and together they give an even, generous light with no hard edge.",
    materials: "Mouth-blown opal glass, brushed brass stems",
    dimensions: "50cm diameter × 45cm height",
    images: [clusterGlobeLamp1, clusterGlobeLamp2],
    new: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "orbit-linear-pendant",
    name: "Orbit Linear Pendant",
    slug: "orbit-linear-pendant",
    collection: "lighting",
    price: 1150,
    description: "A long horizontal bar of quiet, even light",
    longDescription: "Built for kitchen islands and long tables, the Orbit runs as a single machined bar with a satin diffuser beneath. The light lands flat and even along the whole surface below, and the fixture itself stays visually thin so it never crowds the room.",
    materials: "Machined aluminium, satin acrylic diffuser, brass caps",
    dimensions: "150cm length × 8cm width",
    images: [orbitPendant1, orbitPendant2],
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "patina-dome-table-lamp",
    name: "Patina Dome Table Lamp",
    slug: "patina-dome-table-lamp",
    collection: "lighting",
    price: 540,
    description: "A weathered copper dome on a turned wood base",
    longDescription: "The copper dome is left to weather before finishing, so it arrives already carrying a green-brown patina no workshop could fake quickly. Below it, a turned walnut base gives the lamp its weight. Light bounces off the inside of the dome and comes out warm.",
    materials: "Patinated copper, turned solid walnut",
    dimensions: "32cm diameter × 46cm height",
    images: [patinaDomeLamp1, patinaDomeLamp2],
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "dune-sculptural-lamp",
    name: "Dune Sculptural Lamp",
    slug: "dune-sculptural-lamp",
    collection: "lighting",
    price: 680,
    description: "A ridged plaster form that glows from within",
    longDescription: "Cast in textured plaster and sanded by hand, the Dune carries ridges like wind-worked sand. The bulb sits deep inside, so the whole body seems to hold the light rather than emit it. A piece that earns its place on a sideboard even when switched off.",
    materials: "Cast plaster, oak inner frame",
    dimensions: "28cm width × 52cm height",
    images: [duneLamp1, duneLamp2],
    new: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "totem-sculpture-lamp",
    name: "Totem Sculpture Lamp",
    slug: "totem-sculpture-lamp",
    collection: "lighting",
    price: 760,
    description: "Stacked ceramic forms standing like a small totem",
    longDescription: "Three thrown ceramic forms are stacked and fired in an earth glaze, then topped with a linen shade. The proportions were worked out on the wheel rather than on paper, which is why the silhouette feels found instead of designed.",
    materials: "Hand-thrown stoneware, natural linen shade",
    dimensions: "30cm diameter × 68cm height",
    images: [totemLamp1, totemLamp2],
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  {
    id: "verdi-column-lamp",
    name: "Verdi Column Lamp",
    slug: "verdi-column-lamp",
    collection: "lighting",
    price: 620,
    description: "A verdigris column under a wide paper shade",
    longDescription: "A slim metal column finished in verdigris green carries a wide handmade paper shade. The paper softens everything it touches, and the column's colour shifts between moss and stone depending on the hour. Made in small batches in our workshop.",
    materials: "Verdigris-finished metal, handmade paper shade",
    dimensions: "40cm diameter × 62cm height",
    images: [verdiColumnLamp1, verdiColumnLamp2],
    featured: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
  // 3D Configurator Showcase
  {
    id: "walnut-lounge-chair-3d",
    name: "Walnut Lounge Chair — 3D",
    slug: "walnut-lounge-chair-3d",
    collection: "furniture",
    price: 1850,
    description: "Interactive 3D model of our walnut lounge chair",
    longDescription: "Explore every angle of our signature walnut lounge chair in this interactive 3D viewer. Rotate, zoom and inspect the joinery, grain and upholstery as if it were in front of you. The model loads directly from our configurator partner and updates in real time.",
    materials: "Solid American walnut, cream bouclé",
    dimensions: "78cm width × 82cm depth × 74cm height",
    images: [walnutArmchair1, walnutArmchair2],
    new: true,
    model3dUrl: "https://furnimesh.com/iframe?glb=https://storage.googleapis.com/furnimesh-3d/gbl-files/xSUhtOSGZ2DWgnwpU2kya.glb&userId=",
  },
];

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((product) => product.collection === collectionSlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter((product) => product.new);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((collection) => collection.slug === slug);
};

export const getRelatedProducts = (productId: string, limit = 4): Product[] => {
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  
  return products
    .filter((p) => p.collection === product.collection && p.id !== productId)
    .slice(0, limit);
};
