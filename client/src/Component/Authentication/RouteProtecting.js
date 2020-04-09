//HoC for check authentication
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class RequireAuth extends Component {
    componentWillMount() {
      console.log('Authent',this.props.Authenticated)
      if (!this.props.Authenticated)
        this.props.history.replace("/");
    }
    componentWillUpdate() {
      console.log('Authent',this.props.Authenticated)
      if (!this.props.authenticated)
        this.props.history.replace("/");
    }
    render() {
      return (
        <ComposedComponent {...this.props} />
      )
    }
  }
  const take = (state) => {
    const { Authenticated } = state.user
    return {
      Authenticated
    };
  }
  return connect(take)(RequireAuth);
}