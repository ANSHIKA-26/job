// src/components/Extras/GoogleTranslate.jsx

import { useEffect, useRef } from "react";
import { renderTranslator } from "../../utils/GoogleTranslate";

const GoogleTranslate = () => {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      renderTranslator(containerRef.current.id);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      ref={containerRef}
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 9999,
        backgroundColor: "#1e293b",
        borderRadius: "0.5rem",
        padding: "0.5rem 0.75rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        border: "1px solid #334155",
        color: "#fff",
        fontSize: "0.875rem",
        fontWeight: 500,
        fontFamily: "inherit",
      }}
    />
  );
};

export default GoogleTranslate;
