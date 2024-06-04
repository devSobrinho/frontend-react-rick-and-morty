import { Box } from "@mui/material";

export type ContainerCharacterCardsProps = {
  children: React.ReactNode;
};

export const ContainerCharacterCards = ({
  children,
}: ContainerCharacterCardsProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        padding: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};
