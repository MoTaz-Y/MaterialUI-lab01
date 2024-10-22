import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ComputerIcon from "@mui/icons-material/Computer";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ButtonAppBar() {
  const [anchorElMentorship, setAnchorElMentorship] = useState(null);
  const [anchorElHelp, setAnchorElHelp] = useState(null);
  const [anchorElFreelancing, setAnchorElFreelancing] = useState(null);

  const handleClick = (event, setter) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter) => {
    setter(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <ComputerIcon
            sx={{ marginLeft: 2, marginRight: 1, color: "#007BFF" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#007BFF", fontWeight: "bold" }}
          >
            MoCoder
          </Typography>
          {/* Left Links */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={(event) => handleClick(event, setAnchorElMentorship)}
              sx={{ color: "#007BFF", marginLeft: 1, textTransform: "none" }}
            >
              Mentorship <ExpandMoreIcon />
            </Button>
            <Menu
              anchorEl={anchorElMentorship}
              open={Boolean(anchorElMentorship)}
              onClose={() => handleClose(setAnchorElMentorship)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElMentorship)}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElMentorship)}>
                Option 2
              </MenuItem>
            </Menu>

            <Button
              onClick={(event) => handleClick(event, setAnchorElHelp)}
              sx={{ color: "#007BFF", marginLeft: 1, textTransform: "none" }}
            >
              Expert Help <ExpandMoreIcon />
            </Button>
            <Menu
              anchorEl={anchorElHelp}
              open={Boolean(anchorElHelp)}
              onClose={() => handleClose(setAnchorElHelp)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElHelp)}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElHelp)}>
                Option 2
              </MenuItem>
            </Menu>

            <Button
              onClick={(event) => handleClick(event, setAnchorElFreelancing)}
              sx={{ color: "#007BFF", marginLeft: 1, textTransform: "none" }}
            >
              Freelancing <ExpandMoreIcon />
            </Button>
            <Menu
              anchorEl={anchorElFreelancing}
              open={Boolean(anchorElFreelancing)}
              onClose={() => handleClose(setAnchorElFreelancing)}
            >
              <MenuItem onClick={() => handleClose(setAnchorElFreelancing)}>
                Option 1
              </MenuItem>
              <MenuItem onClick={() => handleClose(setAnchorElFreelancing)}>
                Option 2
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            sx={{
              color: "#007BFF",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e8f0fe" },
            }}
          >
            Become a Mentor
          </Button>
          <Button
            sx={{
              color: "#007BFF",
              textTransform: "none",
              "&:hover": { backgroundColor: "#e8f0fe" },
            }}
          >
            Log In
          </Button>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#007BFF",
              textTransform: "none",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
