# food delivery app

This is a website built with Node.js, MongoDB Atlas, Express, and Pug, following the MVC architecture. It showcases a collection of food items from various categories.

### Installation

1. Clone the repository: git clone https://github.com/username/my-website.git
1. Navigate to the project directory: cd my-website
1. Install the dependencies: npm install

### Configuration

1. Rename the .env.example file to .env
1. Fill in the necessary environment variables in the .env file, such as your MongoDB Atlas connection string and the session secret key

### Usage

1. Start the server: npm start
1. Navigate to http://localhost:3000 in your browser

## MVC Architecture

This website follows the MVC (Model-View-Controller) architecture, separating the concerns of data management, user interface, and control logic. The file structure is organized as follows:

- /controllers: Contains the controllers for each model, which handle user requests and interactions
- /models: Contains the database schema and model for each collection in MongoDB Atlas
- /public: Contains static assets, such as CSS and images
- /routes: Contains the routes for each controller, mapping URL paths to controller methods
- /views: Contains the Pug templates for each view

### Dependencies

- express: ^4.17.1
- express-session: ^1.17.2
- mongoose: ^5.12.14
- pug: ^3.0.2
- dotenv: ^10.0.0

## License

- This project is licensed under the MIT License.
