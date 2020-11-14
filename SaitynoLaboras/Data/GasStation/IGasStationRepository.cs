using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Data
{
    public interface IGasStationRepository
    {
        IEnumerable<GasStation> GetAllGasStations();
        GasStation GetGasStationById(int id);
        void PostGasStation(GasStation gasStation);
        void PutGasStation(int id, GasStation gasStation);
        void DeleteGasStation(int id);
        void PatchGasStation(int id, GasStation gasStation);

    }
}
