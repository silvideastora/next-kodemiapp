// Aqui van todas las funciones para conectarse al Back... usando fetch



const urlApi = 'http://kodemiaappback-chatty-bandicoot-kf.mybluemix.net'

export async function KoderLogin (data) {

  const endpoint = '/koders/login'

  const response = await fetch(`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      //'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGZjZTdiNWE1NGZjM2Y1YzcxNjA5MCIsImlhdCI6MTYyNjMxNDczN30.UxKTGdsGwB-HJWvP5NqZjiewJqS-4Lya06cbe9ZkBYU',
      'Content-Type': 'application/json'
    } 
  })
  return response.json()
}

export async function MentorLogin (data) {

  const endpoint = '/admins/login'

  const response = await fetch(`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      //'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGZjZTdiNWE1NGZjM2Y1YzcxNjA5MCIsImlhdCI6MTYyNjMxNDczN30.UxKTGdsGwB-HJWvP5NqZjiewJqS-4Lya06cbe9ZkBYU',
      'Content-Type': 'application/json'
    } 
  })
  return response.json()
}

export async function createPosts (data, token){
  console.log(data)
  const endpoint = '/advice' 
  const response = await fetch (`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Authorization':token,
      'Content-Type': 'application/json'
    } 
  })
  return response.json()
}

export async function GetPosts(){
  const endpoint = '/advice/byGeneration'
  const response = await fetch (`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify({
      generation: {
        bootcamp:'JS',
        number:10
    }}),
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Authorization':'eyJhbGciOiJIUzI1NiIsInReyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZThmOWE0NmFmZTUyM2MyYzU0Mjg4YyIsImFkbWluIjp0cnVlLCJpYXQiOjE2MjYzOTg4NDF9.utGBM07PCem-8apY75HLFlwGqz6dBTHJrS0Br8JaHrA5cCI6IkpXVCJ9.eyJpZCI6IjYwZGZjZTdiNWE1NGZjM2Y1YzcxNjA5MCIsImlhdCI6MTYyNjMxNDczN30.UxKTGdsGwB-HJWvP5NqZjiewJqS-4Lya06cbe9ZkBYU',
      'Content-Type': 'application/json'
    } 
  })
  return response.json()
}

export async function getResources(module){
  console.log(module)
  const endpoint = '/resources/byModule'
  const response = await fetch (`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify({
      moduleName: module
    }),
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  })
  console.log('API', response)
  return response.json()
}

