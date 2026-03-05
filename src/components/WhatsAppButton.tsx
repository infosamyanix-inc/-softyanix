import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "923150657943"; // country code required
const DEFAULT_MESSAGE = "Hello Softyanix, I want to discuss a project.";

const WhatsAppButton = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      DEFAULT_MESSAGE
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 
                 flex items-center justify-center
                 h-14 w-14 rounded-full 
                 bg-green-500 text-white
                 shadow-xl hover:bg-green-600 
                 transition-all duration-300
                 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="h-8 w-8" />
    </button>
  );
};

export default WhatsAppButton;
