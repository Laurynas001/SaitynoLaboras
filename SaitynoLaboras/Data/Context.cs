﻿using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> opt) : base(opt)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Price>()
            //    .HasOne(p => p.GasStation)
            //    .WithMany(b => b.Prices);

            //modelBuilder.Entity<Reminder>()
            //   .HasOne(p => p.User)
            //   .WithMany(b => b.Reminders);

            //modelBuilder.Entity<GasStation>()
            //    .HasOne(p => p.GasStation)
            //    .WithMany(b => b.Prices);
        }

        public DbSet<GasStation> GasStations { get; set; }
        public DbSet<Price> Prices { get; set; }
        public DbSet<Reminder> Reminders { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
