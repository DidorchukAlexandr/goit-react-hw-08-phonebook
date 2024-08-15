import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Paper } from "@mui/material";
import Header from "./Header/Header";

export const Layout = () => {
    return (
        <Paper
      sx={{
        margin: '0 auto',
          maxWidth: 1600,
        backgroundColor: '#f6f8fb',
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Paper>
    )
}