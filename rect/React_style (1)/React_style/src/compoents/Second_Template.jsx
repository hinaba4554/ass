import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import BorderAllIcon from '@mui/icons-material/BorderAll';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import B from '../Style/Second_Template.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Second_Template() {

    
  return (
    <div>
      <Container fluid >
        <Row style={{ margin: "20px", fontSize : "15px"}}>
          <Col  style={{width : "760vw"}}>
            <DropdownButton
              id="dropdown-item-button"
              color="success"
              title="Browse All Categories"
            >
              <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
              <Dropdown.Item as="button">Action</Dropdown.Item>
              <Dropdown.Item as="button">Another action</Dropdown.Item>
              <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>Deals</Col>
          <Col>
          Home<ArrowDropDownIcon /></Col>
          <Col>About</Col>
          <Col>Shop<ArrowDropDownIcon /></Col>
          <Col>Vendors<ArrowDropDownIcon /></Col>
          <Col>Megamenu<ArrowDropDownIcon /></Col>
          <Col>Blog<ArrowDropDownIcon /></Col>
          <Col>Pages<ArrowDropDownIcon /></Col>
          <Col>Contact</Col>
          <Col style={{marginRight : "10px"}}>
          <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/icon-headphone.svg
" alt="" />
         <span style={{color : "#3BB77E" , fontSize : "17px" , marginLeft:"-10px" }}> 1900-888</span>  </Col>
        </Row>
      </Container>
    <hr />
    </div>
  );
}
export default Second_Template;
