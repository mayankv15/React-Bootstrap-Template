import { PUSH_NOTIFICATION } from "../constants/actions";
import COMMON from "../constants/common";
import { ACCESS_TOEKN, LOADER } from "./actions";

// Reducer

export interface RootState {
  isOpen: boolean;
  type?: "error" | "info" | "success" | "warning";
  message?: string;
  handleClose?: () => void;
  user: {
    about: '';
    login: boolean;
  };
  skills: any[];
  education: any[]; 
  experience: any[];

}
const initialState = {
  isLoading: false,
  notification: {},
  isAnonymous: true,
  access_token: '',
  user: {
    about: "",
    login: false,
  },
  skills: [],
  education: [],
  experience: [],
};


export const loadingActionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };

    case PUSH_NOTIFICATION:
      return { ...state, notification: action.payload };

    case COMMON.ANONYMOUS:
      return {
        ...state,
        isAnonymous: action.payload,
      };

    case ACCESS_TOEKN:
      return {
        ...state,
        access_token: action.payload
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: {
          ...state.user,
          login: true,
        },
      };

    case "LOGOUT":
      return {
        ...state,
        user: {
          ...state.user,
          login: false,
        },
      };

    case "UPDATE_ABOUT":
      return {
        ...state,
        user: {
          ...state.user,
          about: action.payload.about,
        },
      };

    case "ADD_SKILL":
      return {
        ...state,
        skills: [...state.skills, action.payload.skill],
      };

    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter((_, index) => index !== action.payload.index),
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        education: [...state.education, action.payload.education],
      };

    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter(
          (_, index) => index !== action.payload.index
        ),
      };

    case "ADD_EXPERIENCE":
      return {
        ...state,
        experience: [...state.experience, action.payload.experience],
      };

    case "DELETE_EXPERIENCE":
      return {
        ...state,
        experience: state.experience.filter(
          (_, index) => index !== action.payload.index
        ),
      };


    default:
      return state;
  }
};

export default loadingActionReducer;
