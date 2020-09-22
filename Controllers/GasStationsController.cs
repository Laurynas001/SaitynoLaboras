using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GasStationsController : ControllerBase
    {
        private readonly IRepository _repository;

        public GasStationsController(IRepository repository)
        {
            _repository = repository;
        }
        [HttpGet]
        public ActionResult<IEnumerable<GasStation>> GetAllGasStations()
        {
            var gasStations = _repository.GetAllGasStations();
            return Ok(gasStations);
        }

        [HttpGet("{id}")]
        public ActionResult<GasStation> GetGasStationById(int id)
        {
            var gasStation = _repository.GetGasStationById(id);
            if(id != 0)
            {
                return NotFound();
            }
            return Ok(gasStation);
        }
        [HttpPost]
        public ActionResult<GasStation> PostGasStation(GasStation gasStation)
        {
            _repository.PostGasStation(gasStation);
            return Ok();
        }
    }
}
