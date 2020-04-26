import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Amenities, Application } from '..';
import { Grid, Card, Divider} from '@material-ui/core';
import Applications from '../Applications';
import { Password } from 'views/Settings/components';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.primary,
  },
}));

function viewHandler(){
    const apply = false;
    if(apply){
        return (
            <div>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h3"
                >
                    Applications
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{fontWeight:400}}
                >
                    Manage your recieved Applications
                </Typography>
                <Divider />
                &nbsp;
                <Applications/>
            </div>
        );
    } else {
        return(
            <div>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h3"
                >
                    Apply Now
                </Typography>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="h5"
                    style={{fontWeight:400}}
                >
                    Complete your application to recieve $75
                </Typography>
                <Divider />
                &nbsp;
                <Application></Application>
                &nbsp;
                <Card style={{padding: 20}}>
                    <Typography variant='h5' style={{fontWeight:500}}>
                        Roomate:
                    </Typography>

                </Card>
            </div>
        );
    }
    
}

export default function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root} style={{padding:0}}>
      <AppBar position="static" style={{backgroundColor:"white", color:'#3F51B5'}}>
        <Grid direction="row" container alignItems='center' >
            <Grid item lg={2}/>
            <Grid item lg={8} style={{}}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Applications" {...a11yProps(0)} />
                <Tab label="Wishlist" {...a11yProps(1)} />
                <Tab label="Profile" {...a11yProps(2)} />
                <Tab label="Account" {...a11yProps(3)} />
            </Tabs>
            </Grid>
        </Grid>
       
      </AppBar>
      <TabPanel value={value} index={0} style={{backgroundColor:'#F5F6F8', padding:0}}>
        <Grid container style={{padding:0}}>
            <Grid item lg={2} style={{}}/>
            <Grid item lg={8} style={{}}>
                {viewHandler()}
            </Grid>
        </Grid>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container style={{padding:0}}>
            <Grid item lg={2} style={{}}/>
            <Grid item lg={8} style={{}}>
                <Password/>
            </Grid>
        </Grid>
        
      </TabPanel>
    </div>
  );
}