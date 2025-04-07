import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!document.querySelector("#google-translate-script")) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.id = "google-translate-script";
        document.body.appendChild(script);
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,fr,es", // Add or remove languages as needed
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{
        position: "fixed",
    top: "1rem",
    right: "1rem",
    zIndex: 9999,
    backgroundColor: "#1e293b", // tailwind slate-800 for dark mode
    borderRadius: "0.5rem",
    padding: "0.5rem 0.75rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    border: "1px solid #334155", // subtle border for contrast
    color: "#fff",
    fontSize: "0.875rem",
    fontWeight: 500,
    fontFamily: "inherit",
      }}
    />
  );
};

export default GoogleTranslate;
