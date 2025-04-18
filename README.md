# Cybersecurity Website

This project is made for my Computer Tech Task 2

It aims to make a website which informs users about the topic of cybersecurity

![dock](assets/images/dock.jpg)

## Project Structure

The project is organized as follows:

```
cybersecurity-website
├── public
│   ├── index.html          # Main entry point of the website
│   ├── security.html       # Page with information about cybersecurity and statistics
│   ├── lookup.html         # Page for users to look up and manage their personal information
│   ├── about.html          # Find out more page about the organization
│   └── assets
│       ├── images
│       │   └── dock.jpg  # Icon for website / Used for README
│       ├── css
│       │   └── styles.css  # Styles for the website
│       └── js
│           └── scripts.js  # JavaScript for interactivity and functionality
├── src
│   ├── components
│   │   ├── header.js       # Header component for the website
│   │   ├── footer.js       # Footer component for the website
│   │   └── navbar.js       # Navbar component for navigation
│   └── pages
│       ├── home.js         # Home page component
│       ├── security.js     # Security page component
│       ├── lookup.js       # Lookup page component
│       └── about.js        # About page component
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── .gitignore              # Files to be ignored by version control
```

## Features

- [**Home Page**](index.html): An introduction to cybersecurity and the website's purpose.
- [**Security Page**](security.html): Detailed information about cybersecurity, including statistics and best practices.
- [**Lookup Page**](lookup.html): Functionality for users to look up their personal information and options to remove it from the internet.
- [**About Page**](about.html): Information about the organization or team behind the website.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/CLB-coronelguasap/ComputerTechWebsite
   ```
2. Navigate to the project directory:
   ```
   cd ComputerTechWebsite
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage

Once the server is running, you can access the website at `http://localhost:3000`. Navigate through the different pages using the navigation bar to explore the content and features.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the GNU General Public License v3. See the LICENSE file for more details.