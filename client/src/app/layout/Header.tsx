import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface IHeader {
  darkMode: boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ darkMode, setDarkMode }: IHeader) => {

  const changeTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">
          Re-store
        </Typography>
        <Switch checked={darkMode} onClick={changeTheme} />
      </Toolbar>
    </AppBar>
  )
}

export default Header;