using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class UserSqlRepository : IUserRepository
    {
        private readonly Context _context;
        public UserSqlRepository(Context context)
        {
            _context = context;
        }

        public void DeleteUser(int id, User user)
        {
            _context.Users.Remove(user);
            _context.SaveChanges();
        }

        public IEnumerable<User> GetAllUsers()
        {
            var users = _context.Users.ToList();
            return users;
        }

        public User GetUserById(int id)
        {
            var user = _context.Users.FirstOrDefault(a => a.Id == id);
            return user;
        }

        public int PostUser(User user)
        {
            var users = _context.Users.Where(a => a.Username == user.Username && a.Password == user.Password && a.Email == user.Password).ToList();
            if (users.Count > 0)
            {
                return 400;
            }
            else
            {
                user.Reminders = new List<Reminder>();
                _context.Users.Add(user);
                _context.SaveChanges();
                int id = _context.GasStations.Max(a => a.Id);
                return id;
            }
        }

        public void PutUser(int id, User user)
        {
            var userGet = _context.Users.FirstOrDefault(a => a.Id == id);
            userGet.Password = user.Password;
            userGet.Username = user.Username;
            userGet.Email = user.Email;
            _context.SaveChanges();
        }
    }
}
