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

const ScrollableContainer = styled(ArgonBox)(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
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
}));

function Default() {
  const { size } = typography;

  const discoverItems = [
    {
      id: 1,
      title: "MicroBit 應用概要",
      imageUrl:
        "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
                    minWidth: "200px",
                    maxWidth: "200px", // Set a maximum width for the card
                    marginRight: "16px",
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
