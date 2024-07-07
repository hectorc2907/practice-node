import { validateMovie, validatePartialMovie } from "../schemas/movies.js";

export class MovieController {
  constructor({ movieModel }) {
    this.movieModel = movieModel;
  }
  getAll = async (req, res) => {
    const { genre } = req.params;
    const movies = await this.movieModel.getById({ genre });
    res.json(movies);
  };
  getById = async (req, res) => {
    const { id } = req.params;
    const movie = await this.movieModel.getById({ id });
    if (movie) return res.json(movie);
    res.status(404).json({ message: "Movie not found" });
  };
  create = async (req, res) => {
    const result = validateMovie(req.body);
    if (!result.success) {
      // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const newMovie = await this.movieModel.create({ input: result.data });
    res.status(201).json(newMovie);
  };
}
