import { mount } from 'enzyme';
import React from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('pruebas en AppRouter', () => {

    test('debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            dispatch : jest.fn(),
            user: {
                logged: false
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={contextValue} >
                <AppRouter /> 
            </AuthContext.Provider>)
    
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el componente de Marvel', () => {

        const contextValue = {
            dispatch : jest.fn(),
            user: {
                logged: true,
                name:'Cesar'
            }
        }

        const wrapper = mount( 
            <AuthContext.Provider value={contextValue} >
                <AppRouter /> 
            </AuthContext.Provider>)

        expect(wrapper.find('.navbar').exists()).toBe(true);

        // navbar porque se libera el menu despues de hacer login 
    })




})