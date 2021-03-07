const Pool = require('pg').Pool
const pool = new Pool({
    user: 'neha',
    host: 'localhost',
    database: 'assignment',
    password: 'password',
    port: 5432
})

const getEmployee = (request, response) => {
    pool.query('SELECT * FROM employee ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

const getEmployeeById = (request, response) => {
const id = parseInt(request.params.id)

pool.query('SELECT * FROM employee WHERE id = $1', [id], (error, results) => {
    if (error) {
    throw error
    }
    response.status(200).json(results.rows)
})
}

const createEmployee = (request, response) => {
    const {name, email} = request.body
  
    pool.query(
      'INSERT INTO employee (name, email) VALUES ($1, $2)',
      [name, email],
      (error) => {
        if (error) {
          throw error
        }
        response.status(201).json({status: 'success', message: 'employee added.'})
      },
    )
  }


module.exports = {
getEmployee,
getEmployeeById,
createEmployee
}

