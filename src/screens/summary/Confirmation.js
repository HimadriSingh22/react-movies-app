import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Home from '../../screens/home/Home';
import BookShow from '../../screens/bookshow/BookShow';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class Confirmation extends Component{
    render(){
        return(<div>
            <div><Header/></div>
            <Card className="cardStyle">
                <CardContent>
                <Typography variant="headline" component="h2">Summary</Typography>
                <br/>
                <Typography variant="location">Location:{this.props.bookingSummary.location}</Typography>
                <br/>
                <Typography variant="language">Language:{this.props.bookingSummary.language}</Typography><br/>
                <Typography>Date:  {this.props.bookingSummary.showDate}</Typography><br/>
                <Typography>Time:  {this.props.bookingSummary.showTime}</Typography><br/>
                <Typography>No. Of Tickest: {this.props.bookingSummary.tickets}</Typography><br/>
                <Typography>Total Amount: {this.props.bookingSummary.unitPrice*this.props.bookingSummary.tickets}</Typography><br/>

                <Button variant="contained" color="primary" className="confirmation">Confirm Booking</Button>

                </CardContent>
            </Card>
         
            </div>)
    }
}
export default Confirmation;