import React from "react";
import styled from "styled-components";
import { colors } from "../../styles";

const List = styled.div`
	margin-top: 64px;
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const ListItem = styled.div`
    display: flex;
    font-size: 14px; 
    padding: 16px 0;
    color: ${colors.color3}; 
    letter-spacing: 0;
    font-weight; bold;
    cursor: pointer
`;

const Icon = styled.div`
	width: 24;
	padding: 0;
	margin-right: 16px;
`;
const ItemName = styled.div`
	flex: 1;
`;

export const NavItems = ({ data }) => {
	return (
		<List>
			{data.map((item, key) => {
				return (
					<ListItem key={key}>
						<Icon>{item.icon}</Icon>
						<ItemName>{item.name}</ItemName>
					</ListItem>
				);
			})}
		</List>
	);
};
