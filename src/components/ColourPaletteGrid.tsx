import { Box, Grid, Typography, useTheme } from "@mui/material";

const ColourBlock = ({
  label,
  color,
  textColor = "text.primary",
}: {
  label: string;
  color: string;
  textColor?: string;
}) => (
  <Box
    sx={{
      backgroundColor: color,
      color: textColor,
      height: 100,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 1,
      p: 1,
      textAlign: "center",
    }}
  >
    <Typography variant="caption" fontWeight="bold">
      {label}
    </Typography>
    <Typography variant="caption">{color}</Typography>
  </Box>
);

const ColourPaletteGrid = () => {
  const theme = useTheme();
  const { primary, secondary, background, text } = theme.palette;

  return (
    <Box my={4}>
      <Typography variant="h2" mb={2} fontWeight="bold">
        Theme Colours
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={3}>
          <ColourBlock label="Primary" color={primary.main} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ColourBlock
            label="Secondary"
            color={secondary.main}
            textColor={background.default}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ColourBlock
            label="Background Default"
            color={background.default}
            textColor="#000"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ColourBlock
            label="Background Paper"
            color={background.paper}
            textColor="#000"
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ColourBlock
            label="Text Primary"
            color={text.primary}
            textColor={background.default}
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ColourBlock
            label="Text Secondary"
            color={text.secondary}
            textColor={background.default}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ColourPaletteGrid;
