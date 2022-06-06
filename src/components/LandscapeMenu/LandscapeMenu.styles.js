import styled from 'styled-components'

export const LandscapeMenuStyles = styled.ul`
	background:#fff;
	list-style-type:none;
	display: flex;
	justify-content: center;

li{
margin: 1rem;
a{
font-size: 1.5rem;
  text-decoration:none;
  text-align:center;
  color:#fff;
  background: #0B2370 ;
border-radius: 1.5rem;
  padding:1rem 4rem;
  font-weight: 600;
  display:block;
  transition: all 0.4s;
&:hover {
	background: #E55C1E;
}
}
}
.active{
	background: #DDDDDD ;
  color: #0B2370;
  &:hover {
	background: #DDDDDD ;
}
}

	@media screen and (max-width: 767px) {
	
	}
`
