import faunadb from 'faunadb'

let faunacl = new faunadb.Client({
    secret: 'fnAEkpGveXACSzGTUPW5O_bPXYVRS5-W5FykXzDr'
})

let fauna_query = faunadb.query
export {
    faunacl,
    fauna_query
}