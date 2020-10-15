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
            foreach (var user in users)
            {
                user.Reminders = _context.Reminders.Where(a => a.UserId == user.Id).ToList();
            }
            return users;
        }

        public User GetUserById(int id)
        {
            var user = _context.Users.FirstOrDefault(a => a.Id == id);
            user.Reminders = _context.Reminders.Where(a => a.UserId == user.Id).ToList();
            return user;
        }

        public void PatchUser(int id, User user)
        {
            var userGet = _context.Users.FirstOrDefault(a => a.Id == id);
            if (user.Username != null)
            {
                userGet.Username = user.Username;
            }
            if (user.Password != null)
            {
                userGet.Password = user.Password;
            }
            if (user.Email != null)
            {
                userGet.Email = user.Email;
            }
            _context.SaveChanges();
        }

        public void PostUser(User user)
        {
            user.Reminders = new List<Reminder>();
            _context.Users.Add(user);
            _context.SaveChanges();
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
