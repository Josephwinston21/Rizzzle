package com.rizzzle.services;

import com.rizzzle.models.Match;
import com.rizzzle.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    public Match createMatch(Match match) {
        // Logic to create a new match
        return matchRepository.save(match);
    }

    public List<Match> getUserMatches(Long userId) {
        // Logic to fetch matches for a user
        return matchRepository.findAllByUserId(userId);
    }

    public void deleteMatch(Long id) {
        // Logic to delete a match
        matchRepository.deleteById(id);
    }

    public boolean checkMatchExists(Long userId, Long matchId) {
        // Logic to check if a match exists
        return matchRepository.existsByUserIdAndMatchId(userId, matchId);
    }
}
