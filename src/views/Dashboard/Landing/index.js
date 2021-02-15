import React from "react";
import { Link } from "react-router-dom";
import { CRow, CCol, CProgress } from "@coreui/react";
import { hexToRgba } from "@coreui/utils";

import { CChartLine } from "@coreui/react-chartjs";

import Layout from "../../../containers/TheLayout";
import {
	AddFlex,
	TopText,
	DescText,
	AddButton,
	Container,
	AccountContainer,
	Amount,
	ListGroup,
	ListGroupItem,
	IconBox,
	ProgressTitle,
	CardHeader,
	Card,
	CardBody,
} from "./landing.styles";

import { ReactComponent as CurentAccountSVG } from "../../../assets/icons/currentAccount.svg";
import { ReactComponent as SavingsAccountSVG } from "../../../assets/icons/savingsAccount.svg";
import { ReactComponent as TransferSVG } from "../../../assets/icons/transfer2.svg";
import { ReactComponent as InternetSVG } from "../../../assets/icons/internet.svg";
import { ReactComponent as MarketingSVG } from "../../../assets/icons/marketing.svg";
import { ReactComponent as BankFeesSVG } from "../../../assets/icons/bank-fees.svg";

const defaultOptions = (() => {
	return {
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		scales: {
			xAxes: [
				{
					gridLines: {
						drawOnChartArea: true,
					},
				},
			],
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						maxTicksLimit: 5,
						// stepSize: Math.ceil(20000 / 5),
						max: 100,
					},
					gridLines: {
						display: true,
					},
				},
			],
		},
	};
})();

const Dashboard = () => {
	return (
		<Layout>
			<Container>
				<AddFlex type={"space-between"}>
					<div>
						<TopText bold={true}>Welcome back, Kathy</TopText>
						<DescText>
							Here’s what has been happening in the last
							<Link to="/">7 days</Link>
						</DescText>
					</div>
					<AddButton>Add a sub account</AddButton>
				</AddFlex>
				<AddFlex type={"space-between"} space={"32px 0"}>
					<AccountContainer>
						<AddFlex type={"space-between"}>
							<div>
								<TopText size={"14px"} color={"#1C1335"}>
									CURRENT ACCOUNT
								</TopText>
								<DescText
									size={"14px"}
									color={"#8397AB"}
									weight={"bold"}
								>
									PROVIDUS BANK - 9906533917
								</DescText>
							</div>
							<CurentAccountSVG />
						</AddFlex>
						<Amount>
							N814,800<span>.45</span>
						</Amount>
					</AccountContainer>
					<AccountContainer>
						<AddFlex type={"space-between"}>
							<div>
								<TopText size={"14px"} color={"#1C1335"}>
									
									SAVINGS ACCOUNT
								</TopText>
								<DescText size={"14px"} color={"#8397AB"}>
									SUB ACCOUNT - 12346789
								</DescText>
							</div>
							<SavingsAccountSVG />
						</AddFlex>
						<Amount>
							N39,342<span>.45</span>
						</Amount>
					</AccountContainer>
				</AddFlex>
				<CRow>
					<CCol xs="12" md="7">
						<Card>
							<CardHeader>
								June Summary
								<AddFlex space={"10px 0"}>
									<div className="mr-10">
										<TopText
											size={"14px"}
											color={"#8397AB"}
										>
											
											Money in
										</TopText>
										<DescText
											size={"14px"}
											color={"#1C1335"}
										>
											N 5,650,000
										</DescText>
									</div>
									<div className="mr-10">
										<TopText
											size={"14px"}
											color={"#8397AB"}
										>
											
											Money out
										</TopText>
										<DescText
											size={"14px"}
											color={"#1C1335"}
										>
											N 5,650,000
										</DescText>
									</div>
									<div className="mr-10">
										<TopText
											size={"14px"}
											color={"#8397AB"}
										>
											Difference
										</TopText>
										<DescText
											size={"14px"}
											color={"#1C1335"}
										>
											N 5,650,000
										</DescText>
									</div>
								</AddFlex>
							</CardHeader>
							<CardBody>
								<CChartLine
									height={"468px"}
									datasets={[
										{
											// label: 'Data One',
											backgroundColor: hexToRgba(
												"#fa4a84",
												20
											),
											borderColor: "#fa4a84",
											data: [20, 40, 53, 64, 77, 70, 50],
										},
									]}
									options={defaultOptions}
									labels={[
										"Jan",
										"Feb",
										"Mar",
										"Apr",
										"May",
										"Jun",
										"Jul",
									]}
								/>
							</CardBody>
						</Card>
					</CCol>
					<CCol xs="12" md="5">
						<Card>
							<CardHeader>Cash outflow</CardHeader>
							<CardBody>
								<ListGroup>
									<ListGroupItem>
										<div className="first">
											<IconBox color={"#E900AE"}>
												<BankFeesSVG />
											</IconBox>
											<span>Bank Fees</span>
										</div>
										<div className="second">
											<ProgressTitle>
												- N 250,000
											</ProgressTitle>
											<CProgress
												className="progress-xs"
												precision={1}
												color="warning"
												value={90}
											/>
										</div>
									</ListGroupItem>
									<ListGroupItem>
										<div className="first">
											<IconBox color={"#17ECD4"}>
												<InternetSVG />
											</IconBox>
											<span>Internet</span>
										</div>
										<div className="second">
											<ProgressTitle>
												- N 250,000
											</ProgressTitle>
											<CProgress
												className="progress-xs"
												precision={1}
												color="warning"
												value={60}
											/>
										</div>
									</ListGroupItem>
									<ListGroupItem>
										<div className="first">
											<IconBox color={"#C155FF"}>
												<MarketingSVG />
											</IconBox>
											<span>Marketing</span>
										</div>
										<div className="second">
											<ProgressTitle>
												- N 250,000
											</ProgressTitle>
											<CProgress
												className="progress-xs"
												precision={1}
												color="warning"
												value={40}
											/>
										</div>
									</ListGroupItem>
									<ListGroupItem>
										<div className="first">
											<IconBox color={"#00EC47"}>
												<TransferSVG />
											</IconBox>
											<span>Transfer</span>
										</div>
										<div className="second">
											<ProgressTitle>
												- N 250,000
											</ProgressTitle>
											<CProgress
												className="progress-xs"
												precision={1}
												color="warning"
												value={20}
											/>
										</div>
									</ListGroupItem>
								</ListGroup>
							</CardBody>
						</Card>
					</CCol>
				</CRow>
			</Container>
		</Layout>
	);
};

export default Dashboard;
