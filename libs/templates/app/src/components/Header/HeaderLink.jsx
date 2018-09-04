import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
	padding: 0.5rem 1.25rem;
	margin-left:0.5rem;
	color: #eff8ff;
	text-decoration: none !important;
	border: 1px solid;
	border-radius: 0.25rem;
	background: #3490dc;
		&:hover{
			color: #2779bd;
	}
`;
