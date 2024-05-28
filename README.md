
# Attendance System with Web and Mobile Applications

A robust attendance system comprising a web application, an Android mobile app, and a database for monitoring and managing student attendance through QR code scanning.

## Introduction

This Attendance System provides a seamless way to monitor and manage student attendance using a mobile app and a web interface. Students can mark their attendance by scanning QR codes placed in classrooms. The system records entry time, exit time, date, year, class, and department. Administrators or classroom coordinators can monitor and filter student attendance through the web application.

## Features

- **Student Mobile App**:
  - Scan QR codes to mark attendance
  - Record entry and exit times
  - Beautiful UI/UX
  - Secure signup and login
  - History Of Attendace Information

- **Web Application**:
  - Monitor and filter student attendance
  - See All Student Attendance Entry
  - Secure login for administrators and classroom coordinators
  - Beautiful and user-friendly interface

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js
- **Mobile App**: Java (Android)
- **Database**: MySQL

## Installation Requirements

To set up and run this project, you need the following installed on your system:

- Node.js
- MySQL
- Android Studio (for mobile app development)
- Web browser (for accessing the web application)

## Installation Steps

### Web Application

1. **Clone the repository**
   ```sh
   git clone https://github.com/SagarInnovate/QR-code-based-attendance-system-using-node-js-and-android-.git
   
   cd QR-code-based-attendance-system-using-node-js-and-android-/Backend node/

2. **Install dependencies**
    ```sh
    npm install
    
3. **Setup the database**
  - Create a new database in MySQL.
  - Import the provided SQL file (../DB/cse_labs.sql) into your database.
  
4. **Configure the environment**
 - Navigate to Backend node/config/database.js and add your database configuration:
    ```sh
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cse_labs'
    
5. **Start the server**
    ```sh
    npm start

6. **Access the web application**

- Open your web browser and navigate to http://localhost:3000

## Mobile Application
1. **Download the mobile app**
    - Students can download the mobile app from https://mini.growmediax.com
 ### OR
1. **Open the project in Android Studio** 
    - Navigate to the 'mobile app' folder and open it in Android Studio.
    
2. **Build and run the app**
    - Connect an Android device or start an emulator.
    - Build and run the app from Android Studio.
    
3. **Download the mobile app**
    - Students can download the mobile app from mini.growmediax.com

## Usage Instructions
- For Students:

    - Download and install the mobile app.
    - Signup or login using your credentials.
    - Scan the valid QR codes in classrooms to mark your attendance.
- For Administrators:

    - Access the web application at mini.growmediax.com/lab.
    - Login using one of the demo credentials 

      ```sh
        username: lab@1 password: 123456
        username: lab@2 password: 123456
        username: lab@3 password: 123456
        username: lab@4 password: 123456
    - Monitor and filter student attendance records.
    
## Screenshots
Add screenshots here showing different parts of your application.

## Demo Video
Watch a full demo of the Attendance System on YouTube.

## Contribution Guidelines
We welcome contributions from the community. If you'd like to contribute, please follow these steps:

    1.Fork the repository.
    2.Create a new branch (git checkout -b feature-branch).
    3.Make your changes and commit them (git commit -am 'Add new feature').
    4.Push to the branch (git push origin feature-branch).
    5.Create a new Pull Request.

## Conclusion
The Attendance System is an effective solution for managing student attendance using modern technology. It simplifies the process of tracking attendance and provides a secure and user-friendly interface for both students and administrators.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or suggestions, please feel free to reach out:

- Email: sagarinnovate@gmail.com
- LinkedIn:[LinkedIn Profile](https://www.linkedin.com/in/sagarinnovate/)
- GitHub:  [GitHub Profile](https://github.com/sagarinnovate)
- Website: [Visit Now ](https://sagarinnovate.growmediax.com/)
- Live Preview : [ Click Here ](https://mini.growmediax.com/)

---
Thank you for checking out the Attendance System! We hope it helps you streamline your attendance management processes.
