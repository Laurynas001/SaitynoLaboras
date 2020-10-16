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
    public class GasStationSqlRepository : IGasStationRepository
    {
        private readonly Context _context;

        public GasStationSqlRepository(Context context)
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
            var gasStations = _context.GasStations.ToList();
            foreach (var gasStation in gasStations)
            {
                gasStation.Prices = _context.Prices.Where(a => a.GasStationId == gasStation.Id).ToList();
                gasStation.Reminders = _context.Reminders.Where(a => a.GasStationId == gasStation.Id).ToList();
            }
            return gasStations;
        }

        public GasStation GetGasStationById(int id)
        {
            var gasStation = _context.GasStations.FirstOrDefault(a => a.Id == id);
            if (gasStation != null)
            {
                gasStation.Prices = _context.Prices.Where(a => a.GasStationId == gasStation.Id).ToList();
                gasStation.Reminders = _context.Reminders.Where(a => a.GasStationId == gasStation.Id).ToList();
            }
            return gasStation;
        }

        public void PatchGasStation(int id, GasStation gasStation)
        {
            var gasStationGet = _context.GasStations.FirstOrDefault(a => a.Id == id);
            if (gasStation.Latitude != null)
            {
                gasStationGet.Latitude = gasStation.Latitude;
            }
            if (gasStation.Longtitude != null)
            {
                gasStationGet.Longtitude = gasStation.Longtitude;
            }
            if (gasStation.Name != null)
            {
                gasStationGet.Name = gasStation.Name;
            }
            if (gasStation.City != null)
            {
                gasStationGet.City = gasStation.City;
            }
            if (gasStation.Address != null)
            {
                gasStationGet.Address = gasStation.Address;
            }
            _context.SaveChanges();
        }

        public void PostGasStation(GasStation gasStation)
        {
            gasStation.Prices = new List<Price>();
            _context.GasStations.Add(gasStation);
            _context.SaveChanges();
        }

        public void PutGasStation(int id, GasStation gasStation)
        {
            var gasStationGet = _context.GasStations.FirstOrDefault(a => a.Id == id);
            gasStationGet.Latitude = gasStation.Latitude;
            gasStationGet.Longtitude = gasStation.Longtitude;
            gasStationGet.Name = gasStation.Name;
            gasStationGet.Address = gasStation.Address;
            gasStationGet.City = gasStation.City;
            _context.SaveChanges();
        }
    }
}
