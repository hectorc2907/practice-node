import { Router } from "express";

moviesRouter.get("/");
moviesRouter.post("/");
moviesRouter.get("/:id");
moviesRouter.delete("/:id");
moviesRouter.patch("/:id");

export const moviesRouter = Router();
