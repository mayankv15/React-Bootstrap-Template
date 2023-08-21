import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Experience.css";
import { addExperience, deleteExperience } from "../../redux/actions";
import { Delete, Add } from "@material-ui/icons";
import { RootState } from "../../redux/reducer"; // Adjust the import path as needed

interface ExperienceProps {
  edit: boolean;
}

const Experience: React.FC<ExperienceProps> = (props) => {
  const experience = useSelector((state: RootState) => state.experience);
  const dispatch = useDispatch();

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    yearsWorked: "",
  });

  const handleAddExperience = () => {
    if (
      newExperience.company.trim() !== "" &&
      newExperience.position.trim() !== "" &&
      newExperience.yearsWorked.trim() !== ""
    ) {
      dispatch(addExperience(newExperience));
      setNewExperience({ company: "", position: "", yearsWorked: "" });
    }
  };

  const handleDeleteExperience = (index: number) => {
    dispatch(deleteExperience(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="experience-section">
          <h3>Experience</h3>
          <ul className="experience-list">
            <table className="table"> 
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Years Worked</th>
              </tr>
              {experience.map((exp, index) => (
                <tr key={index}>
                  <td>{exp.company}</td>
                  <td>{exp.position}</td>
                  <td>{exp.yearsWorked}</td>
                  {props.edit && (
                    <center>
                      <Delete 
                        style={{
                          color:"red",
                          borderRadius: "50%",
                          padding: "5px",
                          cursor: "pointer",
                          alignContent: "center",
                          alignItems: "center",
                          position: "relative",
                          zIndex: "1",
                          fontSize: "20px",
                          border: "none",
                          outline: "none",
                          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
                          transition: "all 0.3s ease",
                        }} 
                        onClick={() => handleDeleteExperience(index)}
                      />
                    </center>
                  )}
                </tr>
              ))}
            </table>
          </ul>
          {props.edit && (
            <div className="add-section">
              <input
                type="text"
                placeholder="Company"
                value={newExperience.company}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const companyName = e.target.value;
                  if (/^[A-Za-z0-9\s]+$/.test(companyName) || companyName === "") {
                    setNewExperience({
                      ...newExperience,
                      company: companyName,
                    });
                  }
                }}
              />
              <input
                type="text"
                placeholder="Years Worked"
                value={newExperience.yearsWorked}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const yearsWorked = e.target.value;
                  if (/^\d*$/.test(yearsWorked) || yearsWorked === "") {
                    setNewExperience({ ...newExperience, yearsWorked });
                  } else {
                    alert("Please enter a valid number");
                  } 
                }}
              />

              <input
                type="text"
                placeholder="Position"
                value={newExperience.position}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setNewExperience({
                    ...newExperience,
                    position: e.target.value,
                  })
                }
              />
              <Add className="add-icon" onClick={handleAddExperience} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
