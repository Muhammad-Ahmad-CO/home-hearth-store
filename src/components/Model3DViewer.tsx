import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Minimize2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Model3DViewerProps {
  src: string;
  title?: string;
  className?: string;
}

export function Model3DViewer({ src, title = "3D Model", className }: Model3DViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);

  const toggleFullscreen = () => setIsFullscreen((prev) => !prev);
  const reloadModel = () => setKey((prev) => prev + 1);

  const iframe = (
    <iframe
      key={key}
      src={src}
      title={title}
      className="w-full h-full border-0"
      allowFullScreen
      loading="lazy"
    />
  );

  return (
    <AnimatePresence>
      {isFullscreen ? (
        <motion.div
          key="fullscreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background"
        >
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <button
              onClick={reloadModel}
              className="p-3 bg-background/90 backdrop-blur-md hover:bg-background transition-colors"
              aria-label="Reload 3D model"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-3 bg-background/90 backdrop-blur-md hover:bg-background transition-colors"
              aria-label="Exit fullscreen"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>
          {iframe}
        </motion.div>
      ) : (
        <motion.div
          key="inline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className={cn(
            "relative w-full h-[420px] md:h-[520px] bg-muted/30 overflow-hidden group",
            className
          )}
        >
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={reloadModel}
              className="p-2.5 bg-background/90 backdrop-blur-md hover:bg-background transition-colors"
              aria-label="Reload 3D model"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2.5 bg-background/90 backdrop-blur-md hover:bg-background transition-colors"
              aria-label="View fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
          {iframe}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
