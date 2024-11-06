// import './App.css'

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import { useState } from 'react';
import React from 'react';

  const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
  }
const ChatWithAi = () => {
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm ChatGPT! Ask me anything!",
            sentTime: "just now",
            sender: "ChatGPT",
            direction: "incoming",
            position: "single"  // Initial message is a single message
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
  
    // This is the on-send message function
    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
          };
      
          const newMessages = [...messages, newMessage];
          
          setMessages(newMessages);

          setIsTyping(true);
          await processMessageToChatGPT(newMessages);
    }
  
  
    
    async function processMessageToChatGPT(chatMessages) {
        
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
              role = "assistant";
            } else {
              role = "user";
            }
            return { role: role, content: messageObject.message}
          });  
          
          
          const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
              systemMessage,  // The system message DEFINES the logic of our chatGPT
              ...apiMessages // The messages from our chat with ChatGPT
            ]
          }

          // await fetch("https://api.openai.com/v1/chat/completions", 
          //   {
          //     method: "POST",
          //     headers: {
          //       "Authorization": "Bearer " + API_KEY,
          //       "Content-Type": "application/json"
          //     },
          //     body: JSON.stringify(apiRequestBody)
          //   }).then((data) => {
          //     return data.json();
          //   }).then((data) => {
          //     console.log(data);
          //     setMessages([...chatMessages, {
          //       message: data.choices[0].message.content,
          //       sender: "ChatGPT"
          //     }]);
          //     setIsTyping(false);
          //   });
    }


    return (
        <div className="App">
            <div style={{ position: "relative", height: "600px", width: "700px" }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList>
                            {messages.map((msg, i) => {
                             return    <Message 
                                    key={i} 
                                    model={{
                                        message: msg.message,
                                        sentTime: msg.sentTime,
                                        sender: msg.sender,
                                        direction: msg.direction,
                                        position: msg.position // Use the correct position prop here
                                    }} 
                                />
                            }
                            )} 
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />        
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    );
}

export default ChatWithAi;
