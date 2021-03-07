import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../containers/TheLayout";
import {
	Container,
	TopText,
	DescText,
	Space,
	Form,
	SubmitButton,
	TextInputField,
	TextInput,
	TextInputFieldLabel,
} from "./sigin.styles";

const SignIn = () => {
	return (
		<Layout type={"login"}>
			<Space height={"32px"} />
			<Container>
				<TopText>Welcome back</TopText>
				<DescText>A short description about account types</DescText>
				<Form>
					<TextInputField>
						<TextInput type="email" id="email" required />
						<TextInputFieldLabel htmlFor="email">
							Email:
						</TextInputFieldLabel>
					</TextInputField>
					<TextInputField>
						<TextInput type="password" id="password" required />
						<TextInputFieldLabel htmlFor="password">
							Enter password:
						</TextInputFieldLabel>
					</TextInputField>
					<Link to="/dashboard">
						<SubmitButton>Next</SubmitButton>
					</Link>
				</Form>
			</Container>
		</Layout>
	);
};

export default SignIn;
