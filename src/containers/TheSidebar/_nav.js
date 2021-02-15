import React from "react";
import { ReactComponent as AccountsSVG } from "../../assets/icons/accounts.svg";
import { ReactComponent as TransferSVG } from "../../assets/icons/transfer.svg";
import { ReactComponent as InvoiceSVG } from "../../assets/icons/invoice.svg";
import { ReactComponent as ManagementsVG } from "../../assets/icons/management.svg";

const _nav = [
	{
		name: "Accounts",
		to: "/Accounts",
		icon: <AccountsSVG />,
	},
	{
		name: "Transfer",
		to: "/Transfer",
		icon: <TransferSVG />,
	},
	{
		name: "Invoice",
		to: "/Invoice",
		icon: <InvoiceSVG />,
	},
	{
		name: "Management",
		to: "/Management",
		icon: <ManagementsVG />,
	},
	{
		name: "Security",
		to: "/Security",
		icon: <ManagementsVG />,
	},
	{
		name: "Support",
		to: "/Support",
		icon: <ManagementsVG />,
	},
];

export default _nav;
