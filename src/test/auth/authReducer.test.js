import { shallow } from 'enzyme';
import { authReducer } from '../../auth/authReducer';
import '../../setupTest';
import { types } from '../../types/types';

describe('Probando authReducer', () => {

    let wrapper = shallow(<authReducer/>)

    test('debe de conectar', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {})

        expect(state).toEqual({logged:false})
    })

    test('debe de autenticar y colocar el name del usuario', () => {

        const action = {
                type: types.login,
                payload:{
                    name:'Cesar'
                }
        }
        const state = authReducer({logged: false}, action);
    
        expect(state).toEqual({logged:true, name:'Cesar'})

    });

    test('Debe de borrar el name del usuario yy logged en false', () => {

        const action = {
            type: types.logout
        }

        const state = authReducer({logged: true, name:'Cesar'}, action);

        expect(state).toEqual({logged:false})

    })




})