"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var repo_model_1 = require("../model/repo.model");
var user_model_1 = require("../model/user.model");
var OPTIONS = {
    headers: {
        'User-Agent': 'request'
    },
    json: true //add this để không phải parse json string bằng JSON.parse(body)
};
var GithubApiService = /** @class */ (function () {
    function GithubApiService() {
    }
    GithubApiService.prototype.getUserInfo = function (userName, callback) {
        //calling request.get with 2 arguments
        //1st arg: url to call
        //2nd arg: callback function having arguments - response: any (the response from server)
        request.get('https://api.github.com/users/' + userName, OPTIONS, function (error, response, body) {
            var user = new user_model_1.User(body);
            callback(user);
        });
    };
    GithubApiService.prototype.getRepos = function (userName, callback) {
        request.get('https://api.github.com/users/' + userName + '/repos', OPTIONS, function (error, response, body) {
            // let repoArray = body;
            // repoArray.map((repo: any) => new Repo(repo));
            var repos = body.map(function (repo) { return new repo_model_1.Repo(repo); });
            callback(repos);
        });
    };
    return GithubApiService;
}());
exports.GithubApiService = GithubApiService;
