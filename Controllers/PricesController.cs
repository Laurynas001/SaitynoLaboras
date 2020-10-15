using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Schema;
using SaitynoLaboras.Data;
using SaitynoLaboras.DTOs.Price;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("GasStations")]
    [ApiController]
    public class PricesController : ControllerBase
    {
        private readonly IPriceRepository _repository;
        private readonly IMapper _mapper;

        public PricesController(IPriceRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpPost("{GSid}/Prices")]
        public ActionResult<PriceCreateDTO> PostPrice(int GSid, PriceCreateDTO price)
        {
            var priceModel = _mapper.Map<Price>(price);
            _repository.PostPrice(GSid, priceModel);
            var priceReadDTO = _mapper.Map<PriceReadDTO>(priceModel);
            return CreatedAtRoute(nameof(GetPriceById), new { Id = priceReadDTO.Id }, priceReadDTO);
        }

        [HttpPost("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PostPrice(int GSid, int Pid, Price price)
        {
            return BadRequest();
        }

        [HttpGet("{GSid}/Prices")]
        public ActionResult<IEnumerable<PriceReadDTO>> GetAllPrices(int GSid)
        {
            var prices = _repository.GetAllPrices(GSid).ToList();
            if (prices.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<PriceReadDTO>>(prices));
            }
        }

        [HttpGet("/Prices")]
        public ActionResult<IEnumerable<PriceReadDTO>> GetAllPrices()
        {
            int id = -1;
            var prices = _repository.GetAllPrices(id).ToList();
            if (prices.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<IEnumerable<PriceReadDTO>>(prices));
            }
        }

        [HttpGet("{GSid}/Prices/{Pid}", Name ="GetPriceById")]
        public ActionResult<PriceReadDTO> GetPriceById(int GSid, int Pid)
        {
            var price = _repository.GetPriceById(GSid, Pid);
            if (price == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(_mapper.Map<PriceReadDTO>(price));
            }
        }

        [HttpPatch("{GSid}/Prices/{Pid}")]
        public ActionResult PatchPrice(int GSid, int Pid, PricePartialUpdateDTO price)
        {
            var foundPrice = _repository.GetPriceById(GSid, Pid);
            if (foundPrice == null)
            {
                return NotFound();
            }
            else if (price == null)
            {
                return BadRequest();
            }
            else
            {
                var priceMapped = _mapper.Map<Price>(price);
                _repository.PatchPrice(GSid, Pid, priceMapped);
                return NoContent();
            }
        }

        [HttpPatch("{GSid}/Prices")]
        public ActionResult PatchPrice(PricePartialUpdateDTO price)
        {
            return BadRequest();
        }

        [HttpPut("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PutPrice(int GSid, int Pid, PriceUpdateDTO price)
        {
            var foundPrice = _repository.GetPriceById(GSid, Pid);
            if (foundPrice ==  null)
            {
                return NotFound();
            }
            else if (price.A95Price == 0 || price.A98Price == 0 || price.DPrice == 0 || price.DzPrice == 0 || price.GasPrice == 0)
            {
                return BadRequest();
            }
            else
            {
                var priceMapped = _mapper.Map<Price>(price);
                _repository.PutPrice(GSid, Pid, priceMapped);
                return NoContent();
            }
        }


        [HttpPut("{GSid}/Prices")]
        public ActionResult PutPrice(int GSid, PriceUpdateDTO price)
        {
            return BadRequest();
        }

        [HttpDelete("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> DeletePrice(int GSid, int Pid)
        {
            var price = _repository.GetPriceById(GSid, Pid);
            if (price == null)
            {
                return NotFound();
            }
            else
            {
                _repository.DeletePrice(GSid, Pid);
                return NoContent();
            }
        }

        [HttpDelete("{GSid}/Prices")]
        public ActionResult DeletePrice(int GSid)
        {
            return BadRequest();
        }
    }
}
