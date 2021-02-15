import React from "react";
import {
	CDropdown,
	CDropdownItem,

} from "@coreui/react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = () => {
	return (
		<CDropdown inNav className="c-header-nav-items mx-2" direction="down">
				<CDropdownItem>
					<Link to="/">
						<CIcon name="cil-lock-locked" className="mfe-2" />
						Log Out
					</Link>
				</CDropdownItem>
		</CDropdown>
	);
};

export default TheHeaderDropdown;
