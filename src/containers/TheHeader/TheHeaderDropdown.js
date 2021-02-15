import React from "react";
import {
	CBadge,
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
	CImg,
} from "@coreui/react";
import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import ProfileImageSVG from "../../assets/images/ProfileImage.svg";

const TheHeaderDropdown = () => {
	return (
		<CDropdown inNav className="c-header-nav-items mx-2" direction="down">
			<CDropdownToggle className="c-header-nav-link" caret={false}>
				<div className="c-avatar">
					<CImg
						src={ProfileImageSVG}
						className="c-avatar-img"
						alt="admin@bootstrapmaster.com"
					/>
				</div>
			</CDropdownToggle>
			<CDropdownMenu className="pt-0" placement="bottom-end">
			
				<CDropdownItem>
					<Link to="/">
						<CIcon name="cil-lock-locked" className="mfe-2" />
						Log Out
					</Link>
				</CDropdownItem>
			</CDropdownMenu>
		</CDropdown>
	);
};

export default TheHeaderDropdown;
