# Dynamic Form - Frontend Developer Challenge
This project is a dynamic and interactive form built using **React** , designed to showcase front-end development skills such as form management, state handling, and validation. It fulfills the requirements of a developer challenge by implementing various dynamic form functionalities.

**live link**: [https://reliable-platypus-69c4fc.netlify.app/]
![dark](https://github.com/user-attachments/assets/39504293-90f4-45bd-9118-8cabae3c17d4)![light](https://github.com/user-attachments/assets/10b21ef6-4c0e-4ecf-bef9-ce1c0a28c2a8)

## Features

### Core Functionalities
- **Input and Select Fields**:
  - A form with an input field and a select dropdown displayed side by side.
  - Both fields are required, with validation to ensure no empty fields are submitted.

- **Field Validation**:
  - Error messages are shown below the input and select fields if the form is submitted without filling in the required information.
  - Validation applies to all dynamically added fields.

- **Dynamic Field Addition**:
  - A "Plus" button is provided to dynamically add new input-select pairs to the form.
  - Newly added fields inherit the same validation logic as the initial ones.

- **Field Deletion**:
  - Each select field includes a "Delete" button, allowing users to remove the corresponding input-select pair.

### State Management
- Captures the `onChange` events of all input fields and select boxes to update a centralized state.
- The updated form state is displayed below the form in real-time as a table.

### Form Submission
- On clicking the "Submit" button:
  - All fields are validated to ensure no empty fields exist.
  - Error messages are displayed for any empty fields.
  - The complete form state is displayed below in a structured table format.


### Interactive Footer
Portfolio Navigation:
  Clicking on "MD Borno" navigates to the portfolio website in a new tab.
Social Links:
    Footer contains clickable icons for:
        -Facebook
        -GitHub
        -LinkedIn
  Each link opens the respective profile in a new tab.
## Email Copy to Clipboard:
      Clicking the email icon copies the email address (adlylislam95@gmail.com) to the clipboard.
      A success alert notifies the user of the copied email.

## Technologies Used
- **React**
- **CSS/Styling**
- **Tailwind**


