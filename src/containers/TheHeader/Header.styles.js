import styled from "styled-components";
import { darken } from "polished";

import { Link } from "react-router-dom";
import { colors, breakPoints } from "../../styles";
import { ReactComponent as ArrowLeftSVG } from "../../assets/icons/ArrowLeft.svg";

export const Header = styled.div`
	display: flex;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1029;
	background: #fff;
	border: none;
	height: 80px;
	flex-direction: row;
	flex-wrap: wrap;
	flex-shrink: 0;
	position: sticky;
`;

export const LinkText = styled.div`
	font-size: 14px;
	color: ${colors.color1};
	letter-spacing: 0;
	text-align: right;
	margin: 37px 90px;
	font-weight: bold;
	@media (max-width: ${breakPoints.small}px) {
		margin: 10px 3%;
	}
`;

export const HeaderLink = styled(Link)`
	color: ${colors.color2};
	&:hover {
		color: ${darken("0.2", colors.color2)};
	}
`;

export const ArrowLeft = styled(ArrowLeftSVG)`
	margin: 32px 64px;
	cursor: pointer;
	@media (max-width: ${breakPoints.small}px) {
		margin: 10px 3%;
	}
`;

export const HeaderTitle = styled.span`
	font-weight: bold;
	font-size: 21px;
	color: ${colors.color3};
	letter-spacing: 0;
	margin: 20px 90px;
	@media (max-width: ${breakPoints.small}px) {
		display: none;
	}
`;
