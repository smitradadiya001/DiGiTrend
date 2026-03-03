import React from "react";

const WHATSAPP_LINK = "https://wa.me/919428163116";

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-[999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)] transition-transform duration-200 hover:scale-105 hover:bg-[#20ba59] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.26-.13-1.53-.75-1.76-.83-.24-.09-.41-.13-.58.13-.17.26-.67.83-.82 1-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.05-1.29-.76-.68-1.27-1.53-1.42-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.58-1.41-.8-1.94-.21-.5-.42-.43-.58-.43h-.5c-.17 0-.45.07-.69.32-.24.26-.91.89-.91 2.18 0 1.29.93 2.53 1.06 2.7.13.17 1.82 2.77 4.41 3.89.62.27 1.1.43 1.48.55.62.2 1.18.17 1.63.1.5-.07 1.53-.63 1.74-1.24.22-.62.22-1.15.15-1.24-.06-.09-.24-.15-.49-.28z" />
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.52.72 4.97 2.08 7.08L3 29l6.12-2.01A12.95 12.95 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-2.11 0-4.17-.57-5.95-1.65l-.42-.25-3.63 1.19 1.22-3.54-.27-.44A10.58 10.58 0 015.4 16C5.4 10.16 10.16 5.4 16 5.4S26.6 10.16 26.6 16 21.84 26.6 16 26.6z" />
      </svg>
    </a>
  );
}

export default FloatingWhatsApp;
