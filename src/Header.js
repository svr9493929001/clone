import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "./userContext";
const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 240px 1fr 200px;
  grid-column-gap: 20px;
  padding-left: 20px;
`;

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 50px;
  line-height: 30px;
  padding: 0px 15px;
  svg {
    margin-top: 10px;
    display: inline-block;
    float: left;
  }
  span {
    display: inline-block;
    padding-left: 5px;
    padding-top: 10px;
    font-size: 1.2rem;
    font-weight: 300;
  }
  b {
    font-weight: bold;
    display: inline-block;
    margin-left: 2px;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px 10px;
  margin-top: 9px;
  border: 1px solid #777;
  border-radius: 5px;
  display: inline-block;
  box-sizing: border-box;
  color: #fff;
`;
const ProfileLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  line-height: 50px;
`;

export function Header() {
  const user = useContext(userContext);
  return (
    <StyledHeader>
      <LogoLink href="" className="logo" to={"/"}>
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
        <span>
          Stack <b>OverFlow</b>
        </span>
      </LogoLink>
      <form action="" className="search">
        <SearchInput type="text" placeholder="search..." />
      </form>
      {user && (
        <ProfileLink href="" to={"/profile"} className="profile">
          SVR
        </ProfileLink>
      )}
      {!user && (
        <ProfileLink href="" to={"/login"} className="profile">
          Login
        </ProfileLink>
      )}
    </StyledHeader>
  );
}
