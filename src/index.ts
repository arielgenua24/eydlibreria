import {user} from './user';

let event = (param:string):void => {
    const userBase = new user('ariel', ['']);
    userBase.userPleasures(param);
}

event('emprendimiento');