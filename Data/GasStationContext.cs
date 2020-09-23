using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class GasStationContext : DbContext
    {
        public GasStationContext(DbContextOptions<GasStationContext> opt) : base(opt)
        {

        }

        public DbSet<GasStation> GasStations { get; set; }
        public DbSet<Price> Price { get; set; }
    }
}
