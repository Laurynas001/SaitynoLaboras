using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class SqlRepository : IRepository
    {
        private readonly GasStationContext _context;

        public SqlRepository(GasStationContext context)
        {
            _context = context;
        }

        public void DeleteGasStation(int id)
        {
            var gasStation = _context.GasStations.FirstOrDefault(a => a.Id == id);
            _context.GasStations.Remove(gasStation);
            _context.SaveChanges();
        }

        public IEnumerable<GasStation> GetAllGasStations()
        {
            return _context.GasStations.ToList();
        }

        public GasStation GetGasStationById(int id)
        {
            return _context.GasStations.FirstOrDefault(a => a.Id == id);
        }

        public int PostGasStation(GasStation gasStation)
        {
            var gasStations = _context.GasStations.Where(a => a.Name == gasStation.Name && a.Latitude == gasStation.Latitude && a.Longtitude == gasStation.Longtitude).ToList();
            if (gasStations.Count == 0)
            {
                _context.GasStations.Add(gasStation);
                _context.SaveChanges();
                int id = _context.GasStations.Max(a => a.Id);
                return id;
            }
            else
            {
                return 400;
            }

        }

        public void PutGasStation(int id, GasStation gasStation)
        {
            var gasStationGet = _context.GasStations.FirstOrDefault(a => a.Id == id);
            gasStationGet.Latitude = gasStation.Latitude;
            gasStationGet.Longtitude = gasStation.Longtitude;
            gasStationGet.Name = gasStation.Name;
            _context.SaveChanges();
        }
    }
}
