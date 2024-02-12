import classNames from "classnames"
import React from "react"
import styled from "styled-components"

const MenuItem = ({ children, ...props }) => {
  return (
    <StyledMenu className="pt-2 px-3">
      <span
        className={classNames({
          active: props.active,
        })}
      >
        {children}
      </span>
      {props.active ? (
        <div className="border mt-2 border-primary border-2 rounded" />
      ) : null}
    </StyledMenu>
  )
}

export default MenuItem

const StyledMenu = styled("div")`
  cursor: pointer;
  color: #71767b;
  font-weight: 600;

  .active {
    color: white;
  }
  &:hover {
    background-color: rgba(231, 233, 233, 0.1);
    /* border-radius: 2rem; */
  }
`
