import { useState } from "react";

export const useNFC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState("");
  const [tagContent, setTagContent] = useState(null); // State to hold the read data
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
          handleNDEFMessage(event.message);
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

  // Function to process NDEFMessage
  const handleNDEFMessage = (message) => {
    const records = message.records.map((record) => {
      return {
        recordType: record.recordType,
        mediaType: record.mediaType,
        data: parseRecordData(record),
      };
    });
    setTagContent(records);
  };

  // Function to parse NDEFRecord data
  const parseRecordData = (record) => {
    if (record.recordType === "text") {
      const textDecoder = new TextDecoder(record.encoding);
      return textDecoder.decode(record.data);
    } else if (record.recordType === "url") {
      return new TextDecoder().decode(record.data);
    } else {
      return record.data; // Return raw data for other types or handle accordingly
    }
  };

  return {
    isScanning,
    startNFCScan,
    modalOpen,
    setModalOpen,
    error,
    tagContent, // Expose the NFC tag content
    isNFCSupported,
  };
};
