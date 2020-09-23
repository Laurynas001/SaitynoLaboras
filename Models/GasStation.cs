using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Models
{
    public class GasStation
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Required]
        [MaxLength(50)]
        public string Longtitude { get; set; }
        [Required]
        [MaxLength(50)]
        public string Latitude { get; set; }
        public List<Price> Prices { get; set; }
    }
}
