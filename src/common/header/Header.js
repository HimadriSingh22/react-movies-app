import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './Header.css';
import logo from '../../assests/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import FormHelpertext from '@material-ui/core/FormHelperText';
import BookShow from '../../screens/bookshow/BookShow';
const customStyles = {
    content: {
        top:'50%',
        left:'50%',
        right:'auto',
        bottom:'auto',
        marginRight:'-50%',
        transform: 'translate(-50%,-50%)'
    }
}

const TabContainer= function(props){
    return(
        <Typography component="div" style={{padding:0 , textAlign:'center'}}>
         {props.children}
        </Typography>
    );
}

TabContainer.propTypes={children:PropTypes.node.isRequired}
class Header extends Component
{
    constructor(){
        super();
        this.state={
            modalIsOpen: false,
            value:0,
            usernameRequired:"dispNone",
            username:"",
            password1Required:"dispNone",
            password1Required:"",
            firstname:"",
            firstnameRequired:"dispNone",
            lastname:"",
            lastnameRequired:"dispNone",
            email:"",
            emailRequired:"dispNone",
            password2:"",
            password2Required:"dispNone",
            contact:"",
            contactRequired:"dispNone"
        };
    }
    openModalHandler=()=>{
      this.setState({modalIsOpen:true})
      this.setState({ 
        modalIsOpen: true,
        value: 0,
        usernameRequired: "dispNone",
        username: "",
        password1Required:"dispNone",
        password1:""
     })
     this.state.value===1&&this.setState({
        modalIsOpen:true,
        firstnameRequired:"dispNone",
        firstname:"",
        lastname:"",
        lastnameRequired:"dispNone",
        email:"",
        emailRequired:"dispNone",
        password2:"",
        password2Required:"dispNone",
        contact:"",
        contactRequired:"dispNone"
     })
    
 }
    closeModalHandler=()=>{
        this.setState({modalIsOpen:false})
        
        }
    tabChangeHandler=(event,value)=>{
        this.setState({value});
      
    }
    loginClickHandler=(e)=>{
       this.state.username===""?this.setState({usernameRequired:"dispBlock"}):
       this.setState({usernameRequired:"dispNone"});
       this.state.password1===""?this.setState({password1Required:"dispBlock"}):
       this.setState({password1Required:"dispNone"});

    }
    inputUsernameChangeHandler=(e)=>{
       this.setState({username:e.target.value})
    }
    inputPassword1ChangeHandler=(e)=>{
        this.setState({password1:e.target.value})
    }
    registerClickHandler=(e)=>{
        this.state.firstname===""?this.setState({firstnameRequired:"dispBlock"}):
        this.setState({firstnameRequired:"dispNone"});
        this.state.lastname===""?this.setState({lastnameRequired:"dispBlock"}):
        this.setState({lastnameRequired:"dispNone"});
        this.state.email===""?this.setState({emailRequired:"dispBlock"}):
        this.setState({emailRequired:"dispNone"});
        this.state.password2===""?this.setState({password2Required:"dispBlock"}):
        this.setState({password2Required:"dispNone"});
        this.state.contact===""?this.setState({contactRequired:"dispBlock"}):
        this.setState({contactRequired:"dispNone"});
    }
    inputFirstnameChangeHandler=(e)=>{
        this.setState({firstname:e.target.value})
    }
    inputLastnameChangeHandler=(e)=>{
        this.setState({lastname:e.target.value})
    }
    inputEmailChangeHandler=(e)=>{
        this.setState({email:e.target.value})
    }
    inputPassword2ChangeHandler=(e)=>{
        this.setState({password2:e.target.value})
    }
    inputContactChangeHandler=(e)=>{
        this.setState({contact:e.target.value})
    }
    
    bookShowHandler=()=>{
     ReactDOM.render(<BookShow/>,document.getElementById('root'));
    }
    render(){
        return(
            <div>
                <header className="app-header">
            <img src={logo} className="app-logo" alt="logo"/>
            <div className="login-btn">
                <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
            </div>
            {this.props.showBookShowButton==="true"? 
            <div className="bookShow-button">
                <Button variant="contained" type="primary"  onClick={this.bookShowHandler} >Book Show</Button>
            </div>:""}

            </header>
            <Modal 
            ariaHideApp={false} 
            isOpen={this.state.modalIsOpen} 
            contentLabel="Login" 
            onRequestClose={this.closeModalHandler}
            style={customStyles}
            >
            <Tabs className="tabs" value={this.state.value}onChange={this.tabChangeHandler}>
            <Tab label="Login"/>
            <Tab label="Register"/>
            </Tabs>
            {this.state.value===0&&
            <TabContainer>
             <FormControl required>
                <InputLabel htmlForm="username">Username</InputLabel>
                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler}/>
                <FormHelpertext className={this.state.usernameRequired}><span className="red">required</span></FormHelpertext>
            </FormControl><br/>
            <FormControl required>
            <InputLabel htmlForm="password1">Password</InputLabel>
                <Input id="password1" type="password" password1={this.state.password1} onChange={this.inputPassword1ChangeHandler}/>
                <FormHelpertext className={this.state.password1Required}><span className="red">required</span></FormHelpertext>
            </FormControl><br/><br/>
            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
            </TabContainer>}
            {this.state.value===1&&
            <TabContainer>
                <FormControl required>
                <InputLabel htmlForm="firstname">Firstname</InputLabel>
                <Input id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputFirstnameChangeHandler}/>
                <FormHelpertext className={this.state.firstnameRequired}><span className="red">required</span></FormHelpertext>
                </FormControl><br/><br/>
                <FormControl required>
                <InputLabel htmlForm="lastname">Lastname</InputLabel>
                <Input id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputLastnameChangeHandler}/>
                <FormHelpertext className={this.state.lastnameRequired}><span className="red">required</span></FormHelpertext>
                </FormControl><br/><br/>
                <FormControl required>
                <InputLabel htmlForm="email">Email</InputLabel>
                <Input id="email" type="email" email={this.state.email} onChange={this.inputEmailChangeHandler}/>
                <FormHelpertext className={this.state.emailRequired}><span className="red">required</span></FormHelpertext>
                </FormControl><br/><br/>
                <FormControl required>
                <InputLabel htmlForm="password2">Password</InputLabel>
                <Input id="password2" type="password" password2={this.state.password2} onChange={this.inputPassword2ChangeHandler}/>
                <FormHelpertext className={this.state.password2Required}><span className="red">required</span></FormHelpertext>
                </FormControl><br/><br/>
                <FormControl required>
                <InputLabel htmlForm="contact">Contact No.</InputLabel>
                <Input id="contact" type="number" contact={this.state.contact} onChange={this.inputContactChangeHandler}/>
                <FormHelpertext className={this.state.contactRequired}><span className="red">required</span></FormHelpertext>
                </FormControl><br/><br/>
                <Button variant="contained" color="primary" onClick={this.registerClickHandler}>Register</Button>
            </TabContainer>
                }
            </Modal>
            </div>
            
        )
    }
}
export default Header;