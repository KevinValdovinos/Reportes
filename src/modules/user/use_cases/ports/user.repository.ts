import {TUser} from '../../entities/user';

export interface IUserRepository{
    findAll():Promise<TUser[]>;
    findById():Promise<TUser>;
    save(user:TUser):Promise<TUser>;
    update(user:TUser):Promise<TUser>;
    delete(id:number):Promise<boolean>;
}