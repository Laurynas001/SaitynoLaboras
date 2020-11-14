using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.Price
{
    public class PriceReadDTO
    {
        public int Id { get; set; }
        public double A98Price { get; set; }
        public double A95Price { get; set; }
        public double DPrice { get; set; }
        public double DzPrice { get; set; }
        public double GasPrice { get; set; }
        public DateTime Date { get; set; }
        public int GasStationId { get; set; }
    }
}
