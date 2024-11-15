import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("AuthService :: createAccount :: error", error);
      throw new Error(`Failed to create account: ${error.message}`);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.error("AuthService :: login :: error", error);
      throw new Error(`Login failed: ${error.message}`);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("AuthService :: getCurrentUser :: error", error);
      // Return null if user is not authenticated instead of throwing error
      
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.error("AuthService :: logout :: error", error);
      throw new Error(`Logout failed: ${error.message}`);
    }
  }
}

const authService = new AuthService();

export default authService;
