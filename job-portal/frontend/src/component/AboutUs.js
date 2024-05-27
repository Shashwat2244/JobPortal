import { Grid, Link } from "@material-ui/core";
import giphy from "./about-us.gif"; // Import your background image

const AboutUs = (props) => {
    return (
        <Grid
            container
            item
            direction="column"
            alignItems="center"
            justify="center"
            style={{
                padding: "30px",
                minHeight: "57vh",
                color: "black", // Set text content color
                fontWeight: "bold",
                background: "white",
                border: "30px solid white",
                boxSizing: "border-box",
            }}
        >
            <Grid item>
                {/* ... */}
            </Grid>
            <Grid item>
                {/* Wrap the image in a Link component */}
                <Link href="https://jaipur.manipal.edu" target="_blank">
                    <img
                        src={giphy}
                        alt="About Us"
                        style={{ width: "100%", maxWidth: "1800px", cursor: "pointer" }} // Responsive image
                    />
                </Link>
            </Grid>
        </Grid>
    );
};

export default AboutUs;

