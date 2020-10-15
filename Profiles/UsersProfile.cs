using AutoMapper;
using SaitynoLaboras.DTOs.User;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Profiles
{
    public class UsersProfile : Profile
    {
        public UsersProfile()
        {
            //source -> target
            CreateMap<User, UserReadDTO>();

            CreateMap<UserCreateDTO, User>();

            CreateMap<User, UserUpdateDTO>();
            CreateMap<UserUpdateDTO, User>();

            CreateMap<User, UserPartialUpdateDTO>();
            CreateMap<UserPartialUpdateDTO, User>();
        }
    }
}
