import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TeacherLogin = () => {
	return (
		<Container>
			<First>
				<Logo>
					<img src='/Img/kod.png' alt='' />
				</Logo>

				<HeadHold>
					<Cont>
						<Head>Welcome Back to SchoolKod</Head>

						<p> Sign in your Teacher account </p>

						<InputHold>
							<Input placeholder='Enter Email' />
							<Input placeholder='Enter schoolName' />
							<Input placeholder='Enter password' />
							{/* <Input placeholder='Enter your name' /> */}
						</InputHold>

						<ButHold>
							<Button>Log In Now</Button>
						</ButHold>
						<span>
							Don't have an account?{" "}
							<Link style={{ textDecoration: "none" }} to='/get-started'>
								<span style={{ color: "#1A75FC", cursor: "pointer" }}>
									Create account
								</span>
							</Link>
						</span>
					</Cont>
				</HeadHold>
			</First>

			<Second>
				<Wrapper>
					<Text>
						From the School Admin, Teachers, Students down to the Parents
						schoolcode is here to provide learning facilitated by technology
						that gives students some element of control over time, place, path
						and/or pace.
					</Text>

					<p>~ Luciana C.</p>

					<ImageHold>
						<Image src='/Img/SckoolCodMain.png' />
					</ImageHold>
				</Wrapper>
			</Second>
		</Container>
	);
};

export default TeacherLogin;

const HeadHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

const ButHold = styled.div`
	/* padding-left: 30px; */
`;

const Button = styled.div`
	padding: 15px 40px;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	/* width: 200px; */
	/* height: 50px; */
	color: white;
	border-radius: 30px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		transform: scale(0.98);
	}
`;

const InputHold = styled.div`
	display: flex;
	align-items: flex-start;
	/* padding-left: 30px; */
	flex-direction: column;
	margin-top: 10px;
	width: 100%;
`;
const Input = styled.input`
	border: none;
	border-bottom: 1px solid silver;
	outline: none;
	padding-bottom: 5px;
	width: 100%;
	height: 30px;
	margin-bottom: 10px;

	@media screen and (max-width: 500px) {
		width: 90%;
	}
`;

const Head = styled.div`
	font-size: 22px;
	font-weight: 700;
	text-align: left;
	/* padding-left: 30px; */
`;

const Cont = styled.div`
	display: flex;
	justify-content: center;
	/* background-color: red; */
	/* align-items: center; */
	flex-direction: column;
	text-align: left;

	height: 100%;
	text-align: center;
	width: 60%;
	/* background-color: red; */
	p {
		width: 100%;
		margin: 0;
		margin-top: 5px;
		padding-bottom: 20px;
		text-align: left;
		/* padding-left: 30px; */
	}

	@media screen and (max-width: 960px) {
		width: 90%;
	}
`;

const Logo = styled.div`
	margin-top: 20px;
	margin-left: 20px;

	img {
		width: 100px;
	}
`;

const ImageHold = styled.div`
	flex: 1;
	/* background-color: black; */
	height: 100%;
	width: 100%;
`;
const Image = styled.img`
	object-fit: cover;
	height: 100%;
	border: 3px solid gray;
	border-top-left-radius: 20px;
	/* width: 100%; */
`;

const Text = styled.div`
	font-size: 20px;
	margin-top: 100px;
	font-weight: 600;
`;

const Wrapper = styled.div`
	width: 90%;
	height: 100%;
`;

const First = styled.div`
	width: 50%;
	/* text-align: left; */

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;
const Second = styled.div`
	height: 100%;
	width: 50%;
	background-color: #f9fafb;
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		padding-bottom: 50px;
	}

	@media screen and (max-width: 960px) {
		display: none;
	}
`;
const Container = styled.div`
	display: flex;

	height: 100vh;
	overflow: hidden;

	@media screen and (max-width: 750px) {
		overflow: auto;
		overflow-x: hidden;
		/* height: 100%; */
	}
`;
