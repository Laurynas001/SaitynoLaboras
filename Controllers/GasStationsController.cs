using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Authentication_Authorization;
using SaitynoLaboras.Data;
using SaitynoLaboras.DTOs.GasStation;
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
        private readonly IMapper _mapper;

        public GasStationsController(IGasStationRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [AllowAnonymous]
        [HttpGet]
        public ActionResult<IEnumerable<GasStationReadDTO>> GetAllGasStations()
        {
            var gasStations = _repository.GetAllGasStations().ToList();
            if (gasStations.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<GasStationReadDTO>>(gasStations));
            }
        }

        [AllowAnonymous]
        [HttpGet("{id}", Name ="GetGasStationById")]
        public ActionResult<GasStationReadDTO> GetGasStationById(int id)
        {
            var gasStation = _repository.GetGasStationById(id);
            if (gasStation == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<GasStationReadDTO>(gasStation));
            }
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPost]
        public ActionResult<GasStationCreateDTO> PostGasStation(GasStationCreateDTO gasStationCreateDTO)
        {
            var gasStationModel = _mapper.Map<GasStation>(gasStationCreateDTO);
            _repository.PostGasStation(gasStationModel);
            var gasStationReadDTO = _mapper.Map<GasStationReadDTO>(gasStationModel);
            //return Created(new Uri("https://saitynolaboras20201008165604.azurewebsites.net/GasStations/" + id), gasStationCreateDTO);
            return CreatedAtRoute(nameof(GetGasStationById), new { Id = gasStationReadDTO.Id }, gasStationReadDTO);
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPost("{id}")]
        public ActionResult PostGasStation(int id, GasStationCreateDTO gasStationCreateDTO)
        {
            return BadRequest();
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPut("{id}")]
        public ActionResult PutGasStation(int id, GasStationUpdateDTO gasStation)
        {
            var gasStation1 = _repository.GetGasStationById(id);
            if (gasStation1 == null)
            {
                return NotFound();
            }
            else if (gasStation == null)
            {
                return BadRequest();
            }
            else
            {
                var gasStationMapped = _mapper.Map<GasStation>(gasStation);
                _repository.PutGasStation(id, gasStationMapped);
                return NoContent();
            }
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPut]
        public ActionResult PutGasStation(GasStationUpdateDTO gasStation)
        {
            return BadRequest();
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPatch]
        public ActionResult PatchGasStation(GasStationUpdateDTO gasStation)
        {
            return BadRequest();
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpPatch("{id}")]
        public ActionResult PatchGasStation(int id, GasStationPartialUpdateDTO gasStation)
        {
            var gasStation1 = _repository.GetGasStationById(id);
            if (gasStation1 == null)
            {
                return NotFound();
            }
            else if (gasStation == null)
            {
                return BadRequest();
            }
            else
            {
                var gasStationMapped = _mapper.Map<GasStation>(gasStation);
                _repository.PatchGasStation(id, gasStationMapped);
                return NoContent();
            }
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpDelete("{id}")]
        public ActionResult<GasStationReadDTO> DeleteGasStation(int id)
        {
            var gasStation = _repository.GetGasStationById(id);
            if (gasStation == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeleteGasStation(id);
                return Ok(_mapper.Map<GasStationReadDTO>(gasStation));
            }
        }

        [Authorize(Policy = Policies.Admin)]
        [HttpDelete]
        public ActionResult<GasStationReadDTO> DeleteGasStation()
        {
            return BadRequest();
        }
    }
}
