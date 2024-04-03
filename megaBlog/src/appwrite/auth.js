import conf from '../config/config';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const currentUser= await this.account.get();
            return currentUser
        } catch (error) {
            if (error.code === 401 && error.message.includes('missing scope (account)')) {
                // Handle the scenario where the user's role is missing the account scope
                console.log("User does not have the required scope (account)");
                // You may choose to return a custom error message or handle this case differently
            } else {
                // Log other errors to the console for debugging purposes
                console.log("Error fetching current user:", error);
            }
            
            // Return null or throw the error, depending on your application's requirements
            return null;
    }
}

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService

