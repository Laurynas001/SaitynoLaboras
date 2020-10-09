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
            if (gasStation.Name == null)
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
            if (id != 409)  
            {
                return Created(new Uri("https://saitynolaboras20201008165604.azurewebsites.net/GasStations/" + id), gasStation);
            }
            else
            {
                return Conflict();
            }
        }

        [HttpPost("{id}")]
        public ActionResult<GasStation> PostGasStation(int id, GasStation gasStation)
        {
                return NotFound();
        }

        [HttpPut("{id}")]
        public ActionResult<GasStation> PutGasStation(int id, GasStation gasStation)
        {
            var gasStation1 = _repository.GetGasStationById(id);
            if (gasStation1 == null)
            {
                return NotFound();
            }
            else if (gasStation.Latitude == null || gasStation.Longtitude == null || gasStation.Name == null || gasStation.Address == null || gasStation.City == null)
            {
                return BadRequest();
            }
            else
            {
                _repository.PutGasStation(id, gasStation);
                gasStation.Id = id;
                return Ok(gasStation);
            }
        }

        [HttpPatch]
        public ActionResult<GasStation> PatchGasStation()
        {
            return BadRequest();
        }

        [HttpPatch("{id}")]
        public ActionResult<GasStation> PatchGasStation(int id, GasStation gasStation)
        {
            var gasStation1 = _repository.GetGasStationById(id);
            if (gasStation1 == null)
            {
                return NotFound();
            }
            else if (gasStation.Latitude == null && gasStation.Longtitude == null && gasStation.Name == null && gasStation.Address == null && gasStation.City == null)
            {
                return BadRequest();
            }
            else
            {
                _repository.PatchGasStation(id, gasStation);
                gasStation1 = _repository.GetGasStationById(id);
                return Ok(gasStation1);
            }
        }

        [HttpPut]
        public ActionResult<GasStation> PutGasStation()
        {
            return BadRequest();
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

        [HttpDelete]
        public ActionResult<GasStation> DeleteGasStation()
        {
            return BadRequest();
        }
    }
}
