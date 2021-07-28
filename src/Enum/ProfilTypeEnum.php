<?php


namespace App\Enum;


class ProfilTypeEnum
{
    const ROLE_USER=["ROLE_USER"];
    const ROLE_ADMIN=["ROLE_ADMIN"];

    public function getRoleUser(){
        return self::ROLE_USER;
    }

    public function getRoleAdmin(){
        return self::ROLE_ADMIN;
    }
}