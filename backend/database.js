import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getSites() {
    const [rows] =  await pool.query("SELECT * FROM website_emissions")
    return rows
}

export async function getSite(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM website_emissions
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function creatSite(name, url, emissions) {
    const [result] = await pool.query(`
    INSERT INTO website_emissions (name, url, carbon_per_visit)
    VALUES (?, ?, ?)
    `, [name, url, emissions])
    return result
}

const site = await getSite(1)
console.log(site)