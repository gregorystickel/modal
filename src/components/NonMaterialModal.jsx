import React from "react";
import { CardActions, Card } from '@mui/material/';
import styles from './NonMaterialModal.module.css'

const NonMaterialModal = ({ open2, setOpen2, modalCloseHandler }) => {
    return (
        <div className={styles.darkBG}>
        <Card sx={{ width: 275 }} variant="outlined" className={styles.modal}>Test
        <CardActions >
        <button onClick={modalCloseHandler}>Close Modal 2</button>
        </CardActions>
        </Card>
        </div> 
    )
};

export default NonMaterialModal;


