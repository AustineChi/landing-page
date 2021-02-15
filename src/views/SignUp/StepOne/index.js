import React from "react";
import { Link } from "react-router-dom";
// import {TelephoneNumber} from '../../../components'
import Layout from "../../../containers/TheLayout";
import {
	Container,
	TopText,
	DescText,
	Form,
	SubmitButton,
	TextInputField,
	TextInput,
	TextInputFieldLabel,
} from "../signup.styles";

const SignUP = () => {
	return (
		<Layout type={"signup"}>
			<Container>
				<TopText>Create your account</TopText>
				<DescText>A short description about account types</DescText>
				<Form>
					<TextInputField>
						<TextInput type="text" id="firstname" required />
						<TextInputFieldLabel htmlFor="firstname">
							First name:
						</TextInputFieldLabel>
					</TextInputField>

					<TextInputField>
						<TextInput type="text" id="lastname" required />
						<TextInputFieldLabel htmlFor="lastname">
							Last name:
						</TextInputFieldLabel>
					</TextInputField>
					{/* <TelephoneNumber/> */}
					<TextInputField>
						<TextInput type="email" id="email" required />
						<TextInputFieldLabel htmlFor="email">
							Email:
						</TextInputFieldLabel>
					</TextInputField>
					<Link to="/sign-up/next">
						<SubmitButton>Next</SubmitButton>
					</Link>
				</Form>
			</Container>
		</Layout>
	);
};

export default SignUP;
