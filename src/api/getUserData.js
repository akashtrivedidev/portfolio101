/**
 * @author: akash trivedi
 * date-created: 2022-09-12
 * functionality: contains all the functions required to get user data
 * caller-function: src/App.js
 * network-request: true
 */

const userprojects = 'https://api.github.com/orgs/akashtrivedig-top-projects/repos'
const userbio = 'https://api.github.com/users/akashtrivedig'

const fetchJson = async (url) => {
  let response = await fetch(url, { method: 'GET' })
  if (response.status === 200)
    response = await response.json()
  else
    response = {}
  return response
}


const getProjects = async () => {
  let response = await fetchJson(userprojects)
  return response
}

const getBio = async () => {
  let response = await fetchJson(userbio)
  return response
}


export const getUserData = async () => {
  const response_org = await getProjects()
  const response_personal = await getBio()
  let projects = [], count = 0
  await response_org.forEach((project) => {
    projects.push({ id: count, name: project.name, description: project.description, thumbnail: `https://raw.githubusercontent.com/akashtrivedig-top-projects/${project.name}/main/thumbnails/thumbnail%201.png`, topics: project.topics, homepage: project.homepage });
    count++
  })
  return {
    bio: response_personal?.bio,
    avatar: response_personal.avatar_url,
    projects: projects,
    twitter: response_personal.twitter_username
  }
}