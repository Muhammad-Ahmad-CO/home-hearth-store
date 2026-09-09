import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { products, collections } from "@/data/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const materialFilters: { value: string; label: string; keywords: string[] }[] = [
  { value: "wood", label: "Wood & Walnut", keywords: ["walnut", "oak", "wood", "hardwood", "timber"] },
  { value: "brass", label: "Brass & Bronze", keywords: ["brass", "bronze", "copper"] },
  { value: "metal", label: "Steel & Metal", keywords: ["steel", "iron", "metal", "aluminium"] },
  { value: "glass", label: "Glass & Crystal", keywords: ["glass", "crystal"] },
  { value: "ceramic", label: "Ceramic & Stone", keywords: ["ceramic", "stoneware", "clay", "plaster", "marble", "terracotta"] },
  { value: "textile", label: "Linen & Textiles", keywords: ["linen", "cotton", "bouclé", "boucle", "wool", "paper"] },
  { value: "natural", label: "Rattan & Jute", keywords: ["rattan", "jute", "cane", "fibre", "fiber"] },
];

const prices = products.map((p) => p.price);
const minPrice = Math.floor(Math.min(...prices) / 50) * 50;
const maxPrice = Math.ceil(Math.max(...prices) / 50) * 50;

export const CatalogExplorer = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [material, setMaterial] = useState("all");
  const [range, setRange] = useState<number[]>([minPrice, maxPrice]);
  const [showAll, setShowAll] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const materialDef = materialFilters.find((m) => m.value === material);

    return products.filter((product) => {
      if (q) {
        const haystack = `${product.name} ${product.description} ${product.materials}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (category !== "all" && product.collection !== category) return false;
      if (materialDef) {
        const mats = product.materials.toLowerCase();
        if (!materialDef.keywords.some((k) => mats.includes(k))) return false;
      }
      if (product.price < range[0] || product.price > range[1]) return false;
      return true;
    });
  }, [query, category, material, range]);

  const visible = showAll ? results : results.slice(0, 8);
  const isFiltered =
    query !== "" || category !== "all" || material !== "all" || range[0] !== minPrice || range[1] !== maxPrice;

  const reset = () => {
    setQuery("");
    setCategory("all");
    setMaterial("all");
    setRange([minPrice, maxPrice]);
  };

  return (
    <section id="explore" className="py-20 md:py-28">
      <div className="container-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">
            Explore the Catalog
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Find Your Piece
          </h2>
        </motion.div>

        {/* Controls */}
        <div className="border border-border p-5 md:p-7 mb-12 space-y-6 bg-background/60">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, material or description…"
              aria-label="Search products"
              className="rounded-none h-12 pl-11 pr-11 text-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:items-end">
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Category
              </span>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="rounded-none h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-sm">All Categories</SelectItem>
                  {collections.map((c) => (
                    <SelectItem key={c.id} value={c.id} className="text-sm">
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                Material
              </span>
              <Select value={material} onValueChange={setMaterial}>
                <SelectTrigger className="rounded-none h-11 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" className="text-sm">All Materials</SelectItem>
                  {materialFilters.map((m) => (
                    <SelectItem key={m.value} value={m.value} className="text-sm">
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  Price
                </span>
                <span className="text-xs text-foreground tabular-nums">
                  ${range[0].toLocaleString()} – ${range[1].toLocaleString()}
                </span>
              </div>
              <Slider
                value={range}
                min={minPrice}
                max={maxPrice}
                step={20}
                onValueChange={setRange}
                aria-label="Price range"
                className="pb-1"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-border/60">
            <p className="text-sm text-muted-foreground pt-4">
              {results.length} {results.length === 1 ? "piece" : "pieces"}
            </p>
            {isFiltered && (
              <Button
                variant="ghost"
                size="sm"
                onClick={reset}
                className="mt-4 rounded-none text-xs tracking-[0.1em] uppercase"
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>

        {/* Results */}
        {visible.length > 0 ? (
          <>
            <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10")}>
              {visible.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index % 4} />
              ))}
            </div>
            {results.length > visible.length && (
              <div className="mt-14 text-center">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(true)}
                  className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase"
                >
                  Show all {results.length} pieces
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24 border border-dashed border-border">
            <p className="font-serif text-2xl text-muted-foreground mb-3">Nothing matches yet</p>
            <p className="text-muted-foreground mb-8">Try a different search or widen the price range.</p>
            <Button
              variant="outline"
              onClick={reset}
              className="rounded-none px-8 text-sm tracking-[0.1em] uppercase"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
