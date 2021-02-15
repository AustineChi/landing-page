import React from "react";
import styled from "styled-components";
import { colors } from "../../styles";
import TheSidebarDropdown from "../../containers/TheHeader/TheSidebarDropdown";

const Container = styled.div`
	display: flex;
	height: 40px;
	margin-top: 32px;
`;

const Identity = styled.div`
	width: 40px;
	height: 40px;
	background-color: ${colors.color1};
	color: ${colors.white};
	font-weight: bold;
	font-size: 12px;
	border-radius: 50%;
	padding: 12px;
`;
const DescBox = styled.div`
	flex: 1;
	text-align: center;
`;
const DescName = styled.div`
	font-weight: bold;
	font-size: 16px;
	color: ${colors.color5};
	letter-spacing: 0;
`;
const ManageAccount = styled.div`
	font-size: 12px;
	color: ${colors.color3};
	letter-spacing: 0;
`;

export const SideBarTopNavSection = () => {
	return (
		<Container>
			<Identity>BN</Identity>
			<DescBox>
				<DescName>Clayvant Inc.</DescName>
				<ManageAccount>manage account</ManageAccount>
			</DescBox>
			<TheSidebarDropdown />
		</Container>
	);
};
