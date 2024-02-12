import React from "react"
import Mentions from "rc-mentions"
import styled from "styled-components"
const Mention = (props) => {
  return <StyledMention placeholder="What is happening?!" {...props} />
}

export default Mention

const StyledMention = styled(Mentions)`
  textarea {
    width: 100%;
    color: white !important;
    background-color: black;
    border: none !important;
    resize: none;
    &:focus {
      outline: 0 !important;
    }
    font-size: 20px;
    font-weight: 600;
  }
  /* .rc-mentions-measure {
    display: none;
  } */
`
