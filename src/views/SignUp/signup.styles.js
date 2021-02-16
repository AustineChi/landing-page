import styled from "styled-components";
import { colors } from "../../styles";
import { ReactComponent as ApprovalMarkSVG } from "../../assets/icons/approvalMark.svg";

export const Container = styled.div`
	max-width: 402px;
	width: 100%;
	margin: 0 auto;
`;

export const TopText = styled.p`
	font-size: 28px;
	font-weight: bold;
	color: ${colors.color5};
	letter-spacing: 0;
	margin: 0;
`;

export const DescText = styled.p`
	font-size: 16px;
	color: ${colors.color3};
	letter-spacing: 0;
	margin: 0;
`;

export const Form = styled.div`
	width: 100%;
	max-width: 375px;
	margin: 32px 0;
`;

export const Space = styled.div`
	height: ${({ height }) => height || "20px"};
`;

export const LabelText = styled.span`
	font-size: 16px;
	color: ${colors.color1};
	& span.first-child {
		font-weight: 700;
	}
`;
export const ApprovalMark = styled(ApprovalMarkSVG)`
	margin-right: 10px;
`;

export const ApprovalText = styled.span`
	font-size: 13px;
	color: ${colors.color3};
`;

export const CollapsibleText = styled(ApprovalText)`
	margin: 0;
	padding: 0;
`;

export const Box = styled.label`
	display: block;
	position: relative;
	padding: 25px 50px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border-radius: 6px;
	border: ${({ active }) => (active ? "1px solid #FA4A84" : "none")};
	box-shadow: 0 0 2px 0 rgba(131, 151, 171, 0.12),
		0 4px 8px 0 rgba(131, 151, 171, 0.24);
`;

export const CheckInput = styled.input`
	position: absolute;
	opacity: 0;
	cursor: pointer;
`;

export const Checkmark = styled.span`
	position: absolute;
	top: 40px;
	left: 25px;
	height: 16px;
	width: 16px;
	background-color: ${({ active }) => (active ? "#FA4A84" : "#eee")};
	border-radius: 50%;
	& :after {
		content: "";
		position: absolute;
		display: none;
	}
`;

export const SubmitButton = styled.button`
	background-color: ${colors.color2};
	border-radius: 8px;
	width: 100%;
	margin-top: 32px;
	border: none;
	color: ${colors.white};
	height: 50px;
`;

export const TextInputField = styled.div`
	position: relative;
	height: 44px;
	line-height: 44px;
	margin: 16px 0;
	background-color: ${colors.color6};
	border-radius: 6px;
`;

export const TextInput = styled.input`
	width: 100%;
	border: 0;
	outline: 0;
	padding: 0;
	height: 44px;
	padding-bootom: 0;
	border-bottom: 2px solid #d3d3d3;
	box-shadow: none;
	background-color: ${colors.color6};
	color: #111;
	&:invalid {
		outline: 0;
	}
	&:focus {
		border: 2px solid;
		border-image: linear-gradient(
				269deg,
				#00d2ff 0%,
				#7e51ff 51%,
				#fa4a84 100%
			)
			0 0 1 0;
	}
	&:valid {
		border: 2px solid;
		border-image: linear-gradient(
				269deg,
				#00d2ff 0%,
				#7e51ff 51%,
				#fa4a84 100%
			)
			0 0 1 0;
	}
	&:focus ~ label {
		top: -14px;
		font-size: 10px;
		color: #fa4a84;
	}
	&:valid ~ label {
		font-size: 14px;
		top: -14px;
		font-size: 10px;
		color: #fa4a84;
	}
`;

export const TextInputFieldLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	color: #d3d3d3;
	transition: 0.2s all;
	cursor: text;
`;
