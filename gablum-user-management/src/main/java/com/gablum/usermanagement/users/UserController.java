package com.gablum.usermanagement.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping
@RestController
public class UserController {

    @GetMapping
    public String getUsers() {
        return "user: yay";
    }

    @GetMapping("/echo") 
    public String getEcho() {
        return "users";
    }
}
