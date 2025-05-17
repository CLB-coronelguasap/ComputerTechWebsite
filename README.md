# Cybersecurity Website

This project is made for my Computer Tech Task 2.

It aims to make a website that informs users about the topic of cybersecurity.

![dock](assets/images/dock.jpg)

## Project Structure

The project is organized as follows:

```
cybersecurity-website
├── assets
│   ├── css
│   │   └── styles.css       # Styles for the website
│   ├── images
│   │   ├── dock.jpg         # Used for README
│   │   ├── embed.png        # Image for social media embedding
│   │   ├── cyber-threat.png # Used in index
│   │   ├── icon.ico         # Icon
│   │   ├── innovation.png   # Used in index
│   │   ├── protection.png   # Used in index
│   │   └── education.png    # Used in index
│   ├── audio
│   │   ├── lease.mp3        # Background music for the home page
│   │   ├── lotus.mp3        # Background music for the security page
│   │   ├── aero.mp3         # Background music for the lookup page
│   │   └── options.mp3   #Background music for the about page
│   ├── media
│   │   └── shebang.mp4      # Video used in the security page
│   └── js
│       └── universal.js     # Shared JavaScript functionality
├── .github
│   └── ISSUE_TEMPLATE
│       ├── bug_report.md    # Template for bug reports
│       └── feature_request.md # Template for feature requests
├── LICENSE                  # License file (GPL v3)
├── README.md                # Project documentation
├── index.html               # Main entry point of the website
├── security.html            # Page with information about cybersecurity and statistics
├── lookup.html              # Page for users to look up and manage their personal information
└── about.html               # Find out more page
```

## Features

- [**Home Page**](index.html): An introduction to cybersecurity and the website's purpose.
- [**Security Page**](security.html): Detailed information about cybersecurity, including statistics and best practices.
- [**Lookup Page**](lookup.html): Functionality for users to look up their personal information and options to remove it from the internet.
- [**About Page**](about.html): Information about the developer and the mission behind the website.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/CLB-coronelguasap/ComputerTechWebsite.git
   ```
2. Navigate to the project directory:
   ```
   cd ComputerTechWebsite
   ```
3. Start a local server:
   ```
   npx http-server
   ```

## Usage

Once the server is running, you can access the website at `http://127.0.0.1:8080`. Navigate through the different pages using the navigation bar to explore the content and features.

Alternatively, visit the website at https://gonksite.vercel.app
## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the GNU General Public License v3. See the [LICENSE](LICENSE) file for more details.
