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
import FeeMangement from "../DashBoard/AdminDash/Screen/FeeMangement";
import Commubication from "../DashBoard/AdminDash/Screen/Commubication";
import Academics from "../DashBoard/AdminDash/Screen/Academics";
import Dashboard from "../DashBoard/AdminDash/Screen/Dashboard";
import Header from "../DashBoard/AllNav/Header";
import Report from "../DashBoard/AdminDash/Screen/Report";
import Notification from "../DashBoard/AdminDash/Screen/Notification";
import SchoolSignUp from "../Auth/SchoolSignUp";
import ConfirmSchool from "../Auth/ConfirmSchool";
import SchoolLogin from "../Auth/LoginAuth/SchoolLogin";
import SchoolConfirmVerify from "../Auth/SchoolConfirmVerify";

const AllRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: <Home />,
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

		{
			path: "/admin-dashboard",
			children: [
				{
					index: true,
					element: (
						<>
							<Header />
							<Dashboard />
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
					element: (
						<>
							<Header />
							<Commubication />
						</>
					),
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

		{
			path: "/confirm",
			element: <ConfirmSchool />,
		},
		{
			path: "/api/school/verified/:id",
			element: <SchoolConfirmVerify />,
		},

		{
			path: "*",
			element: <NotFound />,
		},
	]);

	return element;
};

export default AllRoutes;
