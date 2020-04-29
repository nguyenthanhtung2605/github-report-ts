import { Repo } from "./repo.model";

export class User {
    login: string;
    fullName: string;
    repoCount: string;
    followerCount: string;
    repos?: Repo[]; //make the instance variable optional by adding question mark

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
        //this.login = userResponse.login;
    }
}
