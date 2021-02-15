import React from "react";
import styled from "styled-components";

const LineBox = styled.div`
	display: flex;
`;

const Line = styled.div`
	flex: 1;
	height: 2px;
	background: ${({ color }) => color};
	margin-right: ${({ size }) => (size ? size : "o")};
`;

export const SpacedLines = () => {
	return (
		<LineBox>
			<Line color={"#EEEFF7"} size={"5px"} />
			<Line color={"#8397AB"} size={"5px"} />
			<Line color={"#8397AB"} size={"5px"} />
			<Line color={"#8397AB"} size={"5px"} />
			<Line color={"#8397AB"} />
		</LineBox>
	);
};
