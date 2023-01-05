import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import MainLogin from "../Auth/LoginAuth/MainLogin";
import ParentLogin from "../Auth/LoginAuth/SchoolLogin";
import StudentLogin from "../Auth/LoginAuth/StudentLogin";
import TeacherLogin from "../Auth/LoginAuth/TeacherLogin";
import MainAuth from "../Auth/MainAuth";
import ParentSignup from "../Auth/SchoolSignUp";
import StudentSignup from "../Auth/StudentSignup";
import TeachersSignUp from "../Auth/TeachersSignUp";
import FeeMangement from "../DashBoard/AdminDash/Screen/Expenses";
import Academics from "../DashBoard/AdminDash/Screen/Academics";
import Dashboard from "../DashBoard/AdminDash/Screen/Dashboard";
import Header from "../DashBoard/AllNav/Header";
import Report from "../DashBoard/AdminDash/Screen/Report";
import Notification from "../DashBoard/AdminDash/Screen/Notification";
import SchoolSignUp from "../Auth/SchoolSignUp";
import ConfirmSchool from "../Auth/ConfirmSchool";
import SchoolLogin from "../Auth/LoginAuth/SchoolLogin";
import SchoolConfirmVerify from "../Auth/SchoolConfirmVerify";
import TeacherHeader from "../DashBoard/TeacherDash/TeacherNav/TeacherHeader";
import TeacherDashboard from "../DashBoard/TeacherDash/TeacherComp/TeacherDashboard";
import StudentHeader from "../DashBoard/StudentDash/StudentNav/StudenHeader";
import StudentDashboard from "../DashBoard/StudentDash/StudentDashboard";
import PrivateRoute from "../Global/PrivateRoute";
import StudentTest from "../DashBoard/StudentDash/StudentTest";
import Attendance from "../DashBoard/TeacherDash/TeacherComp/Attendance/Attendance";
import SubjectTest from "../DashBoard/TeacherDash/TeacherComp/Test/SubjectTest";
import NoticeBoard from "../DashBoard/TeacherDash/TeacherComp/NoticeBoard/NoticeBoard";

import AssignmentScreen from "../DashBoard/StudentDash/AssignmentScreen";

import Students from "../DashBoard/AdminDash/Screen/Students";
import ClassRooms from "../DashBoard/AdminDash/Screen/ClassRooms";
import ConfirmTeacherMessage from "../Auth/ConfirmTeachersMessage";
import ClassRoomDetails from "../DashBoard/AdminDash/ClassRoomDetails";
import StudentDetails from "../DashBoard/AdminDash/StudentDetails";
import AllTest from "../DashBoard/TeacherDash/TeacherComp/Test/AllTest";
import TestDetail from "../DashBoard/TeacherDash/TeacherComp/Test/TestDetail";
import CreateTest from "../DashBoard/TeacherDash/TeacherComp/Test/CreateTest";

import TimeTable from "../DashBoard/StudentDash/TimeTable";
import StudentReport from "../DashBoard/StudentDash/StudentReport";
import StudentNot from "../DashBoard/StudentDash/StudentNot";

import Expenses from "../DashBoard/AdminDash/Screen/Expenses";
import Accessment from "../DashBoard/TeacherDash/Accessment";
import DetailsTest from "../DashBoard/StudentDash/DetailsTest";
import TeacherReport from "../DashBoard/TeacherDash/TeacherComp/Report/TeacherReport";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <PrivateRoute />,
    },

    {
      path: "/get-started",
      children: [
        {
          index: true,
          element: <MainAuth />,
        },

        {
          path: "teacher-signup",
          element: <TeachersSignUp />,
        },
        // {
        // 	path: "student-signup",
        // 	element: <StudentSignup />,
        // },
        {
          path: "school-signup",
          element: <SchoolSignUp />,
        },
      ],
    },

    {
      path: "/login",
      children: [
        {
          index: true,
          element: <MainLogin />,
        },

        {
          path: "teacher",
          element: <TeacherLogin />,
        },
        {
          path: "student",
          element: <StudentLogin />,
        },
        {
          path: "school",
          element: <SchoolLogin />,
        },
      ],
    },

    //Admin/School Route

    {
      path: "/admin-dashboard",
      children: [
        {
          index: true,
          element: (
            <>
              <PrivateRoute />
            </>
          ),
        },
        {
          path: "createteacher",
          element: (
            <>
              <Header />
              <Academics />
            </>
          ),
        },
        {
          path: "createstudent",
          children: [
            {
              index: true,
              element: (
                <>
                  <Header />
                  <Students />
                </>
              ),
            },

            {
              path: "view-student-detail/:id",
              element: (
                <>
                  <Header />
                  <StudentDetails />
                </>
              ),
            },
          ],
        },
        {
          path: "classrooms",
          children: [
            {
              index: true,
              element: (
                <>
                  <Header />
                  <ClassRooms />
                </>
              ),
            },
            {
              path: "view-class-details/:id",
              element: (
                <>
                  <Header />
                  <ClassRoomDetails />
                </>
              ),
            },
          ],
        },
        {
          path: "expenses",
          element: (
            <>
              <Header />
              <FeeMangement />
            </>
          ),
        },
        {
          path: "report",
          element: (
            <>
              <Header />
              <Report />
            </>
          ),
        },
        {
          path: "notifications",
          element: (
            <>
              <Header />
              <Notification />
            </>
          ),
        },
      ],
    },

    //Teachers Route
    {
      path: "/teacher-dashboard",
      children: [
        {
          index: true,
          element: (
            <>
              <PrivateRoute />
            </>
          ),
        },

        {
          path: "attendance",
          element: (
            <>
              <TeacherHeader />
              <Attendance />
            </>
          ),
        },
        {
          path: "test",
          children: [
            {
              index: true,
              element: (
                <>
                  <TeacherHeader />
                  <SubjectTest />
                </>
              ),
            },

            {
              path: "new_test/:id",
              element: (
                <>
                  <TeacherHeader />
                  <CreateTest />
                </>
              ),
            },

            {
              path: "alltest/:id",
              children: [
                {
                  index: true,
                  element: (
                    <>
                      <TeacherHeader />
                      <AllTest />
                    </>
                  ),
                },

                {
                  path: "preview_test",
                  element: (
                    <>
                      <TeacherHeader />
                      <TestDetail />
                    </>
                  ),
                },
              ],
            },
          ],
        },

        {
          path: "report",
          element: (
            <>
              <TeacherHeader />
              <TeacherReport />
            </>
          ),
        },
        {
          path: "noticeboard",
          element: (
            <>
              <TeacherHeader />
              <NoticeBoard />
            </>
          ),
        },
      ],
    },

    //Student Route
    {
      path: "/student-dashboard",
      children: [
        {
          index: true,
          element: (
            <>
              <StudentHeader />
              <StudentDashboard />
            </>
          ),
        },

        {
          path: "assignment",
          element: (
            <>
              <StudentHeader />
              <AssignmentScreen />
            </>
          ),
        },
        {
          path: "student-test",
          children: [
            {
              index: true,
              element: (
                <>
                  <StudentHeader />
                  <StudentTest />
                </>
              ),
            },
            {
              path: "student-test-details/:id",
              element: (
                <>
                  <StudentHeader />
                  <DetailsTest />
                </>
              ),
            },
          ],
        },
      ],
    },

    {
      path: "/confirm",
      element: <ConfirmSchool />,
    },
    {
      path: "/api/school/verified/:id",
      element: <SchoolConfirmVerify />,
    },
    {
      path: "/api/teacher/verified/:id",
      element: <ConfirmTeacherMessage />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default AllRoutes;
