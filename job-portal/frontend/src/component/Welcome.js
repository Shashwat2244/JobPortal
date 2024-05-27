import { Grid, Typography } from "@material-ui/core";
import AboutUs from "./AboutUs"; // Import the AboutUs component
import backgroundImage from "./background_image.jpeg"; // Import your background image
import ContactUs from "./ContactUs";

const Welcome = (props) => {
  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          padding: "30px",
          minHeight: "67vh",
          color: "white",
          fontWeight: 'bold',
          backgroundImage: `url(${backgroundImage})`, // Set background image
          backgroundSize: 'cover', // Cover the entire container
          backgroundPosition: 'center', // Center the background image
        }}
      >
        <Grid item>
          <Typography variant="h2">Welcome to Job Portal</Typography>
          <Typography variant="h6"><br></br>Login or Signup with your College ID to continue!</Typography>
        </Grid>
      </Grid>
      {/* Add the AboutUs component below */}
      <AboutUs />
      <ContactUs />

    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{
        padding: "30px",
        minHeight: "93vh",
        color: "white",
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the background image
      }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
