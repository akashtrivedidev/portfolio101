/**
 * @author: akash trivedi
 * date-created: 2022-09-12
 * functionality: contains all the functions required to get user data
 * caller-function: src/App.js
 * network-request: true
 */

const githubuser = 'https://api.github.com/orgs/akashtrivedig-top-projects'

const fetchJson = async (url) => {
  let response = await fetch(url, { method: 'GET' })
  if (response.status === 200)
    response = await response.json()
  else
    response = {}
  return response
}

const getGithub = async () => {
  let response = await fetchJson(githubuser)
  return response
}

export const getUserData = async () => {
  let response = await getGithub()
  console.log(response);
  return {
    'avatar': response.avatar_url
  }
}