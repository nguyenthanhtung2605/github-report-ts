import * as request from "request";

import { Repo } from "../model/repo.model";
import {User} from "../model/user.model";

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true //add this để không phải parse json string bằng JSON.parse(body)
};

export class GithubApiService {
    getUserInfo(userName: string, callback: (user: User) => any) {
        //calling request.get with 2 arguments
        //1st arg: url to call
        //2nd arg: callback function having arguments - response: any (the response from server)
        request.get('https://api.github.com/users/' + userName, OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body);
            callback(user);
        });
    }

    getRepos(userName: string, callback: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, (error: any, response: any, body: any) => {
            // let repoArray = body;
            // repoArray.map((repo: any) => new Repo(repo));
            var repos = body.map((repo: any) => new Repo(repo));
            callback(repos);
        });
    }
}
