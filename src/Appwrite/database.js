import { Client, ID, Databases, Storage  } from "appwrite";
import EnvConfig from "../Config/EnvConfig";

export class DataBase{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client
            .setEndpoint(EnvConfig.appwriteUrl)
            .setProject(EnvConfig.appwriteProjectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    //function to add a new document to the database
    async addDocument({title,image, themecolor, bgcolor, language, userid,}){
        try {
            const document = await this.database.createDocument(EnvConfig.appwriteDatabaseId,EnvConfig.appwriteCollectionId, ID.unique(), {
                title,
                image,
                themecolor,
                bgcolor,
                language,
                userid,
            });
            return document;
        } catch (error) {
            console.log(error);
            return error;
        }
        
    }

    //update the document
    async updateDocument({title,image, themecolor, bgcolor, language, userid, documentId}){
        try {
            const document = await this.database.updateDocument(EnvConfig.appwriteDatabaseId,EnvConfig.appwriteCollectionId, documentId, {
                title,
                image,
                themecolor,
                bgcolor,
                language,
                userid,
            });
            return document;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //delete the document
    async deleteDocument(documentId){
        try {
            await this.database.deleteDocument(EnvConfig.appwriteDatabaseId,EnvConfig.appwriteCollectionId, documentId);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    //get all the documents
    async getAllDocuments(){
        try {
            const documents = await this.database.listDocuments(EnvConfig.appwriteDatabaseId,EnvConfig.appwriteCollectionId);
            return documents;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get a single document
    async getDocument(documentId){
        try {
            const document = await this.database.getDocument(EnvConfig.appwriteDatabaseId,EnvConfig.appwriteCollectionId, documentId);
            return document;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //upload the file to the storage
    async uploadFile(file){
        try {
            const fileData = await this.storage.createFile(
                EnvConfig.appwriteBucketId,
                ID.unique(),
                file,
            );
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //delete the file from the storage
    async deleteFile(fileId){
        try {
            const fileData = await this.storage.deleteFile(
                EnvConfig.appwriteBucketId,
                fileId,
            );
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get the file from the storage gives the json data
    async getFile(fileId){
        try {
            const fileData = await this.storage.getFile(fileId);
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get all the files from the storage
    async getAllFiles(){
        try {
            const fileData = await this.storage.listFiles();
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get the file download url
    getFileDownloadUrl(fileId){
        try {
            const fileData =  this.storage.getFileDownload(fileId);
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get the file preview url
    async getFilePreviewUrl(fileId){
        try {
            const fileData = await this.storage.getFilePreview(fileId);
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    //get the file view url
    async getFileViewUrl(fileId){
        try {
            const fileData = await this.storage.getFileView(fileId);
            return fileData;
        } catch (error) {
            console.log(error);
            return error;
        }
    }


}

const database = new DataBase();
export default database;
