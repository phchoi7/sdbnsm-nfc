import React, { useState, useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";

const DebugConsole = () => {
  const [logs, setLogs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // A function to capture console logs
  useEffect(() => {
    const originalConsoleLog = console.log;
    console.log = (...args) => {
      originalConsoleLog(...args);
      setLogs((prevLogs) => [...prevLogs, args.join(" ")]);
    };

    // Cleanup function to restore the original console.log
    return () => {
      console.log = originalConsoleLog;
    };
  }, []);

  const toggleConsole = () => setIsOpen(!isOpen);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        maxWidth: "100%",
        zIndex: 1300,
      }}
    >
      <Button onClick={toggleConsole} sx={{ position: "absolute", top: -40 }}>
        {isOpen ? "Hide Console" : "Show Console"}
      </Button>
      {isOpen && (
        <Box
          sx={{
            maxHeight: 200,
            overflow: "auto",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "8px",
          }}
        >
          {logs.map((log, index) => (
            <Typography key={index} variant="body2">
              {log}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DebugConsole;
