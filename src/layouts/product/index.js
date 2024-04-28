import React, { useState, useRef, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/product/components/Header";

// Data

// Images
import productData from "./data/data.json";
import { useParams } from "react-router-dom";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ArgonButton from "components/ArgonButton";

const bgImage =
  "https://static.wixstatic.com/media/3d576f_42c11574faf84088b5b6d65ff2b0200a~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_640,h_326,al_t,q_80,usm_0.66_1.00_0.01,enc_auto/3d576f_42c11574faf84088b5b6d65ff2b0200a~mv2_d_6000_4000_s_4_2.jpg";

function Overview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams();
  const product = productData.find((product) => product.id === id);

  // Create a ref for the audio object
  const audioRef = useRef(null);
  const player = useRef();

  useEffect(() => {
    // Attempt to play audio on component mount
    const timer = setTimeout(() => {
      if (player.current) {
        player.current.audio.current.muted = true; // Start muted
        player.current.audio.current.play();
      }
    }, 1000); // Delayed attempt to play the audio after 1 second

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  useEffect(() => {
    // if (product) {
    //   audioRef.current = new Audio(`/audio/product-${id}.mp3`);
    // }

    if (product) {
      const audio = new Audio(`/assets/audio/product-${id}.mp3`);
      audio.muted = true; // Start muted
      audioRef.current = audio;

      audio
        .play()
        .then(() => {
          setIsPlaying(true); // Audio is playing but muted
        })
        .catch((error) => {
          console.log("Autoplay was prevented.");
        });

      // Event listeners
      audio.addEventListener("play", () => setIsPlaying(true));
      audio.addEventListener("pause", () => setIsPlaying(false));

      // Clean up
      return () => {
        audio.removeEventListener("play", () => setIsPlaying(true));
        audio.removeEventListener("pause", () => setIsPlaying(false));
        audio.pause();
      };
    }
  }, [id, product]);

  useEffect(() => {
    // Set a timeout to play the audio after 2 seconds
    const audio = audioRef.current;
    if (audio) {
      audio.muted = false; // Unmute
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Play on timeout was prevented.");
          audio.play();
        });
    }
    // Cleanup function to clear the timeout
  }, [product]); // Run this effect when 'product' changes

  // Function to toggle audio play/pause
  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio) {
      if (audio.paused || audio.muted) {
        audio.muted = false; // Unmute
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  if (!product) {
    return (
      <DashboardLayout
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.6),
              rgba(gradients.info.state, 0.6)
            )}, url(${bgImage})`,
        }}
      >
        <Header
          product={{
            id: "error",
            name: "Product Not Found!",
            description: "Product Not Found!",
            image: "/assets/image/logo-ct-dark.png",
          }}
        />

        <ArgonBox mt={5} mb={3}>
          <Grid container spacing={3}></Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox pt={2} px={2}>
              <ArgonBox mb={0.5}>
                <ArgonTypography variant="h6" fontWeight="medium">
                  細節
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox mb={1}>
                <ArgonTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                >
                  未找到產品！
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </Card>
        </ArgonBox>

        <Footer />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({
          functions: { rgba, linearGradient },
          palette: { gradients },
        }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <Header product={product} />

      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3}></Grid>
      </ArgonBox>
      <ArgonBox mb={3}>
        <Card>
          <ArgonBox pt={2} px={2}>
            <ArgonBox mb={0.5}>
              <ArgonTypography variant="h6" fontWeight="medium">
                細節
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={1}>
              <ArgonTypography
                variant="button"
                fontWeight="regular"
                color="text"
              >
                {product.description}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mb={0.5}>
              <ArgonTypography variant="h6" fontWeight="medium">
                產品語音細節
              </ArgonTypography>
              {/* <button onClick={togglePlay}>
                {isPlaying ? "暫停" : "播放"}
              </button> */}
              <ArgonButton
                color="info"
                variant={"outlined"}
                onClick={togglePlay}
                fullWidth
                style={{ marginTop: "10px" }}
              >
                {isPlaying ? "暫停" : "播放"}
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </Card>
      </ArgonBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
