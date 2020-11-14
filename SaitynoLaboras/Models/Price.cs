using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Models
{
    public class Price
    {
        [Key]
        public int Id { get; set; }
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
        [Required]
        public DateTime Date { get; set; }
        [Required]
        public int GasStationId { get; set; }
        [Required]
        public GasStation GasStation { get; set; }
    }
}
