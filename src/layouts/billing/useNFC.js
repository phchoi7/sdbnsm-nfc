import { useState } from "react";

export const useNFC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [isNFCSupported] = useState("NDEFReader" in window);

  const startNFCScan = async () => {
    if (isNFCSupported) {
      setIsScanning(true);
      const ndef = new window.NDEFReader();
      try {
        await ndef.scan();
        console.log("Ready to scan an NFC tag");

        ndef.onreading = (event) => {
          // process NFC data here
        };

        ndef.onreadingerror = () => {
          console.error("Error reading NFC tag");
          setError("Error reading NFC tag");
          setIsScanning(false);
        };
      } catch (error) {
        console.error("NFC scanning error:", error);
        setError(`NFC scanning error: ${error.message}`);
        setIsScanning(false);
      }
    } else {
      setError("Web NFC is not supported by this browser.");
    }
  };

  return {
    isScanning,
    startNFCScan,
    modalOpen,
    setModalOpen,
    error,
    isNFCSupported,
  };
};
