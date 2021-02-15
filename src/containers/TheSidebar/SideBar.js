import React from "react";

import PropTypes from "prop-types";
import { CSidebarBrand } from "@coreui/react";

import {
	Sidebar,
	MoneyBox,
	Logo,
	FooterText,
	TopText,
	SubText,
	RectangularBox,
	BoxContainer,
	FooterLogo,
	TextBox,
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
					<FooterLogo />
				</>
			) : (
				<>
					<CSidebarBrand className="d-md-down-none" to="/">
						<Logo />
					</CSidebarBrand>
					<RectangularBox>
						<TextBox>
							<SpacedLines />
							<TopText>
								Create multiple <br />
								sub-account
							</TopText>
							<SubText>
								{" "}
								Organise your business finances easily <br />
								with multiple accounts. No limits!{" "}
							</SubText>
						</TextBox>
						<BoxContainer>
							<MoneyBox />
						</BoxContainer>
					</RectangularBox>
					<FooterText>© 2020 Prospa Inc</FooterText>
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
