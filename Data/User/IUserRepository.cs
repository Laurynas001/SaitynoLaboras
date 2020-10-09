using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int id);
        int PostUser(User user);
        void PutUser(int id, User user);
        void DeleteUser(int id, User user);
        void PatchUser(int id, User user);
    }
}
