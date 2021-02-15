import React from "react";
import PropTypes from "prop-types";
import { TheHeader, TheSidebar } from "../index";
import { Main, Wrapper, Container } from "./layout.styles";

const TheLayout = ({ children, type, back }) => (
	<Main>
		<TheSidebar type={type} />
		<Wrapper type={type}>
			<TheHeader next={back} type={type} />
			<Container>{children}</Container>
		</Wrapper>
	</Main>
);

TheLayout.propTypes = {
	children: PropTypes.any,
	back: PropTypes.bool,
	type: PropTypes.string,
};

TheLayout.defaultProps = {
	dashboardTemplate: false,
	next: false,
	type: "dashboard",
};

export default TheLayout;
