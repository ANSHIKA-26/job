// src/utils/googleTranslate.js

export function renderTranslator(containerId) {
    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        document.body.appendChild(script);
      }
    };
  
    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector(".goog-te-gadget");
      if (gadgetElement) {
        const textNodes = gadgetElement.childNodes;
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = "";
          }
        });
      }
    };
  
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,fr,es,ta,te,bn,ur,gu",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          containerId
        );
        cleanUpGadgetText();
      }
    };
  
    loadGoogleTranslateScript();
  
    const style = document.createElement("style");
    style.innerHTML = `
      .goog-te-combo {
        background-color: #1e293b;
        border-radius: 0.4rem;
        padding: 0.5rem;
        font-size: 0.875rem;
        font-weight: 500;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
      }
      .goog-te-combo:hover {
        background-color: #334155;
      }
      .goog-logo-link,
      .goog-te-gadget > span > a {
        display: none !important;
      }
      .goog-te-gadget {
        color: transparent !important;
      }
      .goog-te-banner-frame,
      .goog-te-menu-frame {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
  