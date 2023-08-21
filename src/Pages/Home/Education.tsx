import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Education.css";
import { addEducation, deleteEducation } from "../../redux/actions";
import { Delete } from "@material-ui/icons";
import { RootState } from "../../redux/reducer"; // Adjust the import path as needed

interface EducationProps {
  edit: boolean;
}

const Education: React.FC<EducationProps> = (props) => {
  const education = useSelector((state: RootState) => state.education);
  const dispatch = useDispatch();

  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });

  const handleAddEducation = () => {
    if (
      newEducation.school.trim() !== "" &&
      newEducation.degree.trim() !== "" &&
      newEducation.graduationYear.trim() !== ""
    ) {
      dispatch(addEducation(newEducation));
      setNewEducation({ school: "", degree: "", graduationYear: "" });
    }
  };

  const handleDeleteEducation = (index: number) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="education-section">
          <h3>Education</h3>
          
          <table className="table"> 
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Graduation Year</th>
            </tr>
            {education.map((edu, index) => (
              <tr key={index}>
                <td>{edu.school}</td>
                <td>{edu.degree}</td>
                <td>{edu.graduationYear}</td>
                {props.edit && (
                  <Delete
                    onClick={() => handleDeleteEducation(index)}
                    className="delete-icon"
                  />
                )}
              </tr>
            ))}
          </table>
          {props.edit && (
            <div className="add-section">
              <input
                type="text"
                placeholder="School"
                value={newEducation.school}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const schoolName = e.target.value;
                  if (/^[A-Za-z0-9\s]+$/.test(schoolName) || schoolName === "") {
                    setNewEducation({ ...newEducation, school: schoolName });
                  }
                }}
              />

              <input
                type="text"
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const degreeName = e.target.value;
                  if (/^[A-Za-z0-9\s]+$/.test(degreeName) || degreeName === "") {
                    setNewEducation({ ...newEducation, degree: degreeName });
                  }
                }}
              />

              <input
                type="text"
                placeholder="Graduation Year"
                value={newEducation.graduationYear}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const graduationYear = e.target.value;
                  if (/^\d*$/.test(graduationYear) || graduationYear === "") {
                    setNewEducation({ ...newEducation, graduationYear });
                  } else {
                    alert("Graduation Year should be in numbers");
                  }
                }}
              />

              <button onClick={handleAddEducation}>Add Education</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
