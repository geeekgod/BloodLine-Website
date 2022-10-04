import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React, { memo, Suspense } from "react";
import { beforeHomeObj } from "../Components/LandingPg/Data";
import { serviceItem } from "../Components/Services/Data";

const LandingPg = React.lazy(() =>
  import("../Components/LandingPg")
);
const NavbarBefore = React.lazy(() =>
  import("../Components/Navbar")
);

const Services = React.lazy(() =>
  import("../Components/Services")
);
const LandingCTA = React.lazy(() =>
  import("../Components/LandingCTA")
);
// const Footer = React.lazy(() => import("../Components/BeforeLogin/Footer"));

const Landing = ({ matches }) => {
  return (
    <>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              width: "100vw",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <NavbarBefore matches={matches} />
        <LandingPg {...beforeHomeObj} />
        <Services serviceItem={serviceItem}/>
        <LandingCTA />
        {/* <Footer /> */}
      </Suspense>
    </>
  );
};

export default memo(Landing);