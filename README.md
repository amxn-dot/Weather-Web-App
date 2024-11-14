# Weather Glass ⛅

A beautiful, modern weather application with a stunning glass-morphism design. Get real-time weather information for any city worldwide with a sleek, responsive interface.


## ✨ Features

- 🌡️ Real-time weather data
- 🎨 Beautiful glass-morphism design
- 🌍 Global city search
- 📱 Fully responsive layout
- 🌪️ Detailed weather metrics:
  - Temperature
  - Feels like temperature
  - Humidity levels
  - Wind speed
- 🎭 Dynamic weather icons
- ⚡ Fast and lightweight
- 🎯 Type-safe with TypeScript

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔑 API Key Setup

1. Sign up for a free API key at [OpenWeatherMap](https://openweathermap.org/api)
2. Copy your API key
3. Replace `YOUR_API_KEY` in `src/App.tsx` with your actual API key

## 🛠️ Built With

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- Axios

## 📱 Responsive Design

The application is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile devices

## 🎨 Design Features

- Glass-morphism effects
- Smooth animations
- Dynamic backgrounds
- Interactive hover states
- Clean, modern UI
- Accessible color scheme

## 🔄 API Integration

Weather data is fetched from the OpenWeatherMap API, providing:
- Current temperature
- Weather conditions
- Humidity levels
- Wind speed
- "Feels like" temperature
- Location data

## 📦 Project Structure

```
src/
├── components/
│   ├── WeatherCard.tsx    # Main weather display component
│   └── WeatherIcon.tsx    # Dynamic weather icons component
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and animations
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- Background image from [Unsplash](https://unsplash.com/)