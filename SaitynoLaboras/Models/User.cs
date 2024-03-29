﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Username { get; set; }
        [Required]
        [MaxLength(50)]
        public string Password { get; set; }
        [Required]
        [MaxLength(50)]
        public string Email { get; set; }
        [Required]
        [MaxLength(50)]
        public string Role { get; set; }
        [Required]
        [MaxLength(50)]
        public string RefreshToken { get; set; }
        [Required]
        [MaxLength(50)]
        public DateTime RefreshTokenExpiryDate { get; set; }
        public List<Reminder> Reminders { get; set; }
    }
}
