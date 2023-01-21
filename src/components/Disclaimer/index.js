import React, { useEffect } from "react";
import { Modal, Typography, Box, Button } from "@mui/material";
import { styles } from "./styles";

const Disclaimer = (props) => {
    const { active, setModalOpen } = props;

    const setLocalStorage = () => {
        localStorage.setItem('disclaimer', 'true');
        setModalOpen(false);
    };

    return (
        <Modal
            open={active}
            style={styles.Modal}
            sx={{
                height: {
                    xs: '550px',
                    sm: '450px',
                    md: '455px'
                }
            }}
        >
            <Box sx={{
                outline: 'none'
            }}>
                <Typography variant="h3" mb={2}>Legal Disclaimer</Typography>
                <Typography variant="text" sx={{
                    display: 'block',
                    mb: 2
                }}>
                    The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the content as such.

                    WYND provides all information “as is”. WYND makes no representations as to the accuracy, completeness, timeliness, suitability, or validity of any information on this website and will not be liable for any errors, omissions, or delays in this information or any losses, injuries, or damages arising from its display or use.  You understand that you are using any and all information available on this website at your own risk.

                    The appearance of third party advertisements and hyperlinks on this website does not constitute an endorsement, guarantee, warranty, or recommendation by WYND. You should make decisions based on your independent judgment and/or engage your own advisors before deciding to use any third party services.
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button onClick={setLocalStorage} href="https://dex.wynddao.com/" target="_blank" variant="contained" type="reset" style={styles.button}>
                        <Typography
                            variant="p"
                            style={styles.buttonText}
                        >
                            Launch DEX
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
};

export default Disclaimer;
