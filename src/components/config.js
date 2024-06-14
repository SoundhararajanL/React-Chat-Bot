import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from './DogPicture';

const botName = 'Chatbot';

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
    
    widgets: [
      {
        widgetName: 'dogPicture',
        widgetFunc: (props) => <DogPicture {...props} />,
      },
    ],
  };

export default config;