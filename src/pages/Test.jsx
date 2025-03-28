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
