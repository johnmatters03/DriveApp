# DriveApp

This project is a web application that emulates basic functionalities of a cloud drive, allowing users to upload, store, view, and delete text files. It consists of a React front-end and a Django back-end.

### Prerequisites

- Node.js (v14.x or later)
- Python (3.8 or later)
- Django (3.x)
- React (17.x)

## Setup

1. **Set up the Django back-end:**
- Navigate to the Django project directory.
- Install required packages:
  ```
  pip install -r requirements.txt
  ```
- Run migrations:
  ```
  python manage.py migrate
  ```

2. **Set up the React front-end:**
- Navigate to the React project directory.
- Install dependencies:
  ```
  npm install
  ```

## Running Locally
Start Django server
```
python manage.py runserver
```

Start React app
```
cd ./my-drive-app
npm start
```

## Back-End (Django)

The back-end is built using Django and Django REST framework.

### Models

- `TextFile`: Represents a text file with fields:
- `title` (CharField)
- `content` (TextField)
- `created_at` (DateTimeField)

### API Endpoints

- `GET /api/textfiles/`: List all text files.
- `POST /api/textfiles/`: Create a new text file.
- `DELETE /api/textfiles/<id>/`: Delete a text file.

### Setup and Configuration

- CORS settings are configured to allow requests from the React frontend.
- Django's settings are configured according to best practices for security and performance.

## Front-End (React)

The front-end is created with React and communicates with the Django back-end through RESTful APIs.

### Components

- `FileUpload`: Handles the uploading of text files from the user's computer.
- `FileList`: Displays a list of uploaded text files, allowing the user to select one to view or delete.
- `FileView`: Renders the content of a selected text file.
- `FileDelete`: Provides functionality to delete a specific text file.

### State Management

- Uses React hooks (`useState`, `useEffect`) for managing component state and side effects.

### Styling

- CSS is used for styling components, refer to `App.css`

## Authors

- John Matters - *Initial work* - [johnmatters03](https://github.com/johnmatters03)
