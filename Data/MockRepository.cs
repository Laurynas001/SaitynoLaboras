using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public class MockRepository : IRepository
    {
        List<GasStation> gasStations = new List<GasStation>
            {
                new GasStation { Id = 0, Latitude = "34.675061", Longtitude = "-104.696815", Name = "Lukoil" },
                new GasStation { Id = 1, Latitude = "57.675061", Longtitude = "104.696815", Name = "Viada" },
                new GasStation { Id = 2, Latitude = "87.675061", Longtitude = "46.696815", Name = "Orlen" }
            };

        public void DeleteGasStation(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<GasStation> GetAllGasStations()
        {
            return gasStations;
        }

        public GasStation GetGasStationById(int id)
        {
            return gasStations[id];
        }

        public void PostGasStation(GasStation gasStation)
        {
            gasStations.Add(gasStation);
        }

        public void PutGasStation(int id, GasStation gasStation)
        {
            throw new NotImplementedException();
        }

        int IRepository.PostGasStation(GasStation gasStation)
        {
            throw new NotImplementedException();
        }
    }
}
