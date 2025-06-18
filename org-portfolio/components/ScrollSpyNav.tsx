"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";

interface Section {
  id: string;
  label: string;
}

interface Props {
  sections: Section[];
}

export const ScrollSpyNav: React.FC<Props> = ({ sections }) => {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const rafRef = useRef<number | null>(null);


  useEffect(() => {
    const updateActiveSection = () => {
      const middle = window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= middle && rect.bottom >= middle) {
            setActiveId(section.id);
            break;
          }
        }
      }

      rafRef.current = requestAnimationFrame(updateActiveSection);
    };

    rafRef.current = requestAnimationFrame(updateActiveSection);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id); 
    }
  };

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {sections.map(({ id, label }) => (
        <motion.div
          key={id}
          className="relative group flex items-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 0.8, y: 0 },
          }}
        >
          <button
            onClick={() => handleClick(id)}
            className={`w-2 h-2 md:w-3 md:h-3 lg:w-5 lg:h-5 rounded-full border-3 bg-black  transition-all duration-500 ${
              activeId === id
                ? "bg-blue-600 border-slate-200 scale-145 shadow-lg"
                : "border-gray-100"
            }`}
          />
          <AnimatePresence>
            {(activeId === id || undefined) && (
              <motion.span
                key="label"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className=" absolute right-4 md:right-6 px-2 py-1 text-sm lg:text-xl xl:right-8 font-medium mx-1 bg-white text-blue-700 rounded  shadow whitespace-nowrap "
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};