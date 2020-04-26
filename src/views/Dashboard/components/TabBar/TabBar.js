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
import PropertyList from '../PropertyList';

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

function viewHandler(id){
    var apply = true;
    if(id){
      apply = false;
    }
    if(apply){
        return (
            <div>
                <div style={{maxWidth:600, margin:"auto"}}>
                  <Typography style={{fontWeight:500, color:'#1A64F2', padding:10, marginTop: 20, marginBottom:0, paddingBottom:0, textAlign:'center', maxWidth: 600}} variant={'h4'}><Box>Stronger As One</Box></Typography>
                  <Typography style={{fontSize:34, fontWeight:900, padding:10, marginBottom:0, paddingBottom:0, textAlign:'center'}} variant={'h1'}>Bring the Community Together.</Typography>
                  <Typography style={{fontWeight:1, color:'#6A7280', padding:10, marginBottom:0, paddingBottom:10, textAlign:'center', maxWidth: 600}} variant={'h4'}><Box>We want to reduce people’s exposure to the COVID-19 by letting everyone know whether the items they’re looking for are available in their nearest supermarket or not.</Box></Typography>
                </div>
                <Divider />
                &nbsp;
                <PropertyList></PropertyList>
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
                    Complete your applicationERER to recieve $75
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

const TabBar = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  //console.log("TabBarProps: ", props)
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
                <Tab label="Projects" {...a11yProps(0)} />
                <Tab label="Add New" {...a11yProps(1)} />
            </Tabs>
            </Grid>
        </Grid>
       
      </AppBar>
      <TabPanel value={value} index={0} style={{backgroundColor:'#F5F6F8', padding:0}}>
        <Grid container style={{padding:0}}>
            <Grid item lg={2} style={{}}/>
            <Grid item lg={8} style={{}}>
                {viewHandler(props.id)}
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

export default TabBar;