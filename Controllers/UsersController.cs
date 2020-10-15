using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
using SaitynoLaboras.DTOs.User;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UserReadDTO>> GetAllUsers()
        {
            var users = _repository.GetAllUsers().ToList();
            if (users.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<UserReadDTO>>(users));
            }
        }
        [HttpGet("{id}", Name = "GetUserById")]
        public ActionResult<UserReadDTO> GetUserById(int id)
        {
            var user = _repository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<UserReadDTO>(user));
            }
        }

        [HttpPost]
        public ActionResult<User> PostUser(UserCreateDTO user)
        {
            var userMapped = _mapper.Map<User>(user);
            _repository.PostUser(userMapped);
            var userReadDTO = _mapper.Map<UserReadDTO>(userMapped);
            return CreatedAtRoute(nameof(GetUserById), new { Id = userReadDTO.Id }, userReadDTO);
        }

        [HttpPost("{id}")]
        public ActionResult PostUser(int id, UserCreateDTO user)
        {
            return BadRequest();
        }

        [HttpPatch("{id}")]
        public ActionResult PatchUser(int id, UserPartialUpdateDTO user)
        {
            var user1 = _repository.GetUserById(id);
            if (user1 == null)
            {
                return NotFound();
            }
            else if (user == null)
            {
                return BadRequest();
            }
            else
            {
                var userMapped = _mapper.Map<User>(user);
                _repository.PatchUser(id, userMapped);
                return NoContent();
            }
        }

        [HttpPatch]
        public ActionResult PatchUser(UserPartialUpdateDTO user)
        {
            return BadRequest();
        }


        [HttpPut("{id}")]
        public ActionResult PutUser(int id, UserUpdateDTO user)
        {
            var user1 = _repository.GetUserById(id);
            if (user1 == null)
            {
                return NotFound();
            }
            else if (user.Email == null || user.Password == null || user.Username == null)
            {
                return BadRequest();
            }
            else
            {
                var userMapped = _mapper.Map<User>(user);
                _repository.PutUser(id, userMapped);
                return NoContent();
            }
        }

        [HttpPut]
        public ActionResult PutUser(UserUpdateDTO user)
        {
            return BadRequest();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {
            var user = _repository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeleteUser(id, user);
                return NoContent();
            }
        }

        [HttpDelete]
        public ActionResult DeleteUser()
        {
            return BadRequest();
        }
    }
}
