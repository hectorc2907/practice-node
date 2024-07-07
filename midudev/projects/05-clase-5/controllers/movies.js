import { validateMovie, validatePartialMovie } from "../schemas/movies.js";

export class MovieController {
  constructor({ movieModel }) {
    this.movieModel = movieModel;
  }
}
