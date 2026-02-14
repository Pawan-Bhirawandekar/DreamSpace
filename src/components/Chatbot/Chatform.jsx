
import React, { useState } from 'react'

const Chatform = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const [inputValue, setInputValue] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputValue.trim();
        if(!userMessage) return;
        setInputValue("");

        //update chat history with the user's message
        setChatHistory(history => [...history, {role:"user", text:userMessage}]);
    
        //add Thinking... message
        setTimeout(() => {
            setChatHistory((history) => [...history, {role:"model", text:"Thinking..."}]);
            generateBotResponse([...chatHistory, {role:"user", text:`Using the details provided above, please address this query: ${userMessage}`}]);
        },500);

    }

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Message...' className="message-inputchat" required value={inputValue} onChange={(e) => {
          setInputValue(e.target.value);
        }} />
        {inputValue && <button className="material-symbols-rounded">arrow_upward</button>}
    </form>
  )
}

export default Chatform;