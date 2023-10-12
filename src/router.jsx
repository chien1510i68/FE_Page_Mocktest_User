import { createBrowserRouter } from "react-router-dom";
import PageETest from "./Page/PageETest/PageETest";
import Login from "./Page/Login/Login";
import TableCustomer from "./Components/Table/User/Customer/TableCustomer";
import TableUser from "./Components/Table/User/TableUser";
import TableStaff from "./Components/Table/User/Staff/TableStaff";
import EduProgram from "./Components/Table/EducationProgram/EduProgram";
import Register from "./Page/Register/Register";
import TableNews from "./Components/Table/News/News";
import DetailUser from "./Components/Details/DetailUser/DetailUser";
import ExamSchedule from "./Components/Table/ExamSchedule/ExamSchedule";
import Document from "./Components/Table/Document/Document";
// import DetailNews from "./Components/Details/DetailNews/DetailNews";
import DetailDoc from "./Components/Details/DetailDoc/DetailDoc";
import DetailES from "./Components/Details/DetailES/DetailES";
import DetailNews from "./Components/Details/DetailNews/DetailNews";
import PageMocktest from "./Page/MockTest/PageMockTest";
import Contest from "./Page/MockTest/Contest";
import CreateQuestion from "./Page/MockTest/CreateQuestion";
import InforExams from "./Page/Exam/InforExams";
import AddSectionToExam from "./Page/MockTest/AddSectionToExam";
import ReviewShedule from "./Components/Table/ReviewSchedule/ReviewShedule";
import DisplayHome from "./Components/Table/DisplayManager/DisplayHome/DisplayHome";
import DisplayPages from "./Components/Table/DisplayManager/DisplayPages/DisplayPages";
import DisplayProgram from "./Components/Table/DisplayManager/DisplayProgram/DisplayProgram";
import DisplayBanner from "./Components/Table/DisplayManager/DisplayProgram/DisplayBanner/DisplayBanner";
import DisplayVstep from "./Components/Table/DisplayManager/DisplayProgram/DisplayVstep/DisplayVstep";
import DisplayAptis from "./Components/Table/DisplayManager/DisplayProgram/DisplayAptis/DisplayAptis";
import AcademicEnglish from "./Components/Table/DisplayManager/DisplayProgram/AcademicEnglish/AcademicEnglish";
import IELTS from "./Components/Table/DisplayManager/DisplayProgram/IELTS/IELTS";
import DetailDisplay from "./Components/Details/DetailDisplay/DetailDisplay";
import Slide from "./Components/Table/DisplayManager/DisplayPages/DisplaySlide";
import Test from "./Page/MockTest/Test";
// import Editor from "./Components/CKEditor/CKEditor";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // element: <Editor />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/adminpage",
    element: <PageETest />,
    children: [
      {
        path: "user",
        element: <TableUser />,
        children: [
          {
            path: "detailuser/:detailuserId",
            element: <DetailUser />,
          },
        ],
      },
      {
        path: "staff",
        element: <TableStaff />,
        children: [
          {
            path: "detailstaff/:detailstaff",
            element: <DetailUser />,
          },
        ],
      },
      {
        path: "customer",
        element: <TableCustomer />,
        children: [
          {
            path: "detailcustomer/:detailcustomer",
            element: <DetailUser />,
          },
        ],
      },
      {
        path: "eduprogram",
        element: <EduProgram />,
        children: [
          {
            path: "detaileduprogram/:detaileduprogramId",
          },
        ],
      },
      {
        path: "news",
        element: <TableNews />,
        children: [
          {
            path: "detailnews/:detailnewsId",
            element: <DetailNews />,
          },
        ],
      },
      {
        path: "examschedule",
        element: <ExamSchedule />,
        children: [
          {
            path: "detailexamschedule/:detailexamscheduleId",
            element: <DetailES />,
          },
        ],
      },
      {
        path: "reviewschedule",
        element: <ReviewShedule />,
        children: [
          {
            path: "detailreviewschedule/:detailreviewscheduleId",
            element: <DetailES />,
          },
        ],
      },
      {
        path: "document",
        element: <Document />,
        children: [
          {
            path: "detaildoc/:detaildocId",
            element: <DetailDoc />,
          },
        ],
      },
      {
        path: "mocktest",
        element: <PageMocktest />,
       
      },
      {
        path: "contest",
        element: <Contest />,
      },
      {
        path: "create-question",
        element: <CreateQuestion />,
      },
      {
        path: `add-section/:id`,
        element: <AddSectionToExam />,
      },
      {
        path : "infor-exam" ,
        element : <InforExams/>
      },
      {
        path : 'user-test',
        element : <Test/>

      },
      {
        path: "displayhome",
        element: <DisplayHome />,
        children: [
          {
            path: "detaildisplayhome/:detaildisplayhomeId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displaypages",
        element: <DisplayPages />,
        children: [
          {
            path: "detaildisplaypages/:detaildisplaypagesId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayprogram",
        element: <DisplayProgram />,
        children: [
          {
            path: "detaildisplayprogram/:detaildisplayprogramId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayBanner",
        element: <DisplayBanner />,
        children: [
          {
            path: "detaildisplayBanner/:detaildisplayBannerId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayVstep",
        element: <DisplayVstep />,
        children: [
          {
            path: "detaildisplayVstep/:detaildisplayVstepId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayaptis",
        element: <DisplayAptis />,
        children: [
          {
            path: "detaildisplayaptis/:detaildisplayaptisId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayAcademicEnglish",
        element: <AcademicEnglish />,
        children: [
          {
            path: "detaildisplayAcademicEnglish/:detaildisplayAcademicEnglishId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayielts",
        element: <IELTS />,
        children: [
          {
            path: "detaildisplayielts/:detaildisplayieltsId",
            element: <DetailDisplay />,
          },
        ],
      },
      {
        path: "displayslide",
        element: <Slide />,
      },
    ],
  },
]);
