// lib/mongodb.js — cached MongoDB client for use in server components / route handlers

import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB || 'test'

let clientPromise

function createClientPromise() {
  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable')
  }
  const client = new MongoClient(uri)
  return client.connect()
}

// Cache the connection on the global object in dev so Next.js hot-reload
// doesn't open a new connection to Atlas on every request.
if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = createClientPromise()
  }
  clientPromise = global._mongoClientPromise
} else {
  clientPromise = createClientPromise()
}

export async function getDb() {
  const client = await clientPromise
  return client.db(dbName)
}
