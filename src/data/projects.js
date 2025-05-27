export const projects = [
  {
    title: "Stock Pulse",
    description:
      "A React + Django app that shows key stock metrics, news, and real-time data. Integrates with Kite to show portfolio holdings and charts across 1Y, 2Y, 5Y, and Max views.",
      detailed_description:
      "Stock Pulse is a comprehensive stock market analysis tool built with React for the frontend and Django for the backend. It provides users with key stock metrics, news, and real-time data. The application integrates with the Kite API to display portfolio holdings and offers detailed charts across various timeframes including 1Y, 2Y, 5Y, and Max views. The user interface is designed with Tailwind CSS for a modern look and feel, ensuring an intuitive experience for both casual investors and seasoned traders.",
    tech: ['Python', ' Django', ' Django Rest Framework', ' Kite API', ' Javascript', ' ReactJs', ' Tailwind', ' SQLite', ' Ngnix', ' AWS EC2'],
    github: "https://github.com/arjundixit98/StockPulseUI",
    demo: "https://stock-screener-demo.vercel.app",
  },
  {
    title: "Online Code Compiler",
    description:
      "Built with Node.js, Express, MongoDB, Redis + Bull Queue to compile C++ and Python code remotely. Includes a React frontend with test case execution and user-submitted problems.",
      detailed_description:
      "This project is a full-stack online code compiler that allows users to write, compile, and execute C++ and Python code directly in their browser. The backend is built using Node.js and Express, with MongoDB for data storage and Redis with Bull Queue for handling background tasks like code compilation. The frontend is developed in React, providing a user-friendly interface where users can submit their code, run it against test cases, and even create new coding problems for others to solve.",
    tech: ['Javascript', ' NodeJs', ' ExpressJs', ' Rest API', ' MongoDB', ' Mongoose', ' Bull Queue', ' ReactJs', ' CSS'],
    github: "https://github.com/arjundixit98/online-code-ide",
    demo: "https://online-code-ide-client.onrender.com/",
  },
];