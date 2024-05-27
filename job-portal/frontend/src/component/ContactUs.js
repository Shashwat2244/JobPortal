import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import { Typography, Link, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contactContainer: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "white", // Set background color to white
        boxShadow: theme.shadows[2],
        textAlign: "center",
        overflowX: "auto",
        width: "100%",
        maxWidth: 1800,
        margin: "0 auto",
        animation: `$fadeIn 1s ${theme.transitions.easing.easeInOut}`,
    },
    contactItem: {
        flex: "1 0 auto",
        margin: theme.spacing(0, 2),
        maxWidth: 300,
    },
    contactIcon: {
        fontSize: 40,
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    contactLink: {
        textDecoration: "none",
        color: theme.palette.text.primary,
    },
    "@keyframes fadeIn": {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },
}));

const ContactUs = () => {
    const classes = useStyles();

    const contactMethods = [
        { icon: <PhoneIcon />, text: "Call Us", link: "tel:+919050482008" },
        { icon: <WhatsAppIcon />, text: "WhatsApp", link: "https://wa.me/+919050482008" },
        { icon: <EmailIcon />, text: "Email Us", link: "mailto:aayusharora2510@gmail.com" },
    ];

    return (
        <Paper className={classes.contactContainer} elevation={3}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Grid container spacing={3} justify="center">
                {contactMethods.map((method, index) => (
                    <Grid item key={index} className={classes.contactItem}>
                        <Link href={method.link} className={classes.contactLink}>
                            {method.icon}
                            <Typography variant="subtitle1">{method.text}</Typography>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    );
};

export default ContactUs;
