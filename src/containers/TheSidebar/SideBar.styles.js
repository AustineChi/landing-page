import styled from "styled-components";

import { colors, breakPoints } from "../../styles";
import MiddleSVG from "../../assets/images/MiddleIcon.png";

import { ReactComponent as LogoSVG } from "../../assets/icons/logo.svg";
import { ReactComponent as FooterLogoSVG } from "../../assets/icons/footerLogo.svg";

export const MoneyBox = styled.img.attrs(() => ({ src: MiddleSVG }))`
	margin: 0 auto;
`;

export const Sidebar = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 1030;
	color: ${({ type }) =>
		type === "dashboard" ? colors.color6 : colors.white};
	flex: ${({ type }) => (type === "dashboard" ? " 0 0 300px" : " 0 0 358px")};
	width: ${({ type }) => (type === "dashboard" ? "300px" : "358px")};
	padding: 0 32px;
	display: flex;
	flex-direction: column;
	background: ${({ type }) =>
		type === "login"
			? colors.color1
			: type === "signup"
			? colors.color4
			: colors.white};
	box-shadow: ${({ type }) =>
		type === "dashboard" ? "0 2px 22px 0 rgba(131,151,171,0.24)" : "none"};
	@media (max-width: ${breakPoints.large}px) {
		display: none;
	}
`;

export const SidebarBrand = styled.div`
padding-top: 32px;
padding-bottom: 80px;

`;

export const Logo = styled(LogoSVG)`
	width: 109px;
	height: 24px;
`;

export const FooterLogo = styled(FooterLogoSVG)`
	margin: 32px 0;
`;

export const BoxContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

export const RectangularBox = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const TextBox = styled.div``;

export const TopText = styled.span`
	margin-top: 80px;
	font-size: 32px;
	color: ${colors.white};
	letter-spacing: 0;
	margin-bottom: 0;
	padding-bottom: 0;
	display: block;
`;

export const SubText = styled.span`
	font-size: 14px;
	color: ${colors.white};
	letter-spacing: 0;
	line-height: 18px;
	margin: 0;
	display: block;
`;

export const FooterText = styled.div`
	font-size: 14px;
	color: ${colors.white};
	letter-spacing: 0;
	line-height: 24px;
	padding: 32px 0;
`;
