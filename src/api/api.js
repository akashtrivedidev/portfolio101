/**
 * @author: akash trivedi
 * date-created: 2022-09-12 00:25:23
 * functionality: 
 * caller-function: 
 * network-request: 
 */

const api_github = 'https://api.github.com'
const github_username = 'akashtrivedig'
const github_org_name = 'web-spaghetti'

export const github_org_repos = `${api_github}/orgs/${github_org_name}/repos`
export const github_user_repos = `${api_github}/users/${github_username}`

export const getGitProfile = () => {

}
