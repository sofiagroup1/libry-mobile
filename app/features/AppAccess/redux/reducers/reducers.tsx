import createReducer from '../../../../helper/createReducer';
import {
  SET_ACCESS_TOKEN,
  SET_ADD_NAME_BIRTH_DATE_RESPONSE,
  SET_CHANGE_PASSWORD_RESPONSE,
  SET_EMAIL_VALIDATION,
  SET_LOGIN_STATUS,
  SET_OTP_MODAL_VISIBLE,
  SET_OTP_VALIDATION,
  SET_PASSWORD_CHANGE_REQUEST,
  SET_PASSWORD_VALIDATION,
  SET_REFRESH_TOKEN,
  SET_REGISTER_RESPONSE,
  SET_SIGN_UP_EMAIL_RESPONSE,
  SET_SIGN_UP_RESPONSE,
  SET_SIGN_UP_RESPONSE_VERIFY,
  SET_SUGGEST_USERS,
  SET_USER_PROFILE,
} from '../action/types';

// Initial State
const initialState = {
  signUpResponse: {
    token: '',
  },
  otpModalVisibility: 'invisible',
  otpVerifyResponse: {
    token: '',
  },
  signUpEmailResponse: {
    token: '',
  },
  validOtp: true,
  validEmail: true,
  registerResponse: {
    user: {
      id: '',
      name: '',
      email: '',
      email_verified: false,
      phone_number: '',
      phone_number_verified: false,
      userConfirmed: false,
      birth_date: '',
      followers: [],
      following: [],
    },
    tokens: {
      accessToken: '',
      refreshToken: '',
    },
  },
  validPassword: true,
  accessToken: '',
  refreshToken: '',
  addNameBirthDateResponse: {
    id: '',
    name: '',
    email: '',
    email_verified: false,
    phone_number: '',
    phone_number_verified: false,
    userConfirmed: false,
    birth_date: '',
    followers: [],
    following: [],
  },
  userProfile: {
    id: '',
    name: '',
    email: '',
    email_verified: false,
    phone_number: '',
    phone_number_verified: false,
    userConfirmed: false,
    birth_date: '',
    followers: [],
    following: [],
  },
  suggestUserProfils: [
    {
      id: '',
      email: '',
      phone_number: '',
      name: '',
      birth_date: '',
      userConfirmed: false,
      email_verified: false,
      phone_number_verified: false,
      followers: [],
      following: [],
      isFollowed: false,
    },
  ],
  loginStatus: 'LOGIN_SUCCESS',
  confirmChangePasswordStatus: 'UNDEFINED',
  changePasswordReqResponse: 'UNDEFINED',
};

export const appAccessReducer = createReducer(initialState, {
  [SET_SIGN_UP_RESPONSE](state: any, action: {payload: object}) {
    return {
      ...state,
      signUpResponse: action.payload,
    };
  },
  [SET_OTP_MODAL_VISIBLE](state: any, action: {payload: object}) {
    return {
      ...state,
      otpModalVisibility: action.payload,
    };
  },
  [SET_SIGN_UP_RESPONSE_VERIFY](state: any, action: {payload: object}) {
    return {
      ...state,
      otpVerifyResponse: action.payload,
    };
  },
  [SET_SIGN_UP_EMAIL_RESPONSE](state: any, action: {payload: object}) {
    return {
      ...state,
      signUpEmailResponse: action.payload,
    };
  },
  [SET_OTP_VALIDATION](state: any, action: {payload: object}) {
    return {
      ...state,
      validOtp: action.payload,
    };
  },
  [SET_EMAIL_VALIDATION](state: any, action: {payload: object}) {
    return {
      ...state,
      validEmail: action.payload,
    };
  },
  [SET_REGISTER_RESPONSE](state: any, action: {payload: object}) {
    return {
      ...state,
      registerResponse: action.payload,
    };
  },
  [SET_PASSWORD_VALIDATION](state: any, action: {payload: object}) {
    return {
      ...state,
      validPassword: action.payload,
    };
  },
  [SET_ACCESS_TOKEN](state: any, action: {payload: object}) {
    return {
      ...state,
      accessToken: action.payload,
    };
  },
  [SET_REFRESH_TOKEN](state: any, action: {payload: object}) {
    return {
      ...state,
      refreshToken: action.payload,
    };
  },
  [SET_ADD_NAME_BIRTH_DATE_RESPONSE](state: any, action: {payload: object}) {
    return {
      ...state,
      addNameBirthDateResponse: action.payload,
    };
  },
  [SET_USER_PROFILE](state: any, action: {payload: object}) {
    return {
      ...state,
      userProfile: action.payload,
    };
  },
  [SET_SUGGEST_USERS](state: any, action: {payload: object}) {
    return {
      ...state,
      suggestUserProfils: action.payload,
    };
  },
  [SET_LOGIN_STATUS](state: any, action: {payload: object}) {
    return {
      ...state,
      loginStatus: action.payload,
    };
  },
  [SET_CHANGE_PASSWORD_RESPONSE](state: any, action: {payload: object}) {
    return {
      ...state,
      confirmChangePasswordStatus: action.payload,
    };
  },
  [SET_PASSWORD_CHANGE_REQUEST](state: any, action: {payload: object}) {
    return {
      ...state,
      changePasswordReqResponse: action.payload,
    };
  },
});
