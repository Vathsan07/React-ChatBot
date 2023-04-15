import React, { useState } from 'react'
import logo from './and.png';
import { Button } from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import { analyze } from '../utils';
//import logoimg from '/src/images/logo.jpg'

export default function Chatbot() {

    const [messages, setMessages] = useState([
        {
            message: 'Hello, What is your name?'
        }
    ])

    const onSend = () => {
        let list = [...messages , {message: text, user: true}];
        if(list.length>2){
            const reply = analyze(text)
            list = [...list, {message: reply}]

        }
        else{
            list= [
                ...list,
                {
                    message: `Hi, ${text}`,
                },
                {
                    message: "How can i help you?",
                },
            ];
        }
        setMessages(list);
    }
    const[text, setText] = useState('');
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center" >

                <img src={logo}
                    alt="logoo"
                    height={200}
                    width={200}
                />
                <h2 className="text-primary">CHATBOT</h2>

        </div>
            <div className="chat-message">

                {
                    messages.length > 0 && messages.map((data) => <ChatMessage {...data} />)
                }

                <div className="d-flex mt-2">
                    <input type="text" className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
                    <Button type='primary' className="ms-3" onClick={onSend}>
                        Send
                    </Button>
                </div>

                <div id='copyright' className="mt-3">
                    CopyRights Reserved for Vathsan's Code
                </div>

            </div>
        </div>
    )
}