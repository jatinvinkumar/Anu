import React, {Component} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden, Container, IconButton} from '@material-ui/core';
import windowSize from 'react-window-size';
import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
  Filter,
  PropertyList,
  MapContainer
} from './components';
import './PropertySearch.css'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import SearchIcon from '@material-ui/icons/Search';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';

const MODAL_OPEN_CLASS = "body--modal-open";
makeStyles(theme => (
  {
  root: {
    padding: theme.spacing(0), width: 800, 
  }
}));
const isDesktop = 0;

class PropertySearch extends Component {

  componentDidMount() {
    document.body.classList.add(MODAL_OPEN_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(MODAL_OPEN_CLASS);
  }

  render(){
    const {apartments} = this.props;
    console.log('Redux Test: ', apartments)
    if(isDesktop == 0){
      return (
        <div>
            <Hidden smDown>
              <div style={{maxWidth:800}}>
                <div style={{display:'flex', overflow:'hidden', overflowX: 'hidden'}}>
                  <div className={makeStyles.root} style={{maxHeight: this.props.windowHeight - 75, overflow: 'auto', width:this.props.windowWidth/4}}>
                    <Filter style={{padding:0}}></Filter>
                    <Container style={{padding:20, width:'100%'}}>
                      <PropertyList apartments={apartments}></PropertyList>
                    </Container>
                  </div>
                  <div>
                    <MapContainer height={this.props.windowHeight-60} width={this.props.windowWidth*(3/4)}></MapContainer>
                  </div>
                </div>
                </div>
            </Hidden>
            <Hidden mdUp>
            
            <div style={{maxHeight: this.props.windowHeight - 110, overflowY:'scroll', overflowX: 'hidden'}}>
              <PropertyList style={{marginRight:20, marginLeft:20}} apartments={apartments}></PropertyList>
            </div>
           
              <div style={{height:60, width:'100%', backgroundColor:'#3F51B5', position:'fixed', bottom:0, zIndex:100}}>
                <Grid container spacing={'even'}>
                    <Grid item sm={4} xs={4}>
                      <IconButton>
                        <SearchIcon fontSize='large' style={{color:'white'}}/>
                      </IconButton>
                    </Grid>
                    <Grid item sm={4} xs={4}>
                      <IconButton>
                        <ListIcon fontSize='large' style={{color:'white'}}/>
                      </IconButton>
                    </Grid>
                    <Grid item sm={4} xs={4} style={{justifyItem:'center'}}>
                      <IconButton>
                        <MapIcon fontSize='large' style={{color:'white'}}/>
                      </IconButton>
                    </Grid>
                </Grid>
              </div>
            </Hidden>
        </div>
       
       
        
          
        );
    } else {
        return(
            <div></div>
        );
    }
  };
  }
  
  const mapStateToProps = (state, ownProps) => {
    console.log('stateOftheUnion: ', state)
    return {
      apartments: state.firestore.ordered.Apartments
    }
  }

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'Apartments'}
  ])
) (windowSize(PropertySearch));
