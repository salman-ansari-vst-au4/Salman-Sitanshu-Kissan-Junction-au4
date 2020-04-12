import React, { Component } from 'react';
import '../../Css/profile.css';
import { Image, Nav, Button } from 'react-bootstrap';
import YourProduct from './YourProduct';
import Purchased from './Purchased';
import Sold from './Sold';
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../../ActionCreater/notification'
import User from '../../ActionCreater/user'

const { notify } = Action;
const { join } = User;

class Profile extends Component {
  state = {
    rerender: false
  }

  componentDidMount() {
    console.log('ALso here', this.props.address)
    this.props.join(this.props.id);
    this.setState({
      render: false
    })
  }

  render() {
    const { notify, name, email, dob, mobile, img, type, address } = this.props;

    return (
      <>
        <div class="d-flex flex-column ">
          <div class="d-flex flex-fill justify-content-around flex-wrap m-5  flex-row">
            <div class="my-auto profile-img">
              <Image className='shadow' src={img} width='300vh' rounded />
              <div className='text-center'>
                <Link to='/profile-edit'>
                  <Button className='btn-1 mt-3 mr-1'
                    onClick={() => notify({ type: 'success', msg: 'Edit Profile' })}
                    variant="secondary" size="sm">
                    Edit Profile
                    </Button>
                </Link>
                <Link to='/company-register'>
                  <Button className='btn-1 mt-3 ml-1'
                    onClick={() => notify({ type: 'success', msg: 'Edit Company' })}
                    variant="secondary" size="sm">
                    Edit Company
                  </Button>
                </Link>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-start">
              <h1 className='mb-0' style={{ 'font-weight': '500' }}>{name}</h1>
              <p className='pl-2'>{type}</p>
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Email:</th>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Phone: </th>
                    <td>{mobile}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address: </th>
                    <td>{address.address}<br />{address.district} {address.city} {address.pincode}<br /> {address.state} {address.country}</td>
                  </tr>
                  <tr>
                    <th scope="row">Gender: </th>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <th scope="row">Birthday: </th>
                    <td>{dob}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex flex-column box4 justify-content-end">
              <table class="table table-borderless">
                <tbody>
                  <tr>
                    <th scope="row">Occupation: </th>
                    <td>Farming</td>
                  </tr>
                  <tr>
                    <th scope="row">Types:</th>
                    <td>Onion<br />Cucumber<br />Tomato<br />Spices<br />Brinjal</td>
                  </tr>
                  {/* <tr>
                  <th scope="row">Gender: </th>
                  <td>Male</td>
                </tr> */}
                </tbody>
              </table>

            </div>
          </div>
          <Nav variant="tabs" className="justify-content-center" defaultActiveKey="/profile">
            <Link to='/profile'>
              <Nav.Item>
                <Nav.Link href="/profile">Your Products</Nav.Link>
              </Nav.Item>
            </Link>
            <Link to='/profile/purchased'>
              <Nav.Item>
                <Nav.Link href="/profile/purchased">Purchased</Nav.Link>
              </Nav.Item>
            </Link>
            <Link to='/profile/sold'>
              <Nav.Item>
                <Nav.Link href="/profile/sold">Sold</Nav.Link>
              </Nav.Item>
            </Link>
          </Nav>
          <Route exact path='/profile/'>
            <YourProduct />
          </Route>
          <Route path='/profile/purchased'>
            <Purchased />
          </Route>
          <Route path='/profile/sold'>
            <Sold />
          </Route>

          {/* <div class="d-flex flex-fill flex-row m-5 black">
          <div class="green flex-fill">
            Flex2
            </div>
          <div class="green flex-fill">
            Flex1
          </div>
          <div class="green flex-fill">
            Flex1
          </div>
          <div class="green flex-fill">
            Flex1
          </div>

        </div>
        <div class="d-flex flex-fill flex-row m-5 black">
          <div class="green flex-fill">
            Flex3
            </div>
          <div class="green flex-fill">
            Flex1
          </div>
          <div class="green flex-fill">
            Flex1
          </div>
        </div>*/}
        </div>

      </>

    );
  }
}

const take = (state) => {
  const { name, email, mobile, img, dob, id, type, addressId } = state.user.currentUser
  let address = {
    address: "Not Filled",
    district: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  };
  if (addressId && state.user.currentUser.address) {
    address = state.user.currentUser.address
    // console.log("herre", addressId, state.user.currentUser.address)
    // return {
    //   name, email, mobile, img, id, address, type, dob
    // };
  }
  return {
    name, email, mobile, img, id, address, type, dob
  };
}

const change = (dispatch) => {
  return bindActionCreators({ notify, join }, dispatch)
}

export default connect(take, change)(Profile);