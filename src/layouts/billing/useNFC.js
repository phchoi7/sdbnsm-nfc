import { useState } from "react";

export const useNFC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const isNFCSupported = "NDEFReader" in window;

  const startNFCScan = async () => {
    console.log("Attempting to scan NFC"); // Debugging log
    if (isNFCSupported) {
      setModalOpen(true);
      setIsScanning(true);
      const ndef = new window.NDEFReader();
      try {
        await ndef.scan();
        console.log("NFC scanning started"); // Debugging log

        ndef.onreading = (event) => {
          console.log("NFC tag data read", event); // Debugging log
          // Handle NFC tag data here
        };

        ndef.onreadingerror = () => {
          console.error("Error reading NFC tag");
          setError("Error reading NFC tag");
          setIsScanning(false);
          setModalOpen(false);
        };
      } catch (error) {
        console.error("NFC scanning error:", error);
        setError(`NFC scanning error: ${error.message}`);
        setIsScanning(false);
        setModalOpen(false);
      }
    } else {
      console.error("Web NFC is not supported by this browser.");
      setError("Web NFC is not supported by this browser.");
      setModalOpen(false);
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
