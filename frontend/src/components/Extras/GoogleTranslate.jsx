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
      id="google_translate_element_container"
      ref={containerRef}
      style={{ position: "fixed", top: 10, right: 10, zIndex: 9999 }}
    />
  );
};

export default GoogleTranslate;
