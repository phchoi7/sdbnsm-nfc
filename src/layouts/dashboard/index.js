/* eslint-disable no-unused-vars */
// eslint-disable-next-line
// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";

import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
const ScrollableContainer = styled(ArgonBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  "-webkit-overflow-scrolling": "touch", // Add momentum-based scrolling for iOS devices
  // Remove the margin-right on the last item to prevent extra spacing
  "& > *:not(:last-child)": {
    marginRight: theme.spacing(2),
  },
  // If you want to ensure that the container itself has a minimum width
  // minWidth: 800, // Adjust accordingly
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none",
  "scrollbar-width": "none",
  "touch-action": "pan-x", // Enable horizontal panning
}));

function Default() {
  const { size } = typography;

  const discoverItems = [
    {
      id: 1,
      title: "MicroBit 應用概要",
      imageUrl:
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "電腦科最新課堂練習",
      imageUrl:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "設計的十大守則",
      imageUrl:
        "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonTypography variant="h2" fontWeight="medium">
          Discover
        </ArgonTypography>
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12}>
            <ScrollableContainer>
              {discoverItems.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    width: "80vw", // Use viewport width units for responsive width on mobile
                    flex: "0 0 auto", // This ensures the flex items don't shrink and are laid out according to their width
                    marginRight: "16px",
                    minWidth: "200px",
                    maxWidth: "200px", // Set a maximum width for the card
                  }}
                >
                  <ArgonBox pt={2} px={2}>
                    <ArgonBox
                      component="img"
                      src={item.imageUrl}
                      alt={item.title}
                      sx={{
                        width: "100%", // Make the image responsive to the width of the card
                        maxHeight: "150px", // Set a maximum height for the image
                        objectFit: "cover", // This will cover the area of the box without stretching the image
                      }}
                    />
                    <ArgonTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      sx={{
                        textAlign: "center", // Center the title text within the card
                        display: "block", // Ensure the text takes up the full width for centering
                        my: 1, // Margin top and bottom for spacing
                      }}
                    >
                      {item.title}
                    </ArgonTypography>
                  </ArgonBox>
                </Card>
              ))}
            </ScrollableContainer>
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>

          <ArgonBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "View Project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard
                  title={{ variant: "h5", text: "New project" }}
                  outlined
                />
              </Grid>
            </Grid>
          </ArgonBox>
        </Grid>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Sales by Country" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList
              title="categories"
              categories={categoriesListData}
            />
          </Grid>
        </Grid> */}
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
