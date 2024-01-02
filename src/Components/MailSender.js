import { Component } from "react";
import emailjs from 'emailjs-com';
import "./MailSender.css";

class MailSender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = this.state;

        emailjs
            .send(
                "your_service_id", // Replace with your service ID
                "your_template_id", // Replace with your template ID
                {
                    to: "taha.anwar2@yahoo.com", // Replace with the recipient's email address
                    from_name: name,
                    from_email: email,
                    message: message,
                },
                "your_user_id" // Replace with your user ID
            )
            .then((response) => {
                console.log("Email has been sent!", response);
                this.setState({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log("An error occurred while sending email:", error);
            });
    };

    render() {
        const { name, email, message } = this.state;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h2>Mail Sender App</h2>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Name"
                        required
                    />{" "}
                    <br />
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Email"
                        required
                    />{" "}
                    <br />
                    <textarea
                        type="text"
                        name="message"
                        value={message}
                        onChange={this.handleChange}
                        placeholder="Message"
                        required
                    />{" "}
                    <br />
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    }
}

export default MailSender;
