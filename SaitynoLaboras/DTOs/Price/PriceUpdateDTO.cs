using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.DTOs.Price
{
    public class PriceUpdateDTO
    {
        [Required]
        public double A98Price { get; set; }
        [Required]
        public double A95Price { get; set; }
        [Required]
        public double DPrice { get; set; }
        [Required]
        public double DzPrice { get; set; }
        [Required]
        public double GasPrice { get; set; }
    }
}
