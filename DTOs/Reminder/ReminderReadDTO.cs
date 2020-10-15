using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.Reminder
{
    public class ReminderReadDTO
    {
        public int Id { get; set; }
        public string GasStationName { get; set; }
        public string GasType { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime ValidUntil { get; set; }
        public double WantedPrice { get; set; }
        public int UserId { get; set; }
        public int GasStationId { get; set; }
    }
}
