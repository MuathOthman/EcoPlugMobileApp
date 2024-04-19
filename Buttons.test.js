import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Availability from './Components/Availability';
import { describe, test } from "@jest/globals";
import { NavigationContainer } from '@react-navigation/native';

describe('Availability Component Tests', () => {
        test('should handle button press', () => {
                const setIsVisible = jest.fn();

                const { getByText } = render(
                    <NavigationContainer>
                            <Availability
                                id={1}
                                name="Tapiola Garden"
                                address="Tapiontori 3"
                                postalCode="02100"
                                city="Espoo"
                                setIsVisible={setIsVisible}
                            />
                    </NavigationContainer>
                );

                const continueButton = getByText('Continue');
                fireEvent.press(continueButton);

                expect(setIsVisible).toHaveBeenCalledWith(false);
        });
});
