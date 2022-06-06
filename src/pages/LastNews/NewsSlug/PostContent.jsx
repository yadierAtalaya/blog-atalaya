
import styled from 'styled-components'

const PostContent = ({ className, post }) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: post }}></div>
)

const StyledPostContent = styled(PostContent)`
      max-width: 100% !important;
      position: relative;
      display: grid;
    
  h1 {
    //font-size: 2em;
    text-align: start;
  }
 
  img{
      max-width: 100%;
      object-fit: contain;
      height: auto !important;
  }
  @media screen and (max-width: 767px) {
    h1 {
    font-size: 1rem;
    
  }
 
    img{     
    max-height: 90% !important;
  }
	}

`;

export { StyledPostContent }