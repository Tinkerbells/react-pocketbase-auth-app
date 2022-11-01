import PocketBase from 'pocketbase'

const POCKET_BASE_URL = 'http://127.0.0.1:8090'

const client = new PocketBase(POCKET_BASE_URL)

export default client
