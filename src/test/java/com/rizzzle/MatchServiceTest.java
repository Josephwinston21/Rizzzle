package com.rizzzle;

import com.rizzzle.models.Match;
import com.rizzzle.repositories.MatchRepository;
import com.rizzzle.services.MatchService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
public class MatchServiceTest {

    @Mock
    private MatchRepository matchRepository;

    @InjectMocks
    private MatchService matchService;

    @Test
    public void testGetMatchesForUser() {
        Match match = new Match("1", "2");
        when(matchRepository.findByUserId("1")).thenReturn(Arrays.asList(match));

        List<Match> result = matchService.getMatchesForUser("1");
        assertNotNull(result);
        assertEquals(1, result.size());
        assertEquals("2", result.get(0).getProfileId());
    }

    @Test
    public void testLikeProfile() {
        Match match = new Match("1", "2");
        when(matchRepository.save(match)).thenReturn(match);

        Match result = matchService.likeProfile("1", "2");
        assertNotNull(result);
        assertEquals("1", result.getUserId());
        assertEquals("2", result.getProfileId());
    }
}
