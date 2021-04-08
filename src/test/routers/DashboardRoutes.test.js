
import React from 'react';
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import '../../setupTest';
import { MemoryRouter } from 'react-router';



describe('pruebas en el dashboard', () => {

    const contextValue = {
        dispatch : jest.fn(),
        user: {
            logged: false
        }
    }

   
    test('primera prueba', () => {
        const wrapper = mount(
            <AuthContext.Provider value= {contextValue}>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(wrapper).toMatchSnapshot();

    })


})


