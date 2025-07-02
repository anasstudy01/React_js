import conf from "../conf/conf";
import { Client, Databases,Storage,Query, ID } from "appwrite";
export class Service{

client =new Client();
databases;
bucket;
constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);

  }

  async createPost({title,content,featuredImage,status,userid,slug}) {
    try {

        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
                title,
                content,
                featuredImage,
                status,
                userid
                
            }
        )

        
    } catch (error) { 
        console.error("Service :: createPost :: error", error);
    }
 













}

async updatePost(slug,{title, content, featuredImage, status, }) {
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
                title,
                content,
                featuredImage,
                status
            
            }
        )
    } catch (error) {
        console.error("Service :: updatePost :: error", error);
    }
}


async deletePost(slug){
    try {
        return await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;
    } catch (error) {
        console.error("Service :: deletePost :: error", error);
        return false;
    }

}

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.error("Service :: getPost :: error", error);
    }
}


async getPosts(queries=[Query.equal("status","active")]) {
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries 
        )
    } catch (error) {
        console.error("Service :: getPosts :: error", error);
    }     
      }


      async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )

        }
        catch(error){
            console.error("Service :: uploadFile :: error", error);
        }

      }

async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true;
    } catch (error) {
        console.error("Service :: deleteFile :: error", error);
        return false;   
    }

}


async getFilePreview(fileId){
    try {
        return await this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.error("Service :: getFilePreview :: error", error);
    }


}
}


const service = new Service();
export default service;