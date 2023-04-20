import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import { FlexBox } from "../../styled/FlexBox";

const Header = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <FlexBox
          justifyContent="space-between"
          sx={{
            padding: "2rem 0",
          }}
        >
          <img
            src="https://i.ibb.co/F7R1dYL/logo2.png"
            alt="logo"
            style={{ width: "160px" }}
          />

          <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
            <IconButton>
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
            </IconButton>

            <Button>Login</Button>
            <Button variant="contained">Sign Up</Button>
          </Stack>
        </FlexBox>
      </Container>
    </div>
  );
};

export default Header;
