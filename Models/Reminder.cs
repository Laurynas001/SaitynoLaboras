using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;

namespace SaitynoLaboras.Models
{
    public class Reminder
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string GasStationName { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
        [Required]
        public DateTime ValidUntil { get; set; }
        [Required]
        [Range(0.1, 10)]
        public double WantedPrice { get; set; }
        [Required]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
