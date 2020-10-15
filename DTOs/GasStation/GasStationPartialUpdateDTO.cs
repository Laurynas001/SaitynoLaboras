using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.GasStation
{
    public class GasStationPartialUpdateDTO
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Longtitude { get; set; }
        public string Latitude { get; set; }
    }
}
