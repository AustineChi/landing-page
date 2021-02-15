import React from "react";
import {
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
} from "@coreui/react";
import styled from "styled-components";
import { ReactComponent as DropDownSVG } from "../../assets/icons/dropdownArrow.svg";

const DropDownIcon = styled(DropDownSVG)`
	cursor: pointer;
`;

const DropdownMenu = styled(CDropdownMenu)`
	margin: 20px;
	font-size: 13px;
	color: #1c1335;
	letter-spacing: 0;
	width: 258px;
	box-shadow: 0 2px 22px 0 rgba(131, 151, 171, 0.24);
`;

const TheSidebarDropdown = () => {
	return (
		<CDropdown inNav className="c-header-nav-item mx-2">
			<CDropdownToggle className="c-header-nav-link" caret={false}>
				<DropDownIcon />
			</CDropdownToggle>
			<DropdownMenu placement="bottom-end">
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>Buiness Name 1</b>
						</small>
					</div>
				</CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>Buiness Name 2</b>
						</small>
					</div>
				</CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>Buiness Name 3</b>
						</small>
					</div>
				</CDropdownItem>
			</DropdownMenu>
		</CDropdown>
	);
};

export default TheSidebarDropdown;
