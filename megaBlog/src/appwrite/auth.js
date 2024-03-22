import config from '../config/config'

import {Client, Account, ID} from 'appwrite'

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.account=new Account(this.client);
    }

    async createAcc({email, password, name}){
        try {
            const userAcc=await this.account.create(ID.unique(), email, password, name);
            if (userAcc) {
                return this.login({email, password})
            } else {
                return userAcc
            }
        } catch (error) {
            console.log('Appwrite Service :: User Account :: Error', error);
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email,password);

        } catch (error) {
            console.log('Appwrite Service :: Login :: Error', error);
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log('Appwrite Service :: Get Current User :: Error', error);
        }
        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log('Appwrite Service :: Log Out :: Error', error);
        }
    }
}

const authService=new AuthService()

export default authService;


