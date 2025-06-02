import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    skill: "",
    skills: [],
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSkill = () => {
    if (formData.skill.trim()) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, prev.skill],
        skill: "", // Clear the skill input after adding
      }));
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={formData.name}
        onChange={handleFormData}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleFormData}
      />
      <input
        type="text"
        placeholder="role"
        name="role"
        value={formData.role}
        onChange={handleFormData}
      />
      <input
        type="text"
        placeholder="skill"
        name="skill"
        value={formData.skill}
        onChange={handleFormData}
        data-id="add-skill"
      />

      <button type="button" onClick={addSkill} data-id="add-skill-button">
        Add skill
      </button>
      <button type="submit">Submit Form</button>

      <div>
        <h4>Skills:</h4>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Test;

// answer this our Tasks Task 1 Render Navigation buttons on the header with below conditions and Render Header Title Job Portal on the home, list, and registration page. 1.1 Render Navigation buttons on the header with below conditions: Home Screen (`/`) - does not show any buttons on the header. Registration Screen (`/candidate/registration`) - has "Home" and "Candidate List" button on the header. List Screen (`/candidate/list`) - has "Home" and "Candidate Registration" button on the header. 1.2 Ensure that the header title is set to "Job Portal" on the home, list, and registration page. The Test case ID is missing (you get Testcase Id from ID table). The title must be Job Portal. 1.3 Check if the Registration form is rendered or not (name, role, email, skills, submit, reset, add). Ensure that the Test case ID is given to the fields. Check if name, email, role, and skill use input HTML elements. Check if submit, reset, and skill use button HTML elements. Task 2 2.1 The "Add skill" button must follow these conditions: The "Add skill" button is disabled until the candidate enters at least one value in the skill input field. The "Add skill" button is enabled until the candidate has a maximum of 5 skills. 2.2 Validate the Form All the fields on the form are required (Name, Role, Email, Skills). Name: Should be a valid string, containing only letters, numbers, and spaces. Role: Should be a valid string, containing only letters, numbers, and spaces. Email: Should be a valid email address (e.g., example@email.com). Skills: Should be a valid array of skills, separated by commas or spaces. At least one skill is required to register successfully. Display an error message if a candidate attempts to register with an email that already exists: "Email already exists". The Submit button is disabled until the form is validated. 2.3 Click on the Reset button to check if the form is reset or not. Task 3 3.1 Register new candidates and check if the candidate list count increases in the header. Once a candidate registers, the candidate list count must increase. 3.2 Ensure that the Candidate Registration Form is reset after successfully adding a new candidate. 3.3 On the candidate listing page: All the candidates added in the candidate registration form should be displayed. The user should be able to perform a search based on the skills of the candidate (one skill at a time). When the user clicks on the "All" button, the search text should be cleared, and all candidates should be displayed. Test IDs Navbar Nav Button - Candidate List : nav-list-btn Nav Button - Candidate Registration : nav-registration-btn Nav Button - Home : nav-home-btn "Job Portal" title : nav-heading Home Page Button - Candidate List : list-btn Button - Candidate Registration : registration-btn Candidate Registration Page Registration Form : registration-form Input field - name : form-input-name Input field - email : form-input-email Input field - role : form-input-role Input field - skills : form-input-skill Button - Add skill : add-btn Button - Submit : submit-btn Button - Reset : reset-btn Skill tag in the form : skill-tag Registration Status message in the form : alertMessage Candidate List Page Profile Card : profile-card Number of profiles found title : profiles-found-tag Input - Search : search-input Button All : search-all Instructions: Starting the Application: Install dependencies: npm install Start the server: npm start Preview the application by clicking "Copy Preview URL." Running Tests Run tests: npm run test
// validation
// filtering candidates based on skills
// fetch and list candidates

// import React, { useState } from "react";

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const nameRoleRegex = /^[a-zA-Z0-9 ]+$/;

// const RegistrationForm = ({ existingEmails = [] }) => {
//   const [formData, setFormData] = useState({ name: "", email: "", role: "", skill: "", skills: [] });
//   const [errors, setErrors] = useState({});
//   const [statusMessage, setStatusMessage] = useState("");

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     else if (!nameRoleRegex.test(formData.name)) newErrors.name = "Invalid name";

//     if (!formData.role.trim()) newErrors.role = "Role is required";
//     else if (!nameRoleRegex.test(formData.role)) newErrors.role = "Invalid role";

//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
//     else if (existingEmails.includes(formData.email.trim().toLowerCase()))
//       newErrors.email = "Email already exists";

//     if (formData.skills.length === 0) newErrors.skills = "At least one skill is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const addSkill = () => {
//     const skill = formData.skill.trim();
//     if (skill && formData.skills.length < 5) {
//       setFormData({
//         ...formData,
//         skills: [...formData.skills, skill],
//         skill: "",
//       });
//     }
//   };

//   const resetForm = () => {
//     setFormData({ name: "", email: "", role: "", skill: "", skills: [] });
//     setErrors({});
//     setStatusMessage("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Simulate successful submission
//       setStatusMessage("Candidate registered successfully");
//       console.log("Submitted:", formData);
//       resetForm();
//     }
//   };

//   const isFormValid = () =>
//     formData.name && formData.email && formData.role && formData.skills.length > 0 && Object.keys(errors).length === 0;

//   return (
//     <form data-testid="registration-form" onSubmit={handleSubmit}>
//       <input
//         data-testid="form-input-name"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       {errors.name && <p>{errors.name}</p>}

//       <input
//         data-testid="form-input-email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       {errors.email && <p>{errors.email}</p>}

//       <input
//         data-testid="form-input-role"
//         name="role"
//         placeholder="Role"
//         value={formData.role}
//         onChange={handleChange}
//       />
//       {errors.role && <p>{errors.role}</p>}

//       <input
//         data-testid="form-input-skill"
//         name="skill"
//         placeholder="Add Skill"
//         value={formData.skill}
//         onChange={handleChange}
//       />
//       <button
//         type="button"
//         data-testid="add-btn"
//         onClick={addSkill}
//         disabled={!formData.skill || formData.skills.length >= 5}
//       >
//         Add skill
//       </button>
//       {errors.skills && <p>{errors.skills}</p>}

//       <ul>
//         {formData.skills.map((skill, idx) => (
//           <li key={idx} data-testid="skill-tag">{skill}</li>
//         ))}
//       </ul>

//       <button type="submit" data-testid="submit-btn" disabled={!isFormValid()}>
//         Submit
//       </button>
//       <button type="button" data-testid="reset-btn" onClick={resetForm}>Reset</button>

//       {statusMessage && <p data-testid="alertMessage">{statusMessage}</p>}
//     </form>
//   );
// };

// export default RegistrationForm;
