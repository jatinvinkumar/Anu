import React, {Component} from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Hidden, Container, IconButton, Card, CardActionArea, CardContent, CardActions,
Typography, Button, CardMedia, Chip} from '@material-ui/core';
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
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropertyHeader from '../Property/components/PropertyHeader/PropertyHeader.js'

const MODAL_OPEN_CLASS = "body--modal-open";
makeStyles(theme => (
  {
  root: {
    padding: theme.spacing(0), width: 800, 
  }
}));

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const isDesktop = 0;

class PropertySearch extends Component {

  constructor (props) {
    super(props)
    this.state = {
      searchCompleted: false
    }
  }

  componentDidMount() {
    document.body.classList.add(MODAL_OPEN_CLASS);
  }

  componentWillUnmount() {
    document.body.classList.remove(MODAL_OPEN_CLASS);
  }

  searchClicked = () => {
    console.log("Searched")
    this.setState({
      searchCompleted : true
    })
  }
  
  render(){
    const {apartments} = this.props;
    const storeList = [
      { name: 'Walmart', factor: 'LOW',imageURL: 'https://specials-images.forbesimg.com/imageserve/82a018350ea24de796e60ae9d6a9c7da/960x0.jpg?fit=scale' },
      { name: 'Target', factor: 'MEDIUM',imageURL: 'https://assets1.chainstoreage.com/styles/content_sm/s3/2020-03/target_ext2_2.jpg?itok=td3GBOJF' },
      { name: 'Sprouts', factor: 'HIGH',imageURL: 'https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Sprouts_produce_area-promo_0.png?itok=zrHcDFbQ' },
    ];
    console.log('Redux Test: ', apartments)
    if(isDesktop == 0){
      return (
        <div>
            <Hidden smDown>
              <div style={{maxWidth:800}}>
                <div style={{display:'flex', overflow:'hidden', overflowX: 'hidden'}}>
                  <div className={makeStyles.root} style={{maxHeight: this.props.windowHeight - 75, overflow: 'auto', width:this.props.windowWidth*(3/8)}}>
                    <Filter style={{padding:0}} searchClicked={this.searchClicked}></Filter>
                    <Container style={{padding:20, width:'100%', flexDirection: 'column'}}>
                      {/* <PropertyList apartments={apartments}></PropertyList> */}
                      {
                        (this.state.searchCompleted) ?  
                        storeList.map((item, index) => {
                          return (
                            <Card style={{marginBottom: 20, minHeight: 400}}>
                              <CardActionArea>
                                <CardContent>
                                  <Typography gutterBottom variant="h6" component="h2" style={{color: 'blue'}}>
                                    GROCERY
                                  </Typography>
                                  <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                  </Typography>
                                  <Typography gutterBottom variant="h5" component="h2" style={{fontSize: 12, color: 'grey'}}>
                                    Your items
                                  </Typography>
                                  <PropertyHeader style={{marginBottom: 20}}/>
                                  <Chip color="primary" label="MyFi Score: 87" style={{marginBottom: 10, marginLeft: -5}}/>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Estimated Total: $34.37
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                <Button size="small" color="primary" startIcon={<ShareIcon />}>
                                  Share
                                </Button>
                                <Button size="small" color="primary" startIcon={<ShoppingCartIcon />}>
                                  Shop
                                </Button>
                              </CardActions>
                            </Card>
                          );
                        }) : <div></div>
                      }
                    </Container>
                  </div>
                  <div>
                    <MapContainer height={this.props.windowHeight-60} width={this.props.windowWidth*(5/8)}></MapContainer>
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
