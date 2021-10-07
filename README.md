# To Get Application Running

Copy Folders From Repository into new folder

navigate to folder in your command line interface and type npm install

create config.env file in root directory

You will need the following secret variables

use port 4000 if you don't want to reconfigure all api requests.

PORT=

create your own mongo db connection

MONGO_URI=

Randomly generate a 50 character long password to use as jwt secret

JWT_SECRET=

type npm start to start

# How to use Application

### Background

This app is made for a fictional company "COOL TECH".

In this company, there are four Organisational Units:

1. Opinion Publishing
2. Software Reviews
3. Hardware Reviews
4. News Management

Each of these Units has 10 Divisions:

1. Finance
2. IT
3. Software Dev
4. Marketing
5. Product Dev
6. Backend Dev
7. Frontend Dev
8. Public Relations
9. Data Analysis
10. Writing

Each of these Divisions currently has three types of Employees:

1. Admin
2. Manager
3. Normal

# To Register a new user

1. You must enter a valid email address (must include the @ sign)

2. You must Choose a valid Organisational Unit from the list above

3. You must Choose a valid Division from the list above

4. Your password must be longer than eight characters

5. You must verify your password by typing in the same password

### NOTE : ALL NEW USERS WILL AUTOMATICALLY BE ASSIGNED THE "NORMAL" ROLE. THIS ROLE CAN ONLY BE UPDATED BY AN ADMIN

# To Login

1. You must enter a valid email address (must include the @ sign) and the email has to be one that has already been registered

2. Your password must be longer than eight characters and must match the password used to register the user

3. Upon Logging in there are three respective User interfaces that you will be displayed depending on your role.

4. If you are a Normal user you will be able to read or add Credentials from your Division, in your respective Unit (for example: if you logged in as a normal user in the IT Division of the Opinion Publishing Unit, you will only be able to see credentials from that same division and unit)

5. If you are a Manager you will be able to read, add or update Credentials from your Division, in your respective Unit (for example: if you logged in as a Manager in the IT Division of the Opinion Publishing Unit, you will only be able to see and update credentials from that same division and unit)

6. If you are an Admin you will be able to read, add, update and delete Credentials from your Division, in your respective Unit. You will also be able to read, update and delete Users from your Division, in your respective Unit. (for example: if you logged in as an Admin in the IT Division of the Opinion Publishing Unit, you will only be able to see, update and delete credentials and see, update and delete users from that same division and unit)

# Existing Users

The existing users login information all follows the same pattern:

1. The email is made up of a prefix which is made up of unit + division.
2. The role (admin/manager/normal)
3. And this will be followed by "@gmail.com"
4. The passwords are the same for all Admins, Managers and Normal Users. (admin123, manager123, normal123) and should be updated once the Application is in use.

### Admin Example:

Unit : Opinion Publishing

Division : IT

Role : Admin

Email : opitadmin@gmail.com

Password admin123

### Manager Example:

Unit : Opinion Publishing

Division : IT

Role : Admin

Email : opitmanager@gmail.com

Password manager123

### Normal Example:

Unit : Opinion Publishing

Division : IT

Role : Admin

Email : opitnormal@gmail.com

Password normal123

## The prefixes are listed below

### Opinion Publishing

1. Finance (opfin)
2. IT (opit)
3. Software Dev (opsoftdev)
4. Marketing (opmarket)
5. Product Dev (opproddev)
6. Backend Dev (opbackdev)
7. Frontend Dev (opfrontdev)
8. Public Relations (oppr)
9. Data Analysis (opdata)
10. Writing (opwrite)

### Software Reviews

1. Finance (softfin)
2. IT (softit)
3. Software Dev (softsoftdev)
4. Marketing (softmarket)
5. Product Dev (softproddev)
6. Backend Dev (softbackdev)
7. Frontend Dev (softfrontdev)
8. Public Relations (softpr)
9. Data Analysis (softdata)
10. Writing (softwrite)

### Hardware Reviews

1. Finance (hardfin)
2. IT (hardit)
3. Software Dev (hardsoftdev)
4. Marketing (hardmarket)
5. Product Dev (hardproddev)
6. Backend Dev (hardbackdev)
7. Frontend Dev (hardfrontdev)
8. Public Relations (hardpr)
9. Data Analysis (harddata)
10. Writing (hardwrite)

### News Management

1. Finance (newsfin)
2. IT (newsit)
3. Software Dev (newssoftdev)
4. Marketing (newsmarket)
5. Product Dev (newsproddev)
6. Backend Dev (newsbackdev)
7. Frontend Dev (newsfrontdev)
8. Public Relations (newspr)
9. Data Analysis (newsdata)
10. Writing (newswrite)

If you type in any of the above prefixes + role(admin/manager/normal) + "@gmail.com" you will be able to view the respective credential pages.

ENJOY! And if you have any questions email me: tom.shields001@gmail.com

# Credits:

Thank you to daily tuition on youtube for all your amazing tutorial videos.
Without you I would not have been able to put this all together
