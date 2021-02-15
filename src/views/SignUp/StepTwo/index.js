import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../containers/TheLayout";
import {
	Container,
	TopText,
	DescText,
	Form,
	LabelText,
	ApprovalMark,
	ApprovalText,
	Box,
	CheckInput,
	Checkmark,
	SubmitButton,
	CollapsibleText,
} from "../signup.styles";
import { CCollapse } from "@coreui/react";

const SignUPNext = () => {
	const [collapse, setCollapse] = useState(true);
	const [collapseTwo, setCollapseTwo] = useState(false);
	const [collapseThree, setCollapseThree] = useState(false);
	return (
		<Layout type={"signup"} back>
			<Container>
				<TopText>Open a new business account</TopText>
				<DescText>A short description comes here</DescText>
				<Form>
					<Box
						onClick={() => {
							setCollapseTwo(false);
							setCollapseThree(false);
							setCollapse(true);
						}}
						active={collapse}
					>
						<LabelText>
							<span className="first-child">
								I have a registered business / charity with CAC
							</span>

							<CCollapse show={collapse}>
								<CollapsibleText>
									
									As a registered business you’ll get:
								</CollapsibleText>
								<div>
									<p>
										<ApprovalMark />
										<ApprovalText>
											Account in your business name
										</ApprovalText>
									</p>
									<p>
										<ApprovalMark />
										<ApprovalText>
											Send to and receive transfers from
											all Nigerian banks
										</ApprovalText>
									</p>
									<p>
										<ApprovalMark />

										<ApprovalText>
											Tools for business management
										</ApprovalText>
									</p>
								</div>
							</CCollapse>
						</LabelText>
						<CheckInput type="radio" name="radio" />
						<Checkmark active={collapse} />
					</Box>

					<Box
						onClick={() => {
							setCollapseThree(false);
							setCollapse(false);
							setCollapseTwo(true);
						}}
						active={collapseTwo}
					>
						<LabelText>
							<span className="first-child">
								My business is not yet registered, I would like
								to register
							</span>

							<CCollapse show={collapseTwo}>
								<CollapsibleText>
									Everything you need to start your business
								</CollapsibleText>
								<div>
									<p>
										<ApprovalMark />
										<ApprovalText>
											Registered business name with the
											CAC
										</ApprovalText>
									</p>
									<p>
										<ApprovalMark />
										<ApprovalText>
											Tax identification number
										</ApprovalText>
									</p>
									<p>
										<ApprovalMark />

										<ApprovalText>
											Your account will be automatically
											opened on completion
										</ApprovalText>
									</p>
								</div>
							</CCollapse>
						</LabelText>
						<CheckInput type="radio" name="radio" />
						<Checkmark active={collapseTwo} />
					</Box>

					<Box
						onClick={() => {
							setCollapse(false);
							setCollapseTwo(false);
							setCollapseThree(true);
						}}
						active={collapseThree}
					>
						<LabelText>
							<span className="first-child">
								I’m a freelancer I do business in my personal
								name
							</span>

							<CCollapse show={collapseThree}>
								<CollapsibleText>
									
									As a registered business you’ll get:
								</CollapsibleText>
								<div>
									<p>
										<ApprovalMark />
										<ApprovalText>
											Account in your business name
										</ApprovalText>
									</p>
									<p>
										<ApprovalMark />
										<ApprovalText>
											Send to and receive transfers from
											all Nigerian banks
										</ApprovalText>
									</p>
									<p>
										<ApprovalMark />

										<ApprovalText>
											Tools for business management
										</ApprovalText>
									</p>
								</div>
							</CCollapse>
						</LabelText>
						<CheckInput type="radio" name="radio" />
						<Checkmark active={collapseThree} />
					</Box>
					<Link to="/dashboard">
						<SubmitButton>Next</SubmitButton>
					</Link>
				</Form>
			</Container>
		</Layout>
	);
};

export default SignUPNext;
