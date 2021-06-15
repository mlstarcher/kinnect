import React, { useState } from 'react'
import TimeStamp from 'time-stamp';
import "./createMessage.css"

export default function CreateMessageForm({ getMessages, socket, userName, setUserName }) {
  const [messageText, setMessageText] = useState('')
  const [userNameInput, setUserNameInput] = useState('')
  const [userNameEntered, setUserNameEntered] = useState(false)

  const submitNewMessage = () => {
    let time = (Number(TimeStamp('HH')) - 12) + ':' + TimeStamp('mm:ss');

    let newMessage = {
      userId: 0,
      userName: userName,
      messageId: 0,
      timeStamp: time,
      messageContent: messageText
    }
    socket.emit('message', newMessage)
    getMessages();
    setMessageText('');
  }
  if (userNameEntered) {
  return (
    <div className="form-styling">
    <form onSubmit={(e) => {
      e.preventDefault();
      submitNewMessage();
      e.target.reset();
    }}>
      <input
        type="text"
        placeholder="Enter Message"
        onChange={e => setMessageText(e.target.value)}
      >
      </input>
      <button>
        Send
      </button>
    </form>
    </div>
  )
} else {
  return (
      <div className="form-styling">
        <form onSubmit={(e) => {
        e.preventDefault()
        setUserName(userNameInput)
        setUserNameEntered(true)
        e.target.reset();
        }}>
          <input
            type="text"
            placeholder="Enter Username"
            onChange={e => setUserNameInput(e.target.value)}
          >
          </input>
          <button>
            Submit
          </button>
        </form>
      </div>
    )
  }
}