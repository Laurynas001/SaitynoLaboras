using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public IEnumerable<GasStation> GetAllGasStations()
        {
            return _context.GasStations.ToList();
        }

        public GasStation GetGasStationById(int id)
        {
            return _context.GasStations.First(c => c.Id == id);
        }

        public void PostGasStation(GasStation gasStation)
        {
            throw new NotImplementedException();
        }
    }
}
