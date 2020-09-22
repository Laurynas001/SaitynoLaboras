using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public interface IRepository
    {
        IEnumerable<GasStation> GetAllGasStations();
        GasStation GetGasStationById(int id);
        void PostGasStation(GasStation gasStation);

    }
}
