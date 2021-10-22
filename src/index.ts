import {user} from './user';

let event = (param:string):void => {
    const userBase = new user('ariel', ['none']);
    userBase.newUserPleasures(param);
}

event('emprendimiento');