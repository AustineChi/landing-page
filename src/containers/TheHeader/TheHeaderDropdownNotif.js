import React from "react";
import {
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
	CProgress,
} from "@coreui/react";
import { ReactComponent as NotificationSVG } from "../../assets/icons/notificationIcon.svg";

const TheHeaderDropdownNotif = () => {
	return (
		<CDropdown inNav className="c-header-nav-item mx-2">
			<CDropdownToggle className="c-header-nav-link" caret={false}>
				<NotificationSVG />
			</CDropdownToggle>
			<CDropdownMenu placement="bottom-end" className="pt-0">
				<CDropdownItem
					header
					tag="div"
					className="text-center"
					color="light"
				></CDropdownItem>
				<CDropdownItem header tag="div" color="light"></CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>Money</b>
						</small>
					</div>
					<CProgress size="xs" color="info" value={25} />
			
				</CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>Transfer</b>
						</small>
					</div>
					<CProgress size="xs" color="warning" value={70} />
				</CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>balance</b>
						</small>
					</div>
					<CProgress size="xs" color="danger" value={90} />
				</CDropdownItem>
			</CDropdownMenu>
		</CDropdown>
	);
};

export default TheHeaderDropdownNotif;
