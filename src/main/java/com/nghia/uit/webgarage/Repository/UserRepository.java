package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {
}
