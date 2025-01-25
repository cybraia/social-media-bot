import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Social Media writer",
    initialMessages: [
        createChatBotMessage(
            "Hello, I am a social media writer. I will help with SEO and write great content. How can I help you today?"
        )
    ]
};

export default config;
