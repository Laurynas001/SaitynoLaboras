using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
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
        public UsersController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var users = _repository.GetAllUsers().ToList();
            if (users.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(users);
            }
        }
        [HttpGet("{id}")]
        public ActionResult<User> GetUserById(int id)
        {
            var user = _repository.GetUserById(id);
            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpPost]
        public ActionResult<User> PostUser(User user)
        {
            int id =  _repository.PostUser(user);
            if (id == 400)
            {
                return BadRequest();
            }
            else
            {
                return Created(new Uri("http://http://localhost:5000/Users/" + id), user);
            }
        }
        [HttpPut("{id}")]
        public ActionResult<User> PutUser(int id, User user)
        {
            var user1 = _repository.GetUserById(id);
            if (user1 == null)
            {
                return NoContent();
            }
            else
            {
                _repository.PutUser(id, user);
                user.Id = id;
                return Ok(user);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<User> DeleteUser(int id)
        {
            var user = _repository.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeleteUser(id, user);
                return Ok(user);
            }
        }
    }
}
