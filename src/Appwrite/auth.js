import { Client, Account,ID } from "appwrite";
import EnvConfig from "../Config/EnvConfig";

export class AuthService {
  client = new Client();
  account;

  //create a constructor to set the endpoint and project id
  constructor() {
    this.client
      .setEndpoint(EnvConfig.appwriteUrl)
      .setProject(EnvConfig.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // function to register a user using email and password
  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);
      if(userAccount){
        //login the user now
        return await this.login(email, password);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  
// login function for the user
async login(email, password) {
    try {
      const userAccount = await this.account.createEmailSession(email, password);
      return userAccount;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  // logout function for the user
    async logout() {
        try {
        const logout = await this.account.deleteSession("current");
        return logout;
        } catch (error) {
        console.log(error);
        return error;
        }
    }

    // get the user details
    async getUser() {
        try {
        const user = await this.account.get();
        return user;
        } catch (error) {
        console.log(error);
        return error;
        }
    }
}


const authService = new AuthService();
export default authService;
