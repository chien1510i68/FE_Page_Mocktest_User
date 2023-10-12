
import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialData = {
  openModalCreateQuestion: false,
  listChoiceCorrect: null,
  listAnswer: null,
  content: null,
  type: null,
  listQuestion: null,
  isRefreshForm: false,
  nameTest : null,
  isOpenModalEditExam : false,
  isOpenModalEditSection : false,
  isOpenModalEditQuestion : false,
  isOpenModalEditAnswer : false ,
  isOpenModalCreateQuestionInSection : false ,
  fileInDescription : null ,
  fileDescriptionInSection : null 

};
const reducer = (state, action) => {
  switch (action.type) {
    case "openModalCreateQuestion":
      return { ...state, openModalCreateQuestion: true };
    case "closeModalCreateQuestion":
      return { ...state, openModalCreateQuestion: false };
    case "typeQuestion":
      return { ...state, typeQuestion: action.payload };
    case "listAnswer":
      return { ...state, listAnswer: action.payload };
    // case "listChoiceCorrect":
    //   return { ...state, listChoiceCorrect: action.payload };
case "listChoiceCorrect":
  return { ...state, listChoiceCorrect: Array.isArray(action.payload) ? [...action.payload] : [action.payload] };

  case "resetListChoiceCorrect"  : 
  return {...state , listChoiceCorrect : null}


    case "deleteListChoiceCorrect":
      return { ...state, listChoiceCorrect: null };

    case "content":
      return { ...state, content: action.payload };
      case "nameTest" :
        return {...state , nameTest : action.payload}
    case "type":
      return { ...state, type: action.payload };
    case "fileInDescription":
      return { ...state, fileInDescription: action.payload };
    case "deleteFileInDescription":
      return { ...state, fileInDescription: null };
    case "fileDescriptionInSection":
      return { ...state, fileDescriptionInSection: action.payload };
    case "createListQuestion":
      if (state.listQuestion === null) {
        return { ...state, listQuestion: [action.payload] };
      } else {
        return {
          ...state,
          listQuestion: [...state.listQuestion, action.payload],
        };
      }
    case "deleteLisQuestion":
      return { ...state, listQuestion: null };


      case "openModalEditExam" : 
      return {...state , isOpenModalEditExam : true}
      case "closeModalEditExam" : 
      return {...state , isOpenModalEditExam : false}

      
      case "openModalEditSection" : 
      return {...state , isOpenModalEditSection : true}
      case "closeModalEditSection" : 
      return {...state , isOpenModalEditSection : false}

      case "openModalEditQuestion" : 
      return {...state , isOpenModalEditQuestion : true}
      case "closeModalEditQuestion" : 
      return {...state , isOpenModalEditQuestion : false}

      case "openModalCreateQuestionInSection" : 
      return {...state , isOpenModalCreateQuestionInSection : true}
      case "closeModalCreateQuestionInSection" : 
      return {...state , isOpenModalCreateQuestionInSection : false}

    default:
      return state;
  }
};
function AppProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialData);
  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
