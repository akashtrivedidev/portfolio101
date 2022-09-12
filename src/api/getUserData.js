/**
 * @author: akash trivedi
 * date-created: 2022-09-12
 * functionality: contains all the functions required to get user data
 * caller-function: src/App.js
 * network-request: true
 */

const githubuser = 'https://api.github.com/orgs/akashtrivedig-top-projects'
const userprojects = 'https://api.github.com/orgs/akashtrivedig-top-projects/repos'

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

const getProjects = async () => {
  let response = await fetchJson(userprojects)
  return response
}


export const getUserData = async () => {
  const response = await getGithub()
  const response2 = await getProjects()
  let projects = []
  await response2.forEach((project) => {
    projects.push({ name: project.name, description: project.description, thumbnail: `https://raw.githubusercontent.com/akashtrivedig-top-projects/${project.name}/main/thumbnails/thumbnail%201.jpg`, topics: project.topics })
  })
  return {
    avatar: response.avatar_url,
    projects: projects
  }
}