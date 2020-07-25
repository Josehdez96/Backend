/*
La unica responsabilidad del controlador || controller (este archivo) es saber 
como recibe parametros y envía parametros a los servicios(carpeta services), 
los servicios tienen la logica del negocio
*/

const express = require('express');

const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);
  const moviesService = new MoviesService();

  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'Movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movie = await moviesService.getMovie({ movieId });
      res.status(200).json({
        data: movie,
        message: 'Movie retrieved',
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function (req, res, next) {
    const { body: movie } = req.body;
    try {
      const createMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'Movie created',
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req.body;
    try {
      const updatedMovieId = await moviesService.updateMovie({
        movieId,
        movie,
      });
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movie updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req.body;
    try {
      const patchMovieId = await moviesService.patchMovie({
        movieId,
        movie,
      });
      res.status(200).json({
        data: patchMovieId,
        message: 'Movie parcially updated',
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movie deleted',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
