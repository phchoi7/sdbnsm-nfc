import React from "react";
import { CircularProgress, Grid, Modal, Typography } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import BaseLayout from "layouts/billing/components/BaseLayout";
import { useNFC } from "./useNFC";
import ArgonButton from "components/ArgonButton";
import DebugConsole from "./debugConsole";

function Billing() {
  const {
    isScanning,
    startNFCScan,
    modalOpen,
    setModalOpen,
    error,
    tagContent,
    isNFCSupported,
  } = useNFC();

  return (
    <>
      <BaseLayout stickyNavbar>
        <ArgonBox mt={24}>
          <Grid container spacing={3} justifyContent="center">
            <ArgonButton
              color="info"
              variant="outlined"
              onClick={startNFCScan}
              disabled={!isNFCSupported}
            >
              Scan NFC Tag
            </ArgonButton>
            {!isNFCSupported && (
              <Typography variant="body1" color="error">
                NFC is not supported on this browser. Please use a compatible
                Android device with Google Chrome.
              </Typography>
            )}
          </Grid>
        </ArgonBox>
        <Modal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ArgonBox
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              minWidth: "300px", // Ensure the modal is not too small
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {isScanning
                ? "請將您的裝置靠近 NFC 標籤"
                : error
                ? "Scan failed"
                : "Scan complete"}
            </Typography>

            {isScanning ? (
              <CircularProgress />
            ) : error ? (
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            ) : (
              tagContent && (
                <div>
                  {tagContent.map((record, index) => (
                    <Typography key={index} variant="body1">
                      {record.recordType === "url"
                        ? `URL: ${record.data}`
                        : `Data: ${record.data}`}
                    </Typography>
                  ))}
                </div>
              )
            )}
          </ArgonBox>
        </Modal>
      </BaseLayout>
      <DebugConsole />
    </>
  );
}

export default Billing;
