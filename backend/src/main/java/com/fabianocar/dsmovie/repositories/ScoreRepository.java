package com.fabianocar.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fabianocar.dsmovie.entities.Score;
import com.fabianocar.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
