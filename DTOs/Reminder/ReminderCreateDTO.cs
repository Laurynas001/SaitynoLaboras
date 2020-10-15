using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.Reminder
{
    public class ReminderCreateDTO
    {
        [Required]
        [MaxLength(50)]
        public string GasStationName { get; set; }
        [Required]
        [MaxLength(50)]
        public string GasType { get; set; }
        [Required]
        public double WantedPrice { get; set; }
        [Required]
        public int GasStationId { get; set; }
    }
}
