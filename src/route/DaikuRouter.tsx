import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "../ui/main/Main";
import {UnAuth} from "../ui/unauth/UnAuth";
import {createTheme, ThemeProvider} from "@material-ui/core";
import {PrivacyPolicy} from "../ui/unauth/PrivacyPolicy";
import {TermsOfUse} from "../ui/unauth/TermsOfUse";

const theme = createTheme()

export const DaikuRouter = () => {

    theme.typography.h3 = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        '@media(min-width:600px)': {
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
            fontWeight: 'bold'
        }
    }

    theme.typography.h1 = {
        fontSize: '2.0rem',
        '@media(min-width:600px)': {
            fontSize: '1.2rem',
            fontWeight: 'bold'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.2rem',
            fontWeight: 'bold'
        }
    }


    theme.typography.body1 = {
        fontSize: '1.0rem',
        '@media(min-width:600px)': {
            fontSize: '1.0rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Main />} />
                    <Route path = "/unauth" element={<UnAuth />} />
                    <Route path = "/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path = "/terms-of-use" element={<TermsOfUse />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}