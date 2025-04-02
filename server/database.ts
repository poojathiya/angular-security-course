
import * as _ from 'lodash';
import {LESSONS, USERS} from "./database-data";
import { User } from '../src/app/model/user';
import { DbUser } from './db.user';


class InMemoryDatabase {
    userCounter = 0;
    createUser(email:string,password:string) {
        this.userCounter++
          const id = this.userCounter;
          const user: DbUser = {
            id,
            email,
            password
          }
          USERS[id] = user;
          return user

    }

    readAllLessons() {
        return _.values(LESSONS);
    }


}

export const db = new InMemoryDatabase();