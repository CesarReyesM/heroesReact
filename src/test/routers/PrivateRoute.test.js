import React from 'react';
import { mount} from "enzyme"
import { MemoryRouter } from "react-router";
import { PrivateRoute } from "../../routers/PrivateRoute";
import '../../setupTest';


describe('Pruebas en PrivateRoute', () => {

    const props = {
        location:{
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();
    
    test('debe de mostrar el componente si esta autenticado y guardar localStorage', () => {
        const wrapper = mount(
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated= {true}
                component={() => <span>Prueba</span>}
                {...props}
            />
        </MemoryRouter> 
    );
        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','marvel')

    });

    test('debe de bloquear el componente si el usuario no esta logeado', () => {
        <MemoryRouter>
            <PrivateRoute
                isAuthenticated= {false}
                component= {() => <p></p>}
                {...props}
            />
        </MemoryRouter>

        expect(wrapper.find('p').exists()).toBe(false)
    })



})
