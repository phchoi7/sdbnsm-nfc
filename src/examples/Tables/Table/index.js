import React from "react";
import PropTypes from "prop-types";
import {
  Table as MuiTable,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonTypography from "components/ArgonTypography";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

function Table({ columns, rows }) {
  const { size, fontWeightBold } = typography;
  const { borderWidth } = borders;

  const renderColumns = columns.map(({ name, align, width }, key) => {
    if (!name) {
      console.warn("Undefined name property in columns", columns);
      return null; // Skip rendering this column
    }
    const pl = key === 0 || key === columns.length - 1 ? 3 : 1;
    const pr = pl;

    return (
      <ArgonBox
        key={name}
        component="th"
        width={width || "auto"}
        pt={1.5}
        pb={1.25}
        pl={pl}
        pr={pr}
        textAlign={align || "left"}
        fontSize={size.xxs}
        fontWeight={fontWeightBold}
        color="secondary"
        opacity={0.7}
        sx={({ palette: { light } }) => ({
          borderBottom: `${borderWidth[1]} solid ${light.main}`,
        })}
      >
        {name.toUpperCase()}
      </ArgonBox>
    );
  });

  const renderRows = rows.map((row, rowIndex) => {
    return (
      <TableRow key={`row-${rowIndex}`}>
        {columns.map(({ name, align }, colIndex) => {
          if (!row.hasOwnProperty(name)) {
            console.warn("Missing data for name:", name);
            return null; // Skip rendering this cell
          }
          const content = Array.isArray(row[name]) ? (
            <ArgonBox display="flex" alignItems="center" py={0.5} px={1}>
              <ArgonAvatar
                src={row[name][0]}
                name={row[name][1]}
                variant="rounded"
                size="sm"
              />
              <ArgonTypography variant="button" fontWeight="medium">
                {row[name][1]}
              </ArgonTypography>
            </ArgonBox>
          ) : (
            <ArgonTypography
              variant="button"
              fontWeight="regular"
              color="secondary"
            >
              {row[name]}
            </ArgonTypography>
          );

          return (
            <ArgonBox
              key={`${rowIndex}-${colIndex}`}
              component="td"
              p={1}
              textAlign={align || "left"}
              verticalAlign="middle"
              lineHeight={0.65}
              sx={({ palette: { light } }) => ({
                borderBottom: `${borderWidth[1]} solid ${light.main}`,
              })}
            >
              {content}
            </ArgonBox>
          );
        })}
      </TableRow>
    );
  });

  return (
    <TableContainer>
      <MuiTable>
        <ArgonBox component="thead">
          <TableRow>{renderColumns}</TableRow>
        </ArgonBox>
        <TableBody>{renderRows}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}

Table.defaultProps = {
  columns: [],
  rows: [],
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
