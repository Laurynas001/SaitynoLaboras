using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.User
{
    public class UserLoginDTO
    {
            [Required]
            [MaxLength(50)]
            public string Username { get; set; }
            [Required]
            [MaxLength(50)]
            public string Password { get; set; }
    }
}
