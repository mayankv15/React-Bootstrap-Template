import { PUSH_NOTIFICATION } from '../constants/actions';

// Action Type
export const LOADER = 'LOADER';
export const ACCESS_TOEKN = 'ACCESS_TOEKN';

// Action
export const setLoader = (loading) => {
    return {
        type: LOADER,
        payload: loading,
    };
};

export const setAnonymousUser = (data) => {
    return {
        type: LOADER,
        payload: data,
    };
};

export const pushNotification = (data) => {
    return { type: PUSH_NOTIFICATION, payload: data };
};

export const setAccessToken = (token) => {
    return {
        type: ACCESS_TOEKN,
        payload: token
    }
}


export const loginSuccess = () => ({
    type: "LOGIN_SUCCESS",
  });
  
  export const logout = () => {
    return {
      type: "LOGOUT",
    };
  };
  
  export const updateAbout = (about: string) => {
    return {
      type: "UPDATE_ABOUT",
      payload: { about },
    };
  };
  
  export const addSkill = (skill: string) => {
    return {
      type: "ADD_SKILL",
      payload: { skill: skill },
    };
  };
  
  export const deleteSkill = (index: number) => {
    return {
      type: "DELETE_SKILL",
      payload: { index },
    };
  };
  
  export const addEducation = (education: any) => {
    return {
      type: "ADD_EDUCATION",
      payload: { education },
    };
  };
  
  export const deleteEducation = (index: number) => {
    return {
      type: "DELETE_EDUCATION",
      payload: { index },
    };
  };
  
  export const addExperience = (experience: any) => {
    return {
      type: "ADD_EXPERIENCE",
      payload: { experience },
    };
  };
  
  export const deleteExperience = (index: number) => {
    return {
      type: "DELETE_EXPERIENCE",
      payload: { index },
    };
  };
  
