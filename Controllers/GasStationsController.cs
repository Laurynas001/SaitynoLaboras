using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GasStationsController : ControllerBase
    {
        private readonly IGasStationRepository _repository;

        public GasStationsController(IGasStationRepository repository)
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
            if (gasStation == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(gasStation);
            }
        }
        [HttpPost]
        public ActionResult<GasStation> PostGasStation(GasStation gasStation)
        {
            int id = _repository.PostGasStation(gasStation);
            if (id != 400)  
            {
                return Created(new Uri("http://http://localhost:5000/GasStations/" + id), gasStation);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut("{id}")]
        public ActionResult<GasStation> PutGasStation(int id, GasStation gasStation)
        {
            var gasStation1 = _repository.GetGasStationById(id);
            if (gasStation1 == null)
            {
                return NoContent();
            }
            else
            {
                _repository.PutGasStation(id, gasStation);
                gasStation.Id = id;
                return Ok(gasStation);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<GasStation> DeleteGasStation(int id)
        {
            var gasStation = _repository.GetGasStationById(id);
            if (gasStation == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeleteGasStation(id);
                return Ok(gasStation);
            }
        }
    }
}
