package com.nghia.uit.webgarage.Repository;

import com.nghia.uit.webgarage.Model.UserRole;
import com.nghia.uit.webgarage.Model.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole, Integer> {

    @Query(value = "select * from user_role as u where u.userName =?1", nativeQuery = true)
    UserRole findByUserName(String userName);

}
