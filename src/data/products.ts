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
