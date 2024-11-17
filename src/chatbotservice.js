import axios from 'axios';

// Replace this with your actual Gemini API key
const GEMINI_API_KEY = 'AIzaSyDSheicUf8OLU3L3-wTMPj5EvSgVOyeidE'; // API key for the Gemini service
const GEMINI_API_URL = 'generativelanguage.googleapis.com'; // The API URL for Gemini service

// Create a function to send messages to the Gemini API
export const ChatbotService = {
  sendMessage: async (message) => {
    try {
      // Prepare the request payload for Gemini API
      const payload = {
        prompt: message,  // User's input message
        max_tokens: 150,   // Max tokens in the response
        temperature: 0.7,  // Temperature for randomness in responses
        apiKey: GEMINI_API_KEY // Your Gemini API key
      };

      // Send the message to the Gemini API
      const response = await axios.post(
        `${GEMINI_API_URL}chat`, // API endpoint for chat (you may need to adjust based on API docs)
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      // Return the response from Gemini
      return response.data.text; // Assuming the response has a text field with the bot's message
    } catch (error) {
      console.error('Error sending message to Gemini API:', error);
      return 'Sorry, I encountered an error while processing your request. Please try again.';
    }
  }
};
