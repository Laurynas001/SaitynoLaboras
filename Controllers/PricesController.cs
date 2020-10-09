using Microsoft.AspNetCore.Mvc;
using SaitynoLaboras.Data;
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
        public PricesController(IPriceRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("{GSid}/Prices")]
        public ActionResult<Price> PostPrice(int GSid, Price price)
        {
            if (price != null)
            {
                _repository.PostPrice(GSid, price);
                return CreatedAtRoute(new Uri("http://http://localhost:5000/GasStations/" + GSid + "/Prices"), price);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PostPrice(int GSid, int Pid, Price price)
        {
            return NotFound();
        }

        [HttpGet("{GSid}/Prices")]
        public ActionResult<IEnumerable<Price>> GetAllPrices(int GSid)
        {
            var prices = _repository.GetAllPrices(GSid).ToList();
            if (prices.Count == 0)
            {
                return NotFound();
            }
            else
            {
                return Ok(prices);
            }
        }

        [HttpGet("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> GetPriceById(int GSid, int Pid)
        {
            var price = _repository.GetPriceById(GSid, Pid);
            if (price == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(price);
            }
        }


        [HttpPut("{GSid}/Prices/{Pid}")]
        public ActionResult<Price> PutPrice(int GSid, int Pid, Price price)
        {
            var foundPrice = _repository.GetPriceById(GSid, Pid);
            if (foundPrice ==  null)
            {
                return NoContent();
            }
            else
            {
                _repository.PutPrice(GSid, Pid, price);
                return Ok();
            }
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
                return Ok(price);
            }
        }
    }
}
