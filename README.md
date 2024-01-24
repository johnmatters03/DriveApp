# DriveApp

This project is a web application that emulates basic functionalities of a cloud drive, allowing users to upload, store, view, and delete text files. It consists of a React front-end and a Django back-end.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.x or later)
- Python (3.8 or later)
- Django (3.x)
- React (17.x)

### Installing

1. **Clone the repository:**
```
git clone https://github.com/johnmatters03/DriveClone
```

2. **Set up the Django back-end:**
- Navigate to the Django project directory.
- Install required packages:
  ```
  pip install -r requirements.txt
  ```
- Run migrations:
  ```
  python manage.py migrate
  ```

3. **Set up the React front-end:**
- Navigate to the React project directory.
- Install dependencies:
  ```
  npm install
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

- CSS is used for styling components, with a separate `App.css` file providing a clean and modern look.

### Error Handling

- Error messages from the backend are caught and displayed to the user, enhancing the user experience and debugging process.

## Deployment

- The application can be deployed on platforms like Heroku for the backend and Netlify for the frontend.

## Authors

- John Matters - *Initial work* - [johnmatters03](https://github.com/johnmatters03)
