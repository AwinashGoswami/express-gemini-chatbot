
# 💬 Gemini Flash AI Chatbot with Express.js

A lightweight backend chatbot built using **Node.js**, **Express.js**, and **Google's Gemini Flash model** via the **Vertex AI API**. This project demonstrates how to connect with a real LLM API, send user prompts, and return intelligent responses in real time.

## ✨ Demo

> Live demo: Coming soon  
> Sample cURL:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me a joke!"}'
```

## 📌 Features

- Connects to **Gemini Flash** via Google AI Studio or Vertex AI
- Simple Express.js backend for chatbot interaction
- `.env` support for secure API key handling
- Prepares for future frontend integration (HTML/React)
- Great DevRel demo: shows API use, error handling, and developer feedback loop

## 📁 Project Structure

```
gemini-flash-chatbot/
├── .env
├── package.json
├── index.js
├── README.md
```

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/AwinashGoswami/express-gemini-chatbot.git
cd gemini-flash-chatbot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/express-gemini-chatbot
GEMINI_URL=https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent
GEMINI_API_KEY=your-google-api-key-here
```

> Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

## ⚙️ Usage

### Run the Server

```bash
node index.js
```

Server runs on: `http://localhost:3000`

### Test the API

Send a `POST` request to `/api/chat` with a JSON body:

```json
{
  "message": "How does a rocket work?"
}
```

### Sample Response

```json
{
  "response": "A rocket works by expelling exhaust gases at high speed..."
}
```

## 📦 Dependencies

| Package    | Purpose                        |
|------------|--------------------------------|
| express    | Node.js web framework          |
| axios      | For making HTTP API calls      |
| dotenv     | Secure environment variables   |
| cors       | Enable cross-origin requests   |
| mongoose   | To maintain conversation in DB |
| uuid       | Generate random sessionID      |


## 🧠 How It Works (DevRel Insight)

This app acts as a bridge between a user interface and the Gemini Flash model. It:
- Receives user input (`POST /api/chat`)
- Sends it to the Gemini Flash model
- Handles errors and malformed input gracefully
- Returns a clean, usable response

As a DevRel project, this showcases:
- SDK-less direct API usage
- Testing model prompt responses
- A base for blog/tutorial/video content

## 🧪 Example cURL Command

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Explain recursion like I am five"}'
```

## 🛠️ Future Improvements

- Add frontend (HTML/Bootstrap or React)
- Add streaming support (Gemini API supports streaming responses)
- Improve error logging and analytics
- Add retry + fallback logic

## 📚 Blog / Tutorial

> A full walkthrough blog is in progress. Will include:
- DevRel-style explanations
- Pain points I solved
- Use cases for Gemini Flash in real apps

## 🤝 Contributing

This is a solo DevRel demo, but feel free to fork and experiment. PRs are welcome for:
- Improving chatbot capabilities
- Adding frontends
- Adapting to other AI APIs (OpenAI, Claude, etc.)

## 🧑‍💻 Author

**Awinash**  
DevRel | Backend Educator | Tech Writer  
[LinkedIn](https://www.linkedin.com/in/awinashgoswami/) • [Twitter](https://x.com/awinash_goswami)

## 📝 License

MIT License — free to use, fork, and learn.

## 💡 Inspiration

> This project was built to explore real-world DevRel tasks: testing AI APIs, identifying usability issues, and sharing knowledge through developer-first tooling.
