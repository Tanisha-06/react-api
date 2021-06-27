  
import React from 'react';

import classes from './PersonalData.module.css';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';
import WcIcon from '@material-ui/icons/Wc';
import PersonIcon from '@material-ui/icons/Person';
const PersonalData = (props) => {
  return (
    <div className={classes.card}>
        <div style={{textAlign:'center'}}> <img src={props.data.picture.thumbnail} className={classes.photo} alt=""/></div>
        <div>
         <h3 className={classes.item} style={{textAlign:'center',fontFamily:'inherit',justifyContent:'center'}}><PersonIcon/>{props.data.title} {props.data.fname} {props.data.lname}</h3>
         <h5 className={classes.item}><WcIcon/>{props.data.gender}</h5>
         <h5 className={classes.item}><PublicIcon/>{props.data.country}</h5>
         <h5 className={classes.item}><EmailIcon/>{props.data.email}</h5>
         <h5 className={classes.item}><PhoneIcon/>{props.data.phone}</h5>
        </div>
    </div>
  );
};

export default PersonalData;