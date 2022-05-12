package com.fabianocar.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabianocar.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
