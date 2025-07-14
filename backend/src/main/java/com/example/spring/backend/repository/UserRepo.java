package com.example.spring.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.backend.Entity.User;


public interface UserRepo extends JpaRepository<User, Long> {
    User findByUsername(String username);

}
