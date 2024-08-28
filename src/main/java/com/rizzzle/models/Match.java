package com.rizzzle.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    private String id;
    private String userId;
    private String profileId;
    private boolean isSuperLike;

    public Match() {
    }

    public Match(String userId, String profileId) {
        this.userId = userId;
        this.profileId = profileId;
        this.isSuperLike = false;
    }

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getProfileId() {
        return profileId;
    }

    public void setProfileId(String profileId) {
        this.profileId = profileId;
    }

    public boolean isSuperLike() {
        return isSuperLike;
    }

    public void setSuperLike(boolean superLike) {
        isSuperLike = superLike;
    }
}
