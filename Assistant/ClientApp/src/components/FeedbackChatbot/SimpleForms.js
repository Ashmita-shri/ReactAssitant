import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";
import logo from "./logo.png"
// import {Context as OpenAppContext} from '../../Context/OpenAppContext';

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            age: '',
            Reaction: '',
            Feedback: ''
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, email, projectDeadline, budgetInput } = steps;

        this.setState({ name, email, projectDeadline, budgetInput });
    }

    render() {
        const { name, email, projectDeadline, budgetInput } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{email.value}</td>
                        </tr>
                        <tr>
                            <td>Reaction</td>
                            <td>{projectDeadline.value}</td>
                        </tr>
                        <tr>
                            <td>Feedback</td>
                            <td>{budgetInput.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
};

Review.defaultProps = {
    steps: undefined,
};

class SimpleForm extends Component {
    render() {
        const config = {
            width: "300px",
            height: "400px",
            floating: true
        };
        const theme = {
            background: "white",
            fontFamily: "Arial, Helvetica, sans-serif",
            headerBgColor: "#00B2B2",
            headerFontColor: "#fff",
            headerFontSize: "25px",
            botBubbleColor: "#00B2B2",
            botFontColor: "#fff",
            userBubbleColor: "#fff",
            userFontColor: "#4c4c4c"
        };
        const steps = [
            {
                id: "Greet",
                message: "Hello, what brings you to Nimbus? 👋",
                trigger: "reasons"
            },
            {
                id: "reasons",
                options: [
                    {
                        value: "Feedback",
                        label: "Having some feedback for us.",
                        trigger: "name-ques"
                    },
                    {
                        value: "help",
                        label: "I would like some help.",
                        trigger: "help-ques"
                    }
                ]
            },
            {
                id: "help-ques",
                message: "Thanks for reaching out. If you have any questions, please send us an email at support@support.com.",
            },
            {
                id: 'name-ques',
                message: "Nice 😀, To get started, what is your name?",
                trigger: 'name',
            },
            {
                id: 'name',
                user: true,
                validator: (value) => {
                    if (/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/.test(value)) {
                        return true;
                    }
                    else {
                        return 'Please input alphabet characters only.';
                    }
                },
                trigger: 'q-email',
            },
            {
                id: 'q-email',
                message: 'Hi {previousValue}! What is your email? 📧',
                trigger: 'email',
            },
            {
                id: 'email',
                user: true,
                validator: (value) => {
                    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                        return true;
                    }
                    else {
                        return 'Please enter a valid email.';
                    }
                },
                trigger: 'q-project'
            },
            {
                id: "q-project",
                message: "How much you like the project? 📅",
                trigger: 'projectDeadline'
            },
            {
                id: 'projectDeadline',
                options: [
                    {
                        value: "Negative",
                        label: "Negative",
                        trigger: "budget-question"
                    },
                    {
                        value: "Ok",
                        label: "Average",
                        trigger: "budget-question"
                    },
                    {
                        value: "Positive",
                        label: "Positive",
                        trigger: "budget-question"
                    }
                ],

            },
            {
                id: 'budget-question',
                message: 'Awesome, would you like to say something?',
                trigger: 'budgetInput',
            },
            {
                id: 'budgetInput',
                user: true,
                trigger: 'pre-review',
            },
            {
                id: 'pre-review',
                message: 'Great! Check out your summary',
                trigger: 'review',
            },
            {
                id: 'review',
                component: <Review
                />,
                asMessage: true,
                trigger: 'update',
            },
            {
                id: 'update',
                message: 'Would you like to update some field?',
                trigger: 'update-question',
            },
            {
                id: 'update-question',
                options: [
                    { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                    { value: 'no', label: 'No', trigger: 'end-message' },
                ],
            },
            {
                id: 'update-yes',
                message: 'What field would you like to update?',
                trigger: 'update-fields',
            },
            {
                id: 'update-fields',
                options: [
                    { value: 'name', label: 'Name', trigger: 'update-name' },
                    { value: 'email', label: 'Email', trigger: 'update-email' },
                    { value: 'projectDeadline', label: '    Reaction', trigger: 'update-projectDeadline' },
                    { value: 'budget', label: 'Feedback', trigger: 'update-budget' },
                ],
            },
            {
                id: 'update-name',
                update: 'name',
                trigger: 'pre-review',
            },
            {
                id: 'update-email',
                update: 'email',
                trigger: 'pre-review',
            },
            {
                id: 'update-projectDeadline',
                update: 'projectDeadline',
                trigger: 'pre-review',
            },
            {
                id: 'update-budget',
                update: 'budgetInput',
                trigger: 'pre-review',
            },
            {
                id: 'end-message',
                message: 'Thanks for taking the time to speak with us.!',
                end: true,
            },
        ]
        return (
            <ThemeProvider theme={theme}>
                <ChatBot steps={steps} {...config} botAvatar={logo}/>
            </ThemeProvider>

        );
    }
}
export default SimpleForm