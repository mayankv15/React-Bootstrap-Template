import React, { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./About.css";
import { updateAbout } from "../../redux/actions";
import { RootState } from "../../redux/reducer";

interface AboutProps {
  edit: boolean;
}

const About: React.FC<AboutProps> = (props) => {
  const userAbout = useSelector((state: RootState) => state.user.about);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(userAbout || "");

  const onChangeAbout = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newAbout = e.target.value;
    setAbout(newAbout);
    dispatch(updateAbout(newAbout)); // Dispatch with an object containing the 'about' property
  };

  return (
    <div className="container">
      <div className="about-section">
        <h3>About</h3>
        <div className="add-section">
          {props.edit ? (
            <textarea
              placeholder="Add About"
              value={about}
              onChange={onChangeAbout}
            />
          ) : (
            <p>{about}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
