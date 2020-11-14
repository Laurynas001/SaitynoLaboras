using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.Reminder
{
    public class ReminderPartialUpdateDTO
    {
        public string GasStationName { get; set; }
        public string GasType { get; set; }
        public double WantedPrice { get; set; }
        public int GasStationId { get; set; }
    }
}
