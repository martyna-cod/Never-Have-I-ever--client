import React, { Component } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

export default class Questions extends Component {
	render() {
		const { questionsValues, onChangeQuestion } = this.props;
		return (
			<Form className="questions" onSubmit={this.props.onSubmit}>
				 <Form.Label style={{fontFamily: "'Anton', sans-serif ", fontSize: "25px" }}>Enter your questions</Form.Label>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control
							size="sm"
							type="text"
							name="Quesions"
							placeholder="1. Question"
							value={questionsValues['q1']}
							onChange={(event) => onChangeQuestion(event, 'q1')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control
							size="sm"
							type="text"
							name="Quesions"
							placeholder="2. Question"
							value={questionsValues['q2']}
							onChange={(event) => onChangeQuestion(event, 'q2')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col>
						<Form.Control
							size="sm"
							type="text"
							name="Questions"
							value={questionsValues['q3']}
							onChange={(event) => onChangeQuestion(event, 'q3')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control
							size="sm"
							type="text"
							name="Quesions"
							value={questionsValues['q4']}
							onChange={(event) => onChangeQuestion(event, 'q4')}
						/>
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="formHorizontalEmail">
					<Col >
						<Form.Control
							size="sm"
							type="text"
							name="Quesions"
							value={questionsValues['q5']}
							onChange={(event) => onChangeQuestion(event, 'q5')}
						/>
					</Col>
				</Form.Group>
			</Form>
		);
	}
}
