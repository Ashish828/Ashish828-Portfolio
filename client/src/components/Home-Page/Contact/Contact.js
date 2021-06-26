import React from 'react';
import '../Contact/Contact.css';
import { postUser } from '../../Api/postUser';

class Contact extends React.Component {
    
    state = { name:'' , email: '' , message: '' , output:'' ,error:'',display:false}

    setTimer = ()=>{
        setTimeout(() => {
            this.setState({display: false})
        }, 4000);
        return
    }
    outputMessage = ()=>{
        return (
            <div className={`messageOutput-container${this.state.error}`} id='output'>
                <p className='messageOutput'>{this.state.output}</p>
                {this.setTimer()}
            </div>
        )
    }

    postData = async(e)=>{
        e.preventDefault()
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        try{
            const response = await postUser(data)
            if(response.status === 201){
                return (this.setState({message: '' , name: '' , email: '' , output: 'Thanks for reaching out!',error:'',display:true }))
            }
            else if(response.status === 400){
                return this.setState({output: 'Invalid Email , Try again...' , error:' true',display:true})
            }}
            catch{
                return this.setState({output: 'Kindly try again...' , error:' true',display:true})
            }
            
    }
    
    render(){
        return(
        <>    
            <div className='contact-section' id='contact-id'>
                <h2>Contact Me</h2>
                <div className="contact-container">
                    <p>Personal Details</p>
                    <form id='submit-form' onSubmit={(e) => this.postData(e)}>
                        <input type="text" value={this.state.name} onChange={ e => this.setState({name: e.target.value})} id="name" name="name" autoComplete="off" required placeholder="Name"/>
                        <input type="text" value={this.state.email} onChange={ e => this.setState({email: e.target.value})} id="email" name="email" autoComplete="off" required placeholder="Email"/>
                        <textarea name="message" value={this.state.message} onChange={ e => this.setState({message: e.target.value})} id="message" autoComplete="off" required placeholder="What do you want to talk about ?"></textarea>
                    </form>
                    <button className='submit-button' type="submit" form="submit-form">Contact</button>
                </div>
            </div>
            {this.state.display ? this.outputMessage() : null}
        </>
        )}
}
 
export default Contact;