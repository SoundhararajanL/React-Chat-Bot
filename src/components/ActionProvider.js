import React from 'react';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    
    const handleMessage = (message) => {
      let botMessage;
  
      if (message.includes('hello')) {
        botMessage = createChatBotMessage('Hello. Nice to meet you.');
      } else if (message.includes('dog')) {
        botMessage = createChatBotMessage("Here's a result for you!", {
          widget: 'dogPicture',
        });
      } else {
        botMessage = createChatBotMessage("I'm not sure how to respond to that.");
      }
  
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };
  
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleMessage,
            },
          });
        })}
      </div>
    );
  };
  
  export default ActionProvider;