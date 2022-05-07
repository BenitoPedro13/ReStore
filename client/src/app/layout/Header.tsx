import { AppBar, Toolbar, Typography } from "@mui/material";


const Header = (props: any) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Re-store
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header;