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

export async function Posts (){
  const endpoint = '/advice'
  const response = await fetch (`${urlApi}${endpoint}`, {
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
