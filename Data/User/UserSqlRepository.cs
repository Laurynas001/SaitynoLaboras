using SaitynoLaboras.DTOs.User;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
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
            if (user != null)
            {
                user.Reminders = _context.Reminders.Where(a => a.UserId == user.Id).ToList();
            }
            return user;
        }

        public User GetUserByLogin(UserLoginDTO user)
        {
            if (user.Password == null)
            {
                var userFromDB = _context.Users.FirstOrDefault(a => a.Username == user.Username);
                if (userFromDB != null)
                {
                    userFromDB.Reminders = _context.Reminders.Where(a => a.UserId == userFromDB.Id).ToList();
                }
                return userFromDB;
            }
            else
            {
                var userFromDB = _context.Users.FirstOrDefault(a => a.Username == user.Username && a.Password == user.Password);
                if (userFromDB != null)
                {
                    userFromDB.Reminders = _context.Reminders.Where(a => a.UserId == userFromDB.Id).ToList();
                }
                return userFromDB;
            }
        }

        public User GetUser(string username, string password)
        {
            var user = _context.Users.FirstOrDefault(a => a.Username == username && a.Password == password);
            if (user != null)
            {
                user.Reminders = _context.Reminders.Where(a => a.UserId == user.Id).ToList();
            }
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
            if (user.RefreshToken != null)
            {
                userGet.RefreshToken = user.RefreshToken;
            }
            if (user.RefreshTokenExpiryDate != null)
            {
                userGet.RefreshTokenExpiryDate = user.RefreshTokenExpiryDate;   
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
