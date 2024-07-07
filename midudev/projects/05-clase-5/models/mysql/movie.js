import mysql from "mysql2/promise";

const DEFAULT_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "moviesdb",
};

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString);

export class MovieModel {
  static async getAll({ genre }) {
    console.log("getAll");
    if (genre) {
      const lowerCaseGenre = genre.toLowerCase();
      // get genre ids from database table using genre names
      const [genres] = await connection.query(
        "SELECT id, name FROM genre WHERE LOWER(name) = ?;",
        [lowerCaseGenre]
      );
      // no genre found
      if (genres.length === 0) return [];
      // get the id from first genre result
      const [{ id }] = genres;
      // get all movies ids from database table
      // la query a movie_genres
      // join
      // y devolver resultados..
      return [];
    }
    const [movies] = await connection.query(
      "SELECT title, year, director, duracion, poster, rate, BIN_TO_UUID(id) id FROM movie;"
    );
    return movies;
  }
}
