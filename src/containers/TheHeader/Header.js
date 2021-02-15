import React from "react";
import PropTypes from "prop-types";
import { CHeaderNav } from "@coreui/react";
import { Link } from "react-router-dom";
import TheHeaderDropdown from "./TheHeaderDropdown";
import TheHeaderDropdownNotif from "./TheHeaderDropdownNotif";
import {
	LinkText,
	HeaderLink,
	ArrowLeft,
	HeaderTitle,
	Header,
} from "./Header.styles";

const HeaderComponent = ({ type, next }) => {
	return (
		<Header>
			{next && (
				<Link to="/sign-up">
					<ArrowLeft />
				</Link>
			)}
			{type === "dashboard" && <HeaderTitle>Dashboard</HeaderTitle>}
			<CHeaderNav className="d-md-down-none mr-auto" />
			{type === "dashboard" ? (
				<CHeaderNav>
					<TheHeaderDropdownNotif />
					<TheHeaderDropdown />
				</CHeaderNav>
			) : type === "login" ? (
				<LinkText>
					Don’t have an account?
					<HeaderLink to="/sign-up"> Sign Up</HeaderLink>
				</LinkText>
			) : (
				<LinkText>
					Already a member? <HeaderLink to="/">Sign In</HeaderLink>
				</LinkText>
			)}
		</Header>
	);
};

HeaderComponent.propTypes = {
	simple: PropTypes.bool,
};

HeaderComponent.defaultProps = {
	simple: false,
};

export default HeaderComponent;
