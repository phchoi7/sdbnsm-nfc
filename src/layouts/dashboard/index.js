/* eslint-disable no-unused-vars */

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

function Default() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <ArgonBox mb={3}>
              <Card>
                <ArgonBox pt={2} px={2}>
                  <ArgonBox mb={0.5}>
                    <ArgonTypography variant="h6" fontWeight="medium">
                      Details
                    </ArgonTypography>
                  </ArgonBox>
                  <ArgonBox mb={1}>
                    <ArgonTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      This is sdbnsm-nfc
                    </ArgonTypography>
                  </ArgonBox>
                </ArgonBox>
              </Card>
            </ArgonBox>
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          {/* <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Sales Overview"
              description={
                <ArgonBox display="flex" alignItems="center">
                  <ArgonBox
                    fontSize={size.lg}
                    color="success"
                    mb={0.3}
                    mr={0.5}
                    lineHeight={0}
                  >
                    <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                  </ArgonBox>
                  <ArgonTypography
                    variant="button"
                    color="text"
                    fontWeight="medium"
                  >
                    4% more{" "}
                    <ArgonTypography
                      variant="button"
                      color="text"
                      fontWeight="regular"
                    >
                      in 2022
                    </ArgonTypography>
                  </ArgonTypography>
                </ArgonBox>
              }
              chart={gradientLineChartData}
            />
          </Grid> */}
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
