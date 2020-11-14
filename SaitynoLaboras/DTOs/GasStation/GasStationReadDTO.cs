using SaitynoLaboras.Controllers;
using SaitynoLaboras.DTOs.Price;
using SaitynoLaboras.DTOs.Reminder;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.GasStation
{
    public class GasStationReadDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Longtitude { get; set; }
        public string Latitude { get; set; }
        public List<PriceReadDTO> Prices { get; set; }
        public List<ReminderReadDTO> Reminders { get; set; }
    }
}
