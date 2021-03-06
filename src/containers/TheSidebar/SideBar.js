import React from "react";

import PropTypes from "prop-types";

import {
	Sidebar,
	MoneyBox,
	Logo,
	FooterText,
	TopText,
	SubText,
	RectangularBox,
	BoxContainer,
	TextBox,
	SidebarBrand,
} from "./SideBar.styles";

import { SpacedLines, NavItems, SideBarTopNavSection } from "../../components";

import navigation from "./_nav";

const TheSidebar = ({ type }) => {
	return (
		<Sidebar type={type}>
			{type === "dashboard" ? (
				<>
					<SideBarTopNavSection />
					<NavItems data={navigation} />
			
				</>
			) : (
				<>
					<SidebarBrand>
						<Logo />
					</SidebarBrand>
					<RectangularBox>
						<TextBox>
							<SpacedLines />
							<TopText>Create your account</TopText>
							<SubText>
								Organise your business finances easily <br />
								with multiple accounts. No limits!
							</SubText>
						</TextBox>
						<BoxContainer>
							<MoneyBox />
						</BoxContainer>
					</RectangularBox>
					<FooterText>© 2020 Austine Inc</FooterText>
				</>
			)}
		</Sidebar>
	);
};

TheSidebar.propTypes = {
	simple: PropTypes.bool,
};

TheSidebar.defaultProps = {
	simple: false,
};

export default React.memo(TheSidebar);
