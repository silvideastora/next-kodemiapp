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
      'Content-Type': 'application/json'
    } 
  })
  return response.json()
}

export async function createPosts (data, token){
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

export async function GetPosts(data, token){
  const endpoint = '/advice/byGeneration'
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

export async function getResources(module){
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

export async function getKoderById(id){
  const endpoint = `/koders/byGeneration/${id}`
  const response = await fetch (`${urlApi}${endpoint}`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function getGenerationById(id){
  const endpoint = `/generation/byGenerations/${id}`
  const response = await fetch(`${urlApi}${endpoint}`,
  {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  })
  return response.json()
} 

export async function like(id, token){
  console.log(token)
  const endpoint = `/advice/${id}`
  const response = await fetch(`${urlApi}${endpoint}`, 
  {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Authorization':token,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function getGenerationByStatus (){
  const endpoint = '/generation/byStatus'
  const response = await fetch (`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify({
      status: true
    }),headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}

export async function getKodersByGeneration ( generacion ){
  const endpoint = '/koders/byGeneration'
  const response = await fetch (`${urlApi}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify({
      generationNumber: generacion
    }),headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}