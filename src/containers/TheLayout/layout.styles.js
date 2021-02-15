import styled from "styled-components";
import { breakPoints } from "../../styles";

export const Main = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100vh;
`;

export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	background: ${({ type }) => (type === "dashboard" ? "#F4F8FB" : "#fff")};
	min-width: 0;
	min-height: 100vh;
	margin-left: ${({ type }) => (type === "dashboard" ? "300px" : "358px")};
	&::before {
		box-sizing: border-box;
	}
	&::after {
		box-sizing: border-box;
	}
	@media (max-width: ${breakPoints.large}px) {
		margin-left: 0;
	}
`;

export const Container = styled.div`
	flex: 1;
	margin: 36px 90px;
	@media (max-width: ${breakPoints.small}px) {
		margin: 36px 5%;
	}
`;
