import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
    updateRestaurantNameStart
} from '../../redux/user/user.actions';

import {
  Container,
  Title,
  ButtonsBarContainer
} from './create-restaurant.styles';

const CreateRestaurant = ({ updateRestaurantNameStart }) => {
  const [restaurantName, setRestaurantName] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    updateRestaurantNameStart(restaurantName);
  };

  const handleChange = event => {
    const { value } = event.target;

    setRestaurantName(value);
  };

  return (
    <Container>
      <Title>What is the name of your Restaurant Restaurant</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='restaurantName'
          type='text'
          handleChange={handleChange}
          value={restaurantName}
          label='Restaurant Name'
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Save </CustomButton>
        </ButtonsBarContainer>
      </form>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  updateRestaurantNameStart: (restaurantName) => {
    dispatch(updateRestaurantNameStart(restaurantName))
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CreateRestaurant);