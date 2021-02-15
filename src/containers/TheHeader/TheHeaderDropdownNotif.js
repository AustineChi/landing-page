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
							<b>CPU Usage</b>
						</small>
					</div>
					<CProgress size="xs" color="info" value={25} />
					<small className="text-muted">
						348 Processes. 1/4 Cores.
					</small>
				</CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>Memory Usage</b>
						</small>
					</div>
					<CProgress size="xs" color="warning" value={70} />
					<small className="text-muted">11444GB/16384MB</small>
				</CDropdownItem>
				<CDropdownItem className="d-block">
					<div className="text-uppercase mb-1">
						<small>
							<b>SSD 1 Usage</b>
						</small>
					</div>
					<CProgress size="xs" color="danger" value={90} />
					<small className="text-muted">243GB/256GB</small>
				</CDropdownItem>
			</CDropdownMenu>
		</CDropdown>
	);
};

export default TheHeaderDropdownNotif;
