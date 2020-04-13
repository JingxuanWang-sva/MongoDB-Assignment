import React, { Component } from 'react';


const Contact = props => (
    <div>
            <h1>{props.contact.firstName} {props.contact.lastName}</h1>
            <h2>{props.contact.company}</h2>
            <h2>{props.contact.email}</h2>
            <h2>{props.contact.message}</h2>
    </div>
)

export default class ContactList extends Component {
constructor(props){
    super(props);

    this.state = {
        contacts: []
    }
}

componentDidMount() {
    axios.post('http://localhost:3000/contacts/')
    .then(response => {
        this.setState({ contacts: response.data })
    .catch((error) => {
        console.log(error);
    })
}

contactList(){
    return this.state.contacts.map(currentcontact => {
        return <Contact contact={currentcontact} key={currentcontact.id}/>
    })
}

    render() {
        return(
        <div className="contact">
            <h2>Contacts Will Go Here</h2>
        </div>
    )
    }
}
