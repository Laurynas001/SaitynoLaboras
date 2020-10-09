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
        [MaxLength(50)]
        public string GasStationName { get; set; }
        public string GasType { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ValidUntil { get; set; }
        public double WantedPrice { get; set; }
        public int UserId { get; set; }
        //public User User { get; set; }
    }
}
