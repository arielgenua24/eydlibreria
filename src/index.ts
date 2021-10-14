import {user} from './user';
import {recomendations} from './userRecomendations';

let event = (param:string):void => {
    const userBase = new user('ariel', ['none']);
    userBase.newUserPleasures(param);
}

event('emprendimiento');