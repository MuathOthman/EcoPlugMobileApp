# EcoPlug Mobile App

## Description

### Vision
At EcoPlug, our vision is to simplify the lives of electric vehicle (EV) owners by providing real-time monitoring of charging point availability. We understand the challenges that come with EV charging today, with uncertainty around the availability of charging points often leading to long wait times or complications with reserved points.

### Solution
To address this challenge, we're developing EcoPlug, an intelligent mobile app built with React Native. EcoPlug empowers users to effortlessly track the status of charging points in real-time, making charging your electric vehicle a breeze. With EcoPlug, users can simply locate nearby charging stations and take control of their charging sessions with ease. It's like having your own pocket-sized EV charging assistant, making the process smooth and convenient. Our solution ensures that available charging points are immediately visible to users, and they receive timely alerts when a point becomes reserved or becomes available.

### Benefits
Our goal is to create an easy-to-use and efficient system that enhances the smoothness of charging electric vehicles. With EcoPlug, users can quickly find an available charging point and focus on the hassle-free use of their electric vehicles. By providing transparency and convenience, we aim to make EV charging a seamless experience for all users.



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Installation
To get started with EcoPlug Frontend, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/MuathOthman/EcoPlugMobileApp.git
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Start the application**:
   ```
   npm start
   ```

   or

   ```
   npm run android
   ```
   
   or

   ```
   npm run ios
   ```
   or

   ```
   npm run web
   ```

## Usage
### Scenario 1: Detailed User Journey
Upon launching the EcoPlug application, users are warmly welcomed with our logo screen, establishing brand identity and familiarity. The user interface seamlessly transitions into a map interface populated with markers representing each EcoPlug charging station. These markers serve as interactive elements, enabling users to select a station of interest. Upon selecting a station, the map zooms in to provide a closer view of the station area, accompanied by detailed information including the station's name, address, postcode, city, and the current number of available charging stations. Users are then prompted to continue, directing them to a page displaying parking slots associated with the selected station. The intuitive color-coded system indicates slot availability, with green indicating free slots and red indicating reserved slots. Users can easily identify and select a free slot, initiating the process of securing a charging session. Upon selection, users are directed to a confirmation page listing essential details such as the place name, charging type, and spot ID. To proceed, users are required to input their phone number for verification purposes. Once verified, users receive a message containing a 4-digit code to confirm their identity. Upon successful verification, the charging session commences, providing users with real-time updates on battery level percentage, charging time, and associated costs.

### Scenario 1: User Journey Summary
- Launch EcoPlug application.
- Welcome screen featuring our logo.
- Map interface displaying EcoPlug charging stations.
- Select a station marker.
- Zoom in to view station details.
- View station information: name, address, postcode, city, and available charging stations.
- Continue to parking slots page.
- View available parking slots (green for free, red for reserved).
- Select a free parking slot.
- Confirm details on the confirmation page: place name, charging type, and spot ID.
- Input phone number for verification.
- Receive a 4-digit verification code.
- Input verification code to commence charging session.
- Monitor battery level percentage, charging time, and costs during the session.


## Features
- **Authentication**: Users can sign up, log in, and log out securely.
- **Profile Management**: Users can update their profiles, change passwords, and manage account settings.
- **[Feature Name]**: [Brief description of a specific feature]
- **[Feature Name]**: [Brief description of another feature]

## Technologies Used
- **React Native**: A JavaScript framework for building native mobile applications.
- **Redux**: A predictable state container for managing application state.
- **React Navigation**: A routing and navigation library for React Native.
- **Axios**: A promise-based HTTP client for making API requests.
- **[Other libraries/frameworks used]**: [Brief description of other technologies used in your project]

## Contributing
We welcome contributions to [Project Name]! If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

## Testing
Describe how to run tests for your application, if applicable. Include any testing frameworks used and any specific setup steps required for testing.

## Troubleshooting
If users encounter any issues or have questions, provide guidance on how they can troubleshoot or seek support. This could include common problems and solutions, as well as how to report bugs or request assistance.

## License
This project is licensed under the [License Name] - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
[Optional: Acknowledge individuals or organizations that have provided support or inspiration for your project.]

---
