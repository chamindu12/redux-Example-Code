package com.example.spring.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.backend.Entity.User;
import com.example.spring.backend.repository.UserRepo;


@Service
public class UserService {

    private final UserRepo userRepo;
    @Autowired
    public UserService( UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User registerUser(String username, String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        return userRepo.save(user);
    }

    public User loginUser(String username, String password) {
        User user = userRepo.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

}
